import React from 'react';
import HeaderCss from './Footer.module.css';
import { Link } from 'react-router-dom';
import yt from "./yt.png"
import insta from "./insta.png"

function Footer() {
    return (
        <header className={HeaderCss.header}>
            <section className={HeaderCss.header_mid}>
                <Link className={HeaderCss.header_mid_text} to="/contact" ><p className={HeaderCss.header_p}>Contact Me Here</p></Link>
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

export default Footer;
