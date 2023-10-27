const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');

    let count = 0;

    const interval = setInterval(() => {
        res.write(`data: ${count}\n\n`);
        count++;

        if (count === Math.pow(5, 5)) {
            clearInterval(interval);
            res.end();
        }
    }, 10);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
