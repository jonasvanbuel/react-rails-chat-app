# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Cleaning database first..."
Message.destroy_all
User.destroy_all
Channel.destroy_all


User.create!(
  email: 'jonas.vanbuel@gmail.com',
  password: 'jonasv',
  password_confirmation: 'jonasv'
)
puts "Created user..."


channels = ['general', 'paris', 'react']
channels.each do |channel|
  Channel.create!(name: channel)
end
puts "Created channels..."

messages = [
  {
    content: 'Hi there! This is the first seeded message!',
    user: User.first,
    channel: Channel.find_by(name: 'general')
  },
  {
    content: 'Go ahead - start posting messages now...',
    user: User.first,
    channel: Channel.find_by(name: 'general')
  },
  {
    content: 'Whatsup PARIS!! 🥐',
    user: User.first,
    channel: Channel.find_by(name: 'paris')
  },
  {
    content: 'Hi React channel - lets get this done! 💪',
    user: User.first,
    channel: Channel.find_by(name: 'react')
  }
]
messages.each do |message|
  Message.create(
    content: message[:content],
    user: message[:user],
    channel: message[:channel]
  )
end
puts "Created messages..."


