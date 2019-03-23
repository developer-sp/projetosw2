self.addEventListener('install', event => {
	console.log("Evento de install");
	self.skipWaiting();


});

self.addEventListener('activate', event => {

	console.log("Evento de activate");
});

self.addEventListener('push', event => {

	console.log("evento de push");
	

	event.waitUntil(

		self.registration.showNotification(

			'Titulo qualquer',
			{
				body:'Testando123'
			}
		)

		);

});