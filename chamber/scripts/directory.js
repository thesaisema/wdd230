const url = './data/directory.json'

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.members)
  }

  const displayProphets = (prophets) => {
    const cards = document.querySelector('directory-main-cards'); // select the output container element
  
    prophets.forEach((member) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      card.innerHTML = `<h2>${member.name}</h2>
      <img src="${member.imageURL}" alt="member image">
      <p>${member.street}</p>
      <p>${member.city}</p>
      <p><a href="#">Website</a></p>`;
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${member.name} ${member.lastname}} ____________`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', member.imageurl);
      portrait.setAttribute('alt', `Portrait of ${member.name} ${member.lastname} ______________`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }) // end of forEach loop
  } // end of function expression
  
  getMembersData();