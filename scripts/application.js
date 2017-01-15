(function(root){
	'use strict';

	let Router = root.Blog.Router;
	let AddPostFormView = root.Blog.AddPostFormView;

	class Application {
		constructor() {
			this.setupListeners();
			new Router();
		}

		setupListeners(){
			$(document).on('router:home', (event) => this.onRouterHomeHandler());	
			$(document).on('router:post', (event) => this.onRouterPostHandler());
		}

		onRouterHomeHandler() {
			console.log('home');
			this.clearDOMContainer();
			new AddPostFormView();
		}

		onRouterPostHandler() {
			console.log('post');
			this.clearDOMContainer();
			$("#view-container").html("<h1>post</h1>");
		}

		clearDOMContainer() {
			$("#view-container").empty();
		}
	}
	new Application();
}(window));
