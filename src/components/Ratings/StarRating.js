import React from "react";
import { FaStar } from "react-icons/fa";
import { BsStar } from "react-icons/bs";
import styled from "styled-components";

let Label = styled.label`
  cursor: pointer;
  margin: 0 1px;
`;

function StarRating() {
  const [ratings, setRatings] = React.useState(null);

  return [...Array(5)].map((star, index) => {
    const ratingValue = index + 1;
    return (
      <Label onClick={() => setRatings(ratingValue)} key={ratingValue}>
        {ratingValue <= ratings ? <FaStar /> : <BsStar />}
      </Label>
    );
  });
}

export default StarRating;
