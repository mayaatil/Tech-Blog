const router = require('express').Router();
const { Response } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newResponse = await Response.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newResponse);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const responseData = await Response.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(responseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
