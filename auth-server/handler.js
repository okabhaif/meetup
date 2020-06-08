'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=8im0klia1ce1meq19gcrvqvnea'
    + '&client_secret=ol9pc3cvni89btnt4v4a3reqck'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://okabhaif.github.io/meetup/'
    + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};

module.exports.getRefreshAccessToken = async (event) => {
  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=8im0klia1ce1meq19gcrvqvnea'
    + '&client_secret=ol9pc3cvni89btnt4v4a3reqck'
    + '&grant_type=refresh_token'
    + '&refresh_token=' + event.pathParameters.refresh_token;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token
    }),
  };
};


// User authorization code
// https://secure.meetup.com/oauth2/authorize?client_id=8im0klia1ce1meq19gcrvqvnea&response_type=code&redirect_uri=https://okabhaif.github.io/meetup/