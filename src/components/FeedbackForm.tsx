import "./FeedbackForm.css";
import Image from "next/image";

export default function FeedbackForm() {
  return (
    <div className="feedback-form">
      <Image
        src="/Interior.jpg"
        alt="interior"
        width={660}
        height={428}
        className="interior"
      ></Image>
      <form className="form">
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
              className="phone"
              placeholder="+375 (99) 999 99 99"
              required
            ></input>
          </div>
          <div className="comment-container">
            <label className="comment-label" htmlFor="comment">
              Комментарий
            </label>
            <textarea
              className="comment"
              placeholder="Ваш комментарий"
            ></textarea>
          </div>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" className="checkbox" required></input>
          <label className="checkbox-label" htmlFor="checkbox">
            Согласие на обработку персональных данных
          </label>
        </div>
        <button className="submit-button">
          <span className="submit-button-text">Отправить</span>
        </button>
      </form>
    </div>
  );
}
