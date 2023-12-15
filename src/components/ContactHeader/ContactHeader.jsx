import React from 'react';
import styles from './ContactHeader.module.css';

function ContactHeader() {
  return (
    <>
        <div className={` ${styles.contact_section}`}>
            <h1> CONTACT US </h1>
            <p> let's connect : We're here to help , and we'd Love to hear from you ! Whether you have a Question, Comment, Or Just want to chat , You can Reach out to Us Through the contact from of the page , or by phone , Email, Or Social Media </p>
        </div>
    </>
  )
}

export default ContactHeader