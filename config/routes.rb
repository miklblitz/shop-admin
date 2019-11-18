Rails.application.routes.draw do
  resources :goods do
    collection do
#       get :razdel
      get ':razdel_id/razdel', to: 'goods#razdel'
    end
  end
  resources :razdels
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
