const API_URL = 'https://uaifood-api.herokuapp.com/0.1';

export function get(path) {
	return fetch(API_URL+path, {
		method: 'GET'
	});
}

export function post(path, body = {}) {
	return fetch(API_URL+path, {
		method: 'POST',
		body: JSON.stringify(body)
	});
}

export function put(path, body = {}) {
	return fetch(API_URL+path, {
		method: 'PUT',
		body: JSON.stringify(body)
	});
}

export function DELETE(path) {
	return fetch(API_URL+path, {
		method: 'DELETE'
	});
}
