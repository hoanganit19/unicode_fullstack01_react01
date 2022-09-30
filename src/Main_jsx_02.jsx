import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main() {
  /*
  Hiển thị jsx theo điều kiện
  - if else
  - toán tử 3 ngôi

  Nơi viết:
  - Viết trực tiếp vào return (toán tử 3 ngôi)
  - tách thành 1 biến (if else, toán tử 3 ngôi)
  - viết thành 1 hàm riêng (if else, toán tử 3 ngôi)
  */

  const check = true;
  //let message;

  // const message = check ? (
  //   <>
  //     <h1>Unicode Academy</h1>
  //     <h2>Unicode Academy</h2>
  //   </>
  // ) : null;

  // if (check) {
  //   message = (
  //     <>
  //       <h1>Unicode Academy</h1>
  //       <h2>Unicode Academy</h2>
  //     </>
  //   );
  // }

  // const showMessage = () => {

  //   return check && (
  //     <>
  //       <h1>Unicode Academy</h1>
  //       <h2>Unicode Academy</h2>
  //     </>
  //   );
  // };

  // const product = {
  //   id: 1,
  //   name: 'SP 1',
  //   price: 12000,
  //   stock: true
  // }

  // const {id, name, price, stock} = product; //Destructuring

  const users = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "nguyenvana@gmail.com",
      status: true,
    },

    {
      id: 2,
      name: "Nguyễn Văn B",
      email: "nguyenvanb@gmail.com",
      status: false,
    },

    {
      id: 3,
      name: "Nguyễn Văn C",
      email: "nguyenvanc@gmail.com",
      status: true,
    },

    {
      id: 4,
      name: "Nguyễn Văn D",
      email: "nguyenvand@gmail.com",
      status: false,
    },
  ];

  const usersJsx = users.length ? (
    users.map(({ id, name, email, status }, index) => {
      const statusBtn = status ? (
        <button className="btn btn-success btn-sm">Active</button>
      ) : (
        <button className="btn btn-warning btn-sm">InActive</button>
      );

      return (
        <tr key={id}>
          <td>{index + 1}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{statusBtn}</td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td colSpan={4}>
        <div className="alert alert-info text-center">No Data</div>
      </td>
    </tr>
  );

  return (
    <div style={{ margin: "3%" }}>
      <h2>Danh sách người dùng</h2>
      <hr />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th width="5%">STT</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{usersJsx}</tbody>
      </table>
    </div>
  );
}
