import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
import "@smastrom/react-rating/style.css";

const NewsCard = ({ news }) => {
  const { title, details, _id, author, image_url, rating, total_view } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center">
          <Image style={{ height: "40px" }} src={author.img} roundedCircle />
          <div className="ps-2 flex-grow-1 ">
            <p className="mb-0 fw-bold">{author.name}</p>
            <p>
              <small>
                {moment(author.published_date).format("YYYY/MM/DD")}
              </small>
            </p>
          </div>
          <div>
            <FaRegBookmark className="text-secondary"></FaRegBookmark>{" "}
            <FaShareAlt className="text-secondary"></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...{" "}
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex align-items-center">
          <div className="flex-grow-1 d-flex">
            <Rating
              className="me-1"
              style={{ maxWidth: 120 }}
              value={rating.number}
              readOnly
            />
            {rating.number}
          </div>
          <div>
            <FaEye></FaEye> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
