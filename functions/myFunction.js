exports.handler = (event, context, callback) => {
   
   let url_string = window.location.href; //window.location.href
   let url = new URL(url_string);
   let c = url.searchParams.get("lol");
   
   let bodyP ={
      dato: c,
   };
   
    let response = {
        statusCode: '200',
        body: JSON.stringify(bodyP),
        headers: {
            'Content-Type': 'application/json',
        }
    };

    callback(null, response);
}
