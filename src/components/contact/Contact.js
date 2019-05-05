import React from "react";
import Fade from "react-reveal/Fade";

export default function Contact() {
  return (
    <div className="contact-sec text-light p-3" id="contact">
      <div className="text-center">
        {" "}
        <b>Contact</b>
      </div>

      <section>
        <form action="" className="form-group ">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <Fade bottom>
                <div className="my-4">
                  <label htmlFor="fName">First Name</label>
                  <input
                    type="text"
                    name="fName "
                    id="fName"
                    placeholder="*"
                    className="form-control border-top-0 border-left-0 border-right-0"
                  />
                </div>
              </Fade>
              <Fade bottom>
                <div className="my-4">
                  <label htmlFor="lName">Last Name</label>
                  <input
                    type="text"
                    name="lName "
                    id="lName"
                    placeholder="*"
                    className="form-control border-top-0 border-left-0 border-right-0"
                  />
                </div>
              </Fade>
              <Fade bottom>
                <div className="my-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email "
                    id="email"
                    placeholder="*"
                    className="form-control border-top-0 border-left-0 border-right-0"
                  />
                </div>
              </Fade>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <Fade bottom>
                <div className="my-4">
                  {" "}
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="*"
                    className="form-control border-top-0 border-left-0 border-right-0"
                  />
                </div>
              </Fade>
              <Fade bottom>
                <div className="my-4">
                  <label htmlFor="text">Your Messege</label>
                  <textarea
                    type="text-area"
                    rows="5"
                    cols="50"
                    placeholder="*"
                    className="form-control"
                  />
                </div>
              </Fade>

              <div className="d-flex justify-content-end">
                <Fade bottom>
                  <button
                    className="btn btn-info btn-margin py-2 px-5 d-flex justify-content-end align-items-end"
                    href="#projects"
                  >
                    Submit
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
