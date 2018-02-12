class ChangeUserToAuthor < ActiveRecord::Migration[5.1]
  def change
    rename_column :messages, :user_id, :author_id
  end
end
