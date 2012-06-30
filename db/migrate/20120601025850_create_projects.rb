class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :project_name
      t.text :info
      t.string :pdf_dir
      t.string :photo_dir
      t.string :zip_dir
      t.string :visible

      t.timestamps
    end
  end
end
