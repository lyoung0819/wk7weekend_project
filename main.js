
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
        .then( data => displayCountry(data) ) // need a func to keep the data stored, so we are taking in the data and storing it - data = return console.log(data)
        .catch(err => console.error(err)) // if something breaks, log an error

}

// Callback function for findCountry that will accept country data and insert into the display on the webpage
function displayCountry(data){
    // grab each area from the HTML
    let img = document.getElementById('flagimg')
    let cname = document.getElementById('cname')
    let currency = document.getElementById('curr')
    let language = document.getElementById('lang')
    let capital = document.getElementById('capcity')
    //clear data
    img.src = '';
    cname.innerHTML = '';
    currency.innerHTML = '';
    language.innerHTML = '';
    capital.innerHTML = '';

    // if country can't be found:
    if (!data.length){
        cname.innerHTML = 'Country Not Found'
        return
    }
    

    for (let countryInfo of data){
        changeImg(img, countryInfo.flags.png)
        newDataCell(cname, countryInfo.name.common)
        newDataCell(currency, `${countryInfo.name.common}'s currency is ${countryInfo.currencies}`) // need to access a changing property's value
        newDataCell(language, `The people who live in ${countryInfo.name.common} speak ${countryInfo.languages}`) // need to access a changing property's value
        newDataCell(capital, `The capital city of ${countryInfo.name.common} is ${countryInfo.capital}`)
    }
}

// helper function 
function newDataCell(element, value){
    element.innerHTML = value ?? '-'
 }

 function changeImg(element, value){
    element.src = `${value}`
 }