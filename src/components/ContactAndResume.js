import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub,faLinkedin,faHackerrank,faKaggle,faGoogle,} from "@fortawesome/free-brands-svg-icons";

function ContactAndResume() {
    return (
        <div id='contactAndResume_id'>
          <footer className="page-footer font-small navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid"> <div className ="footer_title">Lets Us Connect </div>
              <a href="https://github.com/bk-ml" className="Github">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/bhawna-kochhar-08a605195/" className="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://www.hackerrank.com/bhawnakochhar3" className="HackerRank">
                <FontAwesomeIcon icon={faHackerrank} size="2x" />
              </a>
              <a href="https://www.kaggle.com/bhawnakochhar" className="Kaggle">
                <FontAwesomeIcon icon={faKaggle} size="2x" />
              </a> 
              <a href="mailto:bhawnakochhar3@gmail.com" className="google">
                <FontAwesomeIcon icon={faGoogle} size="2x" />
              </a> 
              <a href="https://drive.google.com/file/d/1Z8q57R7AfF_hQ8h9dno7z839V6PkoH8C/view?usp=sharing" download className="Resume">
                <button>Download Resume</button>
              </a> 
              <div class="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://github.com/bk-ml" > Bhawna Kochhar</a>
              </div>
            </div> 
          </footer>
        </div>        
    )
}
export default ContactAndResume
