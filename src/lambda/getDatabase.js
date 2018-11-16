const axios = require('axios');

// var url_string = "http://www.example.com/t.html?a=1&b=3&c=m2"; //window.location.href
// var url = new URL(url_string);
// var c = url.searchParams.get("c");
// console.log(c);

exports.handler = (event, context, callback) => {

    console.log('El nombre: ', event.queryStringParameters.name);

    let name = event.queryStringParameters.name;

    axios.get(`https://my-not-awesome-project-24bbf.firebaseio.com/users/${name}.json`)
        .then((res) => {
            res.data.params = event.queryStringParameters;
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(res.data),
            });
        })
        .catch((err) => {
            callback(err);
        });
};