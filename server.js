import express from 'express';
import config from './config';

const app = express();

app.use(express.static('client'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {who: 'Sam'});
});

app.listen(config.port, function () {
    console.log(`Listening on port ${config.port}`);
});