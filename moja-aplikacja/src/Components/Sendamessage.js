import styles from "./Sendamessage.module.css";

function Sendamessage() {
    return (
        <div className={styles.mainform} id="contactform">
            <section id="formularz">
                <form action="https://formsubmit.io/send/bohonamiot@gmail.com" method="POST" className={styles.form}>
                    <label for="mail" className={styles.email1} >Twój email:</label>
                    <input className={styles.email}
                        id="msg"
                        name="msg"
                        type="mail" />

                    <label for="Twojawiadomość" className={styles.youmessage1}>
                        Twoja wiadomość:
                    </label>
                    <textarea className={styles.youmessage}
                        name="Twojawiadomość"
                        id="message"
                        cols="45"
                        rows="18">
                    </textarea>
                    <input className={styles.button} value="Wyślij"
                        type="submit" />
                    <input name="_redirect"
                        type="hidden"
                        id="name"
                        value="strona" />
                </form>
            </section>
        </div>
    )
};


export default Sendamessage;