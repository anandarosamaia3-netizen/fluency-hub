fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    console.log("Sucesso! Os dados carregaram:", data);
    console.log("Primeiro idioma da lista:", data.languages[0].name);
  })
  .catch(error => {
    console.error("Ops, deu um erro ao carregar o JSON:", error);
  });
