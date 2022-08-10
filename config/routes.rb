Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy, :index, :show, :update]
    resource :session, only: [:create, :destroy]
    
    resources :servers do 
      resources :channels, only: [:create] do 
        resources :messages, only: [:create]
      end
    end
    
    resources :channels, only: [:update, :show, :destroy, :index]
    
    resources :conversations, only: [:index, :show, :create, :destroy] do 
      resources :direct_messages, only: [:create]
    end

    resources :messages, only: [:index, :update, :show, :destroy]
    resources :direct_messages, only: [:index, :update, :destroy, :show]
    resources :server_memberships, only: [:create, :destroy]
    resources :conversation_participants, only: [:create, :destroy]
  end
  
  mount ActionCable.server => "/cable"
  root to: "static_pages#root"
end
