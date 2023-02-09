import React, { useEffect, useState } from "react";
import { fetchAPI, submitAPI } from "../Api/api";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [bookingdata, setBookingdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "",
    seating: "Standard",
  });
  const [times, setTimes] = useState([]);
  const navigate = useNavigate();

  const { firstName, lastName, date, time, guests, occasion, seating } =
    bookingdata;

  const submitHandler = (e) => {
    e.preventDefault();
    if (submitAPI(bookingdata)) {
      navigate("confirmation", {
        state: { firstName, lastName, date, time, guests, occasion, seating },
      });
    } else {
      alert("Failed: Please Recheck Your Information ");
    }
  };

  const getTimes = () => {
    const times = fetchAPI(new Date(bookingdata.date));
    setTimes(times);
  };

  useEffect(() => {
    getTimes();
  }, [bookingdata.date]);

  // console.log(bookingdata);

  return (
    <div className="reservation-container">
      <div className="reservation">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Find a table for any occasion</p>
        <div className="img">
          <img src={require("../images/restaurant.jpg")} alt="Reserve Table" />
          <img
            src={require("../images/restaurant-chef.jpg")}
            alt="Reserve Table"
          />
        </div>

        <form onSubmit={submitHandler}>
          <label htmlFor="firstName">First Name:</label>
          <sup>*</sup>
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Enter Your First Name"
            aria-label="Enter Your First Name"
            required
            value={bookingdata.firstName}
            onChange={(e) =>
              setBookingdata({ ...bookingdata, firstName: e.target.value })
            }
          />

          <label htmlFor="lastName">Last Name:</label>
          <sup>*</sup>
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Enter Your Last Name"
            aria-label="Enter Your Last Name"
            required
            value={bookingdata.lastName}
            onChange={(e) =>
              setBookingdata({ ...bookingdata, lastName: e.target.value })
            }
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={bookingdata.email}
            onChange={(e) =>
              setBookingdata({ ...bookingdata, email: e.target.value })
            }
          />

          <label htmlFor="phone">Phone Number:</label>
          <sup>*</sup>
          <input
            id="phone"
            type="number"
            name="phone"
            placeholder="Enter Your Phone Number"
            aria-label="Enter Your Phone Number"
            required
            value={bookingdata.phone}
            onChange={(e) =>
              setBookingdata({ ...bookingdata, phone: e.target.value })
            }
          />

          <label htmlFor="date">Date:</label>
          <sup>*</sup>
          <input
            type="date"
            name="date"
            id="date"
            aria-label="Pick a date"
            required
            value={bookingdata.date}
            onChange={(e) => {
              setBookingdata({ ...bookingdata, date: e.target.value });
            }}
          />
          <label htmlFor="time">Time:</label>
          <sup>*</sup>
          <select
            name="time"
            id="time"
            aria-label="choose time"
            required
            value={bookingdata.time}
            onChange={(e) =>
              setBookingdata({ ...bookingdata, time: e.target.value })
            }
          >
            <option hidden>00:00</option>
            {times.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
          <label htmlFor="guests">Number of Guests:</label>
          <sup>*</sup>
          <input
            type="number"
            name="guests"
            id="guests"
            min="1"
            max="10"
            aria-label="enter number of people"
            required
            value={bookingdata.guests}
            onChange={(e) =>
              setBookingdata({ ...bookingdata, guests: e.target.value })
            }
          />
          <label htmlFor="occasions">Occasions:</label>
          <select
            name="occasions"
            id="occasions"
            aria-label="Choose what occasion"
            value={bookingdata.occasion}
            onChange={(e) =>
              setBookingdata({ ...bookingdata, occasion: e.target.value })
            }
          >
            <option hidden>Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          <label className="seating">Seating Options:</label>
          <label className="radio" htmlFor="standard">
            Standard
          </label>
          <input
            type="radio"
            name="seating"
            id="standard"
            defaultChecked
            value="Standard"
            onChange={(e) =>
              setBookingdata({ ...bookingdata, seating: e.target.value })
            }
          />
          <label className="radio" htmlFor="outside">
            Outside
          </label>
          <input
            type="radio"
            name="seating"
            id="outside"
            value="Outside"
            onChange={(e) =>
              setBookingdata({ ...bookingdata, seating: e.target.value })
            }
          />
          <button
            type="submit"
            aria-label="On Click"
            disabled={
              !(
                bookingdata.firstName &&
                bookingdata.lastName &&
                bookingdata.phone &&
                bookingdata.date &&
                bookingdata.time &&
                bookingdata.guests
              )
            }
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
