desc "This task is called by the Heroku scheduler add-on"


task :send_reminders => :environment do
  puts "sending reminders..."
  User.send_reminder
end
