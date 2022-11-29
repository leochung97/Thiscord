#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
bundle exec rake assets:precompile
bundle exec rake assets:clean
bundle exec rake db:migrate

#if site renders but no seeded data is present add this line 

rails db:seed #if needed, comment this line out whenever pushing to a working deployment to avoid db errors