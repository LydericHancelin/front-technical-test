fetch('https://reqres.in/api/users?per_page=8')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) { appendData(data); })
  .catch(function (err) {
    console.log('error: ' + err);
  });

function appendData(json) {
  let wrapper = document.getElementById("wrapper");
  for (var i = 0; i < json.data.length; i++) {
    // On cree person
    let person = document.createElement("div");
    person.classList.add("person");

    // On cree son nom
    let name = document.createElement("div");
    name.classList.add("person__name");
    name.innerHTML = json.data[i].first_name + ' ' + json.data[i].last_name;
    person.appendChild(name);

    // On crée son mail
    let mail = document.createElement("a");
    mail.classList.add("person__mail");
    mail.setAttribute("href", 'mailto:' + json.data[i].email);
    person.appendChild(mail);

    // On crée l'avatar
    let avatar = document.createElement("img");
    avatar.classList.add("person__avatar");
    avatar.setAttribute("src", json.data[i].avatar);
    mail.appendChild(avatar);

    // On ajoute personne au wrapper
    wrapper.appendChild(person);

  }
}