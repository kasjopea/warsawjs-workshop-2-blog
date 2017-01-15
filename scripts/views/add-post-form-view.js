(function(root) {
	'use strict';
	class AddPostFormView {
		constructor() {
		console.log("view");
		/*Pobieranie templatki z DOM*/
		this.template = $("#template-add-post").html();
		/*Renderowanie*/
		this.render();
		/*Pobranie referencji do formularza*/
		this.$form = $("#add-post-form");
		/*Ustawienie listenerów na submit*/
		this.setupListeners();
		}

		render() {
		let $container = $("#view-container");
		let templatecompile=root.Handlebars.compile(this.template);
		$container.append(templatecompile);
		}

		setupListeners() {
		this.$form.submit((event)=> this.submitFormHandler(event));
		}

		submitFormHandler() {
			console.log(event);
		}

	}
	/* eksport do namespace*/
	root.Blog.AddPostFormView = AddPostFormView;
}(window));