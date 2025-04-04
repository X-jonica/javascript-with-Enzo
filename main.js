const promise1 = new Promise((resolve, reject) => {
  console.log("Hello async");

//   resolve("les données sont arivées");

    reject("les données ne sont pas arivées")
});

promise1
  .then((value) => {
    console.log(value);
  })
  .catch(() => {
    console.log("Il y a eu une erreur lor de la recuperation des donnees !");
  });

console.log(promise1);
