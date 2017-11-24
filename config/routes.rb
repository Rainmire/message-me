Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :show]

    resources :conversations, only: [:create, :destroy, :show, :update] do
      get 'messages', on: :collection
    end





    resources :users, only: [:create] do
      get 'conversations', on: :collection
    end

    resource :session, only: [:create, :destroy]




    resources :messages, only: [:create]





  end
  root "static_pages#root"
end
