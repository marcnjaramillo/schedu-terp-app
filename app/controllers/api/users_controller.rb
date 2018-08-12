class Api::UsersController < ApplicationController

  before_action :set_user

  def index
    render json: User.all
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: { message: user.errors }, status: 400
    end
  end

  def show
    render json: @user
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: { message: user.errors }, status: 400
    end
  end

  def destroy
    if @user.destroy
      render json: { message: "Successfully deleted user." }, status: 204
    else
      render json: { message: "Unable to delete user." }, status: 400
    end
  end

  private

    def set_user
      @user = User.find_by(id: params[:id])
    end

    def user_params
      params.require(:user).permit(
        :first_name,
        :last_name
      )
    end
end
