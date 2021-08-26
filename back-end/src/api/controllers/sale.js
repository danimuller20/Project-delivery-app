const express = require('express');
const rescue = require('express-rescue');
const Joi = require('joi');
const Sale = require('../services/sale');
const validate = require('../middlewares/validate');
// const validateToken = require('../middlewares/validateToken');

const route = express.Router();

const saleValidator = Joi.object({
  userId: Joi.number().required(),
  sellerId: Joi.number().required(),
  totalPrice: Joi.number().required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.string().required(),
  saleDate: Joi.date().required(),
  status: Joi.string().required(),
  productId: Joi.number().required(),
  quantity: Joi.number().required(),
});

route.post('/', [
  validate(saleValidator),
  rescue(async (req, res) => {
    const sale = await Sale.create(req.body);
    res.status(201).json(sale);
})]);

route.get('/', [
  rescue(async (_req, res) => {
    const salesList = await Sale.findAll();
    res.status(200).json(salesList);
})]);

// route.use(validateToken);

route.get('/:id', [
  rescue(async (req, res) => {
    const sale = await Sale.findOne(req.params);
    res.status(200).json(sale);
})]);

route.put('/:id', [
  validate(saleValidator),
  rescue(async (req, res) => {
    const sale = await Sale.update(req.body, req.params);
    res.status(200).json(sale);
})]);

route.delete('/:id', [
  rescue(async (req, res) => {
    await Sale.destroy(req.params);
    res.status(204).json();
})]);

module.exports = route;