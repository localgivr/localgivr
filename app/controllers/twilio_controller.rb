class TwilioController < ApplicationController

  def send
    @client = get_client

    @client.account.messages.create({
        :to => '<ToNumber>',
        :from => '<FromNumber>',
        :body => '<BodyText>'
    })
  end

  private

  def get_client
    account_sid = ENV['TwilioAccountSid']
    auth_token = ENV['TwilioAuthToken']

    # set up a client to talk to the Twilio REST API
    @client = Twilio::REST::Client.new account_sid, auth_token
  end
end
