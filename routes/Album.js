const express = require('express')
const requestify = require('requestify')

const router = express.Router();

router.get('/:id', async (req, res) => {
  const results = await requestify.get(
    `https://jsonplaceholder.typicode.com/albums/${req.params.id}/photos`
    );
    if (!results) {
        res.status(404).json({
            message: 'Album was not found'
        })
    }
    let resultJson = eval(results.body)
    let album = resultJson.map(item => {
        return {
            title: item.title,
            thumbnailUrl: item.thumbnailUrl
        }
    })
    res.status(200).send(album)
});

module.exports = router
