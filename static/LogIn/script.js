let client_id, redirect_uri, response_type, scope;

client_id = 'l10ngxrcscedtomhaezp9ser08qsoy';
redirect_uri = 'http://localhost:3000/Profile/';
response_type = 'token';
scope = 'bits:read+user:read:email+user:read:broadcast+user:edit:broadcast+user:edit+analytics:read:games';


let AuthUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`;

$('#authLink').attr('href', AuthUrl);


