const app = require("./app");
const port = 8000;
app.listen(port, () => {
    console.log(`app is listening at port ${port} by Process ${process.pid}`);
});