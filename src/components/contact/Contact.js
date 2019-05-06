import React from "react";
import Fade from "react-reveal/Fade";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["username"] = "";
      fields["emailid"] = "";
      fields["mobileno"] = "";
      fields["messege"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }
    if (!fields["messege"]) {
      formIsValid = false;
      errors["messege"] = "*Please enter your messege.";
    }

    if (typeof fields["messege"] !== "undefined") {
      if (!fields["messege"].match(/^[a-zA-Z ][0-9]*$/)) {
        formIsValid = false;
        errors["messege"] = "*please enter your messege";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    return (
      <div>
        <div className="contact-sec text-light p-4" id="contact">
          <div className="text-center">
            {" "}
            <b>Contact</b>
          </div>
          <section>
            <form
              method="post"
              name="userRegistrationForm"
              onSubmit={this.submituserRegistrationForm}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <Fade bottom>
                    <div className="my-4">
                      <label htmlFor="firstname">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder={this.state.errors.username}
                        className="form-control borderless"
                        value={this.state.fields.username}
                        onChange={this.handleChange}
                      />
                    </div>
                  </Fade>

                  <Fade bottom>
                    <div className="my-4">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder={this.state.errors.emailid}
                        className="form-control borderless"
                        value={this.state.fields.emailid}
                        onChange={this.handleChange}
                      />
                    </div>
                  </Fade>
                  <Fade bottom>
                    <div className="my-4">
                      {" "}
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder={this.state.errors.mobileno}
                        className="form-control borderless"
                        value={this.state.fields.mobileno}
                        onChange={this.handleChange}
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
                        placeholder={this.state.errors.messege}
                        className="form-control"
                        name="message"
                        value={this.state.fields.messege}
                        onChange={this.handleChange}
                      />
                    </div>
                  </Fade>

                  <div className="d-flex justify-content-end">
                    <Fade bottom>
                      <button
                        className="btn btn-info btn-margin py-2 mt-2 px-5 d-flex justify-content-end align-items-end"
                        type="submit"
                        value="Register"
                      >
                        Submit
                      </button>
                    </Fade>
                  </div>
                </div>
              </div>
            </form>
            {/* // <div id="main-registration-container">
      //   <div id="register">
      //     <h3>Registration page</h3>
      //     <form 
      //       method="post"
      //       name="userRegistrationForm"
      //       onSubmit={this.submituserRegistrationForm}
      //     >
      //       <label>Name</label>
      //       <input
      //         type="text"
      //         name="username"
      //         value={this.state.fields.username}
      //         onChange={this.handleChange}
      //       />
      //       <div className="errorMsg">{this.state.errors.username}</div>
      //       <label>Email ID:</label>
      //       <input
      //         type="text"
      //         name="emailid"
      //         value={this.state.fields.emailid}
      //         onChange={this.handleChange}
      //       />
      //       <div className="errorMsg">{this.state.errors.emailid}</div>
      //       <label>Mobile No:</label>
      //       <input
      //         type="text"
      //         name="mobileno"
      //         value={this.state.fields.mobileno}
      //         onChange={this.handleChange}
      //       />
      //       <div className="errorMsg">{this.state.errors.mobileno}</div>
      //       <label>Password</label>
      //       <input
      //         type="password"
      //         name="password"
      //         value={this.state.fields.password}
      //         onChange={this.handleChange}
      //       />
      //       <div className="errorMsg">{this.state.errors.password}</div>
      //       <input type="submit" className="button" value="Register" />
      //     </form>
      //   </div>
      // </div>
    );
  }
}

export default Contact;

// import React from "react";
// import Fade from "react-reveal/Fade";

// export default function Contact() {
//   return (
//     <div>
//       <div className="contact-sec text-light p-4" id="contact">
//         <div className="text-center">
//           {" "}
//           <b>Contact</b>
//         </div>

//         <section>
//           <form method="post">
//             <input type="hidden" name="form-name" value="contact" />
//             <div className="row">
//               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
//                 <Fade bottom>
//                   <div className="my-4">
//                     <label htmlFor="firstname">Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="*"
//                       className="form-control borderless"
//                     />
//                   </div>
//                 </Fade>

//                 <Fade bottom>
//                   <div className="my-4">
//                     <label htmlFor="email">Email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="*"
//                       className="form-control borderless"
//                     />
//                   </div>
//                 </Fade>
//                 <Fade bottom>
//                   <div className="my-4">
//                     {" "}
//                     <label htmlFor="phone">Phone</label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Optional"
//                       className="form-control borderless"
//                     />
//                   </div>
//                 </Fade>
//               </div>
//               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
//                 <Fade bottom>
//                   <div className="my-4">
//                     <label htmlFor="message">Your Messege</label>
//                     <textarea
//                       type="text-area"
//                       rows="6"
//                       cols="50"
//                       placeholder="*"
//                       className="form-control"
//                       name="message"
//                     />
//                   </div>
//                 </Fade>

//                 <div className="d-flex justify-content-end">
//                   <Fade bottom>
//                     <button
//                       className="btn btn-info btn-margin py-2 mt-2 px-5 d-flex justify-content-end align-items-end"
//                       type="submit"
//                     >
//                       Submit
//                     </button>
//                   </Fade>
//                 </div>
//               </div>
//             </div>
//           </form>

//           {/* <form method="post">
//             <input type="hidden" name="form-name" value="contact" />
//             <div className="row">
//               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
//                 <Fade bottom>
//                   <div className="my-4">
//                     <label htmlFor="firstname">First Name</label>
//                     <input
//                       type="text"
//                       name="firstname "
//                       id="firstname"
//                       placeholder="*"
//                       className="form-control border-top-0 border-left-0 border-right-0 "
//                     />
//                   </div>
//                 </Fade>
//                 <Fade bottom>
//                   <div className="my-4">
//                     <label htmlFor="lastname">Last Name</label>
//                     <input
//                       type="text"
//                       name=" lastname "
//                       id="lastname"
//                       placeholder="*"
//                       className="form-control border-top-0 border-left-0 border-right-0"
//                     />
//                   </div>
//                 </Fade>
//                 <Fade bottom>
//                   <div className="my-4">
//                     <label htmlFor="email">Email</label>
//                     <input
//                       type="email"
//                       name="email "
//                       id="email"
//                       placeholder="*"
//                       className="form-control border-top-0 border-left-0 border-right-0"
//                     />
//                   </div>
//                 </Fade>
//               </div>
//               <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
//                 <Fade bottom>
//                   <div className="my-4">
//                     {" "}
//                     <label htmlFor="phone">Phone</label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       id="phone"
//                       placeholder="*"
//                       className="form-control border-top-0 border-left-0 border-right-0"
//                     />
//                   </div>
//                 </Fade>
//                 <Fade bottom>
//                   <div className="my-4">
//                     <label htmlFor="message">Your Messege</label>
//                     <textarea
//                       type="text-area"
//                       rows="5"
//                       cols="50"
//                       placeholder="*"
//                       className="form-control"
//                       name="message"
//                     />
//                   </div>
//                 </Fade>
//                 <div className="d-flex justify-content-end">
//                   <Fade bottom>
//                     <button
//                       className="btn btn-info btn-margin py-2 px-5 d-flex justify-content-end align-items-end"
//                       href="#projects"
//                       type="submit"
//                     >
//                       Submit
//                     </button>
//                   </Fade>
//                 </div>
//               </div>
//             </div>
//           </form> */}
            //{" "}
            {/* <form
//           name="contact"
//           action=""
//           className="form-group "
//           method="POST"
//           data-netlify="true"
//         >
//           <div className="row">
//             <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
//               <Fade bottom>
//                 <div className="my-4">
//                   <label htmlFor="first_name">First Name</label>
//                   <input
//                     type="text"
//                     name="first_name "
//                     id="fName"
//                     placeholder="*"
//                     className="form-control border-top-0 border-left-0 border-right-0"
//                   />
//                 </div>
//               </Fade>
//               <Fade bottom>
//                 <div className="my-4">
//                   <label htmlFor="last_name">Last Name</label>
//                   <input
//                     type="text"
//                     name="last_name "
//                     id="lName"
//                     placeholder="*"
//                     className="form-control border-top-0 border-left-0 border-right-0"
//                   />
//                 </div>
//               </Fade>
//               <Fade bottom>
//                 <div className="my-4">
//                   <label htmlFor="email">Email</label>
//                   <input
//                     type="text"
//                     name="email "
//                     id="email"
//                     placeholder="*"
//                     className="form-control border-top-0 border-left-0 border-right-0"
//                   />
//                 </div>
//               </Fade>
//             </div>
//             <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
//               <Fade bottom>
//                 <div className="my-4">
//                   {" "}
//                   <label htmlFor="phone">Phone</label>
//                   <input
//                     type="text"
//                     name="phone"
//                     id="phone"
//                     placeholder="*"
//                     className="form-control border-top-0 border-left-0 border-right-0"
//                   />
//                 </div>
//               </Fade>
//               <Fade bottom>
//                 <div className="my-4">
//                   <label htmlFor="messege">Your Messege</label>
//                   <textarea
//                     type="text-area"
//                     rows="5"
//                     cols="50"
//                     placeholder="*"
//                     className="form-control"
//                     name="messege"
//                   />
//                 </div>
//               </Fade>

//               <div className="d-flex justify-content-end">
//                 <Fade bottom>
//                   <button
//                     className="btn btn-info btn-margin py-2 px-5 d-flex justify-content-end align-items-end"
//                     href="#projects"
//                     type="submit"
//                     value="Send"
//                   >
//                     Submit
//                   </button>
//                 </Fade>
//               </div>
//             </div>
//           </div>
//         </form> */}
            //{" "}
          </section>
          //{" "}
        </div>
        // <h1 className="text-center">Site Under Construction</h1>
        //{" "}
      </div>
    );
  }
}
export default Contact;
