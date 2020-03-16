import React from "react";

export default function Resume() {
  return (
    <div className="nmodal">
      <label for="o"></label>
      <input className="checker" type="checkbox" id="o" hidden />
      <div className="modal">
        <div className="modal-body">
          <div className="modal-content">
            Oops just under construction, visit back soon !{" "}
          </div>
          <div className="modal-footer">
            <a
              href="/"
              className="btn btn-info py-2 my-3 px-5 btn-margin"
              for="o"
            >
              <i className="fas fa-arrow-left"></i>
              Okay
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
