//the value of the note corresponds with the time 
///render the note to go with the time 
//input type of text area 
//moment.js that parse times 
    //current time = or less than the time at the block
    //if current time is === to current time 
    //if current time is > the time 
    //if current time is greater than 
    //w3 jquerry 
//PSEUDOCODE
    //1. grab all HTML elements
        //classes and ids
    //2. get the current day and day of the week 
        //use moment() with the id tag currentDay use folder 25 and 26
    //3.want the current time to work in down to hour, minutes, seconds
        //set a currentTime id  and link it to text area 
        //compare the current hour to the previous hour
        //write if else statemenet "if the current time is greater than the time on the screen make grey..."
        //use data-time and time input 
        //use military time to make it easier to compare greater than to later 
    //4. have a save button to save it to local storage on click
        //add event listener for save button
            //search: how to save text area to local storage 
            //pull text area out of local storage 
            //push it to the text area again to make sure its reading correct 
//WORKSPACE
//elements
var saveBtn = $('#save')
var hourEl = $('#hour')
var userInput = $('#userInput')
var local = JSON.parse(localStorage.getItem("save"))
var othercontent = []
// var endput= local[0]
//current day
//written as Thursday, September 5th
var currentDay = moment();
$('#currentDay').text(currentDay.format('dddd, MMMM Do'));
//  var today = $('#today').moment().format('HH');
//how to write the current time of and compare it to a number 
//write in for loop
//make it an object?
$('textarea').each(function(){
    var hourplace = $(this).attr('data-hour')
    var timeplace = currentDay.format('HH')
    console.log($(this).attr('data-hour'))
    if (timeplace > hourplace) {
        $(this).attr("class",'past')
       } else if (timeplace === hourplace) {
       $(this).attr('class','present')
    } else if (timeplace < hourplace) {
       $(this).attr('class','future')
   }
    })

function savefunc (){
    var save = [{
        text: $(this).siblings('textarea').val(),
        hour: $(this).siblings('div').text()
    }]
    console.log(text)
     console.log(hour)
    othercontent.push(save)
    var pullingcontent = JSON.stringify(othercontent)
    
    if (local === null) {
    JSON.stringify(pullingcontent)
    localStorage.setItem("text", pullingcontent)

    } else {
    othercontent.push(JSON.parse(localStorage.getItem("text")))
    localStorage.setItem("text", pullingcontent)
    }

}
saveBtn.click(savefunc)



