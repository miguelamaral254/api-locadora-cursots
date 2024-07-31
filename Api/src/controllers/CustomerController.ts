// src/controllers/CustomerController.ts
import { Request, Response } from 'express';
import * as customerService from '../services/CustomerService';

export const getAllCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await customerService.getAllCustomers();
    res.json(customers);
  } catch (error) {
    res.status(500).send('An error occurred');
  }
};

export const getCustomerById = async (req: Request, res: Response) => {
  try {
    const customer = await customerService.getCustomerById(Number(req.params.id));
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).send('Customer not found');
    }
  } catch (error) {
    res.status(500).send('An error occurred');
  }
};

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).send('All fields are required');
    }
    const newCustomer = await customerService.createCustomer(name, email, phone);
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).send('An error occurred');
  }
};

export const updateCustomer = async (req: Request, res: Response) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).send('All fields are required');
    }
    const updatedCustomer = await customerService.updateCustomer(Number(req.params.id), name, email, phone);
    if (updatedCustomer) {
      res.json(updatedCustomer);
    } else {
      res.status(404).send('Customer not found');
    }
  } catch (error) {
    res.status(500).send('An error occurred');
  }
};

export const deleteCustomer = async (req: Request, res: Response) => {
  try {
    const result = await customerService.deleteCustomer(Number(req.params.id));
    if (result.affected && result.affected > 0) { 
      res.status(204).send();
    } else {
      res.status(404).send('Customer not found');
    }
  } catch (error) {
    res.status(500).send('An error occurred');
  }
};
