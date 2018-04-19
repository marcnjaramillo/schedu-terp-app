class Api::InterpretersController < ApplicationController

  before_action :set_interpreter

  def index
    @interpreters = Interpreter.all
    render json: @interpreters
  end

  def create
    interpreter = Interpreter.new(interpreter_params)
    if interpreter.save
      render json: interpreter
    else
      render json: { message: interpreter.errors }, status: 400
    end
  end

  def show
    render json: @interpreter
  end

  def update
    if @interpreter.update(interpreter_params)
      render json: @interpreter
    else
      render json: { message: interpreter.errors }, status: 400
    end
  end

  def destroy
    if @interpreter.destroy
      render json: { message: "Successfully deleted interpreter." }, status: 204
    else
      render json: { message: "Unable to delete interpreter." }, status: 400
  end

  private

    def set_interpreter
      @interpreter = Interpreter.find_by(id: params[:id])
    end

    def interpreter_params
      params.require(:interpreter).permit(
        :first_name,
        :last_name,
        :street_address,
        :city,
        :state,
        :zip_code,
        certifications_attributes: [:name],
        :rate
      )
    end
end
