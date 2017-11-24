class CreateConversationMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :conversation_memberships do |t|
      t.integer :member_id
      t.integer :conversation_id

      t.timestamps
    end
    add_index :conversation_memberships, :member_id
    add_index :conversation_memberships, :conversation_id
  end
end
