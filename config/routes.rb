Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :cities, only: [:index, :show]
    resources :hosts, only: [:index, :show]
    resources :requests, only: [:index, :create]
    resources :reviews, only: [:index, :create]
  end
  root "static_pages#root"
end
