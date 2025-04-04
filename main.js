async function foo() {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("données recuperées"), 1000);
  });

  let result = await p1;
  console.log(result);
}

foo();

/*

Note : 
* async : retourne toujours une promesse qui s'auto-resoud ;(on peux ecrire des promesses a l'interieur d'une fonction avec async)
* await : attendre toute les resultats du promesse qu'on veut !
*/
