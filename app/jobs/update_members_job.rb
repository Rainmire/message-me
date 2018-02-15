class UpdateMembersJob < ApplicationJob
  def perform(users, id)

    members = Api::UsersController.render(
      'api/users/index',
      assigns: { users: users }
    )

    update = {members: JSON.parse(members), conversationId: id, messageType: "update"}

    ActionCable.server.broadcast("chat_#{id}",
    message: update)
  end

end
