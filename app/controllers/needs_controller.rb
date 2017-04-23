class NeedsController < ApplicationController
  before_action :require_org, only: [:create, :destroy]
  before_action :require_user, only: [:update]

  def index
    @needs = Need.all.active
    render json: @needs#, meta: pagination_dict(@needs)
  end

  def show
    @need = Need.find_by(id: params[:id])
    @need ? render(json: @need) : request_error("need not found")

  end

  def create
    @need = current_org.needs.new(need_params)
    if @need.save
      # current_org.needs << @need
      #assuming we're getting an array of cat name/hashes within need
      params[:need][:cats].each { |c| @need.cats << Cat.find(c) } if params[:need][:cats]
      render json: @need
    else
      request_error(@need.errors.full_messages)
    end
  end

  def update
    @need = Need.find_by(id: params[:id])
    if @need
      p @need
      if @need.completed

        request_error("need has already been completed!", 418)
      else
        @need.update(completed: true)
        current_user.increment('needs_met', 1)
        current_user.save
        render json: @need
      end
    else
      request_error("need does not exist")
    end
  end

  def destroy

  end

  private

  def need_params
    params.require(:need).permit(:title, :story, :amount, :expiration, :link, :img_url, :zip, :type_id)
    #TODO: create a valid expiration
    #TODO: add location?
  end

end
