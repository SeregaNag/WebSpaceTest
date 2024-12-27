import fetch from "node-fetch";

const TELEGRAM_BOT_TOKEN = "7394318258:AAHYPDOvPkT9Dicwbh3J6ciUcsqlIg_fwj4"; // не должно тут быть
const TELEGRAM_CHAT_ID = "317808819"; // ID чата (или группы)

export const sendTelegramMessage = async (phone: string, comment: string) => {
  const message = `
  Поступила заявка на обратную связь.
  Номер телефона: ${phone}
  Комментарий: ${comment}
  `;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Ошибка при отправке сообщения: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Ошибка отправки в Telegram:", error);
  }
};
