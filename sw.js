self.addEventListener('install', event => {
	console.log("Evento de install");
	self.skipWaiting();


});

self.addEventListener('activate', event => {

	console.log("Evento de activate");
});

self.addEventListener('push', event => {

	console.log("evento de push");
	console.log(event.data.text());

	event.waitUntil(

		self.registration.showNotification(

			'Titulo qualquer',
			{
				body:event.data.text()
			}
		)

		);

});