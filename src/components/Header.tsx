import Image from "next/image";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Image
          src="/logo.svg"
          alt="House Logo"
          width={64}
          height={64}
          className="logo-image"
        />
        <div className="logo-text">
          <p className="logo-big-text">Строительные решения</p>
          <p className="logo-small-text">строительная компания</p>
        </div>
      </div>

      <div className="address">
        <p className="address-text">Адрес офиса:</p>
        <p className="address-address">
          РБ, г. Минск, <br />
          ул. Ленина, 1
        </p>
      </div>

      <div className="phone-header">
        <p className="phone-text">+375 99 999 99 99</p>
        <p className="phone-number">пн – пт: с 09:00 до 18:00</p>
        <p className="phone-number">сб – вс: с 10:00 до 16:00</p>
      </div>

      <button className="button-call">
        <span className="button-call-text">Заказать звонок</span>
      </button>
    </div>
  );
}
