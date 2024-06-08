import React from 'react';
import HeaderCss from './Header.module.css';
import { Link } from 'react-router-dom';
import yt from "./yt.png"
import insta from "./insta.png"

function Header() {
    return (
        <header className={HeaderCss.header}>
            <section className={HeaderCss.header_left}>
                <h1 className={HeaderCss.header_title}>Chenghan Ji</h1>
            </section>
            <section className={HeaderCss.header_mid}>
                <Link className={HeaderCss.header_mid_text} to="/" ><p className={HeaderCss.header_p}>Home</p></Link>
                <Link className={HeaderCss.header_mid_text} to="/bio" ><p className={HeaderCss.header_p}>Bio</p></Link>
                <Link className={HeaderCss.header_mid_text} to="/music" ><p className={HeaderCss.header_p}>Music</p></Link>
                <Link className={HeaderCss.header_mid_text} to="/gallery" ><p className={HeaderCss.header_p}>Gallery</p></Link>
                <Link className={HeaderCss.header_mid_text} to="/contact" ><p className={HeaderCss.header_p}>Contact</p></Link>
            </section>
            <section className={HeaderCss.header_right}>
                <a className={HeaderCss.yt_a} href='https://www.youtube.com/watch?v=5OQ0fWpw0zQ'>
                    <img className={HeaderCss.yt} src={yt} href="www.google.com"/>
                </a>
                <a className={HeaderCss.insta_a} href='https://www.instagram.com/jiic.h/'>
                    <img className={HeaderCss.insta} src={insta}/>
                </a>
            </section>
        </header>
    )
}

export default Header;
