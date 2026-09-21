import React, { useState } from "react";
import ChildTest from "./ChildTest";

export default function Test() {
  const [products, setproducts] = useState([
    {
      id: 1,
      title: "iPhone 14 Pro Max",
      description:
        "شاشة Super Retina XDR مقاس 6.7 بوصة مع تكنولوجيا Always-On وDynamic Island.",
      price: 40000,
      count: 15,
      onSale: true,
    },
    {
      id: 2,
      title: "Samsung Galaxy S23 Ultra",
      description:
        "كاميرا بدقة 200 ميجابكسل مع قلم S Pen مدمج ومعالج Snapdragon 8 Gen 2.",
      price: 38000,
      count: 20,
      onSale: false,
    },
    {
      id: 3,
      title: "MacBook Pro M2 16-inch",
      description:
        "أداء استثنائي للمحترفين مع شاشة Liquid Retina XDR وبطارية تدوم طويلاً.",
      price: 85000,
      count: 8,
      onSale: true,
    },
    {
      id: 4,
      title: "Sony WH-1000XM5 Headphones",
      description:
        "سماعات رأس لاسلكية مع أفضل تقنية لعزل الضوضاء وصوت عالي الدقة.",
      price: 14000,
      count: 45,
      onSale: true,
    },
    {
      id: 5,
      title: "Apple Watch Series 8",
      description:
        "مستشعرات متقدمة لمتابعة الصحة واللياقة البدنية مع ميزة اكتشاف الاصطدام.",
      price: 16500,
      count: 30,
      onSale: false,
    },
    {
      id: 6,
      title: "iPad Air M1",
      description:
        "تصميم نحيف وخفيف مع شاشة Liquid Retina مقاس 10.9 بوصة وأداء M1 الخارق.",
      price: 24000,
      count: 12,
      onSale: true,
    },
    {
      id: 7,
      title: "Dell XPS 15 Laptop",
      description:
        "لابتوب قوي لشاشة 4K OLED موجه لمصممي الجرافيك وصانعي المحتوى.",
      price: 62000,
      count: 5,
      onSale: false,
    },
    {
      id: 8,
      title: "PlayStation 5 Console",
      description:
        "جهاز ألعاب مع دعم دقة 4K وسرعة تحميل فائقة بفضل قرص SSD SSD المتطور.",
      price: 23000,
      count: 18,
      onSale: true,
    },
    {
      id: 9,
      title: "Logitech MX Master 3S Mouse",
      description:
        "ماوس لاسلكي مريح للغاية مع نقرات صامتة وعجلة تمرير فائقة السرعة.",
      price: 4200,
      count: 60,
      onSale: false,
    },
    {
      id: 10,
      title: "LG C2 55-inch OLED TV",
      description:
        "شاشة تلفزيون ذكية فائقة الوضوح مع معدل تحديث 120Hz مثالية للألعاب.",
      price: 35000,
      count: 7,
      onSale: true,
    },
    {
      id: 11,
      title: "Google Pixel 7 Pro",
      description:
        "تجربة أندرويد الخام مع أفضل معالجة صور لكاميرا الهاتف عبر معالج Tensor G2.",
      price: 29000,
      count: 22,
      onSale: false,
    },
    {
      id: 12,
      title: "AirPods Pro Gen 2",
      description: "إلغاء ضوضاء نشط مضاعف وصوت مكاني مخصص مع علبة شحن MagSafe.",
      price: 9800,
      count: 50,
      onSale: true,
    },
    {
      id: 13,
      title: "Asus ROG Zephyrus G14",
      description:
        "لابتوب ألعاب قوي وشاشة 120Hz مع معالج Ryzen 9 وكارت شاشة RTX 3060.",
      price: 54000,
      count: 10,
      onSale: false,
    },
    {
      id: 14,
      title: "Anker PowerCore 20000mAh",
      description:
        "شاحن متنقل عالي السعة بقدرة شحن سريعة لجميع الأجهزة الذكية.",
      price: 1800,
      count: 100,
      onSale: true,
    },
    {
      id: 15,
      title: "Bose SoundLink Flex Speaker",
      description: "سماعة بلوتوث مقاومة للماء والغبار مع صوت نقي ومتوازن.",
      price: 5500,
      count: 35,
      onSale: false,
    },
    {
      id: 16,
      title: "Xiaomi Mi Smart Band 7",
      description:
        "سوار رياضي بشاشة AMOLED وتتبع لنسبة الأكسجين في الدم و120 وضع رياضي.",
      price: 1500,
      count: 80,
      onSale: true,
    },
    {
      id: 17,
      title: "Canon EOS R6 Mark II",
      description:
        "كاميرا بدون مرآة (Mirrorless) احترافية للتصوير الفوتوغرافي والفيديو 4K.",
      price: 95000,
      count: 4,
      onSale: false,
    },
    {
      id: 18,
      title: "Samsung Odyssey G7 Monitor",
      description:
        "شاشة ألعاب منحنية مقاس 27 بوصة بمعدل تحديث 240Hz وزمن استجابة 1ms.",
      price: 21000,
      count: 14,
      onSale: true,
    },
    {
      id: 19,
      title: "Keychron K2 Mechanical Keyboard",
      description:
        "لوحة مفاتيح ميكانيكية لاسلكية تدعم نظامي Windows و Mac مع إضاءة RGB.",
      price: 3600,
      count: 40,
      onSale: false,
    },
    {
      id: 20,
      title: "Kindle Paperwhite",
      description:
        "قارئ إلكتروني بشاشة 6.8 بوصة غير عاكسة وإضاءة دافئة قابلة للتعديل.",
      price: 4500,
      count: 25,
      onSale: true,
    },
    {
      id: 21,
      title: "OnePlus 11 5G",
      description:
        "هاتف قوي مع شحن سريع بقدرة 100W وكاميرات بالتعاون مع Hasselblad.",
      price: 27000,
      count: 19,
      onSale: false,
    },
    {
      id: 22,
      title: "Nintendo Switch OLED",
      description: "منصة ألعاب محمولة بشاشة OLED زاهية الألوان مقاس 7 بوصة.",
      price: 14500,
      count: 30,
      onSale: true,
    },
    {
      id: 23,
      title: "HP Spectre x360",
      description: "لابتوب 2 في 1 بشاشة لمس ممتازة وتصميم معدني فاخر.",
      price: 48000,
      count: 9,
      onSale: false,
    },
    {
      id: 24,
      title: "Razer DeathAdder V3 Pro",
      description: "ماوس ألعاب لاسلكي خفيف الوزن بشكل فائق ومستشعر دقيق جداً.",
      price: 5200,
      count: 28,
      onSale: true,
    },
    {
      id: 25,
      title: "GoPro HERO11 Black",
      description:
        "كاميرا مغامرات وصدمات مع تصوير فيديو بدقة 5.3K وتثبيت ممتاز للصورة.",
      price: 17500,
      count: 16,
      onSale: false,
    },
    {
      id: 26,
      title: "Sonos Arc Soundbar",
      description: "عارضة صوتية فاخرة تدعم Dolby Atmos لتجربة سينمائية منزلية.",
      price: 32000,
      count: 6,
      onSale: true,
    },
    {
      id: 27,
      title: "Microsoft Surface Pro 9",
      description:
        "جهاز لوحي يعمل بنظام Windows 11 ويتحول إلى لابتوب بكفاءة عالية.",
      price: 42000,
      count: 11,
      onSale: false,
    },
    {
      id: 28,
      title: "HyperX Cloud II Gaming Headset",
      description:
        "سماعة ألعاب مع صوت محيطي 7.1 ووسائد أذن مريحة للاستخدام الطويل.",
      price: 3100,
      count: 55,
      onSale: true,
    },
    {
      id: 29,
      title: "Samsung Galaxy Tab S8 Ultra",
      description: "تِابلت ضخم بشاشة 14.6 بوصة AMOLED مع أداء رائع للإنتاجية.",
      price: 36000,
      count: 8,
      onSale: false,
    },
    {
      id: 30,
      title: "DJI Mini 3 Pro Drone",
      description:
        "طائرة بدون طيار خفيفة الوزن مع كاميرا 4K وتجنب العوائق بنظام متطور.",
      price: 31000,
      count: 13,
      onSale: true,
    },
    {
      id: 31,
      title: "Nothing Phone (2)",
      description: "تصميم شفاف مبتكر مع إضاءة Glyph المميزة وأداء متوازن.",
      price: 22000,
      count: 21,
      onSale: false,
    },
    {
      id: 32,
      title: "Garmin Fenix 7 Solar",
      description:
        "ساعة ذكية للمغامرات شمسية الشحن مع خرائط وتقنيات تتبع متقدمة.",
      price: 28000,
      count: 10,
      onSale: true,
    },
    {
      id: 33,
      title: "Elgato Stream Deck MK.2",
      description:
        "وحدة تحكم لصناع المحتوى والستريمرز مع 15 مفتاح LCD قابل للتخصيص.",
      price: 5800,
      count: 22,
      onSale: false,
    },
    {
      id: 34,
      title: "SteelSeries Arctis Nova Pro",
      description:
        "سماعة ألعاب احترافية مع نظام إلغاء الضوضاء وبطاريات قابلة للتبديل.",
      price: 12500,
      count: 17,
      onSale: true,
    },
    {
      id: 35,
      title: "Lenovo Legion 5 Pro",
      description:
        "لابتوب ألعاب متوازن بقوة معالجة عالية وشاشة بدقة QHD ومعدل 165Hz.",
      price: 46000,
      count: 14,
      onSale: false,
    },
    {
      id: 36,
      title: "Sennheiser Momentum 4",
      description: "سماعات لاسلكية بعمر بطارية يمتد لـ 60 ساعة وصوت استثنائي.",
      price: 13000,
      count: 24,
      onSale: true,
    },
    {
      id: 37,
      title: "Anker Nebula Capsule Projector",
      description:
        "بروجيكتور محمول بحجم علبة المشروبات يعطي عرضاً واضحاً ونقياً.",
      price: 11500,
      count: 15,
      onSale: false,
    },
    {
      id: 38,
      title: "Xbox Series X",
      description: "أقوى منصة ألعاب من أبل بذاكرة SSD سريعة ودعم ألعاب 4K.",
      price: 22500,
      count: 19,
      onSale: true,
    },
    {
      id: 39,
      title: "Shure SM7B Microphone",
      description:
        "ميكروفون ديناميكي احترافي لتسجيل البودكاست والغناء وأعلى جودة للصوت.",
      price: 16000,
      count: 11,
      onSale: false,
    },
    {
      id: 40,
      title: "Western Digital 2TB NVMe SSD",
      description:
        "قرص تخزين داخلي سريع جداً لنقل البيانات بسرعة تصل لـ 7000 ميجابايت/ثانية.",
      price: 6500,
      count: 70,
      onSale: true,
    },
  ]);

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    console.log(`Count: ${count + 1}`);
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-3xl font-bold text-white">Test Component</h1>
        <p className="text-lg text-gray-400">
          This is a test component to demonstrate the increment function.
        </p>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={increment}
        >
          Increment
        </button>
        <p className="text-xl font-bold text-blue-500">Value: {count}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product) => (
            <ChildTest product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
