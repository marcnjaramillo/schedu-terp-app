class Api::InterpretersController < ApplicationController

  def index
    @interpreters = Interpreter.all
    render json: @interpreters
  end

  def show
    @interpreters = Interpreter.find(params[:id])
    render json: @interpreters
  end

  def create

  end

end
