import Link from "next/link";
import "./Footer.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-container">
          <div className="footer-logo">
            <Image
              src="/logo.svg"
              alt="logo"
              width={64}
              height={64}
              className="footer-logo-image"
            ></Image>
            <div className="footer-logo-text">
              <div className="footer-logo-big-text">Строительные решения</div>
              <div className="footer-logo-small-text">
                строительная компания
              </div>
            </div>
          </div>

          <p className="eur-face-text">
            ООО “Строительные решения” <br />
            Юридический адрес: <br />
            РБ, г. Минск, ул. Ленина, 1<br />
            УНП: 111111111
          </p>

          <div className="footer-address">
            <div className="footer-address-container">
              <div className="footer-address-text">Адрес офиса:</div>
              <div className="footer-address-address">
                РБ, г. Минск, <br />
                ул. Ленина, 1
              </div>
            </div>

            <div className="footer-time">
              <p className="footer-time-text">пн – пт: с 09:00 до 18:00</p>
              <p className="footer-time-text">сб – вс: с 10:00 до 16:00</p>
            </div>
          </div>
          <div className="build-solution">
            © 2024 ООО “Строительные решения”
          </div>
          <div className="footer-link">
            Разработка сайта:{" "}
            <a href="https://web-space.by/" className="footer-link-body">
              Webspace.by
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
