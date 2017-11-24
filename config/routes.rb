Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]



    resources :conversations, only: [:create, :destroy, :show, :update] do
      get 'messages', on: :collection
    end


    resources :messages, only: [:create]
  end
  root "static_pages#root"
end
