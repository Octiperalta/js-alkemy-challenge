const getOperationsURL = "http://localhost:4000/api/v1/operations?order=DESC";
const operationURL = "http://localhost:4000/api/v1/operations";

async function getOperations(token, operation_type) {
  const requestOptions = {
    method: "GET",
    headers: { Authorization: token },
  };

  const urlWithQuery = operation_type
    ? `${getOperationsURL}&type=${operation_type}`
    : getOperationsURL;

  const response = await fetch(urlWithQuery, requestOptions);

  const { data } = await response.json();

  return data;
}

function getLastOperation(operations) {
  return operations[0].operation_type === "OUTFLOW"
    ? `-${operations[0].amount}`
    : operations[0].amount;
}

function getBalance(operations = []) {
  return operations.reduce((a, b) => {
    if (b.operation_type === "OUTFLOW") return a - b.amount;
    else return a + b.amount;
  }, 0);
}

async function createOperation(description, amount, type, token) {
  const operation = { description, amount, operationType: type };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify(operation),
  };

  const response = await fetch(operationURL, requestOptions);
  const data = await response.json();

  return data;
}

async function editOperation(description, amount, token, operationId) {
  const operation = { description, amount };

  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify(operation),
  };

  const updateRequestURL = operationURL + "/" + operationId;
  const response = await fetch(updateRequestURL, requestOptions);
  const data = await response.json();

  return data;
}

async function deleteOperation(operationId, token) {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Authorization: token },
  };
  const deleteRequestURL = operationURL + "/" + operationId;
  const response = await fetch(deleteRequestURL, requestOptions);
  const data = await response.json();

  return data;
}

export {
  getOperations,
  getLastOperation,
  getBalance,
  createOperation,
  editOperation,
  deleteOperation,
};
