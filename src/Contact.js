import styles from './Contact.module.css';
import Header from './Header';

function ContactCard() {
    return (
        <div className={styles.card}>
            <Header />
            <div className={styles.card_page}>
                <h2 className={styles.cardTitle}>Contact Me</h2>
                <div>
                    <div className={styles.contactInfo}>
                        <p>Name: Chenghan Ji</p>
                        <p>Phone: +44 7469 047004</p>
                        <p>Email: chenghan.Ji@student.rncm.ac.uk</p>
                    </div>
                    <div className={styles.address}>
                        124 Oxford Rd, Manchester M13 9RD, United Kingdom
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;
