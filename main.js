// console.log('Hello from main.js')

// Get the find countries form and add submit event listener
let findCountryForm = document.getElementById('find-country-form'); // grab the specific form we need
findCountryForm.addEventListener('submit', findCountry) // add event listener for a user to click 

// Event Listener to get country data and display on the page
function findCountry(e){
    e.preventDefault(); // preventing the form default (refreshing with form data as query params)
    console.log(e);
    // Get the values from the input 
    let countryName = document.getElementById('countryInput').value; // grab value from input element
    console.log(`Looking for information on the country ${countryName}...`)
// Building URL for the API req
    const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(url)
}