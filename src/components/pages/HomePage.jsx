import { useState } from "react";
import SideDrawer from "@components/SideDrawer";
import Rating from "@components/Rating";
import Badges from "@components/Badges";
import BroskiesBrowser from "@components/BroskiesBrowser";
import FsLightbox from "fslightbox-react";
import MiniGallery from "@components/MiniGallery";

import { getLang } from "@utils";
const HomePage = () => {
  const data = [
    {
      id: 0,
      name: "سعيد عبدالناصر",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "SC", "SSSSNOA", "نويبع"],
      rating: 5,
      quote: `كريتة صريفة اليومين دول يزميلي. متعوجش فالف و انت قدامي يزميلي. لو فاكرها كارفالي بمكالمة مني بتيجي`,
      face: "https://dl.dropboxusercontent.com/scl/fi/1ewdv0a6taxfa6r42tzqu/0.png?rlkey=cfai7beawlhz89cvjypn9d99o&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/qbc8ijaqyqmx2wcxiar69/saied-1.webp?rlkey=dxzqcd2txmbrl5idf7kdgbf6u&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/t87pfuqqu1wjy9lqo2m2f/saied-2.webp?rlkey=7lkte7m7puqsusauwbjddf5cu&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/0cea07huaqwjgiybe8gc8/saied-3.webp?rlkey=gh9mzz8otaxch6cgveh62wug6&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/7mpncqfr1cy58ul5rixfj/saied-4.webp?rlkey=7hhwgvdqt2yv55qfhs8kg5oes&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/24s3eo7o5evj7yq9zhp8x/saied-5.webp?rlkey=t8ho63ao79kk8pkwdf15thgqo&dl=0",
          "center",
        ],
      ],
    },
    {
      id: 1,
      name: "عبدالرحمن رينجو",
      date: "25.9.2019",
      tags: ["جيهة", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 4,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/ljw2708o9tszuq7q1tgjs/1.png?rlkey=5wfph3gqn552hil0l6sqbvqhe&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/lxac043d3satug4bjwlk3/rengo-5.jpg?rlkey=e9c1i5dxudf70nt5a5t2pyhnu&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/gjixzu3wq2toi16ua4bsj/rengo-2.jpg?rlkey=4x2g11lvz34n0glgtavd7jt1t&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/gfm2al80y7ocdx607981b/rengo-1.jpg?rlkey=8332s8nadjh2m03i7gtto77w9&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/vusnbqs1sredqfewvkst7/rengo-3.jpg?rlkey=8lk8qxtc4pkfgi8mr7ak9fk2s&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/cp6h0965ozw4t38u8u4el/rengo-4.jpg?rlkey=j2rr4ukyvhyfwi8hdxtqdla7h&dl=0",
          "top",
        ],
      ],
    },

    {
      id: 2,
      name: "أدهم علي",
      date: "25.9.2020",
      tags: [
        "عضو هيئة التحزيب",
        "عمود",
        "شايل ؤس",
        "CS",
        "SSSSNOA",
        "بب دلن",
        "Moderate Consumption",
        "نويبع",
      ],
      rating: 5,
      quote: `أنا افخم حتة فجيلك شوف انت فين و انا اجيلك. شغال علي قد مرازيتك و علي قد تشطيفك.`,
      face: "https://dl.dropboxusercontent.com/scl/fi/566429mzbwmc4b8nv50nd/2.png?rlkey=6b4qdvhpuulju5tmvatiybavw&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/8fkxyskmlt6yvf7qkbri0/adham-0.jpg?rlkey=j5hkumt1porpoksm7cp5pc15w&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/xdp535c32f801wbjdjffg/adham-1.jpeg?rlkey=aut601bctu68zvr9bj5kmozjg&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/s3xn1zwnj76y92xc72oat/adham-5.jpg?rlkey=hm2n8mzb6tkh2bneob6y03m9c&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/bs3fq03t8ek6a1t4lhq6a/adham-3.jpg?rlkey=ion9p939e1eiuqgtbuhb3paid&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/7avxe8b42mox0v0myjxy7/adham-4.jpg?rlkey=qxjrm9ucorde424etxnp8thef&dl=0",
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
        "عمود مستجد",
        "SC",
        "Moderate Cosumption",
        "نويبع",
        "د. أحمد صلاح",
      ],
      rating: 4,
      quote: `أنا ابويا رباني مدير. أنا أبويا رباني مهندس`,
      face: "https://dl.dropboxusercontent.com/scl/fi/dtzwvd1uws9ws7jwzpp3v/3.png?rlkey=bvfv7lwbu90d3lilswpg06cbr&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/7jiose2o2mhu9xhtnr1kb/bassel-2.jpeg?rlkey=22kbxd3oavra1sdczmbnrgn1k&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/dvz0600ubtzjdmdowuzqf/bassel-alt.jpg?rlkey=f5serhe7sv168s3ym15c0yt76&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/xy6hjncd5i4153pavclxn/bassel-3_compressed.jpg?rlkey=prtbec35prsy3ht5mlelwrdnb&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/f65pfaf1l3sfaigl5lohk/bassel-4_compressed.jpeg?rlkey=i4l8r62s3fwbtgj4btmq5jf90&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/v468wi44eehna9wi5pkhm/bassel-5_compressed.jpeg?rlkey=c4emeoelsu4l7k3rr9rvu3np8&dl=0",
          "center",
        ],
      ],
    },
    {
      id: 4,
      name: "عمر يس",
      date: "25.9.2021",
      tags: [
        "عضو هيئة التحزيب",
        "عمود",
        "gasten beber",
        "مدير القروب",
        "IS IS IS IS",
        "شنش",
        "SSSNOA",
        "ظاظا",
      ],
      rating: 5,
      quote: `.عشان كل يوم بطقم جديد, فأفتكروني بتاع حشيش. شافوني شوفة خيش. فا حبيت اوضح. شباب شباشب علي مفيش`,
      face: "https://dl.dropboxusercontent.com/scl/fi/mboetgk5wru0o32z0tap2/4.png?rlkey=lhl4i2d3pe1cr5icoi7qdaiop&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/4xvcgr7bdwqi5ngwz3nnl/gasten-4.webp?rlkey=7m7h9dqyb4sandl7ngron393c&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/ppktcmcqmckmrwj0m1zi3/gasten-5.webp?rlkey=d4fbtbpbw3ax4wxgdtckyrr0e&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/4weg1udm1amlk0o32ai3w/gasten-3.webp?rlkey=qbzg3ft6kly41pbj1b5yt07sk&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/n2lyxzbtez6ptibqiatvx/gasten-2.webp?rlkey=fux4bndcd1tdvlatz5tvrfcdn&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/3zultifd75quga1d9839l/gasten-1.webp?rlkey=1p8xvx02i5n98phqsxyp81prv&dl=0",
          "center",
        ],
      ],
    },
    {
      id: 5,
      name: "زياد حسن",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "حمأمأ", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/a1pbtrvs1ptyysvyyzdg2/5.png?rlkey=qb6097m1o97hxfj8jx5elqv01&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/598u5tyvaovl6ok12ufs1/zeyad-hassan-1.jpg?rlkey=p7ku9m67o3300f5ab6e32vfqb&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/8x3ow8su1c5s8rzbjiwea/zeyad-hassan-2_compressed.jpg?rlkey=3puflqnlhmwdx9ij4d0hlamsu&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/m2np79qmzyihkl3ner7s9/zeyad-hassan-3_compressed.jpg?rlkey=rulbmx5iw0nge9jsqltdcz04n&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/6wtrg0aa7j91rqn6s1tdy/zeyad-hassan-4.jpg?rlkey=8tkvp3dhw1aj0k68fnd8r0l4n&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/oru2u36w9h0yq6dar82zg/zeyad-hassan-5_compressed.jpg?rlkey=peedfcsokqmedlvqbf3yja3cd&dl=0",
          "center",
        ],
      ],
    },
    {
      id: 6,
      name: "عمر مرشدي",
      date: "25.9.2021",
      tags: ["بيكره ياسمين عفيف", "CSYS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/szxh5xbp9ckcly7ov2xxx/6.png?rlkey=lozt1dke4gpaoe40eeckaibss&dl=0",
      images: [
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
      ],
    },
    {
      id: 7,
      name: "محمد عصام",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/9gwpk2ji56uqy9taopvcz/7.png?rlkey=4n90eyx7ddolsrrl5t2qvdies&dl=0",
      images: [
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
      ],
    },
    {
      id: 8,
      name: "أحمد توفيق",
      date: "25.9.2021",
      tags: ["CS"],
      rating: 5,
      quote: `"These are the days we won't forget, and we'll be the ones to take the first step." - Imagine Dragons (On Top of the World)`,
      face: "https://dl.dropboxusercontent.com/scl/fi/2zed0c2sr5uaawbhq2mxt/8.png?rlkey=ndqnrw9mu6uk7alfnfjrnrz38&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/z3elifkh6do9q3wu0im63/tawfik-1_compressed.jpg?rlkey=u2geobxrmh1ldgc15jwjmarad&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/fwst3880yh5tfyym09cwo/tawfik-2_compressed.jpg?rlkey=zqpb42wse16dyonbajco7fxta&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/2djvrixem8b29q33zyeji/tawfik-3_compressed.jpg?rlkey=vbc6qcdvag14cljf2nklj3h1m&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/55yufx01hkn9ptsawar6z/tawfik-4_compressed.jpg?rlkey=gfhagg0e6a6e1lfqmiks0glpf&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/ni91u0gmd0ftomk1g7som/tawfik-5_compressed.jpg?rlkey=5v3tr0tk21415uzscnmltqqj7&dl=0",
          "center",
        ],
      ],
    },
    {
      id: 9,
      name: "إسلام عصام",
      date: "25.9.2021",
      tags: ["CS"],
      rating: 5,
      quote: `Through every verse, in joy or strife, we're united by the thread of life.`,
      face: "https://dl.dropboxusercontent.com/scl/fi/xm5djgw0625my4tjcbd0y/9.png?rlkey=r0ibtamb2p4s0ugphnfjtbkx9&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/8et7qr1wurwch9zqyxg5g/eslam-1.jpg?rlkey=7e3fubm2b7eg0sqecrry11qw4&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/f6w3s1z7wi0s52afm68or/eslam-2.jpg?rlkey=7vw8ztyu0d5v5vjbuav8mb8v5&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/v3k2pjqf8n62er6jch8f8/eslam-3.jpg?rlkey=klp8r2rda0ota3yka1mtrwzhm&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/lwnjm9iyd5h0dd3feu756/eslam-4.jpg?rlkey=t0jhybi1n443ed5fdtge2ni50&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/kcl5nkj42nacnl232g2pv/eslam-5_compressed.jpg?rlkey=nulxf473tv97cu8i37d5oimjh&dl=0",
          "top",
        ],
      ],
    },
    {
      id: 10,
      name: "كريم سعفان",
      date: "25.9.2021",
      tags: ["عمود", "صياد", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/qivq6ei7vtoggt7qsni2z/10.png?rlkey=if9ykfa8eltufxsvqxmdinkk7&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/2qlx5et30l8bx70jlr5f0/saafan-1_compressed.jpg?rlkey=ra6zbikm11fr6trv8u3z1swvf&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/x8jm1m3s7uuv078t3pxv5/saafan-2_compressed.jpg?rlkey=jpfsgpi0696fw9xga6mit8v5r&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/n6lmusl1hmmgpdbrss53b/saafan-3_compressed.jpg?rlkey=o1s20pa0cvaja3dcu6v58m1bh&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/lo6vl69xzyjaip9igbpih/saafan-4_compressed.jpg?rlkey=hs9og5axybj5a6gozaib0no0m&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/g02jwal0tjpwgqu0m8d2u/saafan-5_compressed.jpg?rlkey=onpahiztq8k65q3iogs2tqaz5&dl=0",
          "center",
        ],
      ],
    },
    {
      id: 11,
      name: "أيمن مصطفى",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/hquybx8mf7fd48xac682a/11.png?rlkey=dzgi57ophxhck5s63uvd5xd04&dl=0",
      images: [
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
      ],
    },
    {
      id: 12,
      name: "كيمو كونو",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/s59gzpcfbzvjm2omplvhc/12.png?rlkey=knxbqzmj9f4mu738f39bykp2j&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/7lnnizab38yzubvl19a4l/kimo-kono-1_compressed.jpg?rlkey=1ocni50xah5a7pceus86ellli&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/gjab5276spe0dyf3a2n2w/kimo-kono-5_compressed.jpg?rlkey=y0985ta99hgzoklimga41z468&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/m2wfu0lo69794wyy12j29/kimo-kono-3_compressed.jpg?rlkey=tcb8zm9tv05rdf6z33fd11bof&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/rb795hzqbpgiazq554ydi/kimo-kono-4_compressed.jpg?rlkey=oxjeyf93l0ixp20t2a8jvf839&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/brptp4obtytbbs9e68x59/kimo-kono-2_compressed.jpg?rlkey=wlq00m8ohs75qaw9s501phxd5&dl=0",
          "top",
        ],
      ],
    },
    {
      id: 13,
      name: "أحمد عوض",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/yostbdonul02lfbuhm9rl/13.png?rlkey=37gpiaflz3fcvr7b0mhm6zkk3&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/y8eotl063yn86nkwvw2tm/awad-1.jpg?rlkey=bhpuu4b4x0feiug38pmnl1wva&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/ja2gcdzshpvev4apqn9y9/awad-2.jpg?rlkey=ab1cup2ikhxep9e6xgfpekllh&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/edtz8qwjtw1ewa7wdqixy/awad-3.jpg?rlkey=kuzridj8p8kc3195i7paqjkpt&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/ob07pyh1er5m4lm6otoat/awad-4.jpg?rlkey=gb6blsau2dmft48v7ydkbp34b&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/i55hyup2ugtvgni1mnunl/awad-5.jpg?rlkey=q39myl5h1zbctovcb06wt0y2i&dl=0",
          "center",
        ],
      ],
    },
    {
      id: 14,
      name: "زياد أشرف",
      date: "25.9.2021",
      tags: ["حرفوش", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/56ndl0sc659i9lljtvljm/14.png?rlkey=tk35az9slx40kbc7or45fmn0v&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/as9b4lj5pp7636fkzj6tp/zeyad-ashraf-1_compressed.jpeg?rlkey=94augqueep3pbdhn3wp92vmyp&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/aep1xaje2pwi5p5remsfa/zeyad-ashraf-2_compressed.jpeg?rlkey=ebhrk5iw2he8i9nw77030p1rg&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/fkyl9ydybljb3gektufh6/zeyad-ashraf-3_compressed.jpeg?rlkey=e2171otcw9kvqig7jmodcrufz&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/ggdttq9l6ns75oi7g00ok/zeyad-ashraf-4_compressed.jpeg?rlkey=z9o5mhhxiwugblq3o6993sdpr&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/y8r53o39ef9bkd3nvvb7a/zeyad-ashraf-5_compressed.jpeg?rlkey=atduh0u84wwht657536m8aq8q&dl=0",
          "center",
        ],
      ],
    },
    {
      id: 15,
      name: "حازم مسعد",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "CS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/trcipbhmhiwk9g251h37z/15.png?rlkey=1p0spo3de79mhj54bbhatxizg&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/49cehd59l43onmy7ip0c3/hazem-1_compressed.jpg?rlkey=06e4qvsibdkyj7s54nhakoncm&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/kcksfmhj90rykst45mzee/hazem-2_compressed.jpg?rlkey=lnt1lxtc7btmqd3308d1txsxn&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/vye4faxrp3dl5nqvall4t/hazem-3_compressed.jpg?rlkey=6enua9l758ebv15ttcha2f4ag&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/h5cboy5o667p2e89vw10l/hazem-4_compressed.jpg?rlkey=i3xqfny0425li16syzhcxgxhu&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/yjc6d924wus0v7px7uh4q/hazem-5_compressed.jpg?rlkey=5g0een1vezvbmup4ccsjag5pz&dl=",
          "center",
        ],
      ],
    },
    {
      id: 16,
      name: "زياد بدوي",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/zavijimxkrmwxxwund5nh/16.png?rlkey=oxm2wsplsk0n2qvn1lq8wpebk&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/p9qbhekv80nfhizwe1wl0/zeyad-badawy-1_compressed.jpg?rlkey=n516cmqsv8xkmkgtxowtci0rg&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/olwo08mclcbuarxv4snev/zeyad-badawy-2_compressed.jpg?rlkey=oz1l9z0t017rurwwd7y3ko8ry&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/wim4hu0ztssy1xxytxncv/zeyad-badawy-3_compressed.jpg?rlkey=0czptqrz2hyr850vk1ze7orci&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/tr9jlcfdrmg6w9b68hsie/zeyad-badawy-4_compressed.jpg?rlkey=k9csvsxz1q2lyf827zaj6vw16&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/m0zygrtypf2eryte31iv3/zeyad-badawy-5_compressed.jpg?rlkey=hhlqj1c07rzmcpacgbanho3j5&dl=0",
          "center",
        ],
      ],
    },
    {
      id: 17,
      name: "حسن شناوي",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/gln7ua6k1llbce4dkj0u2/17.png?rlkey=6k8bc4n959ra48l4z3f4zqgo8&dl=0",
      images: [
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
      ],
    },
    {
      id: 18,
      name: "محمد عبدالقادر",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/rp0iuu4lmflmqbkv204tn/18.png?rlkey=1bgw73iulyfwccnw3782zsipz&dl=0",
      images: [
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
      ],
    },
    {
      id: 19,
      name: "إسلام كافكا",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/jwsd6ngnmsgnr9j9x9pyv/19.png?rlkey=4gn962jggjlfik98q3q3vqxx3&dl=0",
      images: [
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
      ],
    },
    {
      id: 20,
      name: "محمد معتز الدمرداش",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/ehp5t7dpl11trq2lmepc7/20.png?rlkey=w777hngyxdrijhycvkkji7g18&dl=0",
      images: [
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
      ],
    },
    {
      id: 21,
      name: "محمد مجدي",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/45wpom7i0cdwa2sztpp8v/21.png?rlkey=tcmg6ilo4comibtpq6dcjpjtx&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/ikeztnba943fks3m70i7g/magdi-1_compressed.jpg?rlkey=uc1fpqqvywsb7us2ylkdyycrr&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/96frk3zlge0mtyt2devw1/magdi-2_compressed.jpg?rlkey=3f4z1aizu13jg9b09k9pn41f9&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/wey2qeoqqrjpocy102y5g/magdi-3_compressed.jpg?rlkey=o1tja3cl78djgj56lshs6zouo&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/hycz498nd5o3vi5t5b1ta/magdi-4_compressed.jpg?rlkey=ap8psjq4l7kuzy4trzl0nj640&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/o3bo3apjqk45yjit6oq5e/magdi-5_compressed.jpg?rlkey=vro05l911msj0t811zlgzj1dz&dl=0",
          "center",
        ],
      ],
    },
    {
      id: 22,
      name: "يس",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/afyx263kefxhixa6qv3q5/22.png?rlkey=dgljnzxh4obhx0bb5exkqk33m&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/g7ar2p9dp7gf2c2aetxzm/yassin-1_compressed.jpg?rlkey=r0qro8o9hz4kp157muqxbzpe5&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/tpunwasxbtd57rnahoywn/yassin-2_compressed.jpg?rlkey=8podwqhrtpxk43589bvkcdg6w&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/x8iepst7cwq64b82gc95k/yassin-3_compressed.jpg?rlkey=rbzj55o8dkgy6nxfs3h6bktpp&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/m8ws39de13p5941g8cjlm/yassin-4_compressed.jpg?rlkey=obybtdthj54szxd7bfbssq2a7&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/rq8nph2t4zb1ds5fy09ob/yassin-5_compressed.jpg?rlkey=eea3komf132bqnoem6dt055jb&dl=0",
          "top",
        ],
      ],
    },
    {
      id: 23,
      name: "مروان فوزي",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/4jhsrrfu2th52lj4gqnfy/23.png?rlkey=xwenezxh6s1tmi9ued2kkm8nf&dl=0",
      images: [
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
      ],
    },
    {
      id: 24,
      name: "عادل امجد دولا بولا",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/2wi5cetpyr0zdr2cloh9h/24.png?rlkey=kitdidaxw16xkab1zeiyqo3s0&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/frbfzhr0hasrya1d2egtw/doula-1_compressed.jpg?rlkey=9axq1fd6mlrbaikkupyqv44pb&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/vo0kgaybenynrr370im6o/doula-2_compressed.jpg?rlkey=3mz4puf6qjd4uwmm3v4bp5wx0&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/b3ldm25wh31noiv9stg6b/doula-3.jpg?rlkey=x4jfjy39zqg97lgbh7aaqo774&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/sywxfv5bofe08i9l8zd3n/doula-4_compressed.jpg?rlkey=he0zh63soko5v2b7msi861hv5&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/hcikncgipshzyvsx3a22s/doula-5_compressed.jpg?rlkey=pd9mqw3c1ckx5946imm9glv2y&dl=0",
          "top",
        ],
      ],
    },
    {
      id: 25,
      name: "محمد بدوي",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/c8foc1tjecq6ofdhrlaj2/25.png?rlkey=n53elncdgzoisnmh20wbxnb1v&dl=0",
      images: [
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
      ],
    },
    {
      id: 26,
      name: "دعبس",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/rsjuzclv7y5a5uha7zo99/26.png?rlkey=ytoh57fo3swdon5jsqop02k4w&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/j3pnzw2kqzhsmo8mdq1bx/deabes-1_compressed.jpg?rlkey=9wew26u0n53xdsae68ewss37r&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/6u0vyjyw9z653mufnt9d2/deabes-2_compressed.jpg?rlkey=mlbmq2m9utq9rpffoa949xywk&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/n3skqx27w6yrgghe0mtmr/deabes-3_compressed.jpg?rlkey=qa0jhfxlz8zkfgktkkodxh9fp&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/dni1auggnbxj2krpy0okr/deabes-4_compressed.jpg?rlkey=jsc7fhtwufiyluo5vmkrw10k0&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/zuph2p2alh09ynk2y8jo9/deabes-5_compressed.jpg?rlkey=hgbonh7ratoswykdax9zv6arm&dl=0",
          "top",
        ],
      ],
    },
    {
      id: 27,
      name: "عمر خالد",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/f81rd42wox368azzk7pcj/27.png?rlkey=zxxcsyz3lwaytwvgh5qhnrw1t&dl=0",
      images: [
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
      ],
    },
    {
      id: 28,
      name: "جيمي",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/u3ehopzv6g9s4h22b4hez/28.png?rlkey=n2ci6mfpmio1a2n9me6n29r9b&dl=0",
      images: [
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
      ],
    },
    {
      id: 29,
      name: "محمد نورالدين",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/byi3uevs20msauigar120/29.png?rlkey=onyi7r6e85het1hhvlp7a0kj7&dl=0",
      images: [
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
      ],
    },
    {
      id: 30,
      name: "فوزي",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/s5i52ol6oraykwfzki507/30.png?rlkey=mhz0knzxwat5zokt9iseaivqp&dl=0",
      images: [
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
        ["", "center"],
      ],
    },
    {
      id: 31,
      name: "زياد عجرودي",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/12wczwng95gvkf7e5i8jb/face-agroudy.png?rlkey=yngenrgsammugzswsqd6hckus&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/09gqgm6fnqgla4wjivjl2/agroudy-1.jpg?rlkey=ms104us081f1wtb141jnlmnm8&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/lltr88dhhi11wavrlrt4d/agroudy-2.jpeg?rlkey=07i7wekh4y4wlsoxn28jt4qf8&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/qldh38aslud5sj6uiayic/agroudy-alt_compressed.jpg?rlkey=jkklvt7p50rl1hwfkcztk40lw&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/ugqlaf5h8tvjaew3mwzx5/agroudy-4.jpg?rlkey=fxnz45eqnarmtqx22mnm2xyf9&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/wxfmr7nenaycupl6xtm9z/agroudy-5.jpeg?rlkey=gkp0g5n46dv7svxh9hp91bwfk&dl=0",
          "center",
        ],
      ],
    },
    {
      id: 32,
      name: "سمعان كمال",
      date: "25.9.2021",
      tags: ["عضو هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/ejonw0hd206km6ioaaw71/face-samaan.png?rlkey=yk9e9p8ykkz8r1e75ax8wcnvi&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/3qakarefy8kesz1fsmh3t/samaan-1.jpg?rlkey=20eq78ytug2pdxutigsvo2t2r&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/3trtdc1xu54388l3dpdc9/samaan-2.jpg?rlkey=5kbmd9lci9zfn3t3grdj472w2&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/n4mtu26m9mah1eguhz1f0/samaan-3.jpg?rlkey=h1cuwg96hsheu9qmfmek4soaq&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/w9izqh6d56637anqzpyvy/samaan-4.jpg?rlkey=3s2xexll2fkrjhgmihospb70y&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/h4v9e10ghh5lg5e1xspif/samaan-5.jpg?rlkey=dngou21zfeoszg5ygf9x2tqju&dl=0",
          "top",
        ],
      ],
    },
    {
      id: 33,
      name: "حسان",
      date: "25.9.2021",
      tags: ["عضو شرفي", "SC"],
      rating: 5,
      quote: `تقولوا طلعتونا محدش غيركو جابنا ورا. طلعنا رجولة طلعتوا عيال و
      نابنا القرف. أجرح فيك فا تفكر ياما يجيلك أرق. فيرسي يطسك و
      يفوقك بارات بارات`,
      face: "https://dl.dropboxusercontent.com/scl/fi/k7w7l43xl43tfhyiezxoj/face-hassan.png?rlkey=elewsi8w0f1otqcgu18qmk2xf&dl=0",
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/5h5ga5at7trnoz1zopg40/hassan-1_compressed.jpg?rlkey=x88we7rxrwjw89c7dxt7es5rs&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/k1npj9327ryusi1dq6lbn/hassan-2_compressed.jpg?rlkey=hiwrlq23ibkoghpv83xtdx6zy&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/987rlkwk3ogff0imp5e0t/hassan-3_compressed.jpg?rlkey=gpezpawu5ka8b7oldegiq0soc&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/etl8xs0e9ul2skfr4hx5a/hassan-4_compressed.jpg?rlkey=6w8ibwwxdwariyr2tqf0yearz&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/bpwf6zxbrat8h7xyph6ow/hassan-5_compressed.jpg?rlkey=i11xbeq55d0i98prm5rd63iww&dl=0",
          "top",
        ],
      ],
    },
  ];

  const [selectedBroskie, setSelectedBroskie] = useState(
    data.find((d) => d.id === 0)
  );
  const [selectedImage, setSelectedImage] = useState("");

  const broskieChangedHandler = (id) => {
    setSelectedBroskie(data.find((d) => d.id === id));
  };

  return (
    <div className="wrapper h-[100vh] flex items-center">
      <SideDrawer className="py-8 bg-[#333333]" />
      <div className="container w-[90%] h-full mx-auto flex flex-col items-center">
        <main className="grow grid place-items-center">
          <div>
            <MiniGallery
              src={selectedBroskie.images}
              onImageSelected={(img) => {
                setSelectedImage(img);
              }}
            />

            <div className="flex justify-between items-center mt-5 ">
              <div className="flex flex-col gap-2">
                <Rating rating={selectedBroskie.rating} />
                <div className="flex items-end gap-8">
                  <h1 className="text-4xl font-bold">{selectedBroskie.name}</h1>
                  <p className="text-gray-500">{selectedBroskie.date}</p>
                </div>
                <Badges
                  className="max-w-[350px] flex flex-wrap gap-1 mt-4"
                  tags={selectedBroskie.tags}
                />
              </div>

              <article
                className="max-w-[50ch]"
                style={{
                  direction:
                    getLang(selectedBroskie.quote) == "ar" ? "rtl" : "ltr",
                }}
              >
                <p>{selectedBroskie.quote}</p>
              </article>
            </div>
          </div>
        </main>

        <footer className="relative w-[75%] rounded-xl bg-[#333333] overflow-hidden">
          <BroskiesBrowser
            className="flex w-max gap-2 justify-end items-center px-2 py-2"
            broskies={data.map((d) => ({ id: d.id, face: d.face }))}
            onBroskieChanged={broskieChangedHandler}
          />
        </footer>

        {/* <FsLightbox
          toggler={selectedImage != ""}
          sources={selectedImage ? [selectedImage] : []}
          onClose={() => setSelectedImage("")}
        /> */}
      </div>
    </div>
  );
};

export default HomePage;
