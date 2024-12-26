"use client";

import Image from "next/image";
import "./TextSlider.css";
import { useState } from "react";

const sliderHeader = [
  "Создадим ваш идеальный дом в установленные сроки и с 10-летней гарантией",
  "Мы создаем надежные и современные дома для вашего уютного проживания",
  "В нашей команде работают квалифицированные сотрудники с опытом работы от 5 лет",
];

const sliderText = [
  "Без головной боли и отклонений от сметы строительства",
  "В своей работе мы применяем современные технологии и специализированное строительное оборудование",
  "Мы оперативно выполняем весь спектр строительных работ",
];

export default function TextSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // сделать 3 кнопки которые будут указывать на индексы слайдов
  return (
    <>
      <div className="seo">
        <div className="seo-text">
          <p className="seo-header">{sliderHeader[currentSlide]}</p>
          <p className="seo-subheader">{sliderText[currentSlide]}</p>
        </div>
        <button className="seo-button">
          <span className="seo-button-text">Узнать стоимость</span>
        </button>
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentSlide(0)}
          className="pagination-button"
        >
          {currentSlide === 0 && (
            <Image src="/active-button.svg" alt="arrow" width={24} height={8} />
          )}
          {currentSlide !== 0 && (
            <Image src="/button.svg" alt="arrow" width={8} height={8} />
          )}
        </button>
        <button
          onClick={() => setCurrentSlide(1)}
          className="pagination-button"
        >
          {currentSlide === 1 && (
            <Image src="/active-button.svg" alt="arrow" width={24} height={8} />
          )}
          {currentSlide !== 1 && (
            <Image src="/button.svg" alt="arrow" width={8} height={8} />
          )}
        </button>
        <button
          onClick={() => setCurrentSlide(2)}
          className="pagination-button"
        >
          {currentSlide === 2 && (
            <Image src="/active-button.svg" alt="arrow" width={24} height={8} />
          )}
          {currentSlide !== 2 && (
            <Image src="/button.svg" alt="arrow" width={8} height={8} />
          )}
        </button>
      </div>
    </>
  );
}
