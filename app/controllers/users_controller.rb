class UsersController < ApplicationController

  before_action :require_user, only: [:show, :followed_orgs, :followed_cats, :toggle_type]

  def index
    @users = User.all
    render json: @users
  end

  def show
    case params[:id]
    when "feed"
      @needs = current_user.feed(20)
      render json: @needs#, meta: pagination_dict(posts)
    when "profile"
      @user = current_user
      render json: @user
    else
      request_error("not a valid userpath")
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      # UsersMailer.signup(@user).deliver
      render json: @user, serializer: UserExtendedSerializer
    else
      request_error(@user.errors.full_messages)
    end
  end

  def login
    # binding.pry
    @user = User.find_by(email: params[:user][:email])&.
              authenticate(params[:user][:password])
    @org = Org.find_by(email: params[:user][:email])&.
              authenticate(params[:user][:password])

    case
    when @user
      render json: @user, serializer: UserExtendedSerializer
    when @org
      render json: @org, serializer: OrgExtendedSerializer
    else
      request_error("Invalid email or password", 401)
    end
  end

  def toggle_type
    @typing = current_user.typings.find_by(type_id: params[:id])
    result = @typing ? @typing.destroy : current_user.typings.create(type_id: params[:id])
    if result
      message = current_user.typings.exists?(type_id: params[:id]) ? "followed" : "unfollowed"
      render json: {message: message}
    else
      request_error("not a type")
    end


  end

  # def followed_cats
  #   @cats = current_user.followed_cats
  #   render json: @cats
  # end
  #
  # def followed_orgs
  #   @orgs = current_user.followed_orgs
  #   render json: @orgs
  # end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :phone, :password, :zip, :img_url)
  end
end
