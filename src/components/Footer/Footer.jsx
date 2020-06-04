/*!

=========================================================
* JRB Consultant - 2020
=========================================================

* *
* Copyright 2020 
**

* Coded by Yin

=========================================================



*/
/*eslint-disable*/
import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container>
          <div className="copyright">
            &copy; {1900 + new Date().getYear()} | All rights reserved
          </div>
          <div>
          </div>
        </Container>
        <div class="d-flex">
          <div class="bottom-line bg-jrb-green"></div>
          <div class="bottom-line bg-jrb-yellow" ></div>
          <div class="bottom-line bg-jrb-red"></div>
          <div class="bottom-line bg-jrb-gray"></div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
