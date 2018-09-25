import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../store";
import "./App.css";
import {
  updateWindowState,
  detectMobile
} from "../store/actions/windowActions";
import CuongFlix from "./CuongFlix";
import ScrollToTop from "../components/ScrollToTop";

class App extends Component {
  componentDidMount() {
    this.updateWindowState();
    this.props.detectMobile();
    window.addEventListener("resize", this.updateWindowState);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowState);
  }

  updateWindowState = () => {
    this.props.updateWindowState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <ScrollToTop>
              <CuongFlix />
            </ScrollToTop>
          </Router>
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  window: state.window
});

export default connect(
  mapStateToProps,
  { updateWindowState, detectMobile }
)(App);
