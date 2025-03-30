import React from "react"
import small_logo from "../images/Logo .svg"

const Footer = () => {
    return(
        <footer className="">
            <section>
            <div className="company-info">
                <img src={small_logo} alt=""/>
                <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
            </div>
            <div>
                <h3>Contact Us!</h3>
            <ul>
            <li>Address: <br/> 123 Town Street, Chicago</li>
                <li>Phone: <br/> +65 62 35 35 35</li>
                <li>Email: <br/> little@lemon.com</li>
            </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Instagram</a></li>
                <li><a href="/">Twitter</a></li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;