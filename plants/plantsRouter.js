const router = require('express').Router();
const Plants = require('../plants/plantModel.js');

router.get('/', (req, res) => {
    Plants.getplants()
        .then((list) => {
            res.status(200).json(list);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    const plantinfo = req.body;
    Plants.add(plantinfo)
        .then((plant) => {
            res.status(201).json(plant);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});



module.exports = router;