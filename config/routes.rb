Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :index, :show, :update]
    resources :session, only: [:create, :destroy]
  end

  root "root#root"
end
