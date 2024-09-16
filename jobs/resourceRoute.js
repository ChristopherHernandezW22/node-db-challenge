const express = require('express');

const Resources = require('./resourceModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.find().then(resources => {
        res
            .status(200)
            .json(resources);
    })
        .catch(error => {
            console.log(error);
            res
                .status(500)
                .json({ message: 'Error reaching Resource server.' });
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Resources.findById(id).then(resource => {
        res
            .status(200)
            .json(resource);
    }).catch(error => {
        console.log(error);
        res
            .status(500)
            .json({ message: 'Error reaching Resource server.' });
    });
});


router.post('/', (req, res) => {
    const newResource = req.body;
    console.log(newResource);
    Resources.add(newResource)
        .then(resource => {
            res
                .status(201)
                .json(resource);
        })
        .catch (error => {
            console.log(error);
            res
                .status(500)
                .json({ message: 'Error reaching Resource server.' });
        });
});



module.exports = router;