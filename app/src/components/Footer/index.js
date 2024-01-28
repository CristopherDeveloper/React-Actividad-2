import IconWebYoutube from "../../assets/icon/icon-youtube-3d.svg";
import IconWebInstagram from "../../assets/icon/icon-instagram-3d.svg";
import IconWebFacebook from "../../assets/icon/icon-facebook-3d.svg";

import "./style.css"

const Footer = () => {
    return(
        <footer className="footer">
            <article className="footer__article footer__article--flex">
                <section className="footer__privacyandterms footer__privacyandterms--flex">
                    <div>
                        <a href="#">Privacidad </a>
                        <a href="#">Terminos </a>
                        <a href="#">Soporte </a>
                        <a href="#">Ayuda </a>
                        <a href="#">Contacto </a>
                    </div>

                    <div>
                        <a href="#">Sobre nosotros </a>
                        <a href="#">Donaciones </a>
                    </div>
                </section>

                <section className="footer__redsocial footer__redsocial--flex">
                    <img src={IconWebYoutube} />
                    <img src={IconWebInstagram} />
                    <img src={IconWebFacebook} />
                </section>
            </article>
        </footer>
    )
}

export default Footer;