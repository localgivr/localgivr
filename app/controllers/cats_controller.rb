class CatsController < ApplicationController

  before_action :require_user, only: [:follow]

  def index
    @cats = Cat.all
    render json: @cats
  end

  def follow
    @cat = Cat.find([params[:id]])
    result = follow_toggle(@cat)
    if result
      render json: {message: "success!"}
    else
      request_error(result.errors.full_messages)
    end
  end

end
