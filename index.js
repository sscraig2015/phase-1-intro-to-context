function createEmployeeRecord(array) {
                let obj = {
                firstName: array[0],    
                familyName: array[1],
                title: array[2],
                payPerHour: array[3],
                timeInEvents: [],
                timeOutEvents: [],
                }
            return obj 
          }
 
function createEmployeeRecords(array) {

    let newArr = []
    for(let i = 0; i < array.length; i++){
    newArr.push(createEmployeeRecord(array[i]))   
    
}
    return newArr
}

function createTimeInEvent(employee ,datestamp) {
  
  const string = datestamp
 
  const timeInEvent = {
    type: "TimeIn",
    hour: String(string).substring(11,15),
    date: String(string).substring(0,10),
  }
  employee.timeInEvents.push(timeInEvent)
  console.log(employee)
}



// let twoRows = [
//     ["moe", "sizlak", "barkeep", 2],
//     ["bartholomew", "simpson", "scamp", 3]
//   ]

//   let dataEmployees = [
//     ["Thor", "Odinsson", "Electrical Engineer", 45],
//     ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
//     ["Natalia", "Romanov", "CEO", 150],
//     ["Darcey", "Lewis", "Intern", 15],
//     ["Jarvis", "Stark", "CIO", 125],
//     ["Anthony", "Stark", "Angel Investor", 300],
//     ["Byron", "Poodle", "Mascot", 3],
//     ["Julius", "Caesar", "General", 27],
//     ["Rafiki", "", "Aide", 10],
//     ["Simba", "", "King", 100]
//   ]