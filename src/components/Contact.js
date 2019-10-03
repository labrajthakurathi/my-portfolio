import React from "react";
import Fade from "react-reveal/Fade";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {}
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    //messege
    if (!fields["messege"]) {
      formIsValid = false;
      errors["messege"] = "Cannot be empty";
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    if (this.handleValidation()) {
    } else {
      e.preventDefault();
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  render() {
    return (
      <div>
        <div className="contact-sec text-light p-4 pb-5" id="contact">
          <div className="text-center mb-4">
            {" "}
            <b>Contact</b>
          </div>

          <section>
            <form
              action="/thanks.html"
              method="POST"
              onSubmit={this.contactSubmit.bind(this)}
              data-netlify-recaptcha="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <Fade bottom>
                    {
                      <div className="my-4">
                        <label htmlFor="firstname">Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder={this.state.errors["name"]}
                          className="form-control borderless"
                          onChange={this.handleChange.bind(this, "name")}
                          value={this.state.fields["name"]}
                          ref="name"
                        />
                      </div>
                    }
                  </Fade>

                  <Fade bottom>
                    <div className="my-4">
                      <label htmlFor="email">Email</label>

                      <input
                        type="email"
                        name="email"
                        placeholder={this.state.errors["email"]}
                        className="form-control borderless"
                        onChange={this.handleChange.bind(this, "email")}
                        value={this.state.fields["email"]}
                        refs="email"
                      />
                    </div>
                  </Fade>
                  <Fade bottom>
                    <div className="my-4">
                      {" "}
                      <label htmlFor="phone">Phone("optional")</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control borderless"
                      />
                    </div>
                  </Fade>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <Fade bottom>
                    <div className="my-4">
                      <label htmlFor="message">Your Messege</label>
                      <textarea
                        type="text-area"
                        rows="6"
                        cols="50"
                        className="form-control"
                        name="message"
                        placeholder={this.state.errors["messege"]}
                        onChange={this.handleChange.bind(this, "messege")}
                        value={this.state.fields["messege"]}
                        ref="messege"
                      />
                    </div>
                  </Fade>

                  <div className="d-flex justify-content-end">
                    <Fade bottom>
                      <button
                        className="btn btn-info btn-margin py-2 mt-2 px-5 d-flex justify-content-end align-items-end"
                        type="submit"
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
      </div>
    );
  }
}
export default Contact;
