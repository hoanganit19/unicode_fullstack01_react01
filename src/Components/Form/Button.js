import React from "react";


const Button = React.forwardRef((props, ref) => {
  return (
    <button type="submit" className="btn btn-primary" ref={ref}>
      Thêm
    </button>
  );
})

export default Button;