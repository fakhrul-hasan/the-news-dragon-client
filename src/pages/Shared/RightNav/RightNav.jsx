import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../../QZone/QZone";
import bg from '../../../assets/bg.png';

var sectionStyle = {
    backgroundImage: `url(${bg})`
 }

const RightNav = () => {
  return (
    <div>
      <div className="mb-4">
        <h4>Login With</h4>
        <Button className="w-100 mb-2" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button className="w-100" variant="outline-secondary">
          <FaGithub /> Login with Github
        </Button>
      </div>
      <div className="mb-4">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebookF className="text-primary border rounded-circle bg-light fs-5 p-1" />{" "}
            Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter className="text-info border rounded-circle bg-light fs-5 p-1" />{" "}
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram className="text-danger border rounded-circle bg-light fs-5 p-1" />{" "}
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="mt-4 text-center p-5" style={sectionStyle}>
        <div>
        <h2 className="text-white text-center mb-4">Create an Amazing Newspaper</h2>
        <p className="text-white fs-5 fw-light mb-4">Discover thousands of options, easy to customize layouts, one click to import demo and much more.</p>
        <Button className="fs-4" variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
