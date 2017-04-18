class NeedsController < ApplicationController
  before_action :require_org, only: [:create, :update, :destroy]

  def index
    @needs = Need.all
    render json: @needs#, meta: pagination_dict(@needs)
  end

  def show
    @need = Need.find(params[:id])
    render json: @need
  end

  def create
    @need = current_org.needs.new(need_params)
    binding.pry
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
