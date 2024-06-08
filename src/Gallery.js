import React from 'react';
import GalleryCss from './Gallery.module.css';
import Header from './Header';
import i1 from './01.jpg';
import i2 from './02.jpg';
import i3 from './03.jpg';
import i4 from './04.jpg';

function Gallery() {
    return (
        <div className={GalleryCss.gallery}>
            <Header />
            <div className={GalleryCss.img_flex}>
                <img className={GalleryCss.img} src={i1} alt="01"/>
                <img className={GalleryCss.img} src={i2} alt="02"/>
                <img className={GalleryCss.img} src={i3} alt="03"/>
                <img className={GalleryCss.img} src={i4} alt="04"/>
            </div>
        </div>
    );
}

export default Gallery;
