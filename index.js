import { methods } from "./Handlers/studentHandlers.js";
import { studenti } from "./Models/studentModel.js";
import express, { Router } from "express";
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use('/api', router);
app.get('/studenti', (req, res) => {
    res.json(studenti);
});


app.get('/studenti/:id', (req, res) => {
    const studentId = req.query.id;
    const filteredStudenti = studentId
        ? studenti.studenti.filter(studenti => studenti.jmbag === parseInt(studentId))
        : studenti.studenti;

    res.json(filteredStudenti);
});
app.listen(port, () => {
    console.log(`Servis radi... ${port}`)
})