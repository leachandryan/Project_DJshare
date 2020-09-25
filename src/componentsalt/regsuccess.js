import React from "react";

class regsuccess extends React.Component {
  render() {
    return (
      <div className="modal" tabIndex={-1} role="dialog" id="successMsg">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center">
                Registration successful!
              </h5>
            </div>
            <div className="modal-body">
              <p>Please try to login with your credentials now.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default regsuccess;
