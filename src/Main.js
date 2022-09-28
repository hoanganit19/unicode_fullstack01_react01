import React from "react";
import "./Main.scss";

export default function Main() {
  const handleButtonClick = (text, event) => {
    event.target.style.color = "#fff";
    event.target.style.background = "green";
    alert("Xin chào React JS: " + text);
  };

  // const elements =
  // React.createElement(
  //     'div',
  //     {
  //         id: 'wrapper',
  //         className: 'container',
  //         'data-count': 1
  //     },
  //     React.createElement(
  //         'h1',
  //         {
  //             className: 'title'
  //         },
  //         'Unicode Academy'
  //     ),

  //     React.createElement(
  //         'h2',
  //         {
  //             className: 'sub-title',
  //             style: {
  //                 color: 'red',
  //                 fontWeight: 'bold',
  //                 textDecoration: 'line-through'
  //             }
  //         },
  //         'Unicode Academy'
  //     ),

  //     React.createElement(
  //         'h3',
  //         {
  //             className: 'sub-title'
  //         },
  //         React.createElement(
  //             'button',
  //             {
  //                 type: 'button',
  //                 'data-link': 'https://google.com',
  //                 onClick: (e) => {
  //                     //e.preventDefault();

  //                     handleButtonClick(e.target.innerText, e);

  //                      window.open(e.target.dataset.link, "", "width=300,height=400");
  //                 }
  //             },
  //             'Xem chi tiết'
  //         )
  //     )
  // );

  const title = "Unicode Academy";

  const getPageTitle = () => {
    return <h1>Trung tâm Unicode</h1>;
  };

  const content = [];
  content.push(<h2 key={1}>Unicode 1</h2>);
  content.push(<h2 key={2}>Unicode 1</h2>);

  const check = true;

  return (
    <>
      {content}
      <div className="container" id="wrapper">
        {getPageTitle()}
        <h1 className="title">{title}</h1>
        <h2
          className="sub-title"
          style={{
            color: "red",
            fontWeight: "bold",
            textDecoration: "line-through",
          }}
        >
          Unicode Academy
        </h2>
        <button
          type="button"
          onClick={(e) => {
            handleButtonClick(e.target.innerText, e);
          }}
        >
          Xem chi tiết
        </button>
      </div>
      <div className="content">Unicode</div>

      {check ? (
        <>
          <h3>Đúng</h3>
          <h3>Đúng</h3>
        </>
      ) : (
        <>
          <h3>Sai</h3>
          <h3>Sai</h3>
        </>
      )}
    </>
  );
}
