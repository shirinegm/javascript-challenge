console.log("app.js loaded!");

// Assign the data from `data.js` to a descriptive variable
let sightings = data;

// Select the button
let button = d3.select("#filter-btn");

// Select the form
let form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  let inputDate = d3.select("#datetime");
  let inputCity = d3.select("#city");


  // Get the value property of the input element
  let inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(sightings);



  console.log(filteredData);

};
