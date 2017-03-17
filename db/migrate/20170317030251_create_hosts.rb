class CreateHosts < ActiveRecord::Migration[5.0]
  def change
    create_table :hosts do |t|
      t.integer :city_id, null: false
      t.string :name, null: false
      t.integer :age, null: false
      t.string :sex, null: false
      t.string :city, null: false
      t.string :location, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :interests, default: [], array: true
      t.text :about_me
      t.string :image_url, null: false
      t.string :house_image_url
      t.string :status, null: false, default: "Accepting Guests"

      t.timestamps
    end

    add_index :hosts, :city_id
  end
end
