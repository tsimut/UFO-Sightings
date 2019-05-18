// Assign the data from `data.js` to a descriptive variable
var tableData = data;
var tbody = d3.select("tbody");


// Select the submit button
var submit =d3.select("#filter-btn");

submit.on("click", function() {
  // Prevent the page from refreshing
    d3.event.preventDefault();
    //Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(tableData => tableData.datetime=== inputValue);

    console.log(filteredData);
    
   filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

});
          


  
      
