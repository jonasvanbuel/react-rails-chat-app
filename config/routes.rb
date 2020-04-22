Rails.application.routes.draw do
  get 'channels/show'
  devise_for :users

  resources :channels, only: [ :show ]
  root to: 'channels#show'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :channels, only: [] do
        resources :messages, only: [ :index, :create ]
      end
    end
  end
end
