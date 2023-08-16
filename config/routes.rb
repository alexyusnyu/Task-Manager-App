Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :tasks, except: [:new, :edit]
    end
  end

  root to: "static#index" # Adjust to your preferred root route
end
