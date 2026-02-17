const express = require('express')

const { getAllBooking, createBooking, findBookingById, deleteBooking, createBookingFronte } = require('../controllers/booking.controller');
const { restricGuard } = require('../guard/restric.guard');
const {authGuard} = require('../guard/authGuard.guard')
const BookingRouter = express.Router();

BookingRouter.route("/public")
            .post(createBookingFronte)

BookingRouter.route("/")
    .get(authGuard, restricGuard("admin"), getAllBooking)
    .post(authGuard, restricGuard("admin"), createBooking)

BookingRouter.route('/:id')
    .get(authGuard, restricGuard("admin"), findBookingById)
    .delete(authGuard , restricGuard("admin" ), deleteBooking)
module.exports = BookingRouter