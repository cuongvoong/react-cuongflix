import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SearchBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const inputStyles = {
  width: 20,
  transitionDuration: "200ms"
};

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.searchBoxFocusing = null;
    this.input = React.createRef();
  }

  state = {
    isClosing: false,
    isUserFocusing: this.props.isSearchBoxFocused
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.term !== this.props.term &&
      prevProps.isSearchBoxFocused !== this.props.isSearchBoxFocused
    ) {
      this.setState({ term: this.props.term });
      this.closeSearchBox();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.searchBoxFocusing);
    clearTimeout(this.searchBoxClosing);
  }

  handleSearchBoxFocus = () => {
    this.props.onSearchBoxFocus(true);
    this.setState({ isUserFocusing: true }, () => {
      this.searchBoxFocusing = setTimeout(() => {
        this.input.current.style.width = "180px";
        this.input.current.style.opacity = 1;
        this.input.current.focus();
      }, 0);
    });
  };

  closeSearchBox = () => {
    this.props.onSearchBoxFocus(false);
    this.setState({ isClosing: true, isUserFocusing: false }, () => {
      this.input.current.style.width = "0px";
      this.input.current.style.opacity = 0;

      this.searchBoxClosing = setTimeout(() => {
        this.setState({ isClosing: false });
      }, 250);
    });
  };

  handleSearchBoxClose = () => {
    this.props.onSearchBoxClose();
    this.closeSearchBox();
  };

  handleSearchInputBlur = e => {
    if (this.props.term === "") {
      this.closeSearchBox();
    }
  };

  handleSearchInputChange = e => {
    this.props.onSearchInputChange(e);
  };

  render() {
    return (
      <div className="searchBox">
        {(this.state.isUserFocusing || this.state.isClosing) && (
          <div className="searchInput">
            <span className="icon-search">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input
              ref={this.input}
              className="searchBox-input"
              onChange={this.handleSearchInputChange.bind(this)}
              onBlur={this.handleSearchInputBlur.bind(this)}
              type="text"
              placeholder="Title, people, genres"
              maxLength="80"
              value={this.props.term}
              style={inputStyles}
            />
            <button
              onClick={() => this.handleSearchBoxClose()}
              className="searchClose"
            >
              <span className="icon-search">
                <FontAwesomeIcon icon={faTimesCircle} />
              </span>
            </button>
          </div>
        )}
        {!this.state.isUserFocusing &&
          !this.state.isClosing && (
            <button
              onClick={() => this.handleSearchBoxFocus()}
              className="searchTab"
            >
              <span className="icon-search">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </button>
          )}
      </div>
    );
  }
}

SearchBox.propTypes = {
  onSearchInputChange: PropTypes.func.isRequired,
  onSearchBoxClose: PropTypes.func.isRequired,
  onSearchBoxFocus: PropTypes.func.isRequired,
  isSearchBoxFocused: PropTypes.bool.isRequired,
  term: PropTypes.string.isRequired
};

export default SearchBox;
