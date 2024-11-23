document.addEventListener('DOMContentLoaded', function() {
    // Código para carregar os dados do insomnia.json
    fetch('https://Gabriel-Gald1n0.github.io/Documentacao-backend-cepedi/docs/insomnia.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);  // Aqui você pode processar os dados conforme necessário
      })
      .catch(error => {
        console.error('Error loading insomnia data:', error);
      });
  });
  