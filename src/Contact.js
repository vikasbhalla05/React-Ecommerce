import React from "react";
import styled from "styled-components";
import { useProductContext } from "./Contexts/productContext";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  const {myName} = useProductContext();

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Us {myName}</h2>

      {/* map iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227749.0004237037!2d75.65012591706504!3d26.885141337582652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1666682159284!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>

      {/* contact form */}

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mrgdyeye" method="post" className="contact-inputs">
            <input
              type="text"
              name="username"
              id="name"
              placeholder="username"
              required
              autoComplete="off"
              className="form-input"
            />
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="user@host.com"
              required
              autoComplete="off"
              className="form-input"
            />
            <textarea
              name="Message"
              id="message"
              placeholder="Enter your message"
              cols="30"
              rows="10"
              autoComplete="off"
              className="form-input"
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
