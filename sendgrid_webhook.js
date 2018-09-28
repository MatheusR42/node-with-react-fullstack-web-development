var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: "eqwdskajnll" }, function(err, tunnel) {
  console.log('your url is: https://eqwdskajnll.localtunnel.me')
});