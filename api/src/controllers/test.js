const express = require("express");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function test(req, res, next) {
  res.json({ message: "Anda joya " });
}

module.exports = {
  test,
};
