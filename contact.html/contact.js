
    let contacts = [];

    function displayContacts() {
      const contactsList = document.getElementById("contacts-list");
      contactsList.innerHTML = "";

      contacts.forEach((contact, index) => {
        const contactElement = document.createElement("div");
        contactElement.innerHTML = `
          <h3>Name: ${contact.name}</h3>
          <p>Email: ${contact.email}</p>
          <p>Phone: ${contact.phone}</p>
          <button onclick="deleteContact(${index})">Delete</button>
        `;
        contactsList.appendChild(contactElement);
      });
    }

    // Function to add a new contact
    function addContact(event) {
      event.preventDefault();

      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const phoneInput = document.getElementById("phone");

      const newContact = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value
      };

      contacts.push(newContact);

      nameInput.value = "";
      emailInput.value = "";
      phoneInput.value = "";

      displayContacts();
    }

    // Function to delete a contact
    function deleteContact(index) {
      contacts.splice(index, 1);
      displayContacts();
    }

    // Add an event listener to the form submission
    const form = document.getElementById("add-contact-form");
    form.addEventListener("submit", addContact);

    displayContacts();
 