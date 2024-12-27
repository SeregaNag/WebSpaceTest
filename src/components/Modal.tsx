import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import Image from "next/image";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  // Создаем контейнер для портала
  const modalRoot =
    typeof window !== "undefined"
      ? document.getElementById("modal-root")
      : null;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Блокируем скроллинг при открытом модальном окне
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = ""; // Убираем блокировку скролла при размонтировании
    };
  }, [isOpen]);

  if (!isOpen || !modalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modaloverlay" onClick={onClose}>
      <div className="popup-callback" onClick={(e) => e.stopPropagation()}>
        <Image
          src="/popimage.png"
          alt="interior"
          width={660}
          height={198}
          className="popimage"
        />
        <form className="modal-content">
          <div className="popup-info">
            <div className="popup-header">Обратный звонок</div>
            <div className="popup-text">
              Заполните форму ниже, и наш специалист свяжется с вами в ближайшее
              время.
            </div>
          </div>
          <div className="popup-inputs">
            <div className="popup-phone-container">
              <label className="popup-phone-label" htmlFor="popup-phone">
                Телефон<span className="required">*</span>
              </label>
              <input
                type="tel"
                className="popup-phone"
                placeholder="+375 (99) 999 99 99"
                required
              ></input>
            </div>
            <div className="popup-comment-container">
              <label className="popup-comment-label" htmlFor="popup-comment">
                Комментарий
              </label>
              <textarea
                className="popup-comment"
                placeholder=" Ваш комментарий"
              ></textarea>
            </div>
          </div>
          <div className="popup-checkbox-container">
            <input type="checkbox" className="popup-checkbox" required></input>
            <label className="popup-checkbox-label" htmlFor="popup-checkbox">
              Согласие на обработку персональных данных
            </label>
          </div>
          <button className="popup-button">
            <span className="popup-button-text">Отправить</span>
          </button>
        </form>
        <button className="popup-close" onClick={onClose}>
          <Image
            src={"/close-button.svg"}
            alt="close"
            width={38}
            height={38}
          ></Image>
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
