import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [details, setdetails] = useState({
    name: "",
    email: "",
    number: "",
    country: "",
    address: "",
    sleepHrs: "",
    dateAndTime: "",
  });

  const { name, email, number, country, address, sleepHrs, dateAndTime } =
    details;

  const submitDetailsHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/himani/google_sheets/oYrGCfieXAnTIhJL?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify([
            [name, email, number, country, address, sleepHrs, dateAndTime],
          ]),
        }
      );
      const res = await response.json();
      const msg = res.message;
      alert(msg);
      setdetails({});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="container">
        <h3 style={{ fontFamily: "math" }}>....Personal Details....</h3>
        <form
          action="/action_page.php"
          onSubmit={(e) => submitDetailsHandler(e)}
        >
          <div className="row">
            <div className="col-25">
              <label htmlFor="name">First Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                onChange={(event) =>
                  setdetails({
                    ...details,
                    name: event.target.value,
                  })
                }
                id="name"
                name="name"
                placeholder="Your name.."
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your Email Address..."
                onChange={(event) =>
                  setdetails({
                    ...details,
                    email: event.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="number">Phone No</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="number"
                name="phoneNo"
                placeholder="Your Phone Number..."
                onChange={(event) =>
                  setdetails({
                    ...details,
                    number: event.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="country">Country</label>
            </div>
            <div className="col-75">
              <select
                value={country}
                id="country"
                name="country"
                onChange={(event) =>
                  setdetails({
                    ...details,
                    country: event.target.value,
                  })
                }
              >
                <option value="canada">Canada</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="address">Address</label>
            </div>
            <div className="col-75">
              <textarea
                id="address"
                name="address"
                placeholder="Write Your Address.."
                style={{ height: "80px" }}
                onChange={(event) =>
                  setdetails({
                    ...details,
                    address: event.target.value,
                  })
                }
              ></textarea>
            </div>
          </div>

          <h3 style={{ fontFamily: "math" }}>...Details...</h3>

          <div className="row">
            <div className="col-25">
              <label htmlFor="scale">Sleeping Hours (between 0 and 8):</label>
            </div>
            <div className="col-75">
              <input
                type="range"
                value={sleepHrs}
                id="scale"
                name="vol"
                min="0"
                max="8"
                style={{ margin: "10px 0px" }}
                onChange={(event) =>
                  setdetails({
                    ...details,
                    sleepHrs: event.target.value,
                  })
                }
              />
              {details.sleepHrs}
            </div>
          </div>
          <h3 style={{ fontFamily: "math" }}>...Appointment...</h3>

          <div className="row">
            <div className="col-25">
              <label htmlFor="dateAndTime">Fix Appointment Date & Time</label>
            </div>
            <div className="col-75">
              <input
                type="datetime-local"
                id="dateAndTime"
                name="date"
                placeholder="Appointment..."
                onChange={(event) =>
                  setdetails({
                    ...details,
                    dateAndTime: event.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
