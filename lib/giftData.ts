// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "habiby",                                      // اسم مستلم الهدية
  senderName: "your love",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#ff4081",                             // اللون الوردي المتوافق مع ثيم البينك والأسود
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `  كل سنة وانت طيب يا سمسمتي  وكل سنة وانت محقق حاجة جديدة بتفرحك وكل سنة وضحكتك منورة وشك ويا رب أشوفك دايما في أحسن حال وأشوف كل تعبك بيتحول لنجاح وفرحة يا اشطر دكتور في الدنيا بحبلك الخير والفرحة من كل قلبي وإن شاء الله كل السنين الجاية تكون أحلى وأجمل عليك يا رب
Happy birthdayyyy❤️❤️❤️😘
`,
};

const giftData: Record<string, GiftData> = {
  habiby: defaultGift,
  yahya: defaultGift,
  aya: defaultGift,
};

export default giftData;