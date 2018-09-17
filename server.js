const express = require('express');
const app = express();

const PORT = '8080';

app.use(express.static('./public/'));

app.listen(process.env.PORT || PORT, () => {
	console.log('Your app is now listening on port 8080');
});