const request = require('request');
const breed = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`,(error,response,body) => {
  if (error !== null) {
    console.log(error , [error])
    return console.log("URL not found");
  }
  const data = JSON.parse(body);
  
  if (data && data.length !== 0) {
    console.log(data[0].description);
  }
 
  return console.log("Breed not found");
});



//exporting the function
//module.exports = fetchBreedDescription