fx_version 'cerulean'
game 'gta5'

name "nmsh-updateHub"
description "Nmsh FiveM Server Update Panel"
author "Nmsh"
version "1.0.0"

shared_scripts {
	'shared/*.lua'
}

client_scripts {
	'client/*.lua'
}

ui_page 'web/index.html'

files {
	'web/script.js',
	'web/index.html',
	'web/style.css',
	'web/press.mp3',
}