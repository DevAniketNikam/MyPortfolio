import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:aniketnikam4687@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:aniketnikam4687@gmail.com"></a>aniketnikam4687@gmail.com
        </div>
        <div>
        <a href="tel:+919518997267"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919518997267">(+91) 9518997267</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}