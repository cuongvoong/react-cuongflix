import React, { Component } from "react";
import PropTypes from "prop-types";
import { Provider, connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../store";
import "./App.css";
import {
  updateColumnsInRow,
  detectMobile
} from "../store/actions/windowActions";
import CuongFlix from "./CuongFlix";
import ScrollToTop from "./ScrollToTop";

class App extends Component {
  componentDidMount() {
    this.props.detectMobile();
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize = () => {
    let columnsInRow;
    if (window.innerWidth < 750) {
      columnsInRow = 3;
    } else if (window.innerWidth < 950) {
      columnsInRow = 4;
    } else if (window.innerWidth < 1300) {
      columnsInRow = 5;
    } else {
      columnsInRow = 6;
    }

    this.props.updateColumnsInRow(columnsInRow);
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

App.propTypes = {
  updateColumnsInRow: PropTypes.func.isRequired,
  detectMobile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  window: state.window
});

export default connect(
  mapStateToProps,
  { updateColumnsInRow, detectMobile }
)(App);
