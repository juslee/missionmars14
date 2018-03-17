const clients = require('restify-clients');

module.exports = (config) => {
    return (query, callback) => {
        const client = clients.createJsonClient({
            url: `https://southeastasia.api.cognitive.microsoft.com`,
            headers: {
                'Ocp-Apim-Subscription-Key': config.apiKey
            }
        });

        const urlPath = '/text/analytics/v2.0/sentiment';

/*----------------------------------------------------------------------------------------
* Mission 3: Use sentiment analytics
* ---------------------------------------------------------------------------------------- */
        //const payload = {
        //    documents: [{
        //        language: 
        //        id: 
        //      text: 
        //    }]
        //};

        //client.post(..., ..., (err, request, response, result) => {
            // if no error execute this
            //if () {
            //    
            //} else {
            // return the errors
            //}
        //});       
//////////////////////////////////////////////////////////////////////////////////////////      
    };
};