import React from 'react';
import './MpesaForm.css'; // Optional for additional styling

function MpesaForm() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="card mt-5 px-3 py-4">
        <div className="d-flex flex-row justify-content-around">
          <div className="mpesa">
            <img
              src="/home/deric2/phase-5/Epic-event-frontend/client/src/assets/1200px-M-PESA_LOGO-01.svg.png"
              alt="Mpesa Logo"
              height="75"
            />
          </div>
        </div>
        <div className="media mt-4 pl-2">
          <div className="media-body">
            <h6 className="mt-1">Enter Amount & Number</h6>
          </div>
        </div>
        <div className="media mt-3 pl-2">
          <form
            className="row g-3"
            action="http://localhost/stk_initiate.php"  // Update with the actual path to your PHP script
            method="POST"
          >
            <div className="col-12">
              <label htmlFor="inputAmount" className="form-label">
                Amount
              </label>
              <input
                type="text"
                className="form-control"
                name="amount"
                placeholder="Enter Amount"
                id="inputAmount"
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputPhone" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                placeholder="Enter Phone Number"
                id="inputPhone"
                required
              />
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-success"
                name="submit"
                value="submit"
              >
                PAY
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MpesaForm;
