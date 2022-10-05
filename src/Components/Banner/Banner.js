import React from 'react'
import './Banner.scss';

export default function Banner() {
  return (
    <section className="banner-box">
        <div className="banner-box__inner">
            <img src="/assets/images/banner.png" alt="" />
        </div>
        <div className="banner-box__controls">
            <button type="button" className="banner-box__controls--prev">
                <i className="fa-solid fa-angle-left"></i>
            </button>
            <button type="button" className="banner-box__controls--next">
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </div>
        <div className="banner-box__dots">
            <span></span>
            <span></span>
            <span className="active"></span>
            <span></span>
        </div>
    </section>
  )
}
