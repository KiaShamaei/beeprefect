import { useState} from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import {Button, Row, Col, Toast} from 'react-bootstrap';
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import { getToken, onMessageListener } from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";

const App =()=> {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({title: '', body: ''});
  const [isTokenFound, setTokenFound] = useState(false);
getToken(setTokenFound);
onMessageListener().then(payload => {
  setShow(true);
  setNotification({title: payload.notification.title, body: payload.notification.body})
  console.log(payload);
}).catch(err => console.log('failed: ', err));

// inside the jsx being returned:
{isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
{!isTokenFound && <h1> Need notification permission ❗️ </h1>}
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
          position: 'absolute',
          top: 20,
          right: 20,
          minWidth: 200
        }}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">{notification.title}</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>{notification.body}</Toast.Body>
        </Toast>
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
     
              <NavLink
                exact
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
			  <NavLink
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
          </div>
        </div>
      </Router>
    );
  }


export default App;
