class AddAuthorToConversations < ActiveRecord::Migration[5.1]
  def change
    add_column :conversations, :author_id, :integer, null: false
    add_index :conversations, :author_id
  end
end
