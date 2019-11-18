import React from "react";
import { Card } from "../styles/CardStyles";

const StoryCard = props => {
  console.log("", props);
  return (
    <Card>
      <p>{props.lib.lib}</p>
    </Card>
  );
 
};

export default StoryCard;
