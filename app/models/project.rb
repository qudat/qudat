class Project < ActiveRecord::Base
  attr_accessible :info, :pdf_dir, :photo_dir, :project_name, :visible, :zip_dir
end
