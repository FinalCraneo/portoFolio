let client_id, redirect_uri, response_type, scope;
var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
let code = url.searchParams.get("code");

client_id = 'l10ngxrcscedtomhaezp9ser08qsoy';
redirect_uri = 'http://localhost:3000/Profile/';
response_type = 'code';
scope = 'bits:read+user:read:email+user:read:broadcast+user:edit:broadcast+user:edit+analytics:read:games';
client_secret = 't0h2my5bb89q19kog7f0g7xl8oedy6';

let postUrl = `https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&code=${code}&grant_type=authorization_code&redirect_uri=${redirect_uri}`;

$.post(postUrl, data => {
	console.log(data);
});

