import LandingPageCss from './LandingPage.module.css';
import profil_pic from './ProfilePicture.jpg';
import one from './one.jpg';
import two from './two.jpg';
import three from './three.jpg';

function LandingPage() {
    return (
        <div className={LandingPageCss.lp}>
            <section className={LandingPageCss.section_one}>
                <div>
                    <img className={LandingPageCss.profil_pic} src={profil_pic}/>
                    <p>Chenghan Ji</p>
                </div>
                <div className={LandingPageCss.profile_description}>
                    <h1 className={LandingPageCss.profile_description_title}>Chenghan Ji is a pianist from Shanghai, China</h1>
                    <p className={LandingPageCss.profile_description_text}>Chenghan Ji, a second-year pianist at the Royal Northern College of Music from Shanghai, began her musical journey at seven. Award-winning and passionate, she has touched many hearts through her performances. Chenghan dreams of opening a piano studio to nurture young talent and support children's music education through charity.</p>
                </div>
            </section>
            <section className={LandingPageCss.section_two}>
                <div>
                    <h1 className={LandingPageCss.section_h1}>Travelling Europe</h1>
                    <p>
                        I am on a mission not just to master my craft, but to deeply connect with Europe's rich cultural tapestry. As a pianist, my goal is to travel extensively across Europe, delving into its diverse cultures and histories. This journey will enrich my musical interpretations and foster a profound understanding of the people and stories behind the music, ultimately elevating my performances and bringing history to life through every note I play.
                    </p>
                </div>
                <div>
                    <img className={LandingPageCss.pic_one} src={one} alt='Loading Image'/>
                </div>
            </section>
            <section className={LandingPageCss.section_three}>
                <div>
                    <img className={LandingPageCss.pic_two} src={two} alt='Loading Image'/>
                </div>
                <div>
                    <h1 className={LandingPageCss.section_h1}>Teaching others and sharing my story</h1>
                    <p>
                        My mission extends beyond personal growth; I am passionate about teaching others, especially children. I aspire to share my experiences from traveling through Europe, infusing my lessons with the rich cultural and historical contexts I encounter. By bringing these insights back to China, my home country, I aim to enrich the classical music environment, inspiring young musicians with the vibrant traditions and stories that have shaped European music. Through this, I hope to cultivate a deeper appreciation and understanding of classical music among the next generation.
                    </p>
                </div>
            </section>
            <section className={LandingPageCss.section_four}>
                <div>
                    <h1 className={LandingPageCss.section_h1}>Conquering Stage Fright</h1>
                    <p>
                        For years, I have struggled with stage fright, a challenge that many performers face. My goal is to overcome this through consistent practice and self-reflection. As I work on conquering my own fears, I plan to document my journey and share practical tips and strategies that have helped me. I hope my experiences can provide useful insights for others dealing with stage fright, helping them build confidence and perform more comfortably on stage.
                    </p>
                </div>
                <div>
                    <img className={LandingPageCss.pic_three} src={three} alt='Loading Image'/>
                </div>
            </section>
        </div>
    )
}

export default LandingPage;
