class NeedsController < ApplicationController
  before_action :require_org, only: [:create, :update, :destroy]

  def index
    @needs = Need.all
    render json: @needs
  end

  def show
    @need = Need.find(params[:id])
    render json: @need
  end

  def create
    @need = Need.new(need_params)
    
    #set cating
    #set type

  end

  def update

  end

  def destroy

  end

  private

  def need_params
    params.require(:need).permit(:title, :story, :amount, :expiration, :link, :img_url, :type)
    #TODO: create a valid expiration
    #TODO: add unit for  quantity?
  end

end
