exports.handler = function(event, context, callback) {

    var bodyO = {
      nombre: 'Joseph',
      edad: 25
    };

    callback(null, {
    statusCode: 200,
    body: JSON.stringify(bodyO)
    });
}
