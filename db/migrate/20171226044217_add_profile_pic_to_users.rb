class AddProfilePicToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :profile_pic, :string, null: false
  end
end
