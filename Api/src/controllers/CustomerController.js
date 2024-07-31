"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomer = exports.updateCustomer = exports.createCustomer = exports.getCustomerById = exports.getAllCustomers = void 0;
const customerService = __importStar(require("../services/CustomerService"));
const getAllCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customers = yield customerService.getAllCustomers();
        res.json(customers);
    }
    catch (error) {
        res.status(500).send('An error occurred');
    }
});
exports.getAllCustomers = getAllCustomers;
const getCustomerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customer = yield customerService.getCustomerById(Number(req.params.id));
        if (customer) {
            res.json(customer);
        }
        else {
            res.status(404).send('Customer not found');
        }
    }
    catch (error) {
        res.status(500).send('An error occurred');
    }
});
exports.getCustomerById = getCustomerById;
const createCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            return res.status(400).send('All fields are required');
        }
        const newCustomer = yield customerService.createCustomer(name, email, phone);
        res.status(201).json(newCustomer);
    }
    catch (error) {
        res.status(500).send('An error occurred');
    }
});
exports.createCustomer = createCustomer;
const updateCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            return res.status(400).send('All fields are required');
        }
        const updatedCustomer = yield customerService.updateCustomer(Number(req.params.id), name, email, phone);
        if (updatedCustomer) {
            res.json(updatedCustomer);
        }
        else {
            res.status(404).send('Customer not found');
        }
    }
    catch (error) {
        res.status(500).send('An error occurred');
    }
});
exports.updateCustomer = updateCustomer;
const deleteCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customerService.deleteCustomer(Number(req.params.id));
        if (result.affected && result.affected > 0) {
            res.status(204).send();
        }
        else {
            res.status(404).send('Customer not found');
        }
    }
    catch (error) {
        res.status(500).send('An error occurred');
    }
});
exports.deleteCustomer = deleteCustomer;
