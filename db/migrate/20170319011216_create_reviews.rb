class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :host_id, null: false
      t.text :body, null: false
      t.timestamps
    end

    add_index :reviews, :host_id
  end
end
