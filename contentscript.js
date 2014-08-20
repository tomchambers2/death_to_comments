var killComments = function() {
	console.log('hi')
	var values = ['comments','comments_entry','comment','comment-text','comment-list-module','zPa g9','comments-iframe-container'];
	var elements = [];
	for (var i=0;i<values.length;i+=1) {
		if (document.getElementById(values[i])) {
			elements.push(document.getElementById(values[i]));
		};
		if (document.getElementsByClassName(values[i])) {
			var classes = document.getElementsByClassName(values[i]);
			for (var l=0;l<classes.length;l+=1) {
				elements.push(classes[l]);
			}
		}
	}

	for (var j=0;j<elements.length;j+=1) {
		console.log('will kill',elements[j])
		elements[j].style.display = 'none';
	}
};

killComments();