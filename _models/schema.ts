import mongoose, { Document, Schema } from 'mongoose'

// Define schemas for the entities

// Vehicle schema
const vehicleSchema = new Schema({
	licensePlate: String,
	vehicleType: String,
	make: String,
	model: String,
	color: String,
})

// Customer schema
const customerSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	phone: String,
	vehicles: [Schema.Types.ObjectId], // Embed vehicles within the customer document
})


// Parking space schema
const parkingSpaceSchema = new Schema({
	spaceNumber: Number,
	level: Number,
	status: {
		type: String,
		enum: ['available', 'occupied', 'reserved'],
	},
	vehicle: vehicleSchema, // Embed vehicle details within the parking space document
	timestamp: { type: Date, default: Date.now },
})

// Transaction schema
const transactionSchema = new Schema({
	entryTimestamp: Date,
	exitTimestamp: Date,
	totalCost: Number,
	customer: customerSchema, // Embed customer details within the transaction document
	space: parkingSpaceSchema, // Embed parking space details within the transaction document
})

// Rate schema
const rateSchema = new Schema({
	vehicleType: String,
	ratePerHour: Number,
	ratePerDay: Number,
})

// Admin schema
const adminSchema = new Schema({
	username: String,
	password: String, // Password should be hashed and salted in production
	firstName: String,
	lastName: String,
})

// Log schema
const logSchema = new Schema({
	activityDescription: String,
	timestamp: Date,
	admin: adminSchema, // Embed admin details within the log document
})

// Define models for the entities
const Customer = mongoose.model('Customer', customerSchema)
const ParkingSpace = mongoose.model('ParkingSpace', parkingSpaceSchema)
const Transaction = mongoose.model('Transaction', transactionSchema)
const Rate = mongoose.model('Rate', rateSchema)
const Admin = mongoose.model('Admin', adminSchema)
const Log = mongoose.model('Log', logSchema)

export { Customer, ParkingSpace, Transaction, Rate, Admin, Log }
