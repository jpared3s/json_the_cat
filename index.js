
const input = process.argv[2];//assignming node arguments starting at index 2(3rd value) to variable breedName
const { fetchBreedDescription } = require("./breedFetcher");



fetchBreedDescription(input, (err, desc) => {
  if (err) {
    return console.log("Error fetched");
  } 
  console.log(desc);
});//call fetchBreedInfo function and use breedName variable which contains not input as an arguement 
