import Link from "next/link";
import "./Info.css";
import Image from "next/image";

export default function Info() {
  return (
    <div className="info">
      <div className="first-block">
        <p className="first-block-text">
          Оформление рассрочки по ставке от 15% годовых
        </p>
        <Link className="first-block-button" href="/#">
          <span className="first-block-button-text">Подробнее</span>
          <Image src="/link.svg" alt="link" width={24} height={24}></Image>
        </Link>
      </div>
      <div className="second-block">
        <span className="second-block-text">Барнхаусы</span>
      </div>
      <div className="third-block">
        <span className="third-block-text">Таунхаусы</span>
      </div>
      <div className="fourth-block">
        <p className="fourth-block-text">
          Скидка до 5% при полной предоплате за проект
        </p>
        <Link className="fourth-block-button" href="/#">
          <span className="fourth-block-button-text">Подробнее</span>
          <Image src="/link.svg" alt="link" width={24} height={24}></Image>
        </Link>
      </div>
    </div>
  );
}
