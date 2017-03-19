class Api::RequestsController < ApplicationController

  def index
    @requests = Request.where("user_id = ?", params[:user_id])
  end

  def create
    @request = Request.new(request_params)
    if @request.save
      render :show
    else
      render json: @request.errors.full_messages, status: 422
    end
  end

  private
  def request_params
    params.require(:request).permit(:user_id, :host_id, :start_date, :end_date)
  end
end
