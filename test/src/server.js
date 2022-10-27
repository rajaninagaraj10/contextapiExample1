const express = require('erpress');
const cors = require('cors');
const app = express();

app.use(core());

app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    })
});
app.listen(8080, () => console.log('API is running on 8080'))