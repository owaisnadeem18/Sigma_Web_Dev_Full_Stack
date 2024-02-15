import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  return (
    <>
      <p>May User Wala component hn and I am user {params.username}</p>
    </>
  );
};

export default User;
