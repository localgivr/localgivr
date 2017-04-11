ZipCodes.load unless Rails.env.development?
#load the hash on app startup for production and staging.


# # USAGE:
#  ZipCodes.identify('30301')
# # => {:state_code=>"GA", :state_name=>"Georgia", :city=>"Atlanta", :time_zone=>"America/New_York"}
# # First run will take a while, as the yaml has to be loaded
