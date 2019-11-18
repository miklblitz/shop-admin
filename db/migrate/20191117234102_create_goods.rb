class CreateGoods < ActiveRecord::Migration[5.2]
  def change
    create_table :goods do |t|
      t.string :name
      t.string :artikul
      t.text :content
      t.references :razdel, foreign_key: true
      t.string :rubles
      t.boolean :availability

      t.timestamps
    end
  end
end
