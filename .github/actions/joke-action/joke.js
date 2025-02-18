const request = require("request-promise"); //library for making HTTP requests

//define a set of options that the request will use
const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills course.",
  },
  json: true,
};

// make an asynchronous request to make thr request for us
async function getJoke() {
  const res = await request(options);
  return res.joke;
}

module.exports = getJoke;