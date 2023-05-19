// All the user interaction moved to this file
const { fetchBreedDescription } = require('./breedFetcher.js');
const breed = process.argv[2];


// Calling the function with breed as CLI, if it returns error or description, log from here
fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});