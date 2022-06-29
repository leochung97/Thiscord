# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Server.destroy_all
Channel.destroy_all

demouser = User.create!(username: "demouser", email: "demo@demo.com", password: "demopass")
kinKa = User.create!(username: "kinkaforta", email: "kinka@kinka.com", password: "kinkapass")
ayce = User.create!(username: "ayceforta", email: "ayce@ayy.com", password: "aycepass")
spencer = User.create!(username: "spencerforta", email: "dispencer@spencer.com", password: "spencerpass")

demoServer = Server.create!(admin_id: 1, server_name: "Circle Time")
kinKaServer = Server.create!(admin_id: 2, server_name: "Kin Ka Attendance")
ayceServer = Server.create!(admin_id: 3, server_name: "Ayce's Place")

demoChannel = Channel.create!(channel_name: "Demo Channel", server_id: 1)
kinKaCircle = Channel.create!(channel_name: "Kin Ka's Circle", server_id: 2)
ayceCircle = Channel.create!(channel_name: "Ayce's Circle", server_id: 3)

demouser.servers << demoServer
demouser.servers << kinKaServer
demouser.servers << ayceServer
kinKa.servers << kinKaServer
kinKa.servers << demoServer
ayce.servers << ayceServer
ayce.servers << demoServer
spencer.servers << demoServer