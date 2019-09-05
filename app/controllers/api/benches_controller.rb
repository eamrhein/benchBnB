class Api::BenchesController < ApplicationController
  
  def index
    @benches = Bench.in_bounds(params[:bounds])
    render "/api/benches/index"
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render json: @bench
    else
      flash.now[:errors] = @user.errors
      render :new
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
