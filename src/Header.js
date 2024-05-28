import HeaderCss from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={HeaderCss.header}>
            <section className={HeaderCss.header_left}>
                <h1>Chenghan Ji</h1>
            </section>
            <section className={HeaderCss.header_mid}>
                <Link className={HeaderCss.header_mid_text} to="/" >Home</Link >
                <Link className={HeaderCss.header_mid_text} to="/bio" >Bio</Link >
                <Link className={HeaderCss.header_mid_text} to="/music" >Music</Link >
                <Link className={HeaderCss.header_mid_text} to="gallery" >Gallery</Link >
                <Link className={HeaderCss.header_mid_text} to="contact" >Contact</Link >
            </section>
            <section className={HeaderCss.header_right}>
                <h3>L1</h3>
                <h3>L2</h3>
                <h3>L3</h3>
            </section>
        </header>
    )
}

export default Header;
