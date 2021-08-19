function getRequest(url) {
	var xml;
	if (window.XMLHttpRequest) {
		xml = new XMLHttpRequest();
	} else {
		xml = new ActiveXObject('Microsoft.XMLHTTP');
	}
	try {
		xml.open('GET', url, true);

		xml.onload = function () {
			console.log(xml.responseText);
		};
		xml.send(null);
	} catch (error) {
		return error;
	}
}

function postRequest(url) {
	var xml;
	const data = {
		name: 'name testinh',
		description: 'sampleee',
	};

	if (window.XMLHttpRequest) {
		xml = new XMLHttpRequest();
	} else {
		xml = new ActiveXObject('Microsoft.XMLHTTP');
	}
	try {
		xml.open('POST', url, true);
		xml.setRequestHeader('Content-type', 'application/json');
		xml.onload = function () {
			console.log(xml.responseText);
		};
		xml.send(JSON.stringify(data));
	} catch (error) {
		return error;
	}
}

function putRequest(url) {
	var xml;
	const data = {
		name: 'tt',
		description: 'a de',
	};

	if (window.XMLHttpRequest) {
		xml = new XMLHttpRequest();
	} else {
		xml = new ActiveXObject('Microsoft.XMLHTTP');
	}
	try {
		xml.open('PUT', url, true);
		xml.setRequestHeader('Content-type', 'application/json');
		xml.onload = function () {
			console.log(xml.responseText);
		};
		xml.send(JSON.stringify(data));
	} catch (error) {
		return error;
	}
}
function deleteRequest(url) {
	var xml;
	if (window.XMLHttpRequest) {
		xml = new XMLHttpRequest();
	} else {
		xml = new ActiveXObject('Microsoft.XMLHTTP');
	}
	try {
		xml.open('DELETE', url, true);

		xml.onload = function () {
			if (xml.readyState === 4) {
				console.log('deleted');
			}
		};

		xml.send();
	} catch (error) {
		return error;
	}
}

// getRequest(
// 	'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'
// );

// postRequest('https://task-tracker-webapp-v1.herokuapp.com/api/task');

// putRequest(
// 	`https://task-tracker-webapp-v1.herokuapp.com/api/task/611e3d39a13edd0004f09727`
// );

// deleteRequest(
// 	`https://task-tracker-webapp-v1.herokuapp.com/api/task/611e3e40a13edd0004f0972f`
// );
