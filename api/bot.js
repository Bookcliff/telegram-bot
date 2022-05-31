const fetch = require('node-fetch');

module.exports = async (request, response) => {
  const message = `Family Meeting
    Sundays · 2:00 – 3:00pm
    Google Meet joining info
    Video call link: https://meet.google.com/fks-ssrt-fno`;
  const chatId = -617377330;

  const result = await fetch(`https://api.telegram.org/bot${process.env.TOKEN}/sendMessage?chat_id=${chatId}&text=${message}`);
  
    response.status(200).json({
      message
    });
  }