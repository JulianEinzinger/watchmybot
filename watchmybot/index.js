document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Standard-Formular-Verhalten

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    // Daten in JSON-Format packen
    const data = {
        name: name,
        email: email
    };

    // POST-Anfrage an den Server senden
    fetch('http://185.253.17.65:8443', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Datenformat JSON
        },
        body: JSON.stringify(data) // JSON-Daten als String
    })
        .then(response => {
            if (!response.ok) {
                alert('Fehler beim Senden der Daten!');
            }
        })
        .catch(error => {
            console.error('Fehler:', error);
            alert('Es gab ein Problem mit der Anfrage.');
        });
});
