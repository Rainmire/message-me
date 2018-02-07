class AllowSessionTokenNil < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :session_token
    add_column :users, :session_token, :string
  end
end
