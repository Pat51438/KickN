const axios = require('axios');

exports.graphQLQuery = (query, variables) =>
    axios({
        url: 'https://xudc7jkzdjgmvi27qjcq73ty7m.appsync-api.us-east-1.amazonaws.com/graphql',
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": 'da2-j4l3htpn2na3xejfpk5mvpyjcq',
        },
        data: {
            query, variables
        },
    });

