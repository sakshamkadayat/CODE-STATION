import "./footer.css";
import {Navbar,Container} from 'react-bootstrap';
import saksham from "../pictures/logo.png";
export function Footer() {
  return (
    <>
<footer class="footer-distributed white py-3 shadow-sm">

<div class="footer-left">

  <h3>CODE<span>STATION</span></h3>

  <p class="footer-links">
    <a href="/home" class="link-1">Home</a>

    <a href="#">Contact</a>

     <a href="#">About</a>

    <a href="#">Faq</a>

    <a href="#">Contact</a>
  </p>

  <p class="footer-company-name"> Code Station © 2022</p>
</div>

<div class="footer-center">

  <div>
    <i class="fa fa-map-marker"></i>
    <p><span>Tinkune</span>kathmandu</p>
  </div>

  <div>
    <i class="fa fa-phone"></i>
    <p>+977 984-7346562</p>
  </div>

  <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:codestation.mail@gmail.com">codestation.mail@gmail.com</a></p>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span>About the company</span>
    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
  </p>

  <div class="footer-icons">

    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-github"></i></a>

  </div>

</div>

</footer>


    </>
  );
}
