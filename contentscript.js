console.log('we loaded')

var killComments = function() {
	var values = ['comments','comments_entry','comment','comment-text','comment-list-module','zPa g9','comments-iframe-container','js_replies','replies_wrapper'];
	var elements = [];
	var killCount;
	for (var i=0;i<values.length;i+=1) {
		if (document.getElementById(values[i])) {
			elements.push(document.getElementById(values[i]));
		};
		if (document.getElementsByClassName(values[i])) {
			var classes = document.getElementsByClassName(values[i]);
			for (var l=0;l<classes.length;l+=1) {
				elements.push(classes[l]);
				console.log('added',classes[l]);
			}
		}
	}

	console.log(elements);

	for (var j=0;j<elements.length;j+=1) {
		console.log('will kill',elements[j])
		elements[j].style.display = 'none';
		killCount += 1;
	}
};


//for whitelist array
//if current page is != whitelist, kill comments

chrome.runtime.onMessage.addListener(function(message, sender) {
	console.log(message);
})

killComments();