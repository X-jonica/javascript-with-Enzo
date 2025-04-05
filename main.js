// Comment visualiser les données via notre API et pouvoir les utilisés apres ?

const xhr = new XMLHttpRequest();

xhr.open("GET", "http://localhost:3000/api/language");

xhr.onload = function () {
  console.log(JSON.parse(xhr.response));
};

xhr.send();
