class AddImageToMessage < ActiveRecord::Migration[5.1]
  def change
    add_column :messages, :image, :boolean, null: false
  end
end
