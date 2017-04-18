class TwilioController < ApplicationController

  def send
    @client = get_client

    User.all.each do |user|
      @client.account.messages.create({
          :to => user.phone,
          :from => '13178544483',
          :body => 'Weekly opportunity to serve: #{user.feed.first#link}'
      })
    end

  end

  private

  def get_client
    account_sid = ENV['TwilioAccountSid']
    auth_token = ENV['TwilioAuthToken']

    # set up a client to talk to the Twilio REST API
    @client = Twilio::REST::Client.new account_sid, auth_token
  end
end
