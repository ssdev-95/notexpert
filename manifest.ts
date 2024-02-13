// PWD Config File

export default {
	registerType:'prompt',
	includeAssests:[
		'favicon.svg',
		'apple-touch-icon.png',
		'android-chrome-192x192.png',
		'android-chrome-512x512.png',
		'masked_icon.png'
	],
	manifest:{
		name:'Notexpert',
    short_name:'NoteX',
    description:'A notes app powered by SpeechRecognition',
		icons:[
			{
				src: '/android-chrome-192x192.png',
				sizes:'192x192',
				type:'image/png',
				purpose:'favicon'
			}, {
				src:'/android-chrome-512x512.png',
				sizes:'512x512',
				type:'image/png',
				purpose:'favicon'
			}, {
				src: '/apple-touch-icon.png',
				sizes:'180x180',
				type:'image/png',
				purpose:'apple touch icon',
			}, {
				src: '/maskable_icon.png',
				sizes:'512x512',
				type:'image/png',
				purpose:'any maskable',
			}
		],
		theme_color:'#0f172a',
		background_color:'#0f172a',
		display:'standalone',
		scope:'/',
		start_url:'/',
		orientation:'portrait'
	}
}
