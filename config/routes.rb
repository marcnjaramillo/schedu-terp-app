Rails.application.routes.draw do
  resources :profiles
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :interpreters
    resources :jobs
  end
end
