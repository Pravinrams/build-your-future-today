function createTaskQuery(queryInfo) {
  const { name, description, completed, goalid } = queryInfo;
  let values = arryToString([ name, description, completed, goalid ]);
  return `insert into tasks (name, description, completed, goalid) values (${values});`;
}

function createGoalQuery(queryInfo) {
  const {
    name,
    description,
    startdate,
    enddate,
    completed,
    userid
  } = queryInfo;

  let values = arryToString([
    name,
    description,
    startdate,
    enddate,
    completed,
    userid
  ]);

  return `insert into goals (name, description, startdate, enddate, completed, userid) values (${values});`;
}

function registerUserQuery(name, description, completed, goalid) {
  // do something here
}

function arryToString(arr) {
  let arrToString = "";
  arr.forEach((item, index) => {
    if (index === arr.length - 1) {
      arrToString += item;
    } else {
      arrToString += `'${item}',`;
    }
  });

  return arrToString;
}

module.exports = {
  createGoalQuery,
  createTaskQuery,
  registerUserQuery
};
