import React, { Component } from "react";
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
    this.searchBoxAnimation = null;
    this.input = React.createRef();
  }

  state = {
    isClosing: this.props.searchBoxClosing,
    isUserFocusing: this.props.isSearchBoxFocused
    // term: this.props.term
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
        this.input.current.style.width = "220px";
        this.input.current.style.opacity = 1;
        this.input.current.focus();
      }, 0);
    });
  };

  closeSearchBox = () => {
    this.props.onSearchBoxFocus(false);
    this.setState({ isClosing: true, isUserFocusing: false }, () => {
      this.input.current.style.width = "20px";
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
              onChange={this.handleSearchInputChange.bind(this)}
              onBlur={this.handleSearchInputBlur.bind(this)}
              type="text"
              placeholder="Title, people, genres"
              maxLength="80"
              // value={this.state.term}
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
                <FontAwesomeIcon icon={faSearch} size="2x" />
              </span>
            </button>
          )}
      </div>
    );
  }
}

export default SearchBox;
