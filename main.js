
// Get the find countries form and add submit event listener
let findCountryForm = document.getElementById('find-country-form'); // grab the specific form we need
findCountryForm.addEventListener('submit', findCountry) // add event listener for a user to click 

// Event Listener to get country data and display on the page
function findCountry(e){
    e.preventDefault(); // preventing the form default (refreshing with form data as query params)
    // console.log(e);
    
    // Get the values from the input 
    let countryName = document.getElementById('countryInput').value; // grab value from input element
    console.log(`Looking for information on the country ${countryName}...`)


    // Building URL for the API req
    const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(url)

    //Make the HTTP get request to the above url and log the data 
    fetch(url) // fetch returns a promise, so we need to tell it what to do once the promise is fulfilled
        .then( res => res.json()) // once the url is fetched,, then we want to log the response obj in json format (this will also retur a promise so we need another .then) 
        .then( data => console.log(data) ) // need a func to keep the data stored, so we are taking in the data and storing it - data = return console.log(data)
        .catch(err => console.error(err)) // if something breaks, log an error



}