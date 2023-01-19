const request = require("request");// importing request library
const breedName = process.argv[2];//assignming node arguments starting at index 2(3rd value) to variable breedName

const fetchBreedInfo = function(breedName, callback) {// created function that request breed info, with two arguements
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {//request API using template literal to insert breed name
    if (error) {//if error in our request we will get error string below
      throw Error("Something went wrong");
    }

    const breedObject = JSON.parse(body)[0];// assignment breedObject variable with the resulting of parsing JSON file and using first index in the array which is an object in this case

    if (!breedObject) {//if input is not a cat breed send message and put in return so code stops running
      return console.log("No matching breed found");
    }

    console.log(breedObject.description);// if everything successful it will print cat description in the terminal 

  });
};
fetchBreedInfo(breedName);//call fetchBreedInfo function and use breedName variable which contains not input as an arguement 
