class AddsSeatingToBenches < ActiveRecord::Migration[5.2]
  def change
    add_column :benches, :seating, :string
  end
end
