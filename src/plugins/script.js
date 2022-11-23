let selectInterval = setInterval(() => {
	const element = document.querySelector('.select');
	if(element !== null) {
		clearInterval(selectInterval);
		const choices = new Choices(element, {
			searchEnabled: false,
			itemSelectText: '',
			shouldSort: false,
			position: 'bottom'
		});
	}
}, 500)
