import React from "react";

import IconMenu from '../../assets/icon/icon-menu-3d.svg';
import IconPhone from '../../assets/icon/icon-phone-3d.svg';
import IconSearch from '../../assets/icon/icon-search-3d.svg';
import IconMenuSupport from '../../assets/icon/icon-support-3d.svg';

import MenuIcons from "./MenuIcons/index"
import "./style.css"

const Header = () => {
    return(
        <>
            <header className="header">
                <article className="header__article">
                    <section className="header__section">
                        <nav className="header__nav">
                            <MenuIcons image={IconMenu} text="Menu"/>
                            <MenuIcons image={IconPhone} text="Contact"/>
                            <MenuIcons image={IconSearch} text="Search"/>
                            <MenuIcons image={IconMenuSupport} text="Support"/>
                        </nav>
                    </section>
                </article>
            </header>
        </>
    )
};

export default Header;