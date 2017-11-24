class Linkmessages < ActiveRecord::Migration[5.1]
  def change
    add_column :messages, :user_id, :integer
    add_column :messages, :conversation_id, :integer

    add_index :messages, :user_id, unique: true
    add_index :messages, :conversation_id, unique: true
  end
end
