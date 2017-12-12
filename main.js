$('#details').hide();

$('button').click( function() {
  $('#home').hide();
  $('#details').show();
})

$('#back').click( function(){
  $('#home').show();
  $('#details').hide();
});

// use jQuery to select the HTML elements we're going to manipulate
var homeGoButton = $('#home button');
var homeDropdown = $('#home select');
// tell the GO button to do something when we click it
homeGoButton.click( function()
{
  // get user input
  var selectedOption = homeDropdown.val();
  // using jQuery val(), see http://api.jquery.com/val
  console.log('You picked ' + selectedOption);

  // filter+sort people by user selection
  	var resultsList = filterAndSortList(peopleList, selectedOption);
  	console.log(resultsList);

    showList(resultsList, resultsOL);
    var resultsOL = $('#results ol');
})

$('#results li').click( function() {
// grab the id from the clicked item
var resultId = $(this).attr('id')
// use the id to get the right data
var resultData = resultsList[resultId]
console.log(resultData)

// call the function showDetails()
showDetails(resultData, detailsInfo)

// show the details!
resultsSection.hide()
detailsSection.show()
})


r
