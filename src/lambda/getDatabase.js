const axios = require('axios');



exports.handler = (event, context, callback) => {

    console.log('El nombre: ', event.queryStringParameters.name);

    let name = event.queryStringParameters.name;

    axios.get(`https://my-not-awesome-project-24bbf.firebaseio.com/users/${name}.json`)
        .then((res) => {
            res.data.params = event.queryStringParameters;
            res.data.someVar = process.env.someVar;
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(res.data),
            });
        })
        .catch((err) => {
            callback(err);
        });
};