const getOperationsURL = "http://localhost:4000/api/v1/operations?order=DESC";

async function getOperations(token, operation_type) {
  const requestOptions = {
    method: "GET",
    headers: { Authorization: token },
  };

  const url = operation_type
    ? `${getOperationsURL}&type=${operation_type}`
    : getOperationsURL;

  const response = await fetch(url, requestOptions);

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

export { getOperations, getLastOperation, getBalance };
