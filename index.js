// Get references to the tbody element, input field and button
var tbody = document.querySelector("tbody");
var stateInput = document.querySelector("#time");
var cityInput = document.querySelector("#city");
var stInput = document.querySelector("#state");
var shapeInput = document.querySelector("#shape");


var searchBtn = document.querySelector("#search");
var cityBtn = document.querySelector("#srcCity");
var stateBtn = document.querySelector("#srcState");
var shapeBtn = document.querySelector("#srcShape");
var backBtn = document.querySelector("#backPg");
var forwardBtn = document.querySelector("#forwardPg");
// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
searchBtn.addEventListener("click", handleSearchButtonClick);
cityBtn.addEventListener("click", handleCityButtonClick);
stateBtn.addEventListener("click", handleStateButtonClick);
shapeBtn.addEventListener("click", handleShapeButtonClick);
backBtn.addEventListener("click", handleBackButtonClick);
forwardBtn.addEventListener("click", handleForwardButtonClick);

var returnItems = 24;
var moreResults = document.querySelector("#more");
var pagecounter = 0;




// Set ufoObservations to dataset initially
var filteredObs = dataSet;

// renderTable renders the dataset to the tbody
function renderTable(advance = 25) {
  console.log("in Render");
  tbody.innerHTML = "";
  console.log(advance);
  
  for (var i = 0; i < returnItems; i++) {
    // Get get the current address object and its fields
    var address = filteredObs[i];
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var row = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var cell = row.insertCell(j);
      cell.innerText = address[field];
    }
  }
  pagecounter = returnItems
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDate = stateInput.value.trim().toLowerCase();
  console.log(filterDate);

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredObs = dataSet.filter(function(address) {
    var searchDate = address.datetime;
    // console.log(filterDate);
    // console.log(searchDate);
    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return searchDate === filterDate;
  });
  console.log(filteredObs);
  renderTable();
}

function handleCityButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  console.log("in city");
  var filterDate = cityInput.value.trim().toLowerCase();
  console.log(filterDate);

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredObs = dataSet.filter(function(address) {
    var searchDate = address.city.toLowerCase();
    // console.log(filterDate);
    console.log(searchDate);
    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return searchDate === filterDate;
  });
  console.log(filteredObs);
  renderTable();
}

function handleStateButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDate = stInput.value.trim().toLowerCase();
  console.log(filterDate);

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredObs = dataSet.filter(function(address) {
    var searchDate = address.state.toLowerCase();
    // console.log(filterDate);
    // console.log(searchDate);
    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return searchDate === filterDate;
  });
  console.log(filteredObs);
  renderTable();
}

function handleShapeButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDate = shapeInput.value.trim().toLowerCase();
  console.log(filterDate);

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredObs = dataSet.filter(function(address) {
    var searchDate = address.shape.toLowerCase();
    // console.log(filterDate);
    // console.log(searchDate);
    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return searchDate === filterDate;
  });
  console.log(filteredObs);
  renderTable();
}

function handleBackButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  // var filterDate = shapeInput.value.trim().toLowerCase();
  console.log("In Back");
  console.log(returnItems);

  // // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  // filteredObs = dataSet.filter(function(address) {
  //   var searchDate = address.shape.toLowerCase();
  //   // console.log(filterDate);
  //   // console.log(searchDate);
  //   // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
  //   return searchDate === filterDate;
  // });
  // console.log(filteredObs);
  renderTable();
}

function handleForwardButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  // var filterDate = shapeInput.value.trim().toLowerCase();
  console.log("In Forward");
  console.log(returnItems);
  var startFrom = returnItems;
  returnItems = returnItems + 25;
  // // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  // filteredObs = dataSet.filter(function(address) {
  //   var searchDate = address.shape.toLowerCase();
  //   // console.log(filterDate);
  //   // console.log(searchDate);
  //   // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
  //   return searchDate === filterDate;
  // });
  // console.log(filteredObs);
  renderTable(startFrom);
}

// Render the table for the first time on page load
renderTable();

// dataSet
// {
//   datetime: "1/1/2010",
//   city: "el cajon",
//   state: "ca",
//   country: "us",
//   shape: "triangle",
//   durationMinutes: "12 minutes",
//   comments: "3 Red objects hovering over El Cajon CA"
// },

// var addressData = [{
//   id: 1,
//   country: "United States",
//   state: "California",
//   city: "Sacramento",
//   street_name: "Carberry",
//   street_number: "87"
// },