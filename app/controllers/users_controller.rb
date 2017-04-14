class UsersController < ApplicationController

  before_action :require_user, only: [:show, :followed_orgs, :followed_cats]

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = params[:id] == "feed" ? current_user : User.find(params[:id])
    @needs = @user.feed(10)
    render json: @needs
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
    if @user
      render json: @user, serializer: UserExtendedSerializer
    else
      request_error("Invalid email or password", 401)
    end
  end

  def followed_cats
    @cats = current_user.followed_cats
    render json: @cats
  end

  def followed_orgs
    @orgs = current_user.followed_orgs
    render json: @orgs
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :phone, :password, :zip, :img_url)
  end
end
