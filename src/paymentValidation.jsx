import React, { useState } from "react";

const validators = {
  number: (v) => /^\d{16}$/.test(v),
  name: (v) => /^[A-Za-z ]+$/.test(v) && v.trim().length > 0,
  month: (v) => /^(0[1-9]|1[0-2])$/.test(v),
  year: (v) => {
    if (!/^\d{4}$/.test(v)) return false;
    const y = Number(v);
    const current = new Date().getFullYear();
    return y >= current && y <= current + 3;
  },
  cvv: (v) => /^\d{3}$/.test(v),
};

const PaymentValidation = () => {
  const [values, setValues] = useState({
    number: "",
    name: "",
    month: "",
    year: "",
    cvv: "",
  });
  const [touched, setTouched] = useState({
    number: false,
    name: false,
    month: false,
    year: false,
    cvv: false,
  });

  const handleChange = (key) => (e) => {
    const value = e.target.value;
    setValues((prev) => ({ ...prev, [key]: value }));
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const isValid = (key) => validators[key](values[key]);
  const showError = (key) => touched[key] && !isValid(key);

  const canSubmit = Object.keys(values).every(
    (key) => touched[key] && isValid(key)
  );

  return (
    <div className="mt-30 layout-column justify-content-center align-items-center">
      <div className="card outlined" style={{ width: "650px" }}>
        <div data-testid="debit-card">
          <h3 style={{ textAlign: "center" }}>Card Details</h3>
          <br />
          <div className="debit-card-body">
            <p className="debit-card-bank">Bank Name</p>
            <p className="debit-card-no">XXXXXXXXXXXXXXXX</p>
            <br />
            <div
              style={{ height: "45px", backgroundColor: "black" }}
              className="debit-card-stripe"
            ></div>
            <p>
              <span className="debit-card-holder-name">HOLDER NAME</span>
              <span className="debit-card-date">MM/YYYY</span>
              <span className="debit-card-cvv">CVV</span>
            </p>
          </div>
        </div>
      </div>
      <section>
        <div className="pa-50">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="layout-column mb-15">
              <input
                placeholder="Card Number"
                data-testid="numberInput"
                value={values.number}
                onChange={handleChange("number")}
              />
              {showError("number") && (
                <p className="invalid-text" data-testid="numberInputError">
                  Invalid Card Number
                </p>
              )}
            </div>
            <div className="layout-column mb-15">
              <input
                placeholder="Name On Card"
                data-testid="nameInput"
                value={values.name}
                onChange={handleChange("name")}
              />
              {showError("name") && (
                <p className="invalid-text" data-testid="nameInputError">
                  Invalid Card Name
                </p>
              )}
            </div>
            <div className="flex justify-content-around align-items-center">
              <div className="layout-column mb-30">
                <input
                  placeholder="Expiry Month"
                  data-testid="monthInput"
                  value={values.month}
                  onChange={handleChange("month")}
                />
                {showError("month") && (
                  <p className="invalid-text" data-testid="monthInputError">
                    Invalid Month
                  </p>
                )}
              </div>
              <div className="layout-column mb-30">
                <input
                  placeholder="Expiry Year"
                  data-testid="yearInput"
                  value={values.year}
                  onChange={handleChange("year")}
                />
                {showError("year") && (
                  <p className="invalid-text" data-testid="yearInputError">
                    Invalid Year
                  </p>
                )}
              </div>
              <div className="layout-column mb-30">
                <input
                  placeholder="CVV"
                  data-testid="cvvInput"
                  value={values.cvv}
                  onChange={handleChange("cvv")}
                />
                {showError("cvv") && (
                  <p className="invalid-text" data-testid="cvvInputError">
                    Invalid CVV
                  </p>
                )}
              </div>
            </div>
            <div className="layout-column mb-30">
              <button
                type="submit"
                className="mx-0"
                data-testid="submit-button"
                disabled={!canSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PaymentValidation;