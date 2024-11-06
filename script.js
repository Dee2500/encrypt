// Get references to DOM elements
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');
const keyInput = document.getElementById('keyInput');
const messageInput = document.getElementById('messageInput');
const resultText = document.getElementById('resultText');

// Replace these URLs with your Vercel backend URL
const ENCRYPT_API_URL = 'https://your-flask-app-name.vercel.app/api/encrypt';
const DECRYPT_API_URL = 'https://your-flask-app-name.vercel.app/api/decrypt';

// Encrypt Button Event Listener
encryptButton.addEventListener('click', function() {
    const key = keyInput.value;
    const message = messageInput.value;

    if (key && message) {
        fetch(ENCRYPT_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ key: key, text: message })
        })
        .then(response => response.json())
        .then(data => {
            resultText.innerText = `Encrypted Message: ${data.encrypted}`;
        })
        .catch(err => {
            resultText.innerText = "Error encrypting message.";
        });
    } else {
        resultText.innerText = "Please provide both a key and a message.";
    }
});

// Decrypt Button Event Listener
decryptButton.addEventListener('click', function() {
    const key = keyInput.value;
    const message = messageInput.value;

    if (key && message) {
        fetch(DECRYPT_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ key: key, text: message })
        })
        .then(response => response.json())
        .then(data => {
            resultText.innerText = `Decrypted Message: ${data.decrypted}`;
        })
        .catch(err => {
            resultText.innerText = "Error decrypting message.";
        });
    } else {
        resultText.innerText = "Please provide both a key and a message.";
    }
});
