Rails.application.routes.draw do
  scope :api do
    resources :needs
    resources :types, only: [:index]
    resources :cats, only: [:index]
    resources :orgs
    resources :users

    post 'users/login' => 'users#login'
    post 'orgs/login' => 'orgs#login'

    # get  '/orgs/follow' => 'users#followed_orgs'
    post '/orgs/:id/follow' => 'orgs#follow'
    # get  '/cats/follow' => 'users#followed_cats'
    post '/cats/:id/follow' => 'cats#follow'

    post '/types/:id/follow' => 'types#toggle_type'
  end

  get "*path" => 'application#static'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
