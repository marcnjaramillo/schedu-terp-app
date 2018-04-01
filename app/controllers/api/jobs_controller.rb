class Api::JobsController < ApplicationController

  def index
    @jobs = Job.all
    render json: @jobs
  end

  def show
    @jobs = Job.find(params[:id])
    render json: @jobs
  end

  def create

  end
end
