if('serviceWorker' in navigator && 'Notification' in window) {
	window.onload = function() {

		navigator.serviceWorker.register('/projetosw2/sw.js')
			.then(function(){
				console.log("Service Worker registrado com sucesso!");
			}, function(e){
				console.log("Houve um erro ao registrar o Service Worker");
				console.log(e);
			});


			Notification.requestPermission(function(permission){

				if(permission == 'granted') {
					console.log("Permissão PERMITIDA!");
				} else {
					console.log("Permissão NEGADA!");
				}

			});
	};
}