module.exports = (req, res) => {
  const { name = 'Ayoub' } = req.query;
  return res.json({
    message: `Hi, ${name}!`,
  });
};
