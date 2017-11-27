Rails.application.routes.draw do

  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create]

    resources :conversations, only: [:create, :destroy, :show, :index, :update] do
      get 'members', on: :member
      # resources :messages, only: [:create]  TODO: put this back later
    end

    resources :messages, only: [:create, :index]  #TODO: remove index and nest under convos


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
