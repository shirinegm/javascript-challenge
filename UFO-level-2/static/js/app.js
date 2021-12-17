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
  let datetime = d3.select("#datetime");
  let city = d3.select("#city");
  let state = d3.select("#state");
  let country = d3.select("#country");
  let shape = d3.select("#shape"); 

  // Get the value property of the input element
  let filterDate = datetime.property("value");
  let filterCity = city.property("value");
  let filterState = state.property("value");
  let filterCountry = country.property("value");
  let filterShape = shape.property("value");

  //Collect Filter fields
  let filterFields = {
    datetime: filterDate, 
    city: filterCity, 
    state: filterState, 
    country: filterCountry, 
    shape: filterShape
  };

  // Remove empty filter fields
  for (const key in filterFields) {
    if (filterFields[key] === '') {
      delete filterFields[key];
    }
  }

  console.log(filterFields);

  //Put the search fields in a list
  searchFilters = [filterFields];


  // searchFilters.forEach((filter) => {

  //   // Iterate through each key and value
  //   Object.entries(filter).forEach(([key, value]) => {

  //   // Use the key to determine which array to filter the value on
  //     if (key === 'datetime') {filteredSet = sightings.filter(sighting => (sighting.datetime === value));}
  //     else if (key === 'city') {filteredSet = sightings.filter(sighting => (sighting.city === value));}
  //     else if (key === 'state') {filteredSet = sightings.filter(sighting => (sighting.state === value));}
  //     else if (key === 'country') {filteredSet = sightings.filter(sighting => (sighting.country === value));}
  //     else if (key === 'shape') {filteredSet = sightings.filter(sighting => (sighting.shape === value));}
  //     else {
  //       let cell = row.append("td");
  //       cell.text("No sightings found");
  //     }
  //   });
  // });


  // let filteredSet = sightings.filter(sighting => 
  //   (sighting.datetime === filterDate 
  //     sighting.city === filterCity && 
  //     sighting.state === filterState &&
  //     sighting.country === filterCountry &&
  //     sighting.shape === filterShape
  // ));

  let filteredSet = sightings;

  if (filterDate !== '') {filteredSet = filteredSet.filter(sighting => (sighting.datetime === filterDate));}
  if (filterCity !== '') {filteredSet = filteredSet.filter(sighting => (sighting.city === filterCity));}
  if (filterState !== '') {filteredSet = filteredSet.filter(sighting => (sighting.state === filterState));}
  if (filterCountry !== '') {filteredSet = filteredSet.filter(sighting => (sighting.country === filterCountry));}
  if (filterShape !== '') {filteredSet = filteredSet.filter(sighting => (sighting.shape === filterShape));}

  console.log(filteredSet);
  
  // Prepare the array to be dynamically populated by the shapes in the sightings data
  let allShapes = [];
  
  //for each loop to build the dictionary, add the shape if its not in the dict
  sightings.forEach(sighting => {
    if (!allShapes.includes(sighting.shape)) {
      allShapes.push(sighting.shape);
    }
  });

  // Populate the drop down menu with the distinct options in the data for shapes  
  let ddlShapes = d3.select('#ddlshape');
  allShapes.forEach(option => {
    let option = ddlShapes.append("option");
    option.text(option);
    option.value(option);
  });

  console.log(ddlShapes);
  

  // append filtered information to the table
  var tbody = d3.select("tbody");

  tbody.html("");

  filteredSet.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
};
