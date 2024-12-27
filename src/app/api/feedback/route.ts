import { NextRequest, NextResponse } from "next/server";
import { sendTelegramMessage } from "../../../../server/telegram";

export async function POST(request: NextRequest) {
  try {
    const { phone, comment } = await request.json();

    if (!phone || !comment) {
      return NextResponse.json(
        { error: "Номер телефона и комментарий обязательны" },
        { status: 400 }
      );
    }

    // Отправляем сообщение в Telegram
    await sendTelegramMessage(phone, comment);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Ошибка API:", error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
