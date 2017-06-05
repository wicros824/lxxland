Rails.application.routes.draw do
  root 'home#index'

  get 'welcome' ,to: "welcome#index",          as: :welcome_index

  get 'home'    ,to: "home#index",          as: :home_index
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
