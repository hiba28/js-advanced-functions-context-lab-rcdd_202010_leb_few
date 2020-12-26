/* Your Code Here */
function createEmployeeRecord(array){
  return{
    firstName : array[0],
    familyName : array[1],
    title : array[2],
    payPerHour : array[3],
    timeInEvents : [],
    timeOutEvents : []
  }
}
function createEmployeeRecords(array){
  let newArr = array.map(elem => createEmployeeRecord(elem))
}
function createTimeInEvent(date){
  let obj = {
    type : "TimeIn",
    hour : date.getHours(),
    date : date.getDate()
  }

}

function createTimeOutEvent(date){
  let obj = {
    type : "TimeOut",
    hour : date.getHours(),
    date : date.getDate()
  }
}

function hoursWorkedOnDate(date){
  return hoursWorked
}

function wagesEarnedOnDate(date){

}

function allWagesFor(){

}
function findEmployeeByFirstName(){

}

function calculatePayroll(){
  
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
