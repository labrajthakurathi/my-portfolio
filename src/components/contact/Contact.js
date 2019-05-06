import React from "react";
import Fade from "react-reveal/Fade";

export default function Contact() {
  return (
    <div>
      <div className="contact-sec text-light p-3" id="contact">
        <div className="text-center">
          {" "}
          <b>Contact</b>
        </div>

        <section>
          <form method="post">
            <input type="hidden" name="form-name" value="contact" />
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <Fade bottom>
                  <div className="my-4">
                    <label htmlFor="firsName">First Name</label>
                    <input
                      type="text"
                      name="firstName "
                      id="fName"
                      placeholder="*"
                      className="form-control border-top-0 border-left-0 border-right-0 "
                    />
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="my-4">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      name=" lastName "
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
                      type="Email"
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
                      type=""
                      name="phone"
                      id="phone"
                      placeholder="*"
                      className="form-control border-top-0 border-left-0 border-right-0"
                    />
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="my-4">
                    <label htmlFor="message">Your Messege</label>
                    <textarea
                      type="text-area"
                      rows="5"
                      cols="50"
                      placeholder="*"
                      className="form-control"
                      name="message"
                    />
                  </div>
                </Fade>
                <div className="d-flex justify-content-end">
                  <Fade bottom>
                    <button
                      className="btn btn-info btn-margin py-2 px-5 d-flex justify-content-end align-items-end"
                      href="#projects"
                      type="submit"
                    >
                      Submit
                    </button>
                  </Fade>
                </div>
              </div>
            </div>
          </form>
          {/* <form
          name="contact"
          action=""
          className="form-group "
          method="POST"
          data-netlify="true"
        >
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <Fade bottom>
                <div className="my-4">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    name="first_name "
                    id="fName"
                    placeholder="*"
                    className="form-control border-top-0 border-left-0 border-right-0"
                  />
                </div>
              </Fade>
              <Fade bottom>
                <div className="my-4">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    name="last_name "
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
                  <label htmlFor="messege">Your Messege</label>
                  <textarea
                    type="text-area"
                    rows="5"
                    cols="50"
                    placeholder="*"
                    className="form-control"
                    name="messege"
                  />
                </div>
              </Fade>

              <div className="d-flex justify-content-end">
                <Fade bottom>
                  <button
                    className="btn btn-info btn-margin py-2 px-5 d-flex justify-content-end align-items-end"
                    href="#projects"
                    type="submit"
                    value="Send"
                  >
                    Submit
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </form> */}
        </section>
      </div>
      <h1 className="text-center">Site Under Construction</h1>
    </div>
  );
}
