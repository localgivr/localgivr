class OrgsController < ApplicationController

  before_action :require_user, only: [:follow]
  before_action :require_org, only: [:show]

  def index
    @orgs = Org.all
    render json: @orgs
  end

  def show
    @needs = current_org.needs #TODO: active? or badge to show completed?
    case params[:id]
    when 'needs' then render json: @needs
    when 'profile' then render json: current_org
    else request_error("not a valid userpath")
    end
  end

  def create
    @org = Org.new(org_params)
    @org.ein ||= 2
    # request_error("Must be an approved organization to signup", 401)
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

  def follow
    @org = Org.find(params[:id])
    result = follow_toggle(@org)
    if result
      message = current_user.follows.exists?(followable: @org) ? "followed" : "unfollowed"
      render json: {message: message}
    else
      request_error("not a organization")
    end
  end

  private
  def org_params
    params.require(:org).permit(:name, :email, :phone, :password, :street, :city, :state, :zip, :ein)
  end
end
