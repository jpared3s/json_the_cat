const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {//request API using template literal to insert breed name
    if (error) {//if error in our request we will get error string below
      // throw Error("Something went wrong");
      return callback(error, null);
    }

    const breedObject = JSON.parse(body)[0];// assignment breedObject variable with the resulting of parsing JSON file and using first index in the array which is an object in this case

    if (!breedObject) {//if input is not a cat breed send message and put in return so code stops running
      return callback("No matching breed found", null);
    }
    return callback(null,breedObject.description);
  });
};

module.exports = { fetchBreedDescription };