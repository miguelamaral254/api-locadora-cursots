// src/services/CustomerService.ts
import { Repository, DeleteResult } from 'typeorm';
import AppDataSource from '../data-source';
import { Customer } from '../models/customer';

const getCustomerRepository = (): Repository<Customer> => AppDataSource.getRepository(Customer);

export const getAllCustomers = async () => {
  const customerRepository = getCustomerRepository();
  return await customerRepository.find();
};

export const getCustomerById = async (id: number) => {
  const customerRepository = getCustomerRepository();
  return await customerRepository.findOne({ where: { id } });
};

export const createCustomer = async (name: string, email: string, phone: string) => {
  const customerRepository = getCustomerRepository();
  const customer = new Customer();
  customer.name = name;
  customer.email = email;
  customer.phone = phone;
  return await customerRepository.save(customer);
};

export const updateCustomer = async (id: number, name: string, email: string, phone: string) => {
  const customerRepository = getCustomerRepository();
  const customer = await customerRepository.findOne({ where: { id } });
  if (!customer) return null;
  customer.name = name;
  customer.email = email;
  customer.phone = phone;
  return await customerRepository.save(customer);
};

export const deleteCustomer = async (id: number): Promise<DeleteResult> => {
  const customerRepository = getCustomerRepository();
  return await customerRepository.delete(id);
};
