Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
  end
  resources :users, only: [:create, :index, :show, :update, :destroy]
  resources :session, only: [:create, :destroy]

  root to: 'root#root'
end
