"use client";

import "./FeedbackForm.css";
import Image from "next/image";
import { useState } from "react";

export default function FeedbackForm() {
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("TELEGRAM_BOT_TOKEN:", process.env.TELEGRAM_BOT_TOKEN);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, comment }),
      });

      if (!response.ok) throw new Error("Ошибка при отправке данных");
      setPhone("");
      setComment("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="feedback-form">
      <Image
        src="/Interior.jpg"
        alt="interior"
        width={660}
        height={428}
        className="interior"
      ></Image>
      <form className="form" onSubmit={handleSubmit}>
        <div className="questions">
          <span className="question-header">Остались вопросы?</span>
          <span className="question-subheader">
            Заполните форму ниже, и наш специалист свяжется с вами в ближайшее
            время.
          </span>
        </div>
        <div className="form-inputs">
          <div className="phone-container">
            <label className="phone-label" htmlFor="phone">
              Телефон<span className="required">*</span>
            </label>
            <input
              type="tel"
              value={phone}
              className="phone"
              placeholder="+375 (99) 999 99 99"
              required
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>
          <div className="comment-container">
            <label className="comment-label" htmlFor="comment">
              Комментарий
            </label>
            <textarea
              className="comment"
              value={comment}
              placeholder="Ваш комментарий"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" className="checkbox" required></input>
          <label className="checkbox-label" htmlFor="checkbox">
            Согласие на обработку персональных данных
          </label>
        </div>
        <button className="submit-button" type="submit">
          <span className="submit-button-text">Отправить</span>
        </button>
      </form>
    </div>
  );
}
