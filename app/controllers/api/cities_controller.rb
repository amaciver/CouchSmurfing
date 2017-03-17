class Api::CitiesController < ApplicationController

  def index
    if params[:query_string]
      query = "%" + params[:query_string]+ "%"
      @cities = City.where("name ILIKE ?", query)
    else
      @cities = City.all
    end

  end

  def show
    @city = City.find(params[:id])
  end



end
