// Your code here
const createEmployeeRecord = ([string1, string2, string3, number]) => {
  const employeeObj = {
    firstName: `${string1}`,
    familyName: `${string2}`,
    title: `${string3}`,
    payPerHour: number,
    timeInEvents: [],
    timeOutEvents: [],
  };
  return employeeObj;
};

const createEmployeeRecords = (arrayOfArrays) => {
  return arrayOfArrays.map((subArray) => createEmployeeRecord(subArray));
};

// let createTimeInEvent = function (employee, employeeDate) {
//   let hour = parsInt(employeeDate);
//   let date = parsInt(employeeDate);
//   employee.timeInEvents.push({
//     type: 'TimeIn',
//     hour: Number(hour),
//     date: Number(date),
//   });

//   return employee;
// };

let createTimeInEvent = (employee, dateStamp) => {
  let [date, hour] = dateStamp.split(' ');

  employee.timeInEvents.push({
    type: 'TimeIn',
    hour: parseInt(hour, 10),
    date,
  });

  return employee;
};

// let createTimeOutEvent = function (employee, employeeDate) {
//   let hour = employeeDate[(11, 12)];
//   let date = employeeDate[(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)];
//   employee.timeOutEvents.push({
//     type: 'TimeOut',
//     hour: Number(hour),
//     date: Number(date),
//   });

//   return employee;
// };

let createTimeOutEvent = (employee, dateStamp) => {
  let [date, hour] = dateStamp.split(' ');
  console.log(dateStamp);
  employee.timeOutEvents.push({
    type: 'TimeOut',
    hour: parseInt(hour, 10),
    date,
  });

  return employee;
};

// let hour = dateStamp[[11][12]];
//   let date = dateStamp[[0][1][2][3][4][5][6][7][8][9]];

//   console.log(employeeObj);
//   const empRecord1 = createEmployeeRecord(array1);
//   const empRecord2 = createEmployeeRecord(array2);
//   const newEmpRecord1 = empRecord1.map();
//   const newEmpRecord2 = empRecord2.map();
//   console.log(newEmpRecord1, newEmpRecord2);

//   const employeeArrayObj = [{}];

let hoursWorkedOnDate = (employee, soughtDate) => {
  let inEvent = employee.timeInEvents.find((e) => {
    console.log(e.date === soughtDate);
    return e.date === soughtDate;
  });

  let outEvent = employee.timeOutEvents.find((e) => {
    console.log(e.date === soughtDate);
    return e.date === soughtDate;
  });

  console.log((outEvent.hour - inEvent.hour) / 100);
  return (outEvent.hour - inEvent.hour) / 100;
};

let wagesEarnedOnDate = (employee, dateSought) => {
  let rawWage = hoursWorkedOnDate(employee, dateSought) * employee.payPerHour;
  console.log(rawWage);
  console.log(parseFloat(rawWage.toString()));
  return parseFloat(rawWage.toString());
};

let allWagesFor = (employee) => {
  let eligibleDates = employee.timeInEvents.map((e) => {
    console.log(e.date);
    console.log(eligibleDates);
    return e.date;
  });

  let payable = eligibleDates.reduce((memo, d) => {
    console.log(payable);
    console.log(memo + wagesEarnedOnDate(employee, d));
    return memo + wagesEarnedOnDate(employee, d);
  }, 0);

  console.log(payable);
  return payable;
};

let findEmployeeByFirstName = (srcArray, firstName) => {
  return srcArray.find((rec) => {
    console.log(rec);
    console.log(rec.firstName === firstName);
    return rec.firstName === firstName;
  });
};

let calculatePayroll = (arrayOfEmployeeRecords) => {
  return arrayOfEmployeeRecords.reduce((memo, rec) => {
    return memo + allWagesFor(rec);
  }, 0);
};
