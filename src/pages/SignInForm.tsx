import React, { Component } from "react";
import { Link } from "react-router-dom";
// import {
//   FacebookLoginButton,
//   InstagramLoginButton
// } from "react-social-login-buttons";
interface IProps {
}

interface IState {
  email?: string;
  password?: string;
}
class SignInForm extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   let target = event.target;
  //   let value = target.type === "checkbox" ? target.checked : target.value;
  //   let name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // }
  handleChange : React.ChangeEventHandler<HTMLInputElement> = e=>{
    let target = e.currentTarget ; 
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name ;
    this.setState({
      [name] :  value
    })
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="formCenter">
        <form className="formFields" onSubmit={this.handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              autoComplete="false"
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              autoComplete="false"
              type="text"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
            <Link to="/" className="formFieldLink">
              Create an account
            </Link>
          </div>

          {/* <div className="socialMediaButtons">
            <div className="facebookButton">
              <FacebookLoginButton onClick={() => alert("Hello")} />
            </div>

            <div className="instagramButton">
              <InstagramLoginButton onClick={() => alert("Hello")} />
            </div>
          </div> */}
        </form>
      </div>
    );
  }
}

export default SignInForm;
