import React from "react";
import Posts from "./Posts";

export default function MemberInfo(props) {
  const { name, email, shippingAddress } = props;

  return (
    <div className="member-info">
      <h1>Member Info</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Shipping Address: {shippingAddress}</p>
      <Posts {...props} />
    </div>
  );
}
