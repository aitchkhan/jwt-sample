var jwt = require('jsonwebtoken');
var config = require('../config.js');

module.exports = function(router) {

    router.get('/scim/v2/Groups', require('../middlewares/auth.js'), function(req, res) {
        // console.log('POST USER body: ', req.body)
        const response = {
            "schemas": [
              "urn:ietf:params:scim:api:messages:2.0:ListResponse"
            ],
            "totalResults": 1,
            "startIndex": 0,
            "itemsPerPage": 0,
            "Resources": [
              {
                "id": "66ed8bece1944aa18bf96fb5c935c4ba",
                "schemas": [
                  "urn:ietf:params:scim:schemas:core:2.0:Group"
                ],
                "displayName": "Marketing",
                "members": [
                  {
                    "value": "m1@atko.com",
                    "$ref": "localhost:8080/Users/12345",
                    "display": "Marketing User 1"
                  },
                  {
                    "value": "m2@atko.com",
                    "$ref": "localhost:8080/Users/12346",
                    "display": "Marketing User 2"
                  }
                ]
              }
            ]
          };
        res.json(response);
    });


    return router;
};
