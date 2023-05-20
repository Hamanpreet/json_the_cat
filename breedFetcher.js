//importing the request library
const request = require('request');

//returning description if everything goes well, otherwise errors
//We are logging everything through callbacks
const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`,(error,response,body) => {
    if (error) {
      callback("URL not found");
      return;
    }
    const data = JSON.parse(body);
    if (data && data.length !== 0) {
      return callback(null, data[0].description);
    }
    callback("Breed not found");
    return;
  });
};


//exporting the function
module.exports = {fetchBreedDescription};