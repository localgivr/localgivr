class OrgsController < ApplicationController

  def index
    @orgs = Org.all
    render json: @orgs
  end

  def show
    @org = Org.find(params[:id])
    render json: @org
  end

  def create
    @org = Org.new(org_params)
    if @org.save
      # UsersMailer.signup(@org).deliver
      render json: @org, serializer: OrgExtendedSerializer
    else
      request_error(@org.errors.full_messages)
    end
  end

  def login
    @org = Org.find_by(email: params[:email])&.
              authenticate(params[:password])
    if @org
      render json: @org, serializer: OrgExtendedSerializer
    else
      request_error("Invalid email or password", 401)
    end
  end

  private
  def org_params
    params.permit(:name, :email, :phone, :password, :street, :city, :state, :zip, :ein)
  end
end
