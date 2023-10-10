const express = require('express');
const noblox = require('noblox.js');
const axios = require('axios'); // Make sure you have axios installed

module.exports = async (req, res) => {
  const { name = 'Ayoub' } = req.query;
  
  try {
    const cookie = '_|WARNING:-DO-NOT0BA'

    const currentUser = await noblox.setCookie(cookie)
    const XCSRF = await noblox.getGeneralToken()
    console.log(XCSRF)

    console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`);
    
    return res.json({
      message: `Hi, ${name}!`,
    });
  } catch (error) {
    console.error('An error occurred:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
