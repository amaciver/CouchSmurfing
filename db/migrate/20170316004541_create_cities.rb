class CreateCities < ActiveRecord::Migration[5.0]
  def change
    create_table :cities do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.text :image_url, null: false
      t.text :banner_url, null: false
      t.text :map_url, null: false

      t.timestamps
    end
    add_column :users, :image_url, :text
  end
end
