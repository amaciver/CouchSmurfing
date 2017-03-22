class AddCoordcolumnstoCities < ActiveRecord::Migration[5.0]
  def change
    add_column :cities, :lat, :float
    add_column :cities, :lng, :float
  end
end
