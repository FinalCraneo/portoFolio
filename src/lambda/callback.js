const axios = require('axios');

exports.handler = (event, context, callback) => {

        let client_id, redirect_uri, secret, code;

        client_id = process.env.client_id;
        redirect_uri = process.env.redirect_uri;
        secret = process.env.secret;

        code = event.queryStringParameters.code;

        let postUrl = `https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${secret}&code=${code}&grant_type=authorization_code&redirect_uri=${redirect_uri}`;

        axios.post(postUrl)
            .then(res => {
                    console.log(res);

                    axios.put('https://my-not-awesome-project-24bbf.firebaseio.com/users.json', {
                            foo: bar,
                            algo: res
                        })
                        .then(response => {
                                // do something...
                            }

                            callback(null, {
                                statusCode: 301,
                                headers: {
                                    Location: 'https://kenopsia.ga/profile',
                                }
                            });
                        })
                .catch(err => {
                    callback(err);
                });
            };