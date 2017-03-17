class Api::HostsController < ApplicationController

  def index

    @hosts = Host.where("city_id = ?", params[:city_id])
  end

  def show
    @host = Host.find(params[:id])
  end
end
