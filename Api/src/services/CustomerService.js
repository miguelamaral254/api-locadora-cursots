"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomer = exports.updateCustomer = exports.createCustomer = exports.getCustomerById = exports.getAllCustomers = void 0;
const data_source_1 = __importDefault(require("../data-source"));
const customer_1 = require("../models/customer");
const getCustomerRepository = () => data_source_1.default.getRepository(customer_1.Customer);
const getAllCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    const customerRepository = getCustomerRepository();
    return yield customerRepository.find();
});
exports.getAllCustomers = getAllCustomers;
const getCustomerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const customerRepository = getCustomerRepository();
    return yield customerRepository.findOne({ where: { id } });
});
exports.getCustomerById = getCustomerById;
const createCustomer = (name, email, phone) => __awaiter(void 0, void 0, void 0, function* () {
    const customerRepository = getCustomerRepository();
    const customer = new customer_1.Customer();
    customer.name = name;
    customer.email = email;
    customer.phone = phone;
    return yield customerRepository.save(customer);
});
exports.createCustomer = createCustomer;
const updateCustomer = (id, name, email, phone) => __awaiter(void 0, void 0, void 0, function* () {
    const customerRepository = getCustomerRepository();
    const customer = yield customerRepository.findOne({ where: { id } });
    if (!customer)
        return null;
    customer.name = name;
    customer.email = email;
    customer.phone = phone;
    return yield customerRepository.save(customer);
});
exports.updateCustomer = updateCustomer;
const deleteCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const customerRepository = getCustomerRepository();
    return yield customerRepository.delete(id);
});
exports.deleteCustomer = deleteCustomer;
