class ApplicationController < ActionController::Base
  # protect_from_forgery unless: -> { request.format.json? }

  def static
    render file: 'public/index.html'
  end

  private

  def request_error(msg, code = 400)
    msg = [msg] unless msg.is_a?(Array)
    render json: { errors: msg.map{ |m| { error: m }}}, status: code
  end

  def current_user
    @current_user ||= User.find_by(token: params[:token]) if params[:token]
  end

  def require_user
      request_error("You need to be logged in as a user.", 401) unless current_user
  end

  def current_org
    @current_org ||= Org.find_by(token: params[:token]) if params[:token]
  end

  def require_org
      request_error("You need to be logged in as an organization.", 401) unless current_org
  end

  def follow_toggle(followee)
    @follow = current_user.follows.find_by(followable: followee)
    @follow ? @follow.destroy : current_user.follows.create(followable: followee)
  end



  def pagination_dict(collection)
    {
      current_page: collection.current_page,
      next_page: collection.next_page,
      prev_page: collection.prev_page, # use collection.previous_page when using will_paginate
      total_pages: collection.total_pages,
      total_count: collection.total_count
    }
  end

end
