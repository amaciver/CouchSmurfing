class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where("host_id = ?", params[:host_id])
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages
    end
  end

  private
  def review_params
    params.require(:review).permit(:user_id, :host_id, :body)
  end


end
