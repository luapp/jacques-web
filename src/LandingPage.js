import LandingPageCss from './LandingPage.module.css';
import profil_pic from './ProfilePicture.jpg';

function LandingPage() {
    return (
        <div className={LandingPageCss.lp}>
            <section className={LandingPageCss.section_one}>
                <div>
                    <img className={LandingPageCss.profil_pic} src={profil_pic}/>
                    <p>Chenghan Ji</p>
                </div>
                <div className={LandingPageCss.profile_description}>
                    <h1>Chenghan Ji is a pianist from Shanghai, China</h1>
                    <p>Chenghan Ji, a second-year pianist at the Royal Northern College of Music from Shanghai, began her musical journey at seven. Award-winning and passionate, she has touched many hearts through her performances. Chenghan dreams of opening a piano studio to nurture young talent and support children's music education through charity.</p>
                </div>
            </section>
        </div>
    )
}

export default LandingPage;
