# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                  api_user GET    /api/user(.:format)                                                                      api/users#show {:format=>:json}
#                           PATCH  /api/user(.:format)                                                                      api/users#update {:format=>:json}
#                           PUT    /api/user(.:format)                                                                      api/users#update {:format=>:json}
#                           POST   /api/user(.:format)                                                                      api/users#create {:format=>:json}
#               api_servers GET    /api/servers(.:format)                                                                   api/servers#index {:format=>:json}
#                           POST   /api/servers(.:format)                                                                   api/servers#create {:format=>:json}
#                api_server GET    /api/servers/:id(.:format)                                                               api/servers#show {:format=>:json}
#                           PATCH  /api/servers/:id(.:format)                                                               api/servers#update {:format=>:json}
#                           PUT    /api/servers/:id(.:format)                                                               api/servers#update {:format=>:json}
#                           DELETE /api/servers/:id(.:format)                                                               api/servers#destroy {:format=>:json}
#              api_channels GET    /api/channels(.:format)                                                                  api/channels#show {:format=>:json}
#                           PATCH  /api/channels(.:format)                                                                  api/channels#update {:format=>:json}
#                           PUT    /api/channels(.:format)                                                                  api/channels#update {:format=>:json}
#                           DELETE /api/channels(.:format)                                                                  api/channels#destroy {:format=>:json}
#                           POST   /api/channels(.:format)                                                                  api/channels#create {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :index, :show, :update]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
    resource :channels, only: [:show, :create, :update, :destroy]
    
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
