// Function to get status of variable (exist on no)

function LoadingDiv(item) {
  return item ? item : <button className="btn btn-square loading"></button>;
}

function Loading(item, opcionalParam) {
  return item ? item + (opcionalParam && "/") : "";
}

export { Loading, LoadingDiv };
