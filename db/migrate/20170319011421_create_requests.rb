class CreateRequests < ActiveRecord::Migration[5.0]
  def change
    create_table :requests do |t|
      t.integer :user_id, null: false
      t.integer :host_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.string :status, default: "APPROVED"

      t.timestamps
    end

    add_index :requests, :user_id
    add_index :requests, :host_id
  end
end
