class RazdelsController < ApplicationController
  before_action :set_razdel, only: [:show, :update, :destroy]

  # GET /razdels
  def index
    @razdels = Razdel.all

    render json: @razdels
  end

  # GET /razdels/1
  def show
    render json: @razdel
  end

  # POST /razdels
  def create
    @razdel = Razdel.new(razdel_params)

    if @razdel.save
      render json: @razdel, status: :created, location: @razdel
    else
      render json: @razdel.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /razdels/1
  def update
    if @razdel.update(razdel_params)
      render json: @razdel
    else
      render json: @razdel.errors, status: :unprocessable_entity
    end
  end

  # DELETE /razdels/1
  def destroy
    @razdel.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_razdel
      @razdel = Razdel.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def razdel_params
      params.require(:razdel).permit(:name)
    end
end
