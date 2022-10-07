import React from "react";

export default function PostItem({title, content}) {
  return (
    <div className="post-item">
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  );
}
