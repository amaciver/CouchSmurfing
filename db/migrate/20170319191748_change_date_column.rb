class ChangeDateColumn < ActiveRecord::Migration[5.0]
  def change
    change_column :requests, :start_date, :timestamp
    change_column :requests, :end_date, :timestamp
  end
end
