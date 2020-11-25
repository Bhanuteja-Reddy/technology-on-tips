import React from 'react'

const Footer = () => {
    return (
<footer id="footer">
<div className="footer-newsletter">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h4>Join Our Newsletter</h4>
        <p></p>
        <form action="" method="post">
          <input type="email" name="email"/>
          <input type="submit" value="Subscribe" onClick={(e)=>e.preventDefault()}/>
        </form>
      </div>
    </div>
  </div>
</div>

<div className="footer-top">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 footer-contact">
        <h3>Technology On Tips</h3>
        <p>
          Flat No: 4f-11 <br/>
          Meghana’s Grand Exotica<br/>
          Beside Bethany Public School<br/>
          PM Palem <br/>
          Visakhapatnam<br/>
        </p>
        <strong>Email:</strong><p><a href="mailto:info@ngatechsolutions.com" className="fa fa-envelope mr-3">info@ngatechsolutions.com</a></p>
        <strong>Phone:</strong><p><a href="tel:+916300911141" className="fa fa-phone mr-3">6300911141</a></p>
        <p><a href="tel:+917095747034" className="fa fa-phone mr-3">7095747034</a> </p>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Social Networks</h4>
        <p>Reach us through any of these mediums</p>
        <div className="social-links mt-3">
          <a href="#" className="twitter" target='blank'><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook" target='blank'><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram" target='blank'><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus" target='blank'><i className="bx bxl-skype"></i></a>
          <a href="https://www.linkedin.com/in/technology-on-tips-66934b1bb/" target='blank' className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>

    </div>
  </div>
</div>

<div className="container footer-bottom clearfix">
  <div className="copyright">
    &copy; Copyright <strong><span>Technology On Tips</span></strong>. All Rights Reserved
  </div>
  <div className="credits">
    Designed by <a href="http://bhanutejareddy.netlify.app/">Technology On Tips</a>
  </div>
</div>
</footer>
    )
}

export default Footer
