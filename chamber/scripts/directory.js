const url = './data/directory.json'

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);  // note that we reference the prophet array of the data object given the structure of the json file
    displayBusiness(data.members)
  }

  const displayBusiness = (businesses) => {
    const cards = document.querySelector('#directory-data'); // select the output container element
  
    businesses.forEach((business) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      card.classList.add("business-card")
      card.innerHTML = `<h2>${business.name}</h2>
      <img src="${business.imageURL}" alt="member image">
      <p>${business.street}</p>
      <p>${business.city}</p>
      <p><a href="#">Website</a></p>`;
  
      cards.appendChild(card);
    }) // end of forEach loop
  } // end of function expression
  
  getMembersData();

  function displayGrid()
  {
    document.querySelector('#directory-data').classList.remove('list-directory')
    document.querySelector('#directory-data').classList.add('cards-directory')
  }

  function displayList()
  {
    document.querySelector('#directory-data').classList.remove('cards-directory')
    document.querySelector('#directory-data').classList.add('list-directory')
  }

  document.querySelector('#directory-grid').addEventListener('click', displayGrid)
  document.querySelector('#directory-list').addEventListener('click', displayList)