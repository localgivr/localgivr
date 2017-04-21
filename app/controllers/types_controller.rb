class TypesController < ApplicationController

  before_action :require_user, only: [:toggle_type]

  def index
    @types = Type.all
    render json: @types
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
end
