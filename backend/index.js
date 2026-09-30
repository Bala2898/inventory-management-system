const app = require('./server.js');
const PORT = process.env.PORT || 2000;

//connectDB().then(() => {
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//});
app.get('/', (req, res) => {
    res.send(`Server is running on port ${PORT}`);
});