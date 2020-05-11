// Your code here
  //let testEmployee = createEmployeeRecord(["Gray", "Worm", "Security", 1]

let createEmployeeRecord = function(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents:[]
  }
}

let twoRows = [
  ["moe", "sizlak", "barkeep", 2],
  ["bartholomew", "simpson", "scamp", 3]
]

let createEmployeeRecords = function(array) {
  return array.map(createEmployeeRecord)
}

let exampleTime = "YYYY-MM-DD 800"

let createTimeInEvent = function(employee, exampleTime) {
  let hour = exampleTime.split(" ")[1]
  let day = exampleTime.split(" ")[0]

  employee.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: day,
  })
  return employee
}

let createTimeOutEvent = function(employee, exampleTime) {
  let hour = exampleTime.split(" ")[1]
  let day = exampleTime.split(" ")[0]

  employee.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: day,
  })
  return employee
}


let hoursWorkedOnDate = function(employee, date) {
  let inEvent = employee.timeInEvents.find(function(e){
     return e.date === date
 })

 let outEvent = employee.timeOutEvents.find(function(e){
    return e.date === date
})

  let hoursWorked = (outEvent.hour - inEvent.hour) / 100

  return hoursWorked
}

let wagesEarnedOnDate = function(employee, date) {
  let hours = hoursWorkedOnDate(employee, date)
  let employeePay =  employee.payPerHour
  let wageDay = hours * employeePay
  return wageDay
}

let allWagesFor = function(employee) {


}

let calculatePayroll = function(employees) {
  
}



let findEmployeeByFirstName = function(employeeArray, firstname) {
  let record = employeeArray.find(function(e){
     return e.firstName === firstname
 })
 return record
}
