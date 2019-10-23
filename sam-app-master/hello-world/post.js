let response;

exports.handler = async (event, context) => {
    console.log(event.body) // printing the entire payload received...
    try {
	payload = JSON.parse(event.body)  // event is coming as JSON, so let's parse it so we can access it as a JS object
        response = {
            'statusCode': 200,
            'body': JSON.parse(JSON.stringify({
                message: payload.message
            }))
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
