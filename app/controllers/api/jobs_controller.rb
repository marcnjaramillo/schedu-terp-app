class Api::JobsController < ApplicationController

before_action :set_job

  def index
    @jobs = Job.all
    render json: @jobs
  end

  def create
    job = Job.new(job_params)
    if job.save
      render json: job
    else
      render json: { message: job.errors }, status: 400
    end
  end

  def show
    render json: @job
  end

  def update
    if @job.update(job_params)
      render json: @job
    else
      render json: { message: job.errors }, status: 400
    end
  end

  def destroy
    if @job.destroy
      render json: { message: "Successfully deleted job." }, status: 204
    else
      render json: { message: "Unable to delete job." }, status: 400
    end
  end

  private

    def set_job
      @job = Job.find_by(id: params[:id])
    end

    def job_params
      params.require(:interpreter).permit(
        :location,
        :street_address,
        :city,
        :state,
        :zip_code,
        :contact_person,
        :contact_number,
        :nature,
        :duration,
        :client,
        :notes
      )
    end
end
