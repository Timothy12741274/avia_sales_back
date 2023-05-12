const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/test', async (req, res, next)=>{
        return res.json({message:"test passed"})
    }
)

app.listen(5000, () => {
    console.log('Server started on port 5000');
});


