import MusicCss from './Music.module.css';
import Header from './Header';

function Music() {
    return (
        <div className={MusicCss.music}>
            <Header />
            <div className={MusicCss.music_grid}>
            <div className={MusicCss.iframe_container}>
                <iframe className={MusicCss.iframe} src="https://www.youtube.com/embed/5OQ0fWpw0zQ?si=9t-bnoFLsTFHA3G2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </div>
        </div>
    )
}


export default Music;
