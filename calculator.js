const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "//index.html");
})

app.post("/", (req, res) => {

    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let add = +num1 + +num2;
    let sub = +num1 - +num2;
    let mul = +num1 * +num2;
    let div = +num1 / +num2;

    req.body.hasOwnProperty('add') ? res.send(`${num1} + ${num2} = ${add}.`) : req.body.hasOwnProperty('sub') ? res.send(`${num1} - ${num2} = ${sub}.`) : req.body.hasOwnProperty('mul') ? res.send(`${num1} * ${num2} = ${mul}.`) : res.send(`${num1} / ${num2} = ${div}.`);

})

app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
})