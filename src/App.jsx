import { Fragment } from "react";
import { Route, Routes } from "react-router";
import HomePage from "@pages/HomePage";
import MembersPage from "@pages/MembersPage";
import GalleryPage from "@pages/GalleryPage";
import LeaderboardPage from "@pages/LeaderboardPage";
import TechnicalIssuePage from "@pages/TechnicalIssuePage";
import SideDrawer from "@components/SideDrawer";

import "./App.sass";

function App() {
  const details = [
    {
      id: 0,
      name: "سعيد عبدالناصر",
      date: "25.9.2021",
      tags: ["هيئة التحزيب", "عمود", "SC", "SSSSNOA", "نويبع", "سكلّي"],
      rating: 5,
      points: 113232,
      role: "عمود",
      quote:
        "I choose to feel good. I choose to feel free. I will fight for everything I love forever. And I will love everything that I fight for, forever.",
      face: ["https://iili.io/HpXlLyG.png", "https://iili.io/HpXlsvs.png"],
      images: [
        [
          "https://iili.io/HpXMM12.webp",
          "https://iili.io/HpXMVgS.webp",
          "center",
        ],
        ["https://iili.io/HpXM1s4.webp", "https://iili.io/HpXMGql.webp", "top"],
        [
          "https://iili.io/HpXMXd7.webp",
          "https://iili.io/HpXMh79.webp",
          "center",
        ],
        [
          "https://iili.io/HpXMwmu.webp",
          "https://iili.io/HpXMOzb.webp",
          "center",
        ],
        [
          "https://iili.io/HpXMeXj.webp",
          "https://iili.io/HpXM8qQ.webp",
          "center",
        ],
      ],
    },
    {
      id: 1,
      name: "عبدالرحمن رينجو",
      date: "25.9.2019",
      tags: ["عبودة الجيهة", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 4.5,
      points: 45857,
      role: "عمود",
      quote: `فوسط الموت انا بحط اخواتي. فقلب الحتة انا عايش بالسيرة. فقلب النار انا واقف بأخواتي. فكل حتة انا بعلم فيها. فكل حتة انا بعلي الجيهة. فأي حتة انا معلم فيها `,
      face: ["https://iili.io/HpXlOva.png", "https://iili.io/HpXlNYg.png"],
      images: [
        [
          "https://iili.io/HpXMS1V.jpg",
          "https://iili.io/HpXMUrB.jpg",
          "center",
        ],
        ["https://iili.io/HpXMrdP.jpg", "https://iili.io/HpXM471.jpg", "top"],
        [
          "https://iili.io/HpXM6kF.jpg",
          "https://iili.io/HpXMPmg.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXMQLv.jpg",
          "https://iili.io/HpXMD1p.jpg",
          "center",
        ],
        ["https://iili.io/HpXV2hG.jpg", "https://iili.io/HpXVKB4.jpg", "top"],
      ],
    },
    {
      id: 2,
      name: "ادهم علي",
      date: "25.9.2020",
      tags: [
        "هيئة التحزيب",
        "عمود",
        "شايل ؤس",
        "CS",
        "SSSSNOA",
        "بب دلن",
        "Moderate Consumption",
        "نويبع",
        "سكلّي",
      ],
      rating: 5,
      points: 84717,
      role: "عمود",
      quote:
        "We're nothing, and nothing will help us. Maybe we're lying, then you better not stay. But we could be safer, just for one day.",
      face: ["https://iili.io/HpXcy7a.png", "https://iili.io/HpXcpdg.png"],
      images: [
        [
          "https://iili.io/HpXVq42.jpg",
          "https://iili.io/HpXVC2S.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXVnY7.jpg",
          "https://iili.io/HpXVov9.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXVxpe.jpg",
          "https://iili.io/HpXVITu.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXVuQj.jpg",
          "https://iili.io/HpXVRCx.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXVa3B.jpg",
          "https://iili.io/HpXVcYP.jpg",
          "center",
        ],
      ],
    },
    {
      id: 3,
      name: "باسل",
      date: "25.4.2022",
      tags: [
        "مفيش فركة؟",
        "SC",
        "Moderate Cosumption",
        "نويبع",
        "د. أحمد صلاح",
        "سول جودمان",
        "سكلّي",
      ],
      rating: 4.5,
      points: 8690,
      role: "عضو",
      quote: `أنا ابويا رباني مدير. أنا أبويا رباني مهندس`,
      face: ["https://iili.io/HpXlian.png", "https://iili.io/HpXlP3X.png"],
      images: [
        [
          "https://iili.io/HpXVETg.jpg",
          "https://iili.io/HpXVMZJ.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXVh4p.jpg",
          "https://iili.io/HpXVNaI.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXVOvt.jpg",
          "https://iili.io/HpXVvun.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXV46l.jpg",
          "https://iili.io/HpXViaS.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXVs87.jpg",
          "https://iili.io/HpXVQ99.jpg",
          "center",
        ],
      ],
    },
    {
      id: 4,
      name: "عمر يس",
      date: "25.9.2021",
      tags: [
        "هيئة التحزيب",
        "عمود",
        "gasten beber",
        "مدير القروب",
        "IS IS IS IS",
        "شنش",
        "SSSNOA",
        "ظاظا",
        "نويبع",
      ],
      rating: 5,
      points: 153068,
      role: "عمود",
      quote: `.عشان كل يوم بطقم جديد, فأفتكروني بتاع حشيش. شافوني شوفة خيش. فا حبيت اوضح. شباب شباشب علي مفيش`,
      face: ["https://iili.io/HpXl0pj.png", "https://iili.io/HpXllkb.png"],
      images: [
        [
          "https://iili.io/HpXVDZb.webp",
          "https://iili.io/HpXVpMx.webp",
          "center",
        ],
        [
          "https://iili.io/HpXWHFV.webp",
          "https://iili.io/HpXW391.webp",
          "center",
        ],
        [
          "https://iili.io/HpXWKwg.webp",
          "https://iili.io/HpXWBoJ.webp",
          "center",
        ],
        [
          "https://iili.io/HpXWRNn.webp",
          "https://iili.io/HpXW5ts.webp",
          "center",
        ],
        [
          "https://iili.io/HpXWYoG.webp",
          "https://iili.io/HpXWaVf.webp",
          "center",
        ],
      ],
    },
    {
      id: 5,
      name: "زياد حسن",
      date: "25.9.2021",
      tags: ["هيئة التحزيب", "عمود", "حمأمأ", "IS IS IS IS"],
      rating: 5,
      points: 92211,
      role: "عمود",
      quote:
        "رزقنا, الرزق على الله. دربنا, خليها على الله, بعشق الدروب و الدروب قلوب. و يهون الله.",
      face: ["https://iili.io/HpXlRBS.png", "https://iili.io/HpXluQ2.png"],
      images: [
        ["https://iili.io/HpXWcP4.jpg", "https://iili.io/HpXW0Kl.jpg", "top"],
        [
          "https://iili.io/HpXW1l2.jpg",
          "https://iili.io/HpXWESS.jpg",
          "center",
        ],
        ["https://iili.io/HpXWMH7.jpg", "https://iili.io/HpXWVR9.jpg", "top"],
        [
          "https://iili.io/HpXWWNe.jpg",
          "https://iili.io/HpXWXDu.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXWjob.jpg",
          "https://iili.io/HpXWwVj.jpg",
          "center",
        ],
      ],
    },
    {
      id: 6,
      name: "عمر مرشدي",
      date: "25.9.2021",
      tags: ["CSYS", "بيكره ياسمين عفيف", "بوردة"],
      rating: 4.5,
      points: 30105,
      role: "عضو",
      quote:
        "ابيع نفسي لأول مشترِ اتٍ. ابيع نفسي مقهورا حبيباتي كلماتي. فليسقط الشعر و لتنهار ابياتي. فالشعر شعري و المأساة مأساتي.",
      face: ["https://iili.io/HpX0Jae.png", "https://iili.io/HpX0HF9.png"],
      images: [
        ["https://iili.io/HpXWNix.jpg", "https://iili.io/HpXWeKQ.jpg", "top"],
        [
          "https://iili.io/HpXWklV.jpg",
          "https://iili.io/HpXWvUB.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXWSHP.jpg",
          "https://iili.io/HpXWUR1.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXWrDg.jpg",
          "https://iili.io/HpXW6xa.jpg",
          "center",
        ],
        ["https://iili.io/HpXWPWJ.jpg", "https://iili.io/HpXWiiv.jpg", "top"],
      ],
    },
    {
      id: 7,
      name: "محمد عصام",
      date: "25.9.2021",
      tags: ["SC", "صنم صميم"],
      rating: 1,
      points: 31,
      role: "صنم",
      quote:
        "اقر انا المذكور اعلاة. ساكن بالعنوان اياة. بان الصبر على صبر. طعم المر فى قلبى فضل. يمرر فية ولا عمرة قدر. يغير حبك من جواة.",
      face: ["https://iili.io/HpX02yb.png", "https://iili.io/HpX0d8u.png"],
      images: [
        [
          "https://iili.io/HpXWLfR.jpg",
          "https://iili.io/HpXWQlp.jpg",
          "center",
        ],
        ["https://iili.io/HpXWZUN.jpg", "https://iili.io/HpXWDJI.jpg", "top"],
        [
          "https://iili.io/HpXWbRt.jpg",
          "https://iili.io/HpXWpbn.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXX9xs.jpg",
          "https://iili.io/HpXXHWG.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXXJsf.jpg",
          "https://iili.io/HpXX2f4.jpg",
          "center",
        ],
      ],
    },
    {
      id: 8,
      name: "أحمد توفيق",
      date: "25.9.2021",
      tags: ["CS", "ReaktJS", "سكلّي", "فورمة", "horseman"],
      rating: 4,
      points: 17088,
      role: "عضو",
      quote: `"These are the days we won't forget, and we'll be the ones to take the first step." - Imagine Dragons (On Top of the World)`,
      face: ["https://iili.io/HpXcrdu.png", "https://iili.io/HpXcUge.png"],
      images: [
        [
          "https://iili.io/HpXX30l.jpg",
          "https://iili.io/HpXXfJS.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXXBe9.jpg",
          "https://iili.io/HpXXCbe.jpg",
          "center",
        ],
        ["https://iili.io/HpXXozu.jpg", "https://iili.io/HpXXzsj.jpg", "top"],
        [
          "https://iili.io/HpXXTqx.jpg",
          "https://iili.io/HpXXAgV.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXXYe1.jpg",
          "https://iili.io/HpXX0Xa.jpg",
          "center",
        ],
      ],
    },
    {
      id: 9,
      name: "إسلام عصام",
      date: "25.9.2021",
      tags: ["CS", "المطرية", "العزبة", "horseman", "الغضب", "سكلّي"],
      rating: 3,
      points: 5387,
      role: "عضو",
      quote: `Through every verse, in joy or strife, we're united by the thread of life.`,
      face: ["https://iili.io/HpXltj4.png", "https://iili.io/HpXlZuf.png"],
      images: [
        [
          "https://iili.io/HpXX1LJ.jpg",
          "https://iili.io/HpXXGqv.jpg",
          "center",
        ],
        ["https://iili.io/HpXXVgp.jpg", "https://iili.io/HpXXXdN.jpg", "top"],
        [
          "https://iili.io/HpXXh7I.jpg",
          "https://iili.io/HpXXjet.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXXwmX.jpg",
          "https://iili.io/HpXXOIn.jpg",
          "center",
        ],
        ["https://iili.io/HpXXeXs.jpg", "https://iili.io/HpXXkLG.jpg", "top"],
      ],
    },
    {
      id: 10,
      name: "كريم سعفان",
      date: "25.9.2021",
      tags: [
        "IS IS IS IS",
        "فيزو",
        "قلب مفتوح",
        "شنش",
        "Daredevil",
        "عمود",
        "مات موردوك",
      ],
      rating: 5,
      points: 62997,
      role: "عمود",
      quote: `Yeah, I think about the end just way too much. But, it's fun to fantasize`,
      face: ["https://iili.io/HpXcbrF.png", "https://iili.io/HpXcD11.png"],
      images: [
        [
          "https://iili.io/HpXX8Bf.jpg",
          "https://iili.io/HpXXS14.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXXUrl.jpg",
          "https://iili.io/HpXXr22.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXX47S.jpg",
          "https://iili.io/HpXX6k7.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXXPp9.jpg",
          "https://iili.io/HpXXsIe.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXXLhu.jpg",
          "https://iili.io/HpXXQLb.jpg",
          "center",
        ],
      ],
    },
    {
      id: 11,
      name: "ايمن مصطفى",
      date: "25.9.2021",
      tags: ["شقة السابع", "الطالب المثلي", "مرعي الكوكو", "SC"],
      rating: 4.5,
      points: 31341,
      role: "عضو",
      quote:
        "وفي نهاية هذه الرحلة الغريبة جدا خرجنا ببعض الدروس، بعض الجروح والكثير الكثير الكثير من الجلد السميك وهيك شغلات، فشكراً لاستماعكم وشكراً لكل ما حصل",
      face: ["https://iili.io/HpXl749.png", "https://iili.io/HpXl5E7.png"],
      images: [
        [
          "https://iili.io/HpXXtBj.jpg",
          "https://iili.io/HpXXDEx.jpg",
          "center",
        ],
        ["https://iili.io/HpXXbrQ.jpg", "https://iili.io/HpXXp2V.jpg", "top"],
        [
          "https://iili.io/HpXXyYB.jpg",
          "https://iili.io/HpXh9kP.jpg",
          "center",
        ],
        ["https://iili.io/HpXhHp1.jpg", "https://iili.io/HpXhdTF.jpg", "top"],
        [
          "https://iili.io/HpXh3Qa.jpg",
          "https://iili.io/HpXhKCJ.jpg",
          "center",
        ],
      ],
    },
    {
      id: 12,
      name: "كيمو كونو",
      date: "25.9.2021",
      tags: ["IS IS IS IS", "Teleperformance"],
      rating: 2.5,
      points: 0,
      role: "صنم",
      quote:
        "In peace , may you rest. Never ever shoot below the neck, never ever. You a rookie, I'm a vet. That's why I got a Glock, you got a TEC.",
      face: ["https://iili.io/HpXlokG.png", "https://iili.io/HpXln7s.png"],
      images: [
        [
          "https://iili.io/HpXhq4R.jpg",
          "https://iili.io/HpXhxpt.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXhRCG.jpg",
          "https://iili.io/HpXh5Gf.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXh744.jpg",
          "https://iili.io/HpXhca2.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXh0y7.jpg",
          "https://iili.io/HpXhMZu.jpg",
          "center",
        ],
        ["https://iili.io/HpXhXGj.jpg", "https://iili.io/HpXhh6x.jpg", "top"],
      ],
    },
    {
      id: 13,
      name: "أحمد عوض",
      date: "25.9.2021",
      tags: [
        "SC",
        "شقة السابع",
        "الغباشي",
        "alafrike",
        "هيئة التحزيب",
        "عمود",
        "صميم صميم صميم",
        "البابا",
        "سكلّي",
      ],
      rating: 5,
      points: 75948,
      role: "عمود",
      quote: `مجنووووون الافريقي مطرقع وفاجر و مطرشم وكل حاجة عايز تقول عليها قولها `,
      face: ["https://iili.io/HpXlpGS.png", "https://iili.io/HpXlmn2.png"],
      images: [
        [
          "https://iili.io/HpXhNaV.jpg",
          "https://iili.io/HpXhO8B.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXheyP.jpg",
          "https://iili.io/HpXhvu1.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXh8wF.jpg",
          "https://iili.io/HpXhSZg.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXhgna.jpg",
          "https://iili.io/HpXhrMJ.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXh46v.jpg",
          "https://iili.io/HpXhPFR.jpg",
          "center",
        ],
      ],
    },
    {
      id: 14,
      name: "زياد أشرف",
      date: "25.9.2021",
      tags: ["حرفوش", "IS IS IS IS"],
      rating: 2.5,
      points: 697,
      role: "مستجد",
      quote: "الاحلام مجانا و انا حلمت اكون امير. بقينا ملوك و بننفذ علي كبير",
      face: ["https://iili.io/HpXlcYu.png", "https://iili.io/HpXla2e.png"],
      images: [
        [
          "https://iili.io/HpXhiap.jpg",
          "https://iili.io/HpXhs8N.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXhQ9I.jpg",
          "https://iili.io/HpXhZut.jpg",
          "center",
        ],
        ["https://iili.io/HpXhtwX.jpg", "https://iili.io/HpXhDtn.jpg", "top"],
        [
          "https://iili.io/HpXhmns.jpg",
          "https://iili.io/HpXhpMG.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXjJcl.jpg",
          "https://iili.io/HpXjdS2.jpg",
          "center",
        ],
      ],
    },
    {
      id: 15,
      name: "حازم مسعد",
      date: "25.9.2021",
      tags: ["CS", "حازم مصعب", "جيار سابق", "زيد خالد", "عباسية"],
      rating: 4,
      points: 3774,
      role: "مستجد",
      quote: "I can make your Mondays even better like the weekend.",
      face: ["https://iili.io/HpXcS19.png", "https://iili.io/HpXcjef.png"],
      images: [
        [
          "https://iili.io/HpXjKN9.jpg",
          "https://iili.io/HpXjfte.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXjBou.jpg",
          "https://iili.io/HpXjCMb.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXjuHB.jpg",
          "https://iili.io/HpXjAAP.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXj5DF.jpg",
          "https://iili.io/HpXjYog.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXjciJ.jpg",
          "https://iili.io/HpXj1lR.jpg",
          "center",
        ],
      ],
    },
    {
      id: 16,
      name: "زياد بدوي",
      date: "25.9.2021",
      tags: ["CSYS", "تعبان"],
      rating: 3.5,
      points: 4621,
      role: "عضو",
      quote:
        "Sí, sabes que ya llevo un rato mirándote. Tengo que bailar contigo hoy (DY). Vi que tu mirada ya estaba llamándome. Muéstrame el camino que yo voy.",
      face: ["https://iili.io/HpXlw3F.png", "https://iili.io/HpXlh41.png"],
      images: [
        [
          "https://iili.io/HpXjESp.jpg",
          "https://iili.io/HpXjMHN.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXjVRI.jpg",
          "https://iili.io/HpXjWNt.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXjXDX.jpg",
          "https://iili.io/HpXjwVs.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXjNiG.jpg",
          "https://iili.io/HpXjeff.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXjvUl.jpg",
          "https://iili.io/HpXjSJ2.jpg",
          "center",
        ],
      ],
    },
    {
      id: 17,
      name: "حسن شناوي",
      date: "25.9.2021",
      tags: ["SC", "شنو", "عمر مرموش pro max", "كريم مازيكا"],
      rating: 3,
      points: 1465,
      role: "مستجد",
      quote: "I've got a fire in my soul, and I won't let it die",
      face: ["https://iili.io/HpXl8jR.png", "https://iili.io/HpXlvTv.png"],
      images: [
        [
          "https://iili.io/HpXjURS.jpg",
          "https://iili.io/HpXjgO7.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXjrb9.jpg",
          "https://iili.io/HpXjPWu.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXjiib.jpg",
          "https://iili.io/HpXjLfj.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXjQ0x.jpg",
          "https://iili.io/HpXjZUQ.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXjDJV.jpg",
          "https://iili.io/HpXjb5B.jpg",
          "center",
        ],
      ],
    },
    {
      id: 18,
      name: "محمد عبدالقادر",
      date: "25.9.2021",
      tags: ["CS", "كاتا", "راجل مظبوط", "بطل العالم"],
      rating: 2.5,
      points: 0,
      role: "صنم",
      quote: "Believe to achieve",
      face: ["https://iili.io/HpXlXEP.png", "https://iili.io/HpXlWCB.png"],
      images: [
        [
          "https://iili.io/HpXjmOP.jpg",
          "https://iili.io/HpXjpb1.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXw9zF.jpg",
          "https://iili.io/HpXwJsa.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXw2qJ.jpg",
          "https://iili.io/HpXw30v.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXwfJp.jpg",
          "https://iili.io/HpXwq5N.jpg",
          "center",
        ],
        ["https://iili.io/HpXwBeI.jpg", "https://iili.io/HpXwCbt.jpg", "top"],
      ],
    },
    {
      id: 19,
      name: "إسلام كافكا",
      date: "25.9.2021",
      tags: ["كسر الموبيل", "كفاني", "Cyber"],
      rating: 3.5,
      points: 22148,
      role: "عضو",
      quote: `الاماني عالية بس الواقع زفت`,
      face: ["https://iili.io/HpX0n6P.png", "https://iili.io/HpX0CMB.png"],
      images: [
        [
          "https://iili.io/HpXwxXn.jpg",
          "https://iili.io/HpXwxXn.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXwTqG.jpg",
          "https://iili.io/HpXwTqG.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXwAg4.jpg",
          "https://iili.io/HpXwAg4.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXw772.jpg",
          "https://iili.io/HpXw772.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXwam7.jpg",
          "https://iili.io/HpXwam7.jpg",
          "center",
        ],
      ],
    },
    {
      id: 20,
      name: "محمد معتز",
      date: "25.9.2021",
      tags: ["CS"],
      rating: 2.5,
      points: 0,
      role: "صنم",
      quote: "",
      face: ["https://iili.io/HpXctqP.png", "https://iili.io/HpXcQLB.png"],
      images: [
        [
          "https://iili.io/HpXw0Xe.jpg",
          "https://iili.io/HpXw1Lu.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXwGqb.jpg",
          "https://iili.io/HpXwM1j.jpg",
          "center",
        ],
        ["https://iili.io/HpXwVrx.jpg", "https://iili.io/HpXwXdQ.jpg", "top"],
        [
          "https://iili.io/HpXwjkB.jpg",
          "https://iili.io/HpXwwmP.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXwOI1.jpg",
          "https://iili.io/HpXwehF.jpg",
          "center",
        ],
      ],
    },
    {
      id: 21,
      name: "محمد مجدي",
      date: "25.9.2021",
      tags: ["SC", "لذيذ", "FL studio", "امممممممم", "سكلّي"],
      rating: 4.5,
      points: 60660,
      role: "عضو",
      quote: `المشوار صعب و طوييل و بيمتحن الروح`,
      face: ["https://iili.io/HpXcLXV.png", "https://iili.io/HpXcszQ.png"],
      images: [
        ["https://iili.io/HpXwkLg.jpg", "https://iili.io/HpXw8Ba.jpg", "top"],
        [
          "https://iili.io/HpXwSEJ.jpg",
          "https://iili.io/HpXwUrv.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXw47p.jpg",
          "https://iili.io/HpXw6kN.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXwPpI.jpg",
          "https://iili.io/HpXwsIt.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXwLhX.jpg",
          "https://iili.io/HpXwQQn.jpg",
          "center",
        ],
      ],
    },
    {
      id: 22,
      name: "يس",
      date: "25.9.2021",
      tags: ["IS IS IS IS", "حنكش", "يسو مقطم"],
      rating: 4,
      points: 10845,
      role: "عضو",
      quote: "كسكس تعيش تاكل قراقيش",
      face: ["https://iili.io/HpXlMQV.png", "https://iili.io/HpXlETx.png"],
      images: [
        ["https://iili.io/HpXwtBs.jpg", "https://iili.io/HpXwDEG.jpg", "top"],
        ["https://iili.io/HpXwb4f.jpg", "https://iili.io/HpXwp24.jpg", "top"],
        ["https://iili.io/HpXwyYl.jpg", "https://iili.io/HpXN9v2.jpg", "top"],
        [
          "https://iili.io/HpXNHpS.jpg",
          "https://iili.io/HpXNdT7.jpg",
          "center",
        ],
        ["https://iili.io/HpXN2j9.jpg", "https://iili.io/HpXN3Qe.jpg", "top"],
      ],
    },
    {
      id: 23,
      name: "عادل امجد ",
      date: "25.9.2021",
      tags: ["IS IS IS IS", "دولا بولا", "شقة الرابع"],
      rating: 4,
      points: 6227,
      role: "عضو",
      quote: `I played dumb, but I always knew.`,
      face: ["https://iili.io/HpX0Kwx.png", "https://iili.io/HpX0Fuj.png"],
      images: [
        [
          "https://iili.io/HpXNKCu.jpg",
          "https://iili.io/HpXNfEb.jpg",
          "center",
        ],
        ["https://iili.io/HpXNq4j.jpg", "https://iili.io/HpXNC3x.jpg", "top"],
        [
          "https://iili.io/HpXNovV.jpg",
          "https://iili.io/HpXNxyB.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXNITP.jpg",
          "https://iili.io/HpXNuZF.jpg",
          "center",
        ],
        ["https://iili.io/HpXN5Ga.jpg", "https://iili.io/HpXN76J.jpg", "top"],
      ],
    },
    {
      id: 24,
      name: "محمد بدوي",
      date: "25.9.2021",
      tags: ["SC", "كتيبة الإعدام", "نسور"],
      rating: 1.5,
      points: 122,
      role: "مستجد",
      quote: "في السما عالي صعب تكون مكاني مجتش بالسهال مفيش حاجة مجاني",
      face: ["https://iili.io/HpXlII4.png", "https://iili.io/HpXlxpf.png"],
      images: [
        [
          "https://iili.io/HpXNa3v.jpg",
          "https://iili.io/HpXNcaR.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXNlvp.jpg",
          "https://iili.io/HpXN0yN.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXNGjt.jpg",
          "https://iili.io/HpXNMZX.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXNWnn.jpg",
          "https://iili.io/HpXNXGs.jpg",
          "center",
        ],
        ["https://iili.io/HpXNNa4.jpg", "https://iili.io/HpXNO8l.jpg", "top"],
      ],
    },
    {
      id: 25,
      name: "دعبس",
      date: "25.9.2021",
      tags: ["IS IS IS IS", "أدمن لايحة قديمة", "المطرية"],
      rating: 4,
      points: 11184,
      role: "عضو",
      quote: "اللي معاه ربنا يمشي علي المايه ",
      face: ["https://iili.io/HpXlHmv.png", "https://iili.io/HpXl9kJ.png"],
      images: [
        ["https://iili.io/HpXNvuS.jpg", "https://iili.io/HpXNSt9.jpg", "top"],
        [
          "https://iili.io/HpXNgne.jpg",
          "https://iili.io/HpXNrMu.jpg",
          "center",
        ],
        ["https://iili.io/HpXN46b.jpg", "https://iili.io/HpXNicx.jpg", "top"],
        [
          "https://iili.io/HpXNs8Q.jpg",
          "https://iili.io/HpXNQ9V.jpg",
          "center",
        ],
        ["https://iili.io/HpXNtwP.jpg", "https://iili.io/HpXNDt1.jpg", "top"],
      ],
    },
    {
      id: 26,
      name: "عمر خالد",
      date: "25.9.2021",
      tags: [
        "SC",
        "السمعة الطيبة",
        "عمر خالخ",
        "نائب مدير القرب (سابقا)",
        "سكلّي",
      ],
      rating: 4.5,
      points: 47526,
      role: "عضو",
      quote: `لو خلص الفول انا مش مسئول`,
      face: ["https://iili.io/HpX0BnV.png", "https://iili.io/HpX0fZQ.png"],
      images: [
        ["https://iili.io/HpXNmoF.jpg", "https://iili.io/HpXNpMg.jpg", "top"],
        [
          "https://iili.io/HpXNyPa.jpg",
          "https://iili.io/HpXOHKJ.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXOJcv.jpg",
          "https://iili.io/HpXOdSR.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXO39p.jpg",
          "https://iili.io/HpXOFAN.jpg",
          "center",
        ],
        ["https://iili.io/HpXOKNI.jpg", "https://iili.io/HpXOftt.jpg", "top"],
      ],
    },
    {
      id: 27,
      name: "چيمي",
      date: "25.9.2021",
      tags: ["SC", "جمجوم", "شنش", "لولي", "player"],
      rating: 2,
      points: 154,
      role: "مستجد",
      quote:
        "Look within, there is nothing outside of yourself that can ever enable you to get any better, stronger, richer or smarter. Everything is within, Seek nothing outside of yourself.",
      face: ["https://iili.io/HpXcPmx.png", "https://iili.io/HpXc45b.png"],
      images: [
        [
          "https://iili.io/HpXOBoX.jpg",
          "https://iili.io/HpXOCVn.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXOzlf.jpg",
          "https://iili.io/HpXOIS4.jpg",
          "center",
        ],
        ["https://iili.io/HpXOuHl.jpg", "https://iili.io/HpXOAR2.jpg", "top"],
        [
          "https://iili.io/HpXORNS.jpg",
          "https://iili.io/HpXO5D7.jpg",
          "center",
        ],
        ["https://iili.io/HpXOYx9.jpg", "https://iili.io/HpXOaVe.jpg", "top"],
      ],
    },
    {
      id: 28,
      name: "محمود نورالدين",
      date: "25.9.2021",
      tags: ["SC (دفعة اصغر)", "روميو", "بشمهندس", "Anthony Fontana", "نويبع"],
      rating: 2.5,
      points: 248,
      role: "مستجد",
      quote: `كل مرة بتكبر لحالك لازم تحسب حساب اخوك. `,
      face: ["https://iili.io/HpXlf1t.png", "https://iili.io/HpXl3LN.png"],
      images: [
        [
          "https://iili.io/HpXOciu.jpg",
          "https://iili.io/HpXO0Kb.jpg",
          "center",
        ],
        ["https://iili.io/HpXO1lj.jpg", "https://iili.io/HpXOEUx.jpg", "top"],
        [
          "https://iili.io/HpXOMHQ.jpg",
          "https://iili.io/HpXOVRV.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXOWOB.jpg",
          "https://iili.io/HpXOXDP.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXOwWF.jpg",
          "https://iili.io/HpXONig.jpg",
          "center",
        ],
      ],
    },
    {
      id: 29,
      name: "فوزي",
      date: "25.9.2021",
      tags: [
        "CSYS",
        "معاه عجله",
        "العاشر",
        "كيندرك",
        "مستر مورال",
        "راين جوزلينج احيانا",
        "الاركي",
        "فريدة",
        "سوكا",
        "سكلّي",
        "ناتشو فارجا",
      ],
      rating: 4.5,
      points: 24329,
      role: "عضو",
      quote: `My best days are stress days.`,
      face: ["https://iili.io/HpXlgCN.png", "https://iili.io/HpXlSQp.png"],
      images: [
        [
          "https://iili.io/HpXOefa.jpg",
          "https://iili.io/HpXOk0J.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXOvUv.jpg",
          "https://iili.io/HpXOSJR.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXOURp.jpg",
          "https://iili.io/HpXOrbI.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXO6xt.jpg",
          "https://iili.io/HpXOPWX.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXOisn.jpg",
          "https://iili.io/HpXOLfs.jpg",
          "center",
        ],
      ],
    },
    {
      id: 30,
      name: "زياد عجرودي",
      date: "25.9.2021",
      tags: ["IS IS IS IS", "كومبيوتنج", "ماتريكس"],
      rating: 3,
      points: 2318,
      role: "عضو",
      quote:
        "I've been in a rut, ducked off from the sun. Bit my gun with my black gold gums. I'm no fun, I'm no fun.",
      face: ["https://iili.io/HpXl44t.png", "https://iili.io/HpXlrGI.png"],
      images: [
        [
          "https://iili.io/HpXOZgf.jpg",
          "https://iili.io/HpXODJ4.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXOb5l.jpg",
          "https://iili.io/HpXOme2.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXOpbS.jpg",
          "https://iili.io/HpXe9z7.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXeHX9.jpg",
          "https://iili.io/HpXeJse.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXe30b.jpg",
          "https://iili.io/HpXeFgj.jpg",
          "center",
        ],
      ],
    },
    {
      id: 31,
      name: "سمعان كمال",
      date: "25.9.2021",
      tags: ["فتيات انمي", "HoRi", "IS IS IS IS"],
      rating: 4,
      role: "عضو",
      quote: "アニメーションが大好きですおよび14歳未満の女の子",
      points: 25144,
      face: ["https://iili.io/HpX0zcF.png", "https://iili.io/HpX0xF1.png"],
      images: [
        ["https://iili.io/HpXefdx.jpg", "https://iili.io/HpXeq5Q.jpg", "top"],
        ["https://iili.io/HpXeBeV.jpg", "https://iili.io/HpXeCmB.jpg", "top"],
        [
          "https://iili.io/HpXeozP.jpg",
          "https://iili.io/HpXexX1.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXezLF.jpg",
          "https://iili.io/HpXeTqg.jpg",
          "center",
        ],
        ["https://iili.io/HpXeu1a.jpg", "https://iili.io/HpXeArJ.jpg", "top"],
      ],
    },
    {
      id: 32,
      name: "حلمي",
      date: "25.9.2021",
      tags: ["نويبع", "Moderate consumption", "بايو", "Tony Iommi", "الهوست"],
      rating: 4,
      points: 0,
      role: "عضو",
      quote:
        "The mirrors in your mind can reflect the best of yourself, not the worst of someone else",
      face: ["https://iili.io/HpXl2Xp.png", "https://iili.io/HpXldIR.png"],
      images: [
        [
          "https://iili.io/HphjKI1.jpg",
          "https://iili.io/Hphj3mP.jpg",
          "center",
        ],
        [
          "https://iili.io/HphjqLg.jpg",
          "https://iili.io/HphjfhF.jpg",
          "center",
        ],
        ["https://iili.io/HpXe1LX.jpg", "https://iili.io/HpXeGBn.jpg", "top"],
        [
          "https://iili.io/HpXeM1s.jpg",
          "https://iili.io/HpXeX2f.jpg",
          "center",
        ],
        [
          "https://iili.io/HpXeh74.jpg",
          "https://iili.io/HpXejkl.jpg",
          "center",
        ],
      ],
    },
    {
      id: 33,
      name: "حسان",
      date: "25.9.2021",
      tags: ["SC (دفعة اصغر)", "شرفي"],
      rating: 2.5,
      points: 0,
      role: "مستجد",
      quote:
        "ما لقيت ناسي..ما لقيت أهليما لقيت راحة           ما لقيت فرحة..ما لقيت طريقي، ما لقيت رفيقي",
      face: ["https://iili.io/HpXlC2n.png", "https://iili.io/HpXlqrX.png"],
      images: [
        [
          "https://iili.io/HpXewp2.jpg",
          "https://iili.io/HpXeOIS.jpg",
          "center",
        ],
        ["https://iili.io/HpXOMHQ.jpg", "https://iili.io/HpXOVRV.jpg", "top"],
        ["https://iili.io/HpXeUrb.jpg", "https://iili.io/HpXer2j.jpg", "top"],
        [
          "https://iili.io/HpXOciu.jpg",
          "https://iili.io/HpXO0Kb.jpg",
          "center",
        ],
        ["https://iili.io/HpXePpV.jpg", "https://iili.io/HpXesTB.jpg", "top"],
      ],
    },
    {
      id: 34,
      name: "مروان حاتم",
      date: "25.9.2021",
      tags: ["CS", "بيسكيت", "دحيح"],
      rating: 2.5,
      points: 0,
      role: "صنم",
      quote:
        "There is nothing impossible for those who will, try always you will never know the outcome until you try",
      face: ["https://iili.io/Hpva2Pj.png", "https://iili.io/HpvYLPf.png"],
      images: [
        [
          "https://iili.io/HpvaFKx.jpg",
          "https://iili.io/Hpv7Je9.jpg",
          "center",
        ],
        ["https://iili.io/HpvafSV.jpg", "https://iili.io/Hpv73zu.jpg", "top"],
        ["https://iili.io/HpvaBHB.jpg", "https://iili.io/Hpv7Ksj.jpg", "top"],
        [
          "https://iili.io/HpvaCAP.jpg",
          "https://iili.io/Hpv7B0Q.jpg",
          "center",
        ],
        [
          "https://iili.io/HpvaoDF.jpg",
          "https://iili.io/Hpv7odB.jpg",
          "center",
        ],
      ],
    },
  ];

  details.sort((a, b) => b.rating - a.rating);

  const members = details.map((member) => {
    return {
      id: member.id,
      name: member.name,
      face: member.face,
      role: member.role,
    };
  });

  const images = [
    [
      "https://iili.io/HpXsHhJ.jpg",
      "https://iili.io/HpXsJLv.jpg",
      1.7777777777777777,
    ],
    [
      "https://iili.io/HpXsFrN.jpg",
      "https://iili.io/HpXsf2I.jpg",
      1.3219094247246022,
    ],
    [
      "https://iili.io/HpXsBkX.jpg",
      "https://iili.io/HpXsCpn.jpg",
      1.7777777777777777,
    ],
    [
      "https://iili.io/HpXsxhG.jpg",
      "https://iili.io/HpXszQf.jpg",
      1.7777777777777777,
    ],
    [
      "https://iili.io/HpXsTB4.jpg",
      "https://iili.io/HpXsuEl.jpg",
      1.7777777777777777,
    ],
    ["https://iili.io/HpXs7Y7.jpg", "https://iili.io/HpXsYv9.jpg", 0.8],
    [
      "https://iili.io/HpXsape.jpg",
      "https://iili.io/HpXslTu.jpg",
      0.8773354995938262,
    ],
    [
      "https://iili.io/HpXs0hb.jpg",
      "https://iili.io/HpXs1Qj.jpg",
      2.1207658321060383,
    ],
    [
      "https://iili.io/HpXshYP.jpg",
      "https://iili.io/HpXsjv1.jpg",
      1.3296296296296297,
    ],
    [
      "https://iili.io/HpXswyF.jpg",
      "https://iili.io/HpXsOTg.jpg",
      1.3316892725030827,
    ],
    [
      "https://iili.io/HpXseja.jpg",
      "https://iili.io/HpXskZJ.jpg",
      1.3333333333333333,
    ],
    ["https://iili.io/HpXsr3N.jpg", "https://iili.io/HpXs6vt.jpg", 0.8],
    ["https://iili.io/HpXssun.jpg", "https://iili.io/HpXsLjs.jpg", 0.8],
    [
      "https://iili.io/HpXsDG4.jpg",
      "https://iili.io/HpXsb6l.jpg",
      0.8773354995938262,
    ],
    [
      "https://iili.io/HpXL987.jpg",
      "https://iili.io/HpXLJ99.jpg",
      1.3333333333333333,
    ],
    ["https://iili.io/HpXLCFV.jpg", "https://iili.io/HpXLncB.jpg", 0.8],
    [
      "https://iili.io/HphUqQV.jpg",
      "https://iili.io/HphUCCB.jpg",
      0.8777335984095428,
    ],
    [
      "https://iili.io/HphUnEP.jpg",
      "https://iili.io/HphUo41.jpg",
      0.8773354995938262,
    ],
    ["https://iili.io/HphUIYg.jpg", "https://iili.io/HphUTva.jpg", 0.75],
    ["https://iili.io/HphUuyJ.jpg", "https://iili.io/HphURTv.jpg", 0.75],
    [
      "https://iili.io/HphUaCN.jpg",
      "https://iili.io/HphUcGI.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphUl4t.jpg",
      "https://iili.io/HphUEan.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphUGvs.jpg",
      "https://iili.io/HphUWuf.jpg",
      0.7508650519031141,
    ],
    [
      "https://iili.io/HphUhZl.jpg",
      "https://iili.io/HphUwn2.jpg",
      1.7777777777777777,
    ],
    ["https://iili.io/HphUO67.jpg", "https://iili.io/HphUkF9.jpg", 0.75],
    [
      "https://iili.io/HphU88u.jpg",
      "https://iili.io/HphUSyb.jpg",
      1.7777777777777777,
    ],
    [
      "https://iili.io/HphU4ZQ.jpg",
      "https://iili.io/HphUPnV.jpg",
      1.7777777777777777,
    ],
    [
      "https://iili.io/HphUiMB.jpg",
      "https://iili.io/HphUs6P.jpg",
      1.7777777777777777,
    ],
    [
      "https://iili.io/HphUZcF.jpg",
      "https://iili.io/HphUt8g.jpg",
      1.7777777777777777,
    ],
    ["https://iili.io/HphUmAJ.jpg", "https://iili.io/HphUytR.jpg", 0.5625],
    [
      "https://iili.io/HphgHnp.jpg",
      "https://iili.io/HphgJMN.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphgdPI.jpg",
      "https://iili.io/Hphg3Ft.jpg",
      1.7777777777777777,
    ],
    [
      "https://iili.io/HphgKSn.jpg",
      "https://iili.io/Hphgq9s.jpg",
      2.1658206429780034,
    ],
    ["https://iili.io/HphgBAG.jpg", "https://iili.io/HphgCNf.jpg", 1.0],
    [
      "https://iili.io/Hphgxol.jpg",
      "https://iili.io/HphgzV2.jpg",
      1.0624349635796047,
    ],
    ["https://iili.io/HphgIPS.jpg", "https://iili.io/HphguK7.jpg", 1.0],
    [
      "https://iili.io/Hphg7Hu.jpg",
      "https://iili.io/HphgYAb.jpg",
      1.2872467222884387,
    ],
    ["https://iili.io/HphgaNj.jpg", "https://iili.io/HphgcDx.jpg", 1.0],
    [
      "https://iili.io/Hphg0oQ.jpg",
      "https://iili.io/Hphg1VV.jpg",
      1.1751904243743199,
    ],
    ["https://iili.io/HphgWUF.jpg", "https://iili.io/HphghHg.jpg", 1.0],
    ["https://iili.io/HphgjRa.jpg", "https://iili.io/HphgNDv.jpg", 1.0],
    ["https://iili.io/HphgviN.jpg", "https://iili.io/HphgSfI.jpg", 1.0],
    ["https://iili.io/HphgUlt.jpg", "https://iili.io/HphggUX.jpg", 1.0],
    ["https://iili.io/Hphg4Jn.jpg", "https://iili.io/Hphg6Rs.jpg", 0.75],
    ["https://iili.io/Hphgibf.jpg", "https://iili.io/HphgLx4.jpg", 0.5625],
    [
      "https://iili.io/HphgQWl.jpg",
      "https://iili.io/HphgZs2.jpg",
      1.3333333333333333,
    ],
    ["https://iili.io/HphgDfS.jpg", "https://iili.io/Hphgb07.jpg", 1.0],
    ["https://iili.io/Hphgmg9.jpg", "https://iili.io/HphgyJe.jpg", 0.8],
    ["https://iili.io/HphrHOb.jpg", "https://iili.io/Hphr2zx.jpg", 1.0],
    ["https://iili.io/Hphr3WQ.jpg", "https://iili.io/HphrFsV.jpg", 1.0],
    ["https://iili.io/HphrTzv.jpg", "https://iili.io/HphruXR.jpg", 1.0],
    ["https://iili.io/HphrAsp.jpg", "https://iili.io/Hphr71I.jpg", 1.0],
    ["https://iili.io/HphrYgt.jpg", "https://iili.io/HphrcdX.jpg", 1.0],
    [
      "https://iili.io/Hphr1mG.jpg",
      "https://iili.io/HphrGIf.jpg",
      1.6646825396825398,
    ],
    ["https://iili.io/HphrVLl.jpg", "https://iili.io/HphrXB2.jpg", 0.8],
    ["https://iili.io/Hphrh1S.jpg", "https://iili.io/Hphrjr7.jpg", 0.8],
    [
      "https://iili.io/HphrN29.jpg",
      "https://iili.io/HphrO7e.jpg",
      1.7763157894736843,
    ],
    [
      "https://iili.io/Hphreku.jpg",
      "https://iili.io/Hphrkmb.jpg",
      1.7763157894736843,
    ],
    [
      "https://iili.io/Hphr8Ij.jpg",
      "https://iili.io/HphrShx.jpg",
      1.7763157894736843,
    ],
    ["https://iili.io/Hphr4EB.jpg", "https://iili.io/Hphr6rP.jpg", 0.56171875],
    [
      "https://iili.io/Hphri21.jpg",
      "https://iili.io/HphrsYF.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphrLkg.jpg",
      "https://iili.io/HphrQpa.jpg",
      0.46142578125,
    ],
    [
      "https://iili.io/HphrtTJ.jpg",
      "https://iili.io/HphrDhv.jpg",
      1.2465277777777777,
    ],
    [
      "https://iili.io/HphrbQR.jpg",
      "https://iili.io/HphrpBp.jpg",
      0.8664259927797834,
    ],
    ["https://iili.io/Hph494I.jpg", "https://iili.io/Hph4J2t.jpg", 0.8],
    ["https://iili.io/Hph4dYX.jpg", "https://iili.io/Hph42vn.jpg", 0.8],
    [
      "https://iili.io/Hph43ps.jpg",
      "https://iili.io/Hph4KTG.jpg",
      1.336116910229645,
    ],
    [
      "https://iili.io/Hph4qQ4.jpg",
      "https://iili.io/Hph4CCl.jpg",
      2.1176470588235294,
    ],
    ["https://iili.io/Hph4nG2.jpg", "https://iili.io/Hph4o4S.jpg", 0.75],
    [
      "https://iili.io/Hph4Ia9.jpg",
      "https://iili.io/Hph4Tve.jpg",
      1.7766497461928934,
    ],
    [
      "https://iili.io/Hph4RTb.jpg",
      "https://iili.io/Hph45jj.jpg",
      1.7763157894736843,
    ],
    [
      "https://iili.io/Hph47Zx.jpg",
      "https://iili.io/Hph4aCQ.jpg",
      1.7763157894736843,
    ],
    [
      "https://iili.io/Hph4cGV.jpg",
      "https://iili.io/Hph4l6B.jpg",
      1.7763157894736843,
    ],
    ["https://iili.io/Hph4Ea1.jpg", "https://iili.io/Hph4G8F.jpg", 0.8],
    ["https://iili.io/Hph4Wua.jpg", "https://iili.io/Hph4XwJ.jpg", 0.8],
    [
      "https://iili.io/Hph4hZv.jpg",
      "https://iili.io/Hph4wnR.jpg",
      1.3328859060402685,
    ],
    ["https://iili.io/Hph4O6N.jpg", "https://iili.io/Hph4vat.jpg", 0.8],
    ["https://iili.io/Hph488X.jpg", "https://iili.io/Hph4gus.jpg", 0.8],
    [
      "https://iili.io/Hph4rwG.jpg",
      "https://iili.io/Hph4Pn4.jpg",
      1.3333333333333333,
    ],
    ["https://iili.io/Hph4QFS.jpg", "https://iili.io/Hph4tS9.jpg", 0.8],
    [
      "https://iili.io/Hph4b9e.jpg",
      "https://iili.io/Hph4mAu.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/Hph4pwb.jpg",
      "https://iili.io/Hph4ytj.jpg",
      2.168021680216802,
    ],
    ["https://iili.io/Hph6Hox.jpg", "https://iili.io/Hph6JMQ.jpg", 0.74921875],
    [
      "https://iili.io/Hph6dPV.jpg",
      "https://iili.io/Hph63KB.jpg",
      0.7424242424242424,
    ],
    ["https://iili.io/Hph6FcP.jpg", "https://iili.io/Hph6KS1.jpg", 0.74921875],
    [
      "https://iili.io/Hph6qHF.jpg",
      "https://iili.io/Hph6BAg.jpg",
      1.3347236704900938,
    ],
    ["https://iili.io/Hph6nDJ.jpg", "https://iili.io/Hph6xov.jpg", 1.0],
    [
      "https://iili.io/Hph6IPp.jpg",
      "https://iili.io/Hph6uKN.jpg",
      1.336116910229645,
    ],
    [
      "https://iili.io/Hph6AlI.jpg",
      "https://iili.io/Hph6RSt.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/Hph6YRn.jpg",
      "https://iili.io/Hph6aNs.jpg",
      1.3235294117647058,
    ],
    [
      "https://iili.io/Hph6cDG.jpg",
      "https://iili.io/Hph61V4.jpg",
      1.3219094247246022,
    ],
    [
      "https://iili.io/Hph6Eil.jpg",
      "https://iili.io/Hph6Mf2.jpg",
      1.7777777777777777,
    ],
    [
      "https://iili.io/Hph6VlS.jpg",
      "https://iili.io/Hph6WU7.jpg",
      0.5622263914946842,
    ],
    [
      "https://iili.io/Hph6jRe.jpg",
      "https://iili.io/Hph6wOu.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/Hph6NDb.jpg",
      "https://iili.io/Hph6exj.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/Hph6viQ.jpg",
      "https://iili.io/Hph6SfV.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/Hph6gUP.jpg",
      "https://iili.io/Hph64J1.jpg",
      1.5005861664712778,
    ],
    [
      "https://iili.io/Hph665F.jpg",
      "https://iili.io/Hph6POg.jpg",
      1.5005861664712778,
    ],
    ["https://iili.io/Hph6LzJ.jpg", "https://iili.io/Hph6ZsR.jpg", 1.0],
    [
      "https://iili.io/Hph6mgI.jpg",
      "https://iili.io/Hph6yJt.jpg",
      1.0010405827263267,
    ],
    ["https://iili.io/HphPHen.jpg", "https://iili.io/HphP2zG.jpg", 1.0],
    [
      "https://iili.io/HphP3Xf.jpg",
      "https://iili.io/HphPfql.jpg",
      1.7777777777777777,
    ],
    [
      "https://iili.io/HphPBgS.jpg",
      "https://iili.io/HphPnd7.jpg",
      1.7763157894736843,
    ],
    [
      "https://iili.io/HphPzmu.jpg",
      "https://iili.io/HphPTzb.jpg",
      1.7792421746293245,
    ],
    [
      "https://iili.io/HphPuXj.jpg",
      "https://iili.io/HphP5qQ.jpg",
      1.7763157894736843,
    ],
    [
      "https://iili.io/HphP71V.jpg",
      "https://iili.io/HphPYrB.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphPl71.jpg",
      "https://iili.io/HphP0kF.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphP1mg.jpg",
      "https://iili.io/HphPGIa.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphPMhJ.jpg",
      "https://iili.io/HphPVLv.jpg",
      0.7917888563049853,
    ],
    [
      "https://iili.io/HphPXBR.jpg",
      "https://iili.io/HphPjrN.jpg",
      1.0414657666345226,
    ],
    [
      "https://iili.io/HphPN2I.jpg",
      "https://iili.io/HphPO7t.jpg",
      0.8847926267281107,
    ],
    [
      "https://iili.io/HphP8Is.jpg",
      "https://iili.io/HphPShG.jpg",
      1.0424710424710424,
    ],
    [
      "https://iili.io/HphPUQf.jpg",
      "https://iili.io/HphPrB4.jpg",
      1.0414657666345226,
    ],
    [
      "https://iili.io/HphPsY7.jpg",
      "https://iili.io/HphPQpe.jpg",
      0.8846153846153846,
    ],
    [
      "https://iili.io/Hphi94V.jpg",
      "https://iili.io/HphiJ3B.jpg",
      1.0414657666345226,
    ],
    [
      "https://iili.io/Hphi3yF.jpg",
      "https://iili.io/HphiKTg.jpg",
      0.8847926267281107,
    ],
    [
      "https://iili.io/HphinGR.jpg",
      "https://iili.io/Hphiz3N.jpg",
      1.0408626560726448,
    ],
    [
      "https://iili.io/HphiIaI.jpg",
      "https://iili.io/HphiTvt.jpg",
      0.8845577211394303,
    ],
    [
      "https://iili.io/HphiRun.jpg",
      "https://iili.io/Hphi5js.jpg",
      0.8846715328467153,
    ],
    [
      "https://iili.io/HphicG4.jpg",
      "https://iili.io/Hphil6l.jpg",
      1.0414657666345226,
    ],
    [
      "https://iili.io/Hphi1F2.jpg",
      "https://iili.io/HphiEaS.jpg",
      0.8845208845208845,
    ],
    [
      "https://iili.io/HphiV99.jpg",
      "https://iili.io/HphiWue.jpg",
      0.8847926267281107,
    ],
    ["https://iili.io/HphiXwu.jpg", "https://iili.io/Hphiwnj.jpg", 0.75],
    ["https://iili.io/HphiNMx.jpg", "https://iili.io/HphiO6Q.jpg", 0.75],
    ["https://iili.io/HphikFV.jpg", "https://iili.io/HphivcB.jpg", 0.75],
    ["https://iili.io/Hphi88P.jpg", "https://iili.io/HphiU91.jpg", 0.75],
    ["https://iili.io/Hphirwg.jpg", "https://iili.io/Hphi4ta.jpg", 0.75],
    ["https://iili.io/HphiPoJ.jpg", "https://iili.io/HphiiMv.jpg", 1.0],
    ["https://iili.io/HphisPR.jpg", "https://iili.io/HphiQFp.jpg", 1.0],
    ["https://iili.io/HphiZcN.jpg", "https://iili.io/HphitSI.jpg", 1.0],
    [
      "https://iili.io/Hphib9t.jpg",
      "https://iili.io/HphimAX.jpg",
      0.7505567928730512,
    ],
    ["https://iili.io/HphsJVf.jpg", "https://iili.io/Hphs3Kl.jpg", 1.0],
    [
      "https://iili.io/HphsFl2.jpg",
      "https://iili.io/HphsKSS.jpg",
      0.7994078460399704,
    ],
    ["https://iili.io/HphsnDu.jpg", "https://iili.io/Hphsxob.jpg", 0.8],
    ["https://iili.io/HphsIix.jpg", "https://iili.io/HphsuKQ.jpg", 1.0],
    [
      "https://iili.io/HphsRUB.jpg",
      "https://iili.io/Hphs7HP.jpg",
      1.7777777777777777,
    ],
    [
      "https://iili.io/HphsYR1.jpg",
      "https://iili.io/HphsaOF.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphscDg.jpg",
      "https://iili.io/Hphs0xa.jpg",
      1.3300492610837438,
    ],
    [
      "https://iili.io/Hphs1WJ.jpg",
      "https://iili.io/HphsEiv.jpg",
      1.3300492610837438,
    ],
    ["https://iili.io/HphsVlp.jpg", "https://iili.io/HphsWUN.jpg", 0.75],
    ["https://iili.io/HphsNbn.jpg", "https://iili.io/Hphsexs.jpg", 0.75],
    [
      "https://iili.io/HphskWG.jpg",
      "https://iili.io/Hphsvsf.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphsSf4.jpg",
      "https://iili.io/HphsU0l.jpg",
      1.3300492610837438,
    ],
    [
      "https://iili.io/Hphsgg2.jpg",
      "https://iili.io/Hphs4JS.jpg",
      1.3300492610837438,
    ],
    [
      "https://iili.io/Hphs657.jpg",
      "https://iili.io/HphsPe9.jpg",
      0.5627450980392157,
    ],
    [
      "https://iili.io/Hphsibe.jpg",
      "https://iili.io/HphsLzu.jpg",
      1.3300492610837438,
    ],
    [
      "https://iili.io/Hphsb0Q.jpg",
      "https://iili.io/HphsmgV.jpg",
      1.3333333333333333,
    ],
    ["https://iili.io/HphsydB.jpg", "https://iili.io/HphL95P.jpg", 0.75],
    ["https://iili.io/HphLHe1.jpg", "https://iili.io/HphLJmF.jpg", 0.75],
    [
      "https://iili.io/HphL2zg.jpg",
      "https://iili.io/HphL3Xa.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphLFLJ.jpg",
      "https://iili.io/HphLq1R.jpg",
      1.346938775510204,
    ],
    ["https://iili.io/HphLndN.jpg", "https://iili.io/HphLo7I.jpg", 0.8],
    ["https://iili.io/HphLxet.jpg", "https://iili.io/HphLzmX.jpg", 0.8],
    ["https://iili.io/HphLALG.jpg", "https://iili.io/HphL5Bf.jpg", 0.8],
    ["https://iili.io/HphL714.jpg", "https://iili.io/HphLYrl.jpg", 1.0],
    [
      "https://iili.io/HphLc22.jpg",
      "https://iili.io/HphLl7S.jpg",
      1.7777777777777777,
    ],
    [
      "https://iili.io/HphL1p9.jpg",
      "https://iili.io/HphLGIe.jpg",
      1.7777777777777777,
    ],
    ["https://iili.io/HphLVLb.jpg", "https://iili.io/HphLXBj.jpg", 0.46171875],
    [
      "https://iili.io/HphLhEx.jpg",
      "https://iili.io/HphLjrQ.jpg",
      1.3333333333333333,
    ],
    ["https://iili.io/HphLN2V.jpg", "https://iili.io/HphLekP.jpg", 0.75234375],
    ["https://iili.io/HphL8TF.jpg", "https://iili.io/HphLShg.jpg", 0.75],
    ["https://iili.io/HphLUQa.jpg", "https://iili.io/HphLrCJ.jpg", 0.7525],
    ["https://iili.io/HphL64R.jpg", "https://iili.io/HphLi2p.jpg", 0.75234375],
    ["https://iili.io/HphLsYN.jpg", "https://iili.io/HphLLvI.jpg", 0.75],
    ["https://iili.io/HphLQpt.jpg", "https://iili.io/HphLtTX.jpg", 0.8],
    ["https://iili.io/HphLDjn.jpg", "https://iili.io/HphLbQs.jpg", 0.8],
    [
      "https://iili.io/HphLpCG.jpg",
      "https://iili.io/HphLyGf.jpg",
      1.5450643776824033,
    ],
    [
      "https://iili.io/HphQJ3l.jpg",
      "https://iili.io/HphQda2.jpg",
      1.3333333333333333,
    ],
    ["https://iili.io/HphQ2vS.jpg", "https://iili.io/HphQKu9.jpg", 1.0],
    [
      "https://iili.io/HphQCCb.jpg",
      "https://iili.io/HphQnGj.jpg",
      1.3333333333333333,
    ],
    ["https://iili.io/HphQo6x.jpg", "https://iili.io/HphQz3Q.jpg", 1.0],
    [
      "https://iili.io/HphQIaV.jpg",
      "https://iili.io/HphQT8B.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphQuyP.jpg",
      "https://iili.io/HphQRu1.jpg",
      1.3333333333333333,
    ],
    ["https://iili.io/HphQana.jpg", "https://iili.io/HphQcMJ.jpg", 1.0],
    ["https://iili.io/HphQl6v.jpg", "https://iili.io/HphQ1FR.jpg", 1.0],
    ["https://iili.io/HphQEap.jpg", "https://iili.io/HphQG8N.jpg", 1.0],
    [
      "https://iili.io/HphQV9I.jpg",
      "https://iili.io/HphQWut.jpg",
      0.798999165971643,
    ],
    [
      "https://iili.io/HphQhtn.jpg",
      "https://iili.io/HphQwns.jpg",
      1.3333333333333333,
    ],
    ["https://iili.io/HphQNMG.jpg", "https://iili.io/HphQOPf.jpg", 0.8],
    ["https://iili.io/HphQgA7.jpg", "https://iili.io/HphQ4te.jpg", 1.0],
    ["https://iili.io/HphQiMb.jpg", "https://iili.io/HphQsPj.jpg", 1.0],
    ["https://iili.io/HphQQKx.jpg", "https://iili.io/HphQZcQ.jpg", 0.8],
    [
      "https://iili.io/HphQtSV.jpg",
      "https://iili.io/HphQbHB.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphQpN1.jpg",
      "https://iili.io/HphQyDF.jpg",
      1.3316892725030827,
    ],
    [
      "https://iili.io/HphZJVa.jpg",
      "https://iili.io/HphZdiJ.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphZFlR.jpg",
      "https://iili.io/HphZKSp.jpg",
      1.1650485436893203,
    ],
    [
      "https://iili.io/HphZqHN.jpg",
      "https://iili.io/HphZBRI.jpg",
      1.1650485436893203,
    ],
    [
      "https://iili.io/HphZCNt.jpg",
      "https://iili.io/HphZnDX.jpg",
      1.3300492610837438,
    ],
    [
      "https://iili.io/HphZzVs.jpg",
      "https://iili.io/HphZIiG.jpg",
      1.1650485436893203,
    ],
    [
      "https://iili.io/HphZuff.jpg",
      "https://iili.io/HphZAl4.jpg",
      1.3300492610837438,
    ],
    [
      "https://iili.io/HphZ7J2.jpg",
      "https://iili.io/HphZYRS.jpg",
      1.7761692650334076,
    ],
    [
      "https://iili.io/HphZcb9.jpg",
      "https://iili.io/HphZ0xe.jpg",
      0.7923697725605282,
    ],
    [
      "https://iili.io/HphZ1Wu.jpg",
      "https://iili.io/HphZEib.jpg",
      0.7923697725605282,
    ],
    [
      "https://iili.io/HphZV0x.jpg",
      "https://iili.io/HphZWUQ.jpg",
      1.7777777777777777,
    ],
    [
      "https://iili.io/HphZhJV.jpg",
      "https://iili.io/HphZNb1.jpg",
      1.7777777777777777,
    ],
    [
      "https://iili.io/HphZezF.jpg",
      "https://iili.io/HphZkWg.jpg",
      1.7777777777777777,
    ],
    [
      "https://iili.io/HphZSqJ.jpg",
      "https://iili.io/HphZU0v.jpg",
      1.7763157894736843,
    ],
    [
      "https://iili.io/HphZ4Jp.jpg",
      "https://iili.io/HphZ65N.jpg",
      1.3316892725030827,
    ],
    [
      "https://iili.io/HphZibt.jpg",
      "https://iili.io/HphZLzX.jpg",
      1.7733990147783252,
    ],
    [
      "https://iili.io/HphZQXn.jpg",
      "https://iili.io/HphZZss.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphZDqG.jpg",
      "https://iili.io/HphZb1f.jpg",
      1.3333333333333333,
    ],
    ["https://iili.io/HphtJm7.jpg", "https://iili.io/Hpht2I9.jpg", 0.5109375],
    ["https://iili.io/Hpht3Xe.jpg", "https://iili.io/HphtFLu.jpg", 1.5],
    [
      "https://iili.io/Hphtfqb.jpg",
      "https://iili.io/Hphtq1j.jpg",
      1.336116910229645,
    ],
    [
      "https://iili.io/HphtBrx.jpg",
      "https://iili.io/HphtndQ.jpg",
      1.7777777777777777,
    ],
    ["https://iili.io/Hphto7V.jpg", "https://iili.io/HphtzmP.jpg", 0.5625],
    [
      "https://iili.io/HphtuhF.jpg",
      "https://iili.io/HphtALg.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/Hpht5Ba.jpg",
      "https://iili.io/Hpht7EJ.jpg",
      1.3333333333333333,
    ],
    ["https://iili.io/Hphtl7p.jpg", "https://iili.io/Hpht0kN.jpg", 1.0],
    [
      "https://iili.io/Hpht1pI.jpg",
      "https://iili.io/HphtGIt.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphtMhX.jpg",
      "https://iili.io/HphtVQn.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphtXBs.jpg",
      "https://iili.io/HphthEG.jpg",
      0.7994078460399704,
    ],
    [
      "https://iili.io/Hphtj4f.jpg",
      "https://iili.io/HphtN24.jpg",
      1.3316892725030827,
    ],
    ["https://iili.io/HphtkpS.jpg", "https://iili.io/Hpht8T7.jpg", 1.0],
    ["https://iili.io/HphtUQe.jpg", "https://iili.io/HphtrCu.jpg", 0.8],
    ["https://iili.io/Hpht4Eb.jpg", "https://iili.io/Hpht64j.jpg", 1.0],
    ["https://iili.io/Hphti3x.jpg", "https://iili.io/HphtsYQ.jpg", 0.8],
    ["https://iili.io/HphtQyB.jpg", "https://iili.io/HphttTP.jpg", 0.8],
    ["https://iili.io/HphtbZF.jpg", "https://iili.io/HphtpCg.jpg", 0.8],
    ["https://iili.io/HphD96J.jpg", "https://iili.io/HphDJ3v.jpg", 1.0],
    ["https://iili.io/HphDdaR.jpg", "https://iili.io/HphD2vp.jpg", 1.0],
    ["https://iili.io/HphDKuI.jpg", "https://iili.io/HphDfjt.jpg", 1.0],
    [
      "https://iili.io/HphDnGs.jpg",
      "https://iili.io/HphDo6G.jpg",
      1.560693641618497,
    ],
    [
      "https://iili.io/HphDRuS.jpg",
      "https://iili.io/HphD5w7.jpg",
      1.7768595041322315,
    ],
    [
      "https://iili.io/HphDane.jpg",
      "https://iili.io/HphD1Fj.jpg",
      1.2735849056603774,
    ],
    [
      "https://iili.io/HphDV9V.jpg",
      "https://iili.io/HphDWAB.jpg",
      1.0876132930513596,
    ],
    [
      "https://iili.io/HphDXwP.jpg",
      "https://iili.io/HphDht1.jpg",
      1.2735849056603774,
    ],
    ["https://iili.io/HphDvcv.jpg", "https://iili.io/HphD8SR.jpg", 1.0],
    ["https://iili.io/HphDrNI.jpg", "https://iili.io/HphD4tt.jpg", 1.0],
    [
      "https://iili.io/HphDPoX.jpg",
      "https://iili.io/HphDiVn.jpg",
      1.7763157894736843,
    ],
    ["https://iili.io/HphDtS4.jpg", "https://iili.io/HphDbHl.jpg", 1.0],
    [
      "https://iili.io/HphDmR2.jpg",
      "https://iili.io/HphDyD7.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphbHx9.jpg",
      "https://iili.io/HphbJVe.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/Hphb3Kb.jpg",
      "https://iili.io/HphbFlj.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphbKUx.jpg",
      "https://iili.io/HphbqHQ.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphbCOB.jpg",
      "https://iili.io/HphbnDP.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphbzWF.jpg",
      "https://iili.io/Hphbufa.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphbRUv.jpg",
      "https://iili.io/Hphb7JR.jpg",
      1.3300492610837438,
    ],
    [
      "https://iili.io/HphbYRp.jpg",
      "https://iili.io/HphbaON.jpg",
      1.3300492610837438,
    ],
    [
      "https://iili.io/HphbcbI.jpg",
      "https://iili.io/Hphb0xt.jpg",
      1.7777777777777777,
    ],
    [
      "https://iili.io/Hphb1WX.jpg",
      "https://iili.io/HphbEsn.jpg",
      1.336116910229645,
    ],
    [
      "https://iili.io/HphbWgf.jpg",
      "https://iili.io/HphbhJ4.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HpXsTB4.jpg",
      "https://iili.io/HpXsuEl.jpg",
      1.7777777777777777,
    ],
    [
      "https://iili.io/Hphbez7.jpg",
      "https://iili.io/HphbkX9.jpg",
      1.7777777777777777,
    ],
    ["https://iili.io/Hphbvse.jpg", "https://iili.io/HphbU0b.jpg", 0.5625],
    ["https://iili.io/Hphbggj.jpg", "https://iili.io/Hphb4dx.jpg", 0.75],
    [
      "https://iili.io/Hphb65Q.jpg",
      "https://iili.io/HphbPeV.jpg",
      1.3333333333333333,
    ],
    ["https://iili.io/HphbLzP.jpg", "https://iili.io/HphbQX1.jpg", 0.7504],
    ["https://iili.io/HphbDqg.jpg", "https://iili.io/Hphbb1a.jpg", 0.450625],
    [
      "https://iili.io/HphbmrJ.jpg",
      "https://iili.io/Hphbydv.jpg",
      1.3347236704900938,
    ],
    [
      "https://iili.io/Hphm97R.jpg",
      "https://iili.io/HphmHep.jpg",
      1.778642936596218,
    ],
    [
      "https://iili.io/HphmJmN.jpg",
      "https://iili.io/Hphm2II.jpg",
      1.3333333333333333,
    ],
    [
      "https://iili.io/HphmFLX.jpg",
      "https://iili.io/HphmfBn.jpg",
      1.3333333333333333,
    ],
    ["https://iili.io/Hphmq1s.jpg", "https://iili.io/HphmBrG.jpg", 0.75],
    [
      "https://iili.io/Hphmo74.jpg",
      "https://iili.io/Hphmxkl.jpg",
      1.3333333333333333,
    ],
  ];

  const leaderboardDetails = details.map((member) => {
    return {
      name: member.name,
      rating: member.rating,
      points: member.points,
      face: member.face,
    };
  });

  const technicalIssue = false;
  return (
    <div className="relative App flex flex-col md:flex-row">
      {(technicalIssue && <TechnicalIssuePage />) || (
        <Fragment>
          <SideDrawer className="fixed z-50 md:py-8 bg-[#333333] md:bg-[#3333338a] w-[100vw] h-auto md:w-auto md:h-[100vh]" />

          <div className="relative wrapper w-full  h-[calc(100vh-64px)] md:h-[100vh] mt-[64px] md:mt-0 md:mr-[95px] xmd:mr-[140px]">
            <Routes>
              <Route path="/" element={<HomePage details={details} />} />
              <Route
                path="/members"
                element={<MembersPage members={members} />}
              />
              <Route
                path="/gallery"
                element={<GalleryPage images={images} />}
              />
              <Route
                path="/leaderboard"
                element={
                  <LeaderboardPage leaderboardDetails={leaderboardDetails} />
                }
              />
            </Routes>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default App;
