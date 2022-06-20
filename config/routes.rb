Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index, :show, :update, :destroy]
    resources :session, only: [:create, :destroy]
  end

  root to: 'root#root'
end
