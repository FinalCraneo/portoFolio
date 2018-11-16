const axios = require('axios');



exports.handler = (event, context, callback) => {

    console.log('El nombre: ', event.queryStringParameters.name);

    let name = event.queryStringParameters.name;
    let getUserUrl = process.env.getUserUrl;

    axios.get(`${getUserUrl}/${name}.json`)
        .then((res) => {
            res.data.params = event.queryStringParameters;
            res.data.siEntre = 'si entre';
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(res.data),
            });
        })
        .catch((err) => {
            callback(err);
        });
};