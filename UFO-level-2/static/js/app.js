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
  let inputState = d3.select("#state");
  let inputCountry = d3.select("#country");
  let inputShape = d3.select("#shape"); 

  // Get the value property of the input element
  let filterDate = inputDate.property("value");
  let filterCity = inputCity.property("value");
  let filterState = inputState.property("value");
  let filterCountry = inputCountry.property("value");
  let filterShape = inputShape.property("value");

  let filteredByDate = sightings.filter(sighting => sighting.datetime === filterDate);
  console.log(filterDate);
  console.log(filteredByDate);

  // Then, select the table element by id name
  var table = d3.select("#ufo-table");

  // clear the table
  //table.html("");

  // append filtered information to the table
  var tbody = d3.select("tbody");

  filteredByDate.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
};
