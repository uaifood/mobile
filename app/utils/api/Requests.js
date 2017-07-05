const API_URL = 'https://uaifood-api.herokuapp.com/0.1';

export function get(path) {
	return fetch(API_URL+path, {
		method: 'GET'
	})
	.then(response => response.json());
}

export function post(path, body = {}) {
	return fetch(API_URL+path, {
		method: 'POST',
		body: JSON.stringify(body)
	})
	.then(response => response.json());
}

export function put(path, body = {}) {
	return fetch(API_URL+path, {
		method: 'PUT',
		body: JSON.stringify(body)
	})
	.then(response => response.json());
}

export function DELETE(path) {
	return fetch(API_URL+path, {
		method: 'DELETE'
	})
	.then(response => response.json());
}
