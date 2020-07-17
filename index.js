'use strict';

let dkey = null;

function encrypt() {
	let key = new RSAKey();
	key.setPublic(b64tohex(document.querySelector('#encrypt-key').value), '10001');
	document.querySelector('#encrypt-result').value = hex2b64(key.encrypt(
		document.querySelector('#encrypt-message').value
	));
}

function decrypt() {
	document.querySelector('#decrypt-result').value = dkey.decrypt(b64tohex(
		document.querySelector('#decrypt-message').value
	));
}

function gen_key() {
	dkey = new RSAKey();
	dkey.generate(512, '10001');
	document.querySelector('#decrypt-key').value = hex2b64(dkey.n.toString(16));
}