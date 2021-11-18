
const url = "https://jsonplaceholder.typicode.com/users";
let items = [];
getitem();

function getitem() {
  fetch(url,{method: 'GET'})
    .then(data => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      _displayItems(data);
     
    })
    .catch(error => console.error('Unable to get items.', error));
}

function _displayItems(data) {
  const tBody = document.getElementById('items');
  tBody.innerHTML = '';

  data.forEach(item => {

    let tr = tBody.insertRow();
    
    let td1 = tr.insertCell(0);
    let textNode = document.createTextNode(item.id);
    td1.appendChild(textNode);

    let td2 = tr.insertCell(1);
    let textNode2 = document.createTextNode(item.name);
    td2.appendChild(textNode2);
  });

  todos = data;
}