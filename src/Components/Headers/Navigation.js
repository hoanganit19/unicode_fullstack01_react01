import React from "react";

export default function Navigation() {
  return (
    <>
      <input type="checkbox" id="toggle-menu" />
      <nav className="header__menu">
        <ul>
          <li>
            <a href="#">Giới thiệu</a>
          </li>
          <li>
            <a href="#">Sản phẩm</a>
          </li>
          <li>
            <a href="#">Điểm phục vụ</a>
          </li>
          <li>
            <a href="#">Khuyến mãi</a>
          </li>
          <li>
            <a href="#">Tin tức</a>
          </li>
          <li>
            <a href="#">Liên hệ</a>
          </li>
          <li>
            <a href="#">
              <img src="/assets/images/search-icon.png" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
