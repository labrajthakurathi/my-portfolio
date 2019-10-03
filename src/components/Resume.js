import React from "react";
import { Button } from "react-bootstrap";

export default function Resume() {
  return (
    <div className="nmodal">
      <label for="o"></label>
      <input class="checker" type="checkbox" id="o" hidden />
      <div class="modal">
        <div class="modal-body">
          <div class="modal-content">
            Oops just under construction, visit back soon !{" "}
          </div>
          <div class="modal-footer">
            <a
              href="/"
              className="btn btn-info py-2 my-3 px-5 btn-margin"
              for="o"
            >
              <i class="fas fa-arrow-left"></i>
              Okay
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
