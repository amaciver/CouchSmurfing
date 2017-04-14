class ChangeDefaultImage < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :image_url, :text, default: 'https://res.cloudinary.com/couchsmurfing/image/upload/v1492190434/user-role-guest-icon_yoyyni.png'
  end
end
