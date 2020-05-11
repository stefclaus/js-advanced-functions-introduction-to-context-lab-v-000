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
  
}
