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

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    Plants.findById(id)
        .then((info) => {
            if (info) {
                Plants.update(changes, id)
                    .then(updatedInfo => {
                        res.json(updatedInfo);
                    });
            } else {
                res.status(404).json({ message: 'could not find plant with given id' });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: 'failed to update plant' });
        });
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    Plants.findById(id)
        .then((info) => {
            if (info) {
                Plants.update(changes, id)
                    .then(updatedInfo => {
                        res.json(updatedInfo);
                    });
            } else {
                res.status(404).json({ message: 'could not find plant with given id' });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: 'failed to update plant' });
        });
});



module.exports = router;