const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3005;

app.use(bodyParser.json());
app.use(cors());

// Routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/v1/products', productRoutes);

app.listen(port, () => {
    console.log(`server listen on ${port}`);
});
