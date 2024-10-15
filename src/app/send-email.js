import { fetch } from 'bun';

const apiKey = '4a1f30f452929347b12d5e766f8d7b03';
const apiSecret = 'f9d8aa026cb77dee52291f4e0a9ea03e';

const data = {
  Messages: [
    {
      From: { Email: 'sehasanelhaj@gmail.com', Name: 'Hasan El-haj' },
      To: { Email: 'recipient_email@example.com', Name: 'Recipient Name' },
      Subject: 'Contact Form Submission',
      TextPart: formData.message
    }
  ]
};

const url = `https://api.mailjet.com/v3/send.json?apiKey=${apiKey}&secret=${apiSecret}`;

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(json => console.log(json))   

  .catch(error => console.error(error));