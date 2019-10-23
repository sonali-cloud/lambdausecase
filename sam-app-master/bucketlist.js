
'use strict';

var AWS = require('aws-sdk');
var s3 = new AWS.S3();

exports.handler = (event, context, callback) => {
	console.log(context.functionName  +  ":"  +  context.functionVersion);
	console.log("Demo Function Version : 1 ");
	s3.listBuckets(function (err, data){
		if(err){
			console.log(err, err.stack);
			callback(null, {
				statusCode: 500,
				body: "Failed!"
			});
		}
		else{
			var allBuckets = data.Buckets;
			console.log("Success -12345");
			console.log("Total bucket count is: " + allBuckets.length);
			callback(null, {
				statusCode: 200,
				body: allBuckets.length
			});
		}
	});	
}
