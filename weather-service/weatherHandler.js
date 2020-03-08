'use strict';
const fetch = require('node-fetch');

const responseHeaders = {
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credential': true
};

const responses = {
    success: (data={}, code=200) => {
        return {
            'statusCode': code,
            'headers': responseHeaders,
            'body': data
        }
    },
    error: (error) => {
        return {
            'statusCode': error.code || 500,
            'headers': responseHeaders,
            'body': error
        }
    }
};

module.exports.getWeatherReport = function(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e21c8046d10c9e4287b48e5defa4dab4&units=imperial`;
    console.log(endpoint);
    fetch(endpoint)
        .then( res => res.json() )
        .then(body => {
            callback(null, responses.success(body))
        })
        .catch(error => {
            callback(null, responses.error(error))
        });
};
