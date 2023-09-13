import express from "express";

const app = express();

app.get("/", (req, res) => {
    console.log(" Teste");
    res.status(200).send("Teste");
});

app.listen(8080, () => {
    console.log("App is on 8080")
})