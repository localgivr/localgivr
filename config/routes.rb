Rails.application.routes.draw do
  scope :api do
    resources :needs
    resources :types
    resources :follows
    resources :cats
    resources :orgs
    resources :users
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
