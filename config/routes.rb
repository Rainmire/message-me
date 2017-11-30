Rails.application.routes.draw do

  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create]

    post '/users/create_guest', :to => 'users#create_guest'

    resources :conversations, only: [:create, :destroy, :show, :index, :update] do
      # get 'members', on: :member
      resources :messages, only: [:create]
    end



    resource :session, only: [:create, :destroy]

    # resources :users, only: [:create] do
    #   get 'conversations', on: :collection
    # end
    #
    # resource :session, only: [:create, :destroy]
    #
    #
    #
    #
    # resources :messages, only: [:create]
    #




  end
  root "static_pages#root"
end
