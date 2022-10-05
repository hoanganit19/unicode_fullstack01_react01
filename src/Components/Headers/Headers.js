import React from 'react'
import Navigation from './Navigation'
import './Headers.scss';

export default function Headers() {
  return (
    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col col-2 hidden-desktop">
                    <div className="header__menu-toggle">
                        <label htmlFor="toggle-menu">
                            <i className="fa-solid fa-bars"></i>
                        </label>
                    </div>
                </div>
                <div className="col col-8 col-xl-2">
                    <div className="header__logo">
                        <a href="#">
                            <img src="/assets/images/logo.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="col col-12 col-xl-8 header__menu-mobile">
                    <Navigation />
                </div>
                <div className="col col-2 col-xl-2">
                    <div className="header__hotline">
                        <div className="header__hotline--inner">
                            <span>Hotline 24/7</span>
                            <span>090.154.8866</span>
                        </div>
                    </div>
                    <div className="header__search-mobile">
                        <a href="#"><img src="/assets/images/search-icon.png" /></a>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
