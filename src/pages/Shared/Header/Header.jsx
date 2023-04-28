import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button} from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="container">
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        <h6>{moment().format("dddd, MMMM D YYYY")}</h6>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="fw-bold" speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
