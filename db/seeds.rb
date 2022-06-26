# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Server.destroy_all
demouser = User.create!(username: "demouser", email: "demo@demo.com", password: "demopass")
stephen = User.create!(username: "mybrudda", email: "brudda@brudda.com", password: "bruddapass")
leo = User.create!(username: "youngerbrudda", email: "broman@brudda.com", password: "bruddapass")

demoserver = Server.create!(admin_id: 1, server_name: "demoserver")
stephenserver = Server.create!(admin_id: 2, server_name: "serverforbruddas")
demouser.servers << demoserver
demouser.servers << stephenserver