import BioCss from "./Bio.module.css"
import Header from "./Header";
import profil_pic from "./bio.jpg";

function Bio() {
    return (
        <div className={BioCss.bio}>
            <Header />
            <div className={BioCss.Section_one_pic_box}>
                <img className={BioCss.profil_pic} src={profil_pic}/>
                <div className={BioCss.bio_text}>
                    <h1>Biography</h1>
                    <br/>
                    <p>
                        Chenghan Ji is a second-year undergraduate pianist at the Royal Northern College of Music, studying under the internationally renowned tutor Jeremy Young. She is originally from Shanghai, China.
                    </p>
                    <p>
                        Chenghan started learing piano when she was 7 years old. She also learned vocal music and the pipa, a traditional Chinese musical instrument. As a pianist, she performed as a piano accompaniment during chorus festivals in middle and high school, and in piano duo and solo at high school classical concerts. As a singer she won the Silver Award in the Shanghai Chorus Competition and the Excellent Award in the Shanghai Youth Singing Competition.
                        While studying in China, Chenghan participated in a number of charity projects such as the "Glimmer Project." She performed in a concert with other musicians and donated the proceeds from the event to a primary school in Daliangshan, Sichuan Province, to help develop art education for children. Chenghan also joined a charity music class in Daning Road Community, Jing'an District, Shanghai, to provide musical enlightenment for children in the community and teach them to sing and play the piano.
                    </p>
                    <p>
                        During her two years at the RNCM, she has formed two chamber music groups, "Nguyen Trio" and "Pichumani Ji Duo" with her friends in the String Department and has performed Beethoven Piano Trio No.1 in E flat Major Op.1, Sonata for Piano and Violin in E minor, K.304 and other pieces.
                        Chenghan enjoys performing a wide range of repertoire from classical music to popular music and is always keen to explore new pieces.
                    </p>
                    <p>
                        In the future, Chenghan hopes to own a piano studio of her own and teach or become a music therapist. She also wants to devote herself to organising and participating in charity events.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Bio;
