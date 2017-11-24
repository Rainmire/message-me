class Removeindexfrommessages < ActiveRecord::Migration[5.1]
  def change
    remove_index :messages, :conversation_id
    remove_index :messages, :user_id

    add_index :messages, :conversation_id
    add_index :messages, :user_id
  end
end
