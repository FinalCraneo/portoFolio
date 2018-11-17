exports.handler = (event, context, callback) => {

    let client_id, redirect_uri, response_type, scope;

    client_id = process.env.client_id;
    redirect_uri = process.env.redirect_uri;
    scopes = process.env.scopes;


    let AuthUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=${scopes}`;

    const response = {
        statusCode: 301,
        headers: {
            Location: AuthUrl,
        }
    };

    return callback(null, response);
};