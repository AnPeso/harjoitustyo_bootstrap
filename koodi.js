function tallennaTiedot() {
      const nimi = document.getElementById('nimi').value;
      const viesti = document.getElementById('viesti').value;
      const checkbox = document.getElementById('important-checkbox').checked;
      const aikaleima = new Date().toLocaleString();

      const uusiMerkinta = document.createElement('div');
      uusiMerkinta.classList.add('border', 'p-2', 'mb-2');

      uusiMerkinta.textContent = `${nimi}: ${viesti} - ${aikaleima}`;

      if (checkbox) {
        uusiMerkinta.classList.add('important');
      }

      document.getElementById('viestit').appendChild(uusiMerkinta);
    }
