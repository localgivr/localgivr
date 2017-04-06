class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user
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

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :phone, :password, :zip, :img_url)
  end
end
