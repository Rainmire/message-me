class ChangeImageToType < ActiveRecord::Migration[5.1]
  def change
    remove_column :messages, :image
    add_column :messages, :message_type, :string, null: false
  end
end
