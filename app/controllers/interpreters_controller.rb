class InterpretersController < ApplicationController
  
  def index
    @interpreters = Interpreter.all
    render json: @interpreters.to_json
  end

  def show
    @interpreters = Interpreter.find(params[:id])
    render json: @interpreters.to_json
  end

end
