Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users
  end

  root to: 'root#root'
end
