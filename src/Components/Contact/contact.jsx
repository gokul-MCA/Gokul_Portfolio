import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import img from '../../assets/contact.png';
import styles from './contact.module.css';
import gmail from '../../assets/icons8-gmail-50.png';
import location from '../../assets/icons8-location-50.png';
import { FaArrowRight } from "react-icons/fa";
import Button from '../ui/Button/Button';
import Head from '../ui/Head/Head';
import CopyButton from '../ui/CopyButton/CopyButton';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z0fppay', 'template_btbviq1', form.current, { publicKey: '0Zo46Jbezp63s0l_a',})
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent Successfully');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

const title='Get in touch';
const content='I\'m currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.';

  return (
    <section id='contact' className={styles.contact}>
        <Head>{title}</Head>

    <div className={styles.contactcontainer}>
        {/* 1 */}
        <div className={styles.contactOne}>
            <div className={styles.contactContent}>
              <p>{content}</p>
            </div>
            <div className={styles.contactimg}>
              <img src={img} alt=""/>
            </div>
        </div>

        {/* 2 */}
        <div className={styles.contactTwo}>
            <div className={styles.contactinfos}>
               <div className={styles.contactinfo}><img src={gmail} alt='gmail'/><a href='https://gokulpnr2001@gmail.com' target='_blank' rel='noopener noreferrer'>
                <p>gokulpnr2001@gmail.com</p></a><CopyButton textToCopy="gokulpnr2001@gmail.com"/></div>
               <div className={styles.contactinfo}><img src={location} alt='location'/><p>Velachery, Chennai</p></div>
            </div>

              <form action="" className={styles.contactForm} ref={form} onSubmit={sendEmail}>
                <input type="text" className={styles.name} placeholder='Your Name' name="your_name" required/>
                <input type="email" className={styles.email} placeholder='Your Emails' name='your_email' required/>
                <textarea className={styles.msg} name="message" rows="5" placeholder='Your Message' required></textarea>
                <Button type="submit" value="send" className={styles.submitBtn}>Let's Talk <FaArrowRight className={styles.btnFonts}/> </Button>
              </form>
        </div>

      </div>
    </section>
  )
}

export default Contact
