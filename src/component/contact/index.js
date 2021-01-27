import React from "react";
import Button from "../../widgets/button";
import Heading from "../../widgets/heading";
import Para from "../../widgets/paragraph";
import {
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSnapchatGhost,
  FaWhatsapp,
} from "react-icons/fa";
import "./contact.css";

const initialState = {
  name: "",
  email: "",
  nameError: "",
  emailError: "",
};

class Contact extends React.Component {
  state = initialState;

  handleChange = (e) => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value,

      //   name: e.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";

    if (!this.state.name) {
      nameError = "Name cannit be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid Email";
    }
    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }
    return true;
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
    }
    this.setState(initialState);
  };
  render() {
    return (
      <div className="container">
        <div id="contact-form">
          <div className="row">
            <div className="column">
              <Heading>We'd love to hear from you</Heading>
              <div className="ct-form">
                <form onSubmit={this.handleFormSubmit}>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <div style={{ color: "red", fontSize: 12 }}>
                    {this.state.nameError}
                  </div>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                  <div style={{ color: "red", fontSize: 12 }}>
                    {this.state.emailError}
                  </div>
                  <label>Message</label>
                  <textarea name="message" placeholder="Message" />
                  <div className="bt-style">
                    <Button type="submit" children="Submit" />
                  </div>
                </form>
              </div>
              <div className="footer">
                <p>Get updated on</p>
                <p className="icon-name">
                  <FaFacebookF />
                  Facebook
                </p>
                <p className="icon-name">
                  {" "}
                  <FaSnapchatGhost />
                  Snapchat
                </p>
                <p className="icon-name">
                  {" "}
                  <FaWhatsapp />
                  Whatapp
                </p>
              </div>
            </div>
            <div className="column">
              <Heading>Reach out to us directly</Heading>
              <div classname="about">
                <FaMapMarkerAlt />{" "}
                <Para>
                  {" "}
                  Buckedheadland <br />
                  Los Angeles <br /> California
                </Para>
                <FaPhoneAlt />
                <Para>
                  01-499421 <br /> 9803557863
                </Para>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
