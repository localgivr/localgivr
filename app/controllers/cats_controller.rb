class CatsController < ApplicationController

  before_action :require_user, only: [:follow]

  def index
    @cats = Cat.all
    render json: @cats
  end

  def follow
    @cat = Cat.find(params[:id])
    result = follow_toggle(@cat)
    if result
      message = current_user.follows.exists?(followable: @cat) ? "followed" : "unfollowed"
      render json: {message: message}
    else
      request_error("not a category")
    end
  end

end
