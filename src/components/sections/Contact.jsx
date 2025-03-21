import React, { useRef, useState } from "react";
import styled from "styled-components";
import EarthCanvas from "../canvas/Earth";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactInput = styled.input`
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  outline: none;
  font-size: 18px;
  color: #fff;
  border-radius: 12px;
  padding: 12px 16px;
  margin-bottom: 10px;
  &:focus {
    border-color: #6a0dad;
  }
`;

const ContactTextarea = styled.textarea`
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  outline: none;
  font-size: 18px;
  color: #fff;
  border-radius: 12px;
  padding: 12px 16px;
  min-height: 100px;
  &:focus {
    border-color: #6a0dad;
  }
`;

const ContactButton = styled.button`
  background: linear-gradient(225deg, #6a0dad, #b5179e);
  color: #fff;
  padding: 13px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  margin-top: 12px;
  &:hover {
    opacity: 0.9;
  }
`;

const ErrorMsg = styled.div`
  color: red;
  margin-top: 10px;
`;

const SuccessMsg = styled.div`
  color: green;
  margin-top: 10px;
`;

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xyzeeege", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.current.name.value,
          email: form.current.email.value,
          message: form.current.message.value,
        }),
      });

      if (response.ok) {
        setMessage("Message sent successfully!");
        form.current.reset();
      } else {
        setMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setMessage("Error occurred: Unable to connect to the server.");
      console.error("Fetch error:", error);
    }
  };

  return (
    <Container id="Contact">
      <Wrapper>
        <EarthCanvas />
        <Title>Get in Touch</Title>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactInput type="text" name="name" placeholder="Your Name" required />
          <ContactInput type="email" name="email" placeholder="Your Email" required />
          <ContactTextarea name="message" placeholder="Your Message" required />
          <ContactButton type="submit">Send Message</ContactButton>
          {message && (message.includes("successfully") ? (
            <SuccessMsg>{message}</SuccessMsg>
          ) : (
            <ErrorMsg>{message}</ErrorMsg>
          ))}
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
