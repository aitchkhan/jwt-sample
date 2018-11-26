var jwt = require('jsonwebtoken');
var config = require('../config.js');

module.exports = function(router) {
    router.post('/login', function(req, res) {
        /*
         * Check if the username and password is correct
         */
        if( req.body.username === 'admin' && req.body.password === 'admin' ) {
            res.json({
                id: 1,
                username: 'admin',
                jwt: jwt.sign({
                    id: 1,
                }, config.JWT_SECRET, { expiresIn: 60*60 })
            });
        } else {
            /*
             * If the username or password was wrong, return 401 ( Unauthorized )
             * status code and JSON error message
             */
            res.status(401).json({
                error: {
                    message: 'Wrong username or password!'
                }
            });
        }
    });

    router.post('/scim/v2/Users', require('../middlewares/auth.js'), function(req, res) {
        console.log(req.body)
        res.json(req.body);
    });

    router.get('/scim/v2/Users', require('../middlewares/auth.js'), function(req, res) {
        console.log('I AM BAT MAN and a GET CALL USER');
        const users = [{
            "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
            "id":"2819c223-7f76-453a-919d-413861904646",
            "externalId":"bjensen",
            "meta":{
              "resourceType": "User",
              "created":"2011-08-01T18:29:49.793Z",
              "lastModified":"2011-08-01T18:29:49.793Z",
              "location":"https://example.com/v2/Users/2819c223...",
              "version":"W\/\"f250dd84f0671c3\""
            },
            "name":{
              "formatted": "Ms. Barbara J Jensen, III",
              "familyName": "Jensen",
              "givenName": "Barbara",
              "middleName": "Jane",
              "honorificPrefix": "Ms.",
              "honorificSuffix": "III"
            },
            "userName":"bjensen",
            "phoneNumbers":[
              {
                "value":"555-555-8377",
                "type":"work"
              }
            ],
            "emails":[
              {
                "value":"bjensen@example.com",
                "type":"work",
                "primary": true
              }
            ]
          },
          {
            "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
            "id":"2819c223-7f76-453a-919d-413861904646",
            "externalId":"bjensen",
            "meta":{
              "resourceType": "User",
              "created":"2011-08-01T18:29:49.793Z",
              "lastModified":"2011-08-01T18:29:49.793Z",
              "location":"https://example.com/v2/Users/2819c223...",
              "version":"W\/\"f250dd84f0671c3\""
            },
            "name":{
              "formatted": "Ms. Barbara J Jensen, III",
              "familyName": "Jensen",
              "givenName": "Barbara",
              "middleName": "Jane",
              "honorificPrefix": "Ms.",
              "honorificSuffix": "III"
            },
            "userName":"bjensen",
            "phoneNumbers":[
              {
                "value":"555-555-8377",
                "type":"work"
              }
            ],
            "emails":[
              {
                "value":"bjensen@example.com",
                "type":"work",
                "primary": true
              }
            ]
          }];

        res.status(200).json(users);
    });

    router.get('/scim/v2/Users/:id', require('../middlewares/auth.js'), function(req, res) {
        console.log(req.params.id);
        console.log('I AM BAT MAN and a GET CALL USER');
        const user = {
            "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
            "id":"2819c223-7f76-453a-919d-413861904646",
            "externalId":"bjensen",
            "meta":{
              "resourceType": "User",
              "created":"2011-08-01T18:29:49.793Z",
              "lastModified":"2011-08-01T18:29:49.793Z",
              "location":"https://example.com/v2/Users/2819c223...",
              "version":"W\/\"f250dd84f0671c3\""
            },
            "name":{
              "formatted": "Ms. Barbara J Jensen, III",
              "familyName": "Jensen",
              "givenName": "Barbara",
              "middleName": "Jane",
              "honorificPrefix": "Ms.",
              "honorificSuffix": "III"
            },
            "userName":"bjensen",
            "phoneNumbers":[
              {
                "value":"555-555-8377",
                "type":"work"
              }
            ],
            "emails":[
              {
                "value":"bjensen@example.com",
                "type":"work",
                "primary": true
              }
            ]
          };

        res.status(200).json(user);
    });

    return router;
};
