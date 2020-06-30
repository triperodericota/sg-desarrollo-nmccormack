require 'bundler'
Bundler.setup
require 'sinatra'

get '/' do
  erb :index
end

post '/count_magic_words' do
  input_words = params[:phrase].strip().split()
  words = []
  input_words.each { |word| words << word unless words.include?(word) } 
  magic_words = words.select {|word| word == word.reverse() }
  magic_words.length().to_s()
end
