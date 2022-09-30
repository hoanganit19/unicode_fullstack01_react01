import React from "react";
import "./Main.scss";
import ReactMarkdown from 'react-markdown'

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

  const detail = `<p>Khoá học này sẽ giúp bạn nắm vững kiến thức HTML - CSS từ cơ bản đến nâng cao. Đặc biệt khoá học này rất phù hợp với những người mới tiếp cận với lập trình web nói chung, lập trình Front-End nói riêng.</p>

  <p><strong>Bạn nhận được gì trong khoá học?</strong></p>
  
  <ul>
    <li>Hiểu được cách website hoạt động, các thành phần cấu tạo của website</li>
    <li>Tự tay xây dựng được giao diện website bằng ngôn ngữ HTML - CSS</li>
    <li>Hiểu được cách phân tích, xây dựng giao diện website từ dòng code đầu tiên</li>
    <li>Tự tay xây dựng được giao diện website tương thích với các nền tảng thiết bị (Responsive Web Design)</li>
    <li>Có luôn sản phẩm thực tế&nbsp;sau khi hoàn thành khoá học</li>
  </ul>`;

  const detailMarkDown = `
  # Features 1

- Support Standard Markdown / CommonMark and GFM(GitHub Flavored Markdown);
- Full-featured: Real-time Preview, Image (cross-domain) upload, Preformatted text/Code blocks/Tables insert, Code fold, Search replace, Read only, Themes, Multi-languages, L18n, HTML entities, Code syntax highlighting...;
- Markdown Extras : Support ToC (Table of Contents), Emoji, Task lists, @Links...;
- Compatible with all major browsers (IE8+), compatible Zepto.js and iPad;
- Support identification, interpretation, fliter of the HTML tags;
- Support TeX (LaTeX expressions, Based on KaTeX), Flowchart and Sequence Diagram of Markdown extended syntax;
- Support AMD/CMD (Require.js & Sea.js) Module Loader, and Custom/define editor plugins;

# Features 2
- Support Standard Markdown / CommonMark and GFM(GitHub Flavored Markdown);
- Full-featured: Real-time Preview, Image (cross-domain) upload, Preformatted text/Code blocks/Tables insert, Code fold, Search replace, Read only, Themes, Multi-languages, L18n, HTML entities, Code syntax highlighting...;
- Markdown Extras : Support ToC (Table of Contents), Emoji, Task lists, @Links...;
- Compatible with all major browsers (IE8+), compatible Zepto.js and iPad;
- Support identification, interpretation, fliter of the HTML tags;
- Support TeX (LaTeX expressions, Based on KaTeX), Flowchart and Sequence Diagram of Markdown extended syntax;
- Support AMD/CMD (Require.js & Sea.js) Module Loader, and Custom/define editor plugins;

Chào mừng **Unicode**

\`abc\`

  `;

  const parseDetail = {__html: detail}

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
      <div className="content-detail" dangerouslySetInnerHTML={parseDetail} />
      <ReactMarkdown>{detailMarkDown}</ReactMarkdown>
    </>
  );
}
