const express = require('express');
const Plants = require('./plant-model.js');
const router = express.Router();

router.post('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;

    Plants.insert({...data, user_id: id})
    .then(plant => {
        res.status(201).json({ plant, message: "The plant was successfully added."});
    })

    .catch((err) => {
        res.status(500).json({
            message: 'There was an error adding the post', error: err
        })
    });
});

router.get('/', restricted, (req, res) => {
    Plants.get(req.query)
    .then((plants) => {
        res.status(200).json(plants)
    })
    .catch((err) => {
        res.status(500).json({ error: 'The plants could not be retrieved.', err})
    })
});

router.get('/:id', (req, res) => {
    Plants.getById(req.params.id)
    .then((plant) => {
        plant
        ? res.status(200).json(plant)
        : res.status(404).json({
            message: 'Plant with that ID do not exist.'
        })
    })
    .catch((err) => {
        res.status(500).json({ message: "There was an error retreiving the plant.", error: err})
    })
});

router.delete('/:id',  (req, res) => {
    Plants.remove(parseInt(req.params.id))
      .then((post) => {
        post
          ? res.status(200).json({ post, message: "The plant was deleted." })
          : res.status(404).json({ message: "The plant does not exist." })
      })
      .catch((err) => {
        res.status(500).json({ message: "There was an error deleting the plant.", error: err })
      })
  });

  router.put('/:id', (req, res) => {
    Plants.update(req.params.id, req.body)
    .then((plant) => {
      post
        ? res.status(200).json({ plant, message: "The plant was updated." })
        : res.status(404).json({ message: "The plant does not exist." })
    })
    .catch((err) => {
      res.status(500).json({
        message: "There was an error with the server",
        error: err
      })
    })
  });