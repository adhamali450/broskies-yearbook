import { Route, Routes } from "react-router";
import HomePage from "@pages/HomePage";
import MembersPage from "@pages/MembersPage";
import GalleryPage from "@pages/GalleryPage";
import LeaderboardPage from "@pages/LeaderboardPage";
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/1hmrp6zsfyns4yx7mw1zz/face-said_scaled_down.png?rlkey=y6jehqw09opxxjfefk04p25y3&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/1ewdv0a6taxfa6r42tzqu/0.png?rlkey=cfai7beawlhz89cvjypn9d99o&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/yj9sil7bgpx4x1dqujsin/saied-1_scaled_down.webp?rlkey=zhk23hc64hqa1ecgzhr1rlx6y&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/qbc8ijaqyqmx2wcxiar69/saied-1.webp?rlkey=dxzqcd2txmbrl5idf7kdgbf6u&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/y66zh3mciaihvzmw000t7/saied-2_scaled_down.webp?rlkey=pdl691z5zrrx7b0ao8sg559cl&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/t87pfuqqu1wjy9lqo2m2f/saied-2.webp?rlkey=7lkte7m7puqsusauwbjddf5cu&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/hj4w8qx6t1dkcdjlm0a41/saied-3_scaled_down.webp?rlkey=aof7nntz476q214tlvsm3m6zc&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/0cea07huaqwjgiybe8gc8/saied-3.webp?rlkey=gh9mzz8otaxch6cgveh62wug6&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/3vyjj7u9l44yejjuqogq5/saied-4_scaled_down.webp?rlkey=m6urnhsr9ttf14pqj44l5prbh&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/7mpncqfr1cy58ul5rixfj/saied-4.webp?rlkey=7hhwgvdqt2yv55qfhs8kg5oes&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/85tmw351o9be7syptan3a/saied-5_scaled_down.webp?rlkey=uve54jhupxk3y0af2ooe8iitb&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/24s3eo7o5evj7yq9zhp8x/saied-5.webp?rlkey=t8ho63ao79kk8pkwdf15thgqo&dl=0",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/kzax4g72optx27pq0cxvu/face-ringo_scaled_down.png?rlkey=5u9e6wdald4itkutjipe9co0k&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/ljw2708o9tszuq7q1tgjs/1.png?rlkey=5wfph3gqn552hil0l6sqbvqhe&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/jqro9b2tzna8lsgo52h9i/rengo-5_scaled_down.jpg?rlkey=ycn69w9ltw2xfhm1fldjlig7n&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/lxac043d3satug4bjwlk3/rengo-5.jpg?rlkey=e9c1i5dxudf70nt5a5t2pyhnu&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/dwdrh6plyzwazcobf5tp2/rengo-2_scaled_down.jpg?rlkey=j607xpqwymnvw6led9yz3pc0w&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/gjixzu3wq2toi16ua4bsj/rengo-2.jpg?rlkey=4x2g11lvz34n0glgtavd7jt1t&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/qeay7kczyjdas2442ystj/rengo-1_scaled_down.jpg?rlkey=nrvmjzn1unllnl8qmihoc0enz&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/gfm2al80y7ocdx607981b/rengo-1.jpg?rlkey=8332s8nadjh2m03i7gtto77w9&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/o9vslpdlifvvzr5mkbz13/rengo-3_scaled_down.jpg?rlkey=bicshhppt0xmvkcortymzxpip&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/vusnbqs1sredqfewvkst7/rengo-3.jpg?rlkey=8lk8qxtc4pkfgi8mr7ak9fk2s&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/8cl0wnybniru9ab7ohdda/rengo-4_scaled_down.jpg?rlkey=s99h7zylrnqqebquu5h9jk0x8&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/cp6h0965ozw4t38u8u4el/rengo-4.jpg?rlkey=j2rr4ukyvhyfwi8hdxtqdla7h&dl=0",
          "top",
        ],
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/usqdnrww100ww7muc4fed/face-adham_scaled_down.png?rlkey=l3un4zkfvzmw9714hrw7vcbii&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/566429mzbwmc4b8nv50nd/2.png?rlkey=6b4qdvhpuulju5tmvatiybavw&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/phe0pufrj7jqoh4ub1qou/adham-0_scaled_down.jpg?rlkey=i7eot0whqeysh5xa5gf63o5th&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/8fkxyskmlt6yvf7qkbri0/adham-0.jpg?rlkey=j5hkumt1porpoksm7cp5pc15w&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/x2nal6ciwxbfgih5kt7ul/adham-1_scaled_down.jpeg?rlkey=c005miiwo3wifhwifp32qe80z&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/xdp535c32f801wbjdjffg/adham-1.jpeg?rlkey=aut601bctu68zvr9bj5kmozjg&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/y9z9fz3qpn9ivkpvuk80w/adham-5_scaled_down.jpg?rlkey=44csedjyqh5uwwfo1qyv3weq0&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/s3xn1zwnj76y92xc72oat/adham-5.jpg?rlkey=hm2n8mzb6tkh2bneob6y03m9c&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/mxm2x73kjbby8q2ikmvbv/adham-3_scaled_down.jpg?rlkey=ll2dmpt3le7g30idtodikvelh&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/bs3fq03t8ek6a1t4lhq6a/adham-3.jpg?rlkey=ion9p939e1eiuqgtbuhb3paid&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/2x0x7c63rswnfumi9rk2v/adham-4_scaled_down.jpg?rlkey=vscw51gc63i823wo4vugfxqrg&dl=0",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/rqz3jv6ocp8m05601jgv6/face-bassel_scaled_down.png?rlkey=rinvupnj0dndu2mqs4afw3meb&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/dtzwvd1uws9ws7jwzpp3v/3.png?rlkey=bvfv7lwbu90d3lilswpg06cbr&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/m7o22cji6jf5u74o9o6wf/bassel-2_scaled_down.jpeg?rlkey=ti85ws9tmwu0a0rj39x5gqyfv&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/7jiose2o2mhu9xhtnr1kb/bassel-2.jpeg?rlkey=22kbxd3oavra1sdczmbnrgn1k&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/y8katduuyckuv2qhr8pe3/bassel-alt_scaled_down.jpg?rlkey=re05wlky2lzdmjd63wryrrjh2&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/dvz0600ubtzjdmdowuzqf/bassel-alt.jpg?rlkey=f5serhe7sv168s3ym15c0yt76&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/w5czhg2l8c93z7a0xbnuq/bassel-3_compressed_scaled_down.jpg?rlkey=wwwkyxcsasoam1wcn2jtnm3qb&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/xy6hjncd5i4153pavclxn/bassel-3_compressed.jpg?rlkey=prtbec35prsy3ht5mlelwrdnb&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/37ht9ba5ymrf43bc22xhd/bassel-4_compressed_scaled_down.jpeg?rlkey=tzbzurofmtznv5zjzvfh2yern&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/f65pfaf1l3sfaigl5lohk/bassel-4_compressed.jpeg?rlkey=i4l8r62s3fwbtgj4btmq5jf90&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/hgj3iezj4pjeanpy4vh6e/bassel-5_compressed_scaled_down.jpeg?rlkey=glkln03czd96dtdzbv01z9nbt&dl=0",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/qodz0blejtit3q4ocm087/face-gasten_scaled_down.png?rlkey=k520sirzq35tfywzhg0j1h4p5&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/mboetgk5wru0o32z0tap2/4.png?rlkey=lhl4i2d3pe1cr5icoi7qdaiop&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/h7b9zfg9nwtgyl2lahctj/gasten-4_scaled_down.webp?rlkey=9gveyoqnna33140366u5u52kr&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/4xvcgr7bdwqi5ngwz3nnl/gasten-4.webp?rlkey=7m7h9dqyb4sandl7ngron393c&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/ecqy6dlx7telp06r596hx/gasten-5_scaled_down.webp?rlkey=988abbx6kowwogvph0blkwxhb&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/ppktcmcqmckmrwj0m1zi3/gasten-5.webp?rlkey=d4fbtbpbw3ax4wxgdtckyrr0e&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/97hg7aktk734gr3mualk6/gasten-3_scaled_down.webp?rlkey=tyfin2deg0ipd3s0vyfssun0c&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/4weg1udm1amlk0o32ai3w/gasten-3.webp?rlkey=qbzg3ft6kly41pbj1b5yt07sk&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/68xp9q1jxrqf62avp9n51/gasten-2_scaled_down.webp?rlkey=nygirz21trp7lxs5wa20qg8sk&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/n2lyxzbtez6ptibqiatvx/gasten-2.webp?rlkey=fux4bndcd1tdvlatz5tvrfcdn&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/iklzmd9wcw6wy63wezuw9/gasten-1_scaled_down.webp?rlkey=1rj63vqpvlybsilf0plamcfvt&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/3zultifd75quga1d9839l/gasten-1.webp?rlkey=1p8xvx02i5n98phqsxyp81prv&dl=0",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/kpo09pl4650owglmuj8m7/face-zeyad_scaled_down.png?rlkey=w1gvesrwznruv4ss5ecj89n4y&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/a1pbtrvs1ptyysvyyzdg2/5.png?rlkey=qb6097m1o97hxfj8jx5elqv01&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/pmlusm9clehqpm70druwj/zeyad-hassan-1_scaled_down.jpg?rlkey=17173ndjpqdsjkigb68bgjkco&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/598u5tyvaovl6ok12ufs1/zeyad-hassan-1.jpg?rlkey=p7ku9m67o3300f5ab6e32vfqb&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/kq61q5hb7dnkh696ps3du/zeyad-hassan-2_compressed_scaled_down.jpg?rlkey=sa6hqtxcggv7hkrc0k4kftses&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/8x3ow8su1c5s8rzbjiwea/zeyad-hassan-2_compressed.jpg?rlkey=3puflqnlhmwdx9ij4d0hlamsu&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/z1m49a9rkiivsdt74n0mk/zeyad-hassan-3_compressed_scaled_down.jpg?rlkey=k7jmwqa5cvw3u1jkw0w6qnrzc&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/m2np79qmzyihkl3ner7s9/zeyad-hassan-3_compressed.jpg?rlkey=rulbmx5iw0nge9jsqltdcz04n&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/8uflpp0sz7lrk1jqm9wt2/zeyad-hassan-4_scaled_down.jpg?rlkey=ezqv7bztch7qbujb48lp7vfwl&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/6wtrg0aa7j91rqn6s1tdy/zeyad-hassan-4.jpg?rlkey=8tkvp3dhw1aj0k68fnd8r0l4n&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/3726p35f21x1w9zv1nnyq/zeyad-hassan-5_compressed_scaled_down.jpg?rlkey=kz3vrwkb86dberz4ecm3ngyw2&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/oru2u36w9h0yq6dar82zg/zeyad-hassan-5_compressed.jpg?rlkey=peedfcsokqmedlvqbf3yja3cd&dl=0",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/f1wgkeo9tvup9rdy6wdzq/face-morshdy_scaled_down.png?rlkey=1qtjgt81zw8wf8opt1hffsp4q&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/szxh5xbp9ckcly7ov2xxx/6.png?rlkey=lozt1dke4gpaoe40eeckaibss&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/a9lukw5y4obvcsn28j32s/morshdy-1_compressed_scaled_down.jpg?rlkey=e6dlend4t9s81d71luvliqlc9&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/u55mbk63my3j5ufqn9rk4/morshdy-1_compressed.jpg?rlkey=m6pjq6m2t3jl1593qmih61byv&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/4x4ewz68vwpulhi0fik9n/morshdy-2_compressed_scaled_down.jpg?rlkey=q6z8uiqmpbi9tiy5hek5lzzvg&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/i0qdvmtpfmg1uktqi76td/morshdy-2_compressed.jpg?rlkey=5c4jo5o007364wrfzcu6d0rai&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/x95703zmjqbv4c8wggxke/morshdy-3_compressed_scaled_down.jpg?rlkey=n0n2grb5hq3i9by5x79uyzq03&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/36gu3u6dovzs49xh7e5wx/morshdy-3_compressed.jpg?rlkey=2bwxiea9gnygd2wgns9z0d0wt&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/ezvhavvmsjsdzggvis8si/morshdy-4_compressed_scaled_down.jpg?rlkey=ni3ufmw57lq50hq383lydgex4&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/0iem48tcnm7wo5e92hklv/morshdy-4_compressed.jpg?rlkey=a286t4md5bv74oxe9ys5u97p2&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/904u6rjpvyfaxmcpc5l0g/morshdy-5_compressed_scaled_down.jpg?rlkey=c96l5uilcm62vvmz8rfj3r81e&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/20jt0olopc0wsu3yjdx84/morshdy-5_compressed.jpg?rlkey=24li4wcffotnq61ologyyx3cq&dl=0",
          "top",
        ],
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/u6v37k8w6q546up2ary51/face-essam_scaled_down.png?rlkey=uniohnt1nntlcejz0558sef5r&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/9gwpk2ji56uqy9taopvcz/7.png?rlkey=4n90eyx7ddolsrrl5t2qvdies&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/5uc6fz9j44jwz8ekf0043/essam-1_compressed_scaled_down.jpg?rlkey=emmw17erbcitpske7yslli934&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/tsjz58ivk7q5d5zs1jka5/essam-1_compressed.jpg?rlkey=tkm31itecire0nfs1qzbsi9mf&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/3ag8dtu526oicuc5c50x1/essam-2_compressed_scaled_down.jpg?rlkey=q8gjdxbu99ozv8zf8bd0zxj7y&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/1y8gkd1fipth8cchpwwxu/essam-2_compressed.jpg?rlkey=ol90ejlb0cgmj1og255sar9pr&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/nm42obi2x4ewfwsiqsqxv/essam-3_compressed_scaled_down.jpg?rlkey=dw4wyzu9ffhz0av8h8y20t6jf&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/89573yaprw6y7p4xmhblw/essam-3_compressed.jpg?rlkey=7ok3ioalocmpbs2inbzsem844&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/80ynivrk2etblzg5taldv/essam-4_compressed_scaled_down.jpg?rlkey=qrxmzwcm39ekf1hi8diknx9y7&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/9vpf4phuh5549lriprtd7/essam-4_compressed.jpg?rlkey=4zbt91qzo3y87i9yrezehjr5n&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/dce9fleb46ycftfm1tx4g/essam-5_compressed_scaled_down.jpg?rlkey=3r85px8n2oqshxsuwq8xfjhre&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/vk007e075v0al1oxeec6k/essam-5_compressed.jpg?rlkey=ozfc9jjl7qsojuf2xch13tm8i&dl=0",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/81o0apf8egof1wmvg4k6b/face-tawfik_scaled_down.png?rlkey=kwnj5wiehe05ufshox8au52vz&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/2zed0c2sr5uaawbhq2mxt/8.png?rlkey=ndqnrw9mu6uk7alfnfjrnrz38&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/8196pcvgadii8i06jfivw/tawfik-1_compressed_scaled_down.jpg?rlkey=u2we7b7z4u960hjyt9kqq8lf6&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/z3elifkh6do9q3wu0im63/tawfik-1_compressed.jpg?rlkey=u2geobxrmh1ldgc15jwjmarad&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/xsbyx7tc32pvvijhfjcz5/tawfik-2_compressed_scaled_down.jpg?rlkey=q74oicr6u4qkb6hgu1g2vsykf&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/fwst3880yh5tfyym09cwo/tawfik-2_compressed.jpg?rlkey=zqpb42wse16dyonbajco7fxta&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/j56sguvnim74663g390k8/tawfik-3_compressed_scaled_down.jpg?rlkey=64eiz8jz6zbwhn5iy5alty1te&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/2djvrixem8b29q33zyeji/tawfik-3_compressed.jpg?rlkey=vbc6qcdvag14cljf2nklj3h1m&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/yofsaoa1ly1z8ibygfg7k/tawfik-4_compressed_scaled_down.jpg?rlkey=l24tawahkcewch625y9dbm7pi&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/55yufx01hkn9ptsawar6z/tawfik-4_compressed.jpg?rlkey=gfhagg0e6a6e1lfqmiks0glpf&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/4ltte76s6ctww8zzbo3xu/tawfik-5_compressed_scaled_down.jpg?rlkey=z5qk5vdzs3jpa1f8oqetnfwit&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/ni91u0gmd0ftomk1g7som/tawfik-5_compressed.jpg?rlkey=5v3tr0tk21415uzscnmltqqj7&dl=0",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/ibikue5giv3rdsrupczrt/face-eslam_scaled_down.png?rlkey=cuaze2e464do90v9njzushieo&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/xm5djgw0625my4tjcbd0y/9.png?rlkey=r0ibtamb2p4s0ugphnfjtbkx9&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/vaazk69cuz0b2mdlyy1ab/eslam-1_scaled_down.jpg?rlkey=gzq1wk8mlg7pqkj6j3avradza&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/8et7qr1wurwch9zqyxg5g/eslam-1.jpg?rlkey=7e3fubm2b7eg0sqecrry11qw4&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/8omayflqwpbvdfu4p5h99/eslam-2_scaled_down.jpg?rlkey=ix7n2epon5do6ulce3emc4x8a&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/f6w3s1z7wi0s52afm68or/eslam-2.jpg?rlkey=7vw8ztyu0d5v5vjbuav8mb8v5&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/ssfdix75bskyyhgiux5lk/eslam-3_scaled_down.jpg?rlkey=3cxl63wmi280i2i83g95vj57d&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/v3k2pjqf8n62er6jch8f8/eslam-3.jpg?rlkey=klp8r2rda0ota3yka1mtrwzhm&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/9fq5ed4sx8sw7g27vx6og/eslam-4_scaled_down.jpg?rlkey=30243qtoppkknb7qqxrxagqob&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/lwnjm9iyd5h0dd3feu756/eslam-4.jpg?rlkey=t0jhybi1n443ed5fdtge2ni50&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/ydm7rqx7mie0hot3unii0/eslam-5_compressed_scaled_down.jpg?rlkey=rpnomzhcc7uyc253q6rru2z7d&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/kcl5nkj42nacnl232g2pv/eslam-5_compressed.jpg?rlkey=nulxf473tv97cu8i37d5oimjh&dl=0",
          "top",
        ],
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/gklim0ox1wjan6j7svegf/face-saafan_scaled_down.png?rlkey=seegaj6m8mb5j5y9hth9d5voq&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/qivq6ei7vtoggt7qsni2z/10.png?rlkey=if9ykfa8eltufxsvqxmdinkk7&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/qpgwhksx9y0979to2m6jr/saafan-1_compressed_scaled_down.jpg?rlkey=l8qabarkttmejy2pp1aw8rvuo&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/2qlx5et30l8bx70jlr5f0/saafan-1_compressed.jpg?rlkey=ra6zbikm11fr6trv8u3z1swvf&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/1jk1mcseydf8g3odmqjfn/saafan-2_compressed_scaled_down.jpg?rlkey=t3010ofnsi0nwkn0w7x47m2tk&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/x8jm1m3s7uuv078t3pxv5/saafan-2_compressed.jpg?rlkey=jpfsgpi0696fw9xga6mit8v5r&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/5ej40z5r01ttvg3w76oil/saafan-3_compressed_scaled_down.jpg?rlkey=wv1r27g91huxy0c8gjutjvg8b&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/n6lmusl1hmmgpdbrss53b/saafan-3_compressed.jpg?rlkey=o1s20pa0cvaja3dcu6v58m1bh&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/ylfrlv9rgvpsmg4sneg1x/saafan-4_compressed_scaled_down.jpg?rlkey=aarw0uf7i9wzwhcf03twekkyn&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/lo6vl69xzyjaip9igbpih/saafan-4_compressed.jpg?rlkey=hs9og5axybj5a6gozaib0no0m&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/l5f0msgedpsgt8zp86z8d/saafan-5_compressed_scaled_down.jpg?rlkey=fe4zryrva0cc9rwfs98u67ihf&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/g02jwal0tjpwgqu0m8d2u/saafan-5_compressed.jpg?rlkey=onpahiztq8k65q3iogs2tqaz5&dl=0",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/xmptp4cgcifsfw1vlio85/face-ayman_scaled_down.png?rlkey=vi5tldzbcv50u9thymre0sjyv&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/hquybx8mf7fd48xac682a/11.png?rlkey=dzgi57ophxhck5s63uvd5xd04&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/xhqpemu8d3zgr4n13gy4r/ayman-1_compressed_scaled_down.jpg?rlkey=jat3ytsngasmllr4pjx8zhhll&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/bhrnotk91yisqsy1jdqrn/ayman-1_compressed.jpg?rlkey=3dno884tii4fqv3120y9z5hic&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/hl37fb5c19cxgw3x4a2c5/ayman-2_scaled_down.jpg?rlkey=eqi123upbyxud3kwdzqe6942d&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/hvzhynrh09st6j7cngoub/ayman-2.jpg?rlkey=z4xnhyu94v3izhmwrfm5p791s&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/yik8d76ff1rd1lpf3hzx2/ayman-3_scaled_down.jpg?rlkey=47kr176bs8i3aop3zgusyltgw&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/big67vdx12r7yurl5armx/ayman-3.jpg?rlkey=x8t6pn6ffg1z0hpsuaomlt580&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/395am7swwjiy3oxbk0o6z/ayman-4_scaled_down.jpg?rlkey=z4w3ylbvoe6pi6fp93a18u1i5&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/gpxm4g9vzwmyloq1fhxgb/ayman-4.jpg?rlkey=fgsonfgy4i06u750ohjneei6h&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/x6549q16p6d97wngosfhj/ayman-5_scaled_down.jpg?rlkey=5bgwz8c8whmqbubgryivh2f1z&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/rlyfyrlx23x2bao0evr1q/ayman-5.jpg?rlkey=1oogr6n3ek9qqkcgrzxzai75t&dl=0",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/ubsqaxv4b4q6wq57hvgzl/face-kimo-kono_scaled_down.png?rlkey=td2fdjbmh1vsn36z4te03qsas&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/s59gzpcfbzvjm2omplvhc/12.png?rlkey=knxbqzmj9f4mu738f39bykp2j&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/m6j0ptrayeg1p6af2ocop/kimo-kono-1_compressed_scaled_down.jpg?rlkey=sejf5m2itfkkwi6bqt2adhny6&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/7lnnizab38yzubvl19a4l/kimo-kono-1_compressed.jpg?rlkey=1ocni50xah5a7pceus86ellli&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/9g5ymthrs8flg0ihxvz7h/kimo-kono-2_compressed_scaled_down.jpg?rlkey=9ims1hhicvijx6v3fz55e90df&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/gjab5276spe0dyf3a2n2w/kimo-kono-5_compressed.jpg?rlkey=y0985ta99hgzoklimga41z468&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/mdb46xrgxfprfmxmwzrvx/kimo-kono-3_compressed_scaled_down.jpg?rlkey=29o0w28ag6437ejrhk9bgcbxs&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/m2wfu0lo69794wyy12j29/kimo-kono-3_compressed.jpg?rlkey=tcb8zm9tv05rdf6z33fd11bof&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/nnqw525qvn2832zhpdqug/kimo-kono-4_compressed_scaled_down.jpg?rlkey=gc1o6uu1rgcfk0yqzkfem2x0t&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/rb795hzqbpgiazq554ydi/kimo-kono-4_compressed.jpg?rlkey=oxjeyf93l0ixp20t2a8jvf839&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/0q82wjizy41xtlunb0199/kimo-kono-5_compressed_scaled_down.jpg?rlkey=rlaiuziafpi7kh7c3fa5aog46&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/brptp4obtytbbs9e68x59/kimo-kono-2_compressed.jpg?rlkey=wlq00m8ohs75qaw9s501phxd5&dl=0",
          "top",
        ],
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/h89cbl9gqbwx3ebx63e5r/face-awad_scaled_down.png?rlkey=fmllsx9t3xek8ljnflonxr6m0&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/yostbdonul02lfbuhm9rl/13.png?rlkey=37gpiaflz3fcvr7b0mhm6zkk3&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/qoo0rlgiqlijxc8vcn3bj/awad-1_scaled_down.jpg?rlkey=23qai2pqs6axn6fudpo0t9e9e&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/y8eotl063yn86nkwvw2tm/awad-1.jpg?rlkey=bhpuu4b4x0feiug38pmnl1wva&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/nkora7mhygu6lkzsehtdm/awad-2_scaled_down.jpg?rlkey=79owypc982plogwtmxr5wqi81&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/ja2gcdzshpvev4apqn9y9/awad-2.jpg?rlkey=ab1cup2ikhxep9e6xgfpekllh&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/5ka0jdng1yiihcayeak07/awad-3_scaled_down.jpg?rlkey=fgniopibgxeotjoqi5v5fw4bl&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/edtz8qwjtw1ewa7wdqixy/awad-3.jpg?rlkey=kuzridj8p8kc3195i7paqjkpt&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/lmcn44jbmqyu3b9mz9496/awad-4_scaled_down.jpg?rlkey=cv4pw91gnnrrpmgrqs7vcq5l0&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/ob07pyh1er5m4lm6otoat/awad-4.jpg?rlkey=gb6blsau2dmft48v7ydkbp34b&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/nrohzjocpm2y8womkzzce/awad-5_scaled_down.jpg?rlkey=7g2peccymdjo4fis2hp3722ly&dl=0",
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
      rating: 2.5,
      points: 697,
      role: "مستجد",
      quote: "الاحلام مجانا و انا حلمت اكون امير. بقينا ملوك و بننفذ علي كبير",
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/u4ay1ozfzsoeqc3m5e0jd/face-zyad-ashraf_scaled_down.png?rlkey=i7x397ucctdd5t1d28j16kfpt&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/56ndl0sc659i9lljtvljm/14.png?rlkey=tk35az9slx40kbc7or45fmn0v&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/vybj8gqqczdhlfj6vujzu/zeyad-ashraf-1_compressed_scaled_down.jpeg?rlkey=687rw44dz76gwlh5g0bi6kn0j&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/as9b4lj5pp7636fkzj6tp/zeyad-ashraf-1_compressed.jpeg?rlkey=94augqueep3pbdhn3wp92vmyp&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/blg8lvm10y87yvq2hohqk/zeyad-ashraf-2_compressed_scaled_down.jpeg?rlkey=6zvtdi5348wz3t2shhnraxac3&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/aep1xaje2pwi5p5remsfa/zeyad-ashraf-2_compressed.jpeg?rlkey=ebhrk5iw2he8i9nw77030p1rg&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/5ms2gsvtag4cek76wakno/zeyad-ashraf-3_compressed_scaled_down.jpeg?rlkey=sj6lv16key4w3baqrpptz4xhf&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/fkyl9ydybljb3gektufh6/zeyad-ashraf-3_compressed.jpeg?rlkey=e2171otcw9kvqig7jmodcrufz&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/g0ofmnaqbigozwa5q1u47/zeyad-ashraf-4_compressed_scaled_down.jpeg?rlkey=qn359a80h2ju0fjcaqqcwho8m&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/ggdttq9l6ns75oi7g00ok/zeyad-ashraf-4_compressed.jpeg?rlkey=z9o5mhhxiwugblq3o6993sdpr&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/f4t87mq01y701z10rbmhb/zeyad-ashraf-5_compressed_scaled_down.jpeg?rlkey=kal505a9ovb06cl9k8extbmxb&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/y8r53o39ef9bkd3nvvb7a/zeyad-ashraf-5_compressed.jpeg?rlkey=atduh0u84wwht657536m8aq8q&dl=0",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/1962jk9e2kpslki05b0cj/face-hazem_scaled_down.png?rlkey=wo1uomgot12fxcgf5cuxujb19&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/trcipbhmhiwk9g251h37z/15.png?rlkey=1p0spo3de79mhj54bbhatxizg&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/7sx77fgse0htegmxrkpi0/hazem-1_compressed_scaled_down.jpg?rlkey=91h31ub709h3x4pava6unf6vc&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/49cehd59l43onmy7ip0c3/hazem-1_compressed.jpg?rlkey=06e4qvsibdkyj7s54nhakoncm&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/lh0rpqmxliz76ad3uhinf/hazem-2_compressed_scaled_down.jpg?rlkey=046bzlx5sinalvidvyk2ph7co&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/kcksfmhj90rykst45mzee/hazem-2_compressed.jpg?rlkey=lnt1lxtc7btmqd3308d1txsxn&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/eebjm7r5hjkylsfgu0idf/hazem-3_compressed_scaled_down.jpg?rlkey=6zh7dj2u8fo892p1vm7yv1o45&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/vye4faxrp3dl5nqvall4t/hazem-3_compressed.jpg?rlkey=6enua9l758ebv15ttcha2f4ag&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/f7nm03q2iyyo647pywgta/hazem-4_compressed_scaled_down.jpg?rlkey=48lfgopgu1th9dhy4omjvlr59&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/h5cboy5o667p2e89vw10l/hazem-4_compressed.jpg?rlkey=i3xqfny0425li16syzhcxgxhu&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/bjmpu4a0kpov4rk1p03sj/hazem-5_compressed_scaled_down.jpg?rlkey=23td4jg46fdw3sj65qsve8ezh&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/yjc6d924wus0v7px7uh4q/hazem-5_compressed.jpg?rlkey=5g0een1vezvbmup4ccsjag5pz&dl=",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/5k5dsm091bw4d71dihhji/face-zeyad-badawy_scaled_down.png?rlkey=vee4tu1kjc8t41wnwv2cscile&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/zavijimxkrmwxxwund5nh/16.png?rlkey=oxm2wsplsk0n2qvn1lq8wpebk&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/32s18mqipumnjp7ujhydx/zeyad-badawy-1_compressed_scaled_down.jpg?rlkey=oaba8balbluw4fxt4px37ioao&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/p9qbhekv80nfhizwe1wl0/zeyad-badawy-1_compressed.jpg?rlkey=n516cmqsv8xkmkgtxowtci0rg&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/uh9aee7dwui9y4s6vlg23/zeyad-badawy-2_compressed_scaled_down.jpg?rlkey=szv69wv56vdixj5d0xja07dqm&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/olwo08mclcbuarxv4snev/zeyad-badawy-2_compressed.jpg?rlkey=oz1l9z0t017rurwwd7y3ko8ry&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/6juj6ybmkqkzpr0qll51f/zeyad-badawy-3_compressed_scaled_down.jpg?rlkey=37jhng9vzhc9xshvzkh3z7rob&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/wim4hu0ztssy1xxytxncv/zeyad-badawy-3_compressed.jpg?rlkey=0czptqrz2hyr850vk1ze7orci&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/4v5z2e7277wudr7sz1k0h/zeyad-badawy-4_compressed_scaled_down.jpg?rlkey=934ck2w0z79js0onk4tut283a&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/tr9jlcfdrmg6w9b68hsie/zeyad-badawy-4_compressed.jpg?rlkey=k9csvsxz1q2lyf827zaj6vw16&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/d1yhk5g2i2h81p70wv15b/zeyad-badawy-5_compressed_scaled_down.jpg?rlkey=tpxsdhv23hvatcyisghkbl43u&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/m0zygrtypf2eryte31iv3/zeyad-badawy-5_compressed.jpg?rlkey=hhlqj1c07rzmcpacgbanho3j5&dl=0",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/o5tjh87c5vba4cpkii179/face-shenawy_scaled_down.png?rlkey=q3dkpbva8lb05hi2i94gypger&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/gln7ua6k1llbce4dkj0u2/17.png?rlkey=6k8bc4n959ra48l4z3f4zqgo8&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/089g4hha13ekjaflw6kii/shenawy-1_compressed_scaled_down.jpg?rlkey=1zqhww8wtqb9qz4to9u0tbhua&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/qlehu3lezqhixj8r4dw41/shenawy-1_compressed.jpg?rlkey=7tb9pz36t2y6gstltfomj47y9&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/j66u6dn5nhfl9qy9t18rr/shenawy-2_compressed_scaled_down.jpg?rlkey=jg60npvdmn8iu3rihgo445v3z&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/tavb28sfsb41gy1x8shx5/shenawy-2_compressed.jpg?rlkey=tgdfr03vg54jvd61jw963om3j&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/869dasm35qojyrsb2djjf/shenawy-4_compressed_scaled_down.jpg?rlkey=gn3y0bgeigjzzdaeste8q9she&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/zpuoykbm537vl58hy1gkv/shenawy-4_compressed.jpg?rlkey=wv17o1w647i1z6eqx1qm4wjap&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/520sjramj9tbed03u0625/shenawy-5_compressed_scaled_down.jpg?rlkey=fu3eo5prgp5sarfyibqxxnssh&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/wv2t5nq172nbjipghpcon/shenawy-5_compressed.jpg?rlkey=1rcuzycrk1smlflm7j1xhowo9&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/ueqfsw792zissph2crqo0/shenawy-3_compressed_scaled_down.jpg?rlkey=8q1xrvqa4jnr66yn14xmhbsa8&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/l87o5d7n1tdyffkxbyuyb/shenawy-3_compressed.jpg?rlkey=49whk10me26wsx455d6z711wy&dl=0",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/yoc89m53b5m1rkl6yry3m/face-abdelkader_scaled_down.png?rlkey=k04kntmrp1vqpbt1d6py2h7e5&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/rp0iuu4lmflmqbkv204tn/18.png?rlkey=1bgw73iulyfwccnw3782zsipz&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/kpkzxkanq8id5telvib2f/abdelkader-1_compressed_scaled_down.jpg?rlkey=2ds3b7i7blp90d8wkeqdvx6l8&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/0pf813lb1bhlcpkm2txzw/abdelkader-1_compressed.jpg?rlkey=eudzefdhcb9f10gc5pa06vzk1&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/zg5wd57q36ya10k5l9uno/abdelkader-2_compressed_scaled_down.jpg?rlkey=dzh2e7fn31qe7vesqp46sj43t&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/hdoukviudawh76cf06ltc/abdelkader-2_compressed.jpg?rlkey=6zn02qughnqn2pobnt76zjjud&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/66vhx7q5gq3if2kjrlu0n/abdelkader-3_compressed_scaled_down.jpg?rlkey=4v1v1fbbwnvka5nj2t0nlxg0s&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/dpjq2hd3wuelof22vnt5s/abdelkader-3_compressed.jpg?rlkey=qyaxbt7by9ul7ppw3duhxbr0i&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/etuwx4ack8kl3l5nqkjyq/abdelkader-4_compressed_scaled_down.jpg?rlkey=1hqlb95nn5c66esvofm5esgaz&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/3i1qxrh9dv25g1bc3ekok/abdelkader-4_compressed.jpg?rlkey=jgbpwxvmzh291reez5gc15z9w&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/35ok6xtui8esahu3hhc6k/abdelkader-5_compressed_scaled_down.jpg?rlkey=c6tg8jbx2oeokn1cek3xud13a&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/3oal1o5oagg6ko5gf2bdn/abdelkader-5_compressed.jpg?rlkey=rpp5nm8t266xfxvoh5hzfmsn1&dl=0",
          "top",
        ],
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/s0lp89pgbmsnv1e95e6nl/face-kafka_scaled_down.png?rlkey=k06dojvlcboq2o2kzldjspf44&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/jwsd6ngnmsgnr9j9x9pyv/19.png?rlkey=4gn962jggjlfik98q3q3vqxx3&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/5s4cu89rtfxwpq73ud38y/kafka-1_compressed.jpg?rlkey=9h7spum26z44rl7kee6mdmd7r&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/5s4cu89rtfxwpq73ud38y/kafka-1_compressed.jpg?rlkey=9h7spum26z44rl7kee6mdmd7r&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/4fgok9yp3les22kcfo9o7/kafka-2_compressed.jpg?rlkey=2vadbh0c0ifdissvetcgsycd3&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/4fgok9yp3les22kcfo9o7/kafka-2_compressed.jpg?rlkey=2vadbh0c0ifdissvetcgsycd3&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/2n5t0md461ukfsy52vul1/kafka-3_compressed.jpg?rlkey=ablrfvnxhg9yqmh5md40kay9l&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/2n5t0md461ukfsy52vul1/kafka-3_compressed.jpg?rlkey=ablrfvnxhg9yqmh5md40kay9l&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/p56sf4x894krwca2blnj5/kafka-4_compressed.jpg?rlkey=may3l6l6actctgozqm0ux62t1&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/p56sf4x894krwca2blnj5/kafka-4_compressed.jpg?rlkey=may3l6l6actctgozqm0ux62t1&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/itvsn69pnbmad2od6qear/kafka-5_compressed.jpg?rlkey=rskpo52fz9pki23bajstbcluk&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/itvsn69pnbmad2od6qear/kafka-5_compressed.jpg?rlkey=rskpo52fz9pki23bajstbcluk&dl=0",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/w3pjdobhnlfqphr8co51f/face-moataz_scaled_down.png?rlkey=t5tau0htw5q1c0yyke9eexe1j&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/ehp5t7dpl11trq2lmepc7/20.png?rlkey=w777hngyxdrijhycvkkji7g18&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/ur449bh89bjylyasm86vg/moataz-1_compressed_scaled_down.jpg?rlkey=hnryly63y777hmkgolmm8dj7p&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/4z7dp7miisbbg41doibad/moataz-1_compressed.jpg?rlkey=s5123z1stnr7or5lxpjp8y9qc&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/12t73cqrxfb24yrensrlx/moataz-2_compressed_scaled_down.jpg?rlkey=dxge9ozoppoy06xku379ovpng&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/38r6aw3t8lk451vgtlo10/moataz-2_compressed.jpg?rlkey=qsu23qwdnys4cuqwu164prrw6&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/sg35amfb2bo24792yfupr/moataz-3_compressed_scaled_down.jpg?rlkey=ifcuvutklvcjtwizlqlf8o3no&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/xchi48qtb72dlahb9ykaw/moataz-3_compressed.jpg?rlkey=uxijkzwxrl1py67flwjkt7t39&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/vkag9swgy8hzr7cm8uhrs/moataz-4_compressed_scaled_down.jpg?rlkey=zbmvgzf9o338v96etrxh03p57&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/u82k781ga73kir4abphf3/moataz-4_compressed.jpg?rlkey=xhts40jeka1v7i9vq29wc7q25&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/uquu7inqzkig7n0lhjkgo/moataz-5_compressed_scaled_down.jpg?rlkey=85x1b8mkff3rnlqx6c6awvli8&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/2n2w5h5be7bp5vtgb5me4/moataz-5_compressed.jpg?rlkey=d7t4ep80oobrg71kfffsmjt0q&dl=0",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/113riuawgwiunmtpbxl9s/face-magdi_scaled_down.png?rlkey=0hn7r6isyiekseavulah8wjnl&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/45wpom7i0cdwa2sztpp8v/21.png?rlkey=tcmg6ilo4comibtpq6dcjpjtx&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/zs7eoax24kry0f8kpdm4d/magdi-1_compressed_scaled_down.jpg?rlkey=ryu10ycbjyp0pya1e82c5asq0&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/ikeztnba943fks3m70i7g/magdi-1_compressed.jpg?rlkey=uc1fpqqvywsb7us2ylkdyycrr&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/iin5t61v6zlx97jlqwyu8/magdi-2_compressed_scaled_down.jpg?rlkey=wfyvlz494zab04e34wh1ktmzy&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/96frk3zlge0mtyt2devw1/magdi-2_compressed.jpg?rlkey=3f4z1aizu13jg9b09k9pn41f9&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/ig1884k3ck0qk6moi1ril/magdi-3_compressed_scaled_down.jpg?rlkey=k5oixre4v7lh5rerx918bekrr&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/wey2qeoqqrjpocy102y5g/magdi-3_compressed.jpg?rlkey=o1tja3cl78djgj56lshs6zouo&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/uzqh70qeil39erewrjoj6/magdi-4_compressed_scaled_down.jpg?rlkey=jd99kxy2y5nss0dk931l2nv1g&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/hycz498nd5o3vi5t5b1ta/magdi-4_compressed.jpg?rlkey=ap8psjq4l7kuzy4trzl0nj640&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/35qhiqqagbbtj4x0hnvwc/magdi-5_compressed_scaled_down.jpg?rlkey=d30maxv39yscxnbh6niflustj&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/o3bo3apjqk45yjit6oq5e/magdi-5_compressed.jpg?rlkey=vro05l911msj0t811zlgzj1dz&dl=0",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/57nh9r74zxih06ki2wgvc/face-yassin_scaled_down.png?rlkey=7pavhsjeleejscc0xfthhui1a&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/afyx263kefxhixa6qv3q5/22.png?rlkey=dgljnzxh4obhx0bb5exkqk33m&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/hynz0ygjg6rztuqtarscv/yassin-1_compressed_scaled_down.jpg?rlkey=lz743xv2opzno010tqcbvrf8f&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/g7ar2p9dp7gf2c2aetxzm/yassin-1_compressed.jpg?rlkey=r0qro8o9hz4kp157muqxbzpe5&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/bgys2952dn4iilyoyrdnp/yassin-2_compressed_scaled_down.jpg?rlkey=dpxocro71hoilltkahz3wr678&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/tpunwasxbtd57rnahoywn/yassin-2_compressed.jpg?rlkey=8podwqhrtpxk43589bvkcdg6w&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/s0pgds9ae4cl0nqjkh0p1/yassin-3_compressed_scaled_down.jpg?rlkey=t0qgak873ufmm6wktchakm47d&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/x8iepst7cwq64b82gc95k/yassin-3_compressed.jpg?rlkey=rbzj55o8dkgy6nxfs3h6bktpp&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/fptu2hpijy2dp5yllxbcm/yassin-4_compressed_scaled_down.jpg?rlkey=7qtgsntte2uvo8nft8p4aj9ia&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/m8ws39de13p5941g8cjlm/yassin-4_compressed.jpg?rlkey=obybtdthj54szxd7bfbssq2a7&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/p1ng1vvzm3bs23eq0ze7h/yassin-5_compressed_scaled_down.jpg?rlkey=62x8tw3lf6q83yzxh1kh26b4y&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/rq8nph2t4zb1ds5fy09ob/yassin-5_compressed.jpg?rlkey=eea3komf132bqnoem6dt055jb&dl=0",
          "top",
        ],
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/yapwl73sbu4fon1qyh4ge/face-pola_scaled_down.png?rlkey=jbr9nhocui7knroukbb2qzl8g&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/2wi5cetpyr0zdr2cloh9h/24.png?rlkey=kitdidaxw16xkab1zeiyqo3s0&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/adxihyy7zud0konjuch3w/doula-1_compressed_scaled_down.jpg?rlkey=5aj4x3zspkmikjgfxas9cuvdx&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/frbfzhr0hasrya1d2egtw/doula-1_compressed.jpg?rlkey=9axq1fd6mlrbaikkupyqv44pb&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/9qy1p3e1muvfcee7jz7lb/doula-2_compressed_scaled_down.jpg?rlkey=2ordci4mdhif9vjl2zv9oe3mo&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/vo0kgaybenynrr370im6o/doula-2_compressed.jpg?rlkey=3mz4puf6qjd4uwmm3v4bp5wx0&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/46bep5fm0o0ftxoxbh6ri/doula-3_scaled_down.jpg?rlkey=611nfbs6by3omnyc23qlo2yay&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/b3ldm25wh31noiv9stg6b/doula-3.jpg?rlkey=x4jfjy39zqg97lgbh7aaqo774&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/zmteph7bn9leuqg65fxx2/doula-4_compressed_scaled_down.jpg?rlkey=dk7pm0vyo4nuieb5rjhikzke2&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/sywxfv5bofe08i9l8zd3n/doula-4_compressed.jpg?rlkey=he0zh63soko5v2b7msi861hv5&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/854scc1a5jnqyjsak0pim/doula-5_compressed_scaled_down.jpg?rlkey=h6bckyl3w00ze0o8n7zirwtlz&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/hcikncgipshzyvsx3a22s/doula-5_compressed.jpg?rlkey=pd9mqw3c1ckx5946imm9glv2y&dl=0",
          "top",
        ],
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/n1pait8orbjp3kwmy7k6q/face-mohamed-badawy_scaled_down.png?rlkey=b2wgtk90a97jmsugpix4q6pxe&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/c8foc1tjecq6ofdhrlaj2/25.png?rlkey=n53elncdgzoisnmh20wbxnb1v&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/4ulpn0chxyy2zssw3g6z8/mohamed-badawy-1_compressed_scaled_down.jpg?rlkey=epdec35jfi3gew05c75clfxbc&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/85md7of01dthdp0ras8fa/mohamed-badawy-1_compressed.jpg?rlkey=li4brp8fxz4cyeojnslc2eg8j&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/7xvi8cemap82qcks3t469/mohamed-badawy-2_compressed_scaled_down.jpg?rlkey=5m2qhvdjs56g7trq4o8h0ro67&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/6lphyjrq4oxz0kjwak7j6/mohamed-badawy-2_compressed.jpg?rlkey=w0wbuopocla1t45uehy8f7bk4&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/bvashak956jpk9qmvd41q/mohamed-badawy-3_compressed_scaled_down.jpg?rlkey=emcrp5o2vc3zdpu52rzkezxv4&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/by0nrypumu0eu041w0m3b/mohamed-badawy-3_compressed.jpg?rlkey=2stswfb4zhcns8icsf64fld7a&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/lqcn5uef88s0cfn43w2y5/mohamed-badawy-4_compressed_scaled_down.jpg?rlkey=gbkr59hfy5rt1cjguo8dg6nek&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/vltg71tfzm750yxf8hd7n/mohamed-badawy-4_compressed.jpg?rlkey=dpz8zszq0ee0ek7otmyuy7go0&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/0u915s050h609meh26ftw/mohamed-badawy-5_compressed_scaled_down.jpg?rlkey=hmhm2eyzu9a6nuga7zjbzc7zk&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/6gtqervmoui2jxhpltjmw/mohamed-badawy-5_compressed.jpg?rlkey=ekrqyc0mvgea1zesrj3iaoyfe&dl=0",
          "top",
        ],
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/r6abm42138ezanmld3chf/face-mohamed-deabes_scaled_down.png?rlkey=2ee9coy9l2a2pclvxhndqdf5c&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/rsjuzclv7y5a5uha7zo99/26.png?rlkey=ytoh57fo3swdon5jsqop02k4w&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/fygfljgiy0r24vjswxynl/deabes-1_compressed_scaled_down.jpg?rlkey=nwug8mtotdpqer8fech44lvt8&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/j3pnzw2kqzhsmo8mdq1bx/deabes-1_compressed.jpg?rlkey=9wew26u0n53xdsae68ewss37r&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/pys4t5jgo1mpj1mv6sqmu/deabes-2_compressed_scaled_down.jpg?rlkey=iiley3vnhtieydjnmngfuz8lp&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/6u0vyjyw9z653mufnt9d2/deabes-2_compressed.jpg?rlkey=mlbmq2m9utq9rpffoa949xywk&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/0u27zsihjey5z4087pjdt/deabes-3_compressed_scaled_down.jpg?rlkey=ybjmh52e2durcdnu0jt2mlr3g&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/n3skqx27w6yrgghe0mtmr/deabes-3_compressed.jpg?rlkey=qa0jhfxlz8zkfgktkkodxh9fp&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/ixppk1f67ej3c2djgqxzw/deabes-4_compressed_scaled_down.jpg?rlkey=7zbj4bawsre1senvhfefaymy6&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/dni1auggnbxj2krpy0okr/deabes-4_compressed.jpg?rlkey=jsc7fhtwufiyluo5vmkrw10k0&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/76evyl040aj6is1eu129v/deabes-5_compressed_scaled_down.jpg?rlkey=m9aagdwgqzrlbj9tlt8i8mtpl&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/zuph2p2alh09ynk2y8jo9/deabes-5_compressed.jpg?rlkey=hgbonh7ratoswykdax9zv6arm&dl=0",
          "top",
        ],
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/aduljwg5502sy2ds4avej/face-mohamed-omar-khaled_scaled_down.png?rlkey=d21n5a6p2032430lz9swgpiv5&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/f81rd42wox368azzk7pcj/27.png?rlkey=zxxcsyz3lwaytwvgh5qhnrw1t&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/5wrag22938uh53128nrmu/omar-khaled-1_compressed_scaled_down.jpg?rlkey=rn064k7qraoi9led3zpv55z7f&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/y7vs9caakmjyrx4kvlf74/omar-khaled-1_compressed.jpg?rlkey=vp0gp48z06ddqmlhn4thp2orw&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/nupza2rh74n8hvmrubjtt/omar-khaled-2_compressed_scaled_down.jpg?rlkey=4vlch5d0quq4xumqys80e53h7&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/hqe7xz5b2mn3o2ro98y5r/omar-khaled-2_compressed.jpg?rlkey=s9bxgliu15c3gr4g516vooxpa&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/m06z07dhlkl8iv9ldjska/omar-khaled-3_compressed_scaled_down.jpg?rlkey=burg7ctcvzmfo5mzls9d4ay5z&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/4u16cv3pwgke984ht06t0/omar-khaled-3_compressed.jpg?rlkey=085d5nglm9byt5vumdsns14oq&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/kcz03fw4i9inqwlp4y701/omar-khaled-4_compressed_scaled_down.jpg?rlkey=qtzq77fjwdm52iyd9ytlb7kmm&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/s28ot6l87wbihlj0cz3c6/omar-khaled-4_compressed.jpg?rlkey=m6hfqrsgpkp85sf3nygrzt444&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/84zbubfwpvzhv0vxuj6tl/omar-khaled-5_compressed_scaled_down.jpg?rlkey=wvkd67t62d43uvhjyokk1vk8l&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/mronsi81e091up2137g6y/omar-khaled-5_compressed.jpg?rlkey=nmp5vjou9xl42ucq5nut6ch80&dl=0",
          "top",
        ],
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/1jseyci6d86cu0frz12rk/face-mohamed-jimmy_scaled_down.png?rlkey=rk35zp8vqlqytz83fv0qbdjp2&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/u3ehopzv6g9s4h22b4hez/28.png?rlkey=n2ci6mfpmio1a2n9me6n29r9b&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/g2x1rxx4uutiy82p1zhmg/jimmy-1_compressed_scaled_down.jpeg?rlkey=caglz2xxpipw9xvgttukioov5&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/67inmzofjifyvbtxkg5iq/jimmy-1_compressed.jpeg?rlkey=h71dxwhpfh1fvnmig1laob6h9&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/kvwhhrarm56iretitxxvv/jimmy-2_compressed_scaled_down.jpeg?rlkey=6yprvwnh248yd3zenrwhoxoh7&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/b9csxdwkdbidzq9zx893o/jimmy-2_compressed.jpeg?rlkey=ytbps1n16zw5ukh66u5pzt8xr&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/62dycxddobjm9etauvh9g/jimmy-3_compressed_scaled_down.jpeg?rlkey=atqyuj1zj26c9n1ypu0j36xep&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/cv64uom7txhx2mkq2p67o/jimmy-3_compressed.jpeg?rlkey=wb5qcfx770jgwqblfjrfhiypw&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/vy4vc0esru0ywmh4kpewy/jimmy-4_compressed_scaled_down.jpeg?rlkey=10had52jti3ncs8j45c8drk3b&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/1029vnn62m5621bnjqw24/jimmy-4_compressed.jpeg?rlkey=mymw3ngo2g6zlgylmb9xipwwf&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/kqgnj6s2s42ywlxnfioey/jimmy-5_compressed_scaled_down.jpeg?rlkey=43x77ajgvhdjsknyjyclzu8d5&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/s2tecsrzi6hp6a61gg67v/jimmy-5_compressed.jpeg?rlkey=04qfmwq9a513hmze13wl2w1ly&dl=0",
          "top",
        ],
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/ghu863jqgv0odglcfo96f/face-mahmoud-noureldeen_scaled_down.png?rlkey=lsra87y81oh43wqxrvx89eqx8&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/byi3uevs20msauigar120/29.png?rlkey=onyi7r6e85het1hhvlp7a0kj7&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/alz56a0f4ibddmnclnpbj/hoda-1_compressed_scaled_down.jpg?rlkey=lcnw09oulilftxuiv5podbz75&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/z4uzpcvtq5ilh8mvl25nz/hoda-1_compressed.jpg?rlkey=dtzwruyihbqd6kuox5sn15m4d&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/n77e76achuskhq07j5frt/hoda-2_compressed_scaled_down.jpg?rlkey=5a657h9kqgwfvjndfh12m5xhx&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/bfysp1owtzxs5zwmu3u0d/hoda-2_compressed.jpg?rlkey=4sz554et3btxzr8nywdv1bais&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/f5txeuh902yn8eau2l7zf/hoda-3_compressed_scaled_down.jpg?rlkey=560ct7i1dvm9jfzlrzuq2fb4h&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/ueuo5jgv53s3mz5lfph7f/hoda-3_compressed.jpg?rlkey=wf86e827rmdu06sz4ggxqx715&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/6zyspfq7zvf6hlgvynwqn/hoda-4_compressed_scaled_down.jpg?rlkey=p6tlrry9fgi3rn110zihrnyyj&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/g9if9t1szetdjgtsooztt/hoda-4_compressed.jpg?rlkey=dw6mlwlismtxcgde166xhgnop&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/oufmyc107g91j955l09km/hoda-5_compressed_scaled_down.jpg?rlkey=7mkxbti0h9sp353j9tiwcqtnk&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/qmbe4yxtjs1q47v4mvyg9/hoda-5_compressed.jpg?rlkey=5uokgagned0hi2fv0hc7ko0qy&dl=0",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/fc9wkhvf487raugnugeef/fawzy_scaled_down.png?rlkey=5td4c451ky7t8yzpkozyfkso8&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/s5i52ol6oraykwfzki507/30.png?rlkey=mhz0knzxwat5zokt9iseaivqp&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/sauh2ls1evd1knxfbzzec/fawzy-1_compressed_scaled_down.jpg?rlkey=377udpsi3c6hyez6673tnmebo&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/sw203cvkp80p3oy7s2a2d/fawzy-1_compressed.jpg?rlkey=0bai7q36v9ibw9iaguj79t452&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/lzg529oz6ne3qq5nt7e1q/fawzy-2_compressed_scaled_down.jpg?rlkey=knfooyw6laiqr0hfdmj07hhm4&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/3lwwx6baakhtngys7bjbb/fawzy-2_compressed.jpg?rlkey=socturo9kgz72fs8oo3lbej09&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/frulies7s1pl75ymo73j6/fawzy-3_compressed_scaled_down.jpg?rlkey=9n2x2a11lk8x3feqano03oll6&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/3l1vmibjhbkgtdq4ll45k/fawzy-3_compressed.jpg?rlkey=kx3kbupneojfng7m5bcviiu40&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/pzvzwl4trh3mj4lyvdt1q/fawzy-4_compressed_scaled_down.jpg?rlkey=pzqelwdhpt2na155ws1y0kzvg&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/ltbuaf2swyq22e8g8n9z6/fawzy-4_compressed.jpg?rlkey=l66sec081pvuthbge9tj7vkbi&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/rl77qx9d9y0m8e4qplua3/fawzy-5_compressed_scaled_down.jpg?rlkey=xd3dbkng9a852pvzkifi43mk6&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/s70ahexyhlod9jvmutep1/fawzy-5_compressed.jpg?rlkey=5vxvcvltpwzb48ndc5s0li9jw&dl=0",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/3yhbxj03a3rgvh79pn497/face-agroudy_scaled_down.png?rlkey=jfu1gkoivn97k1yefrx86hzrv&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/12wczwng95gvkf7e5i8jb/face-agroudy.png?rlkey=yngenrgsammugzswsqd6hckus&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/78kwhnk24jsmaxscjbuq9/agroudy-1_scaled_down.jpg?rlkey=wdw3g44agokcbvliuiflxpju5&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/09gqgm6fnqgla4wjivjl2/agroudy-1.jpg?rlkey=ms104us081f1wtb141jnlmnm8&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/sa2rpm451h584qfwo54an/agroudy-2_scaled_down.jpeg?rlkey=ehip52e1gf206jsft3zr4x4g4&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/lltr88dhhi11wavrlrt4d/agroudy-2.jpeg?rlkey=07i7wekh4y4wlsoxn28jt4qf8&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/x7ewb1d92lc8qblixj4ep/agroudy-3_scaled_down.jpg?rlkey=eig55meqwtykr5rank7si8dmr&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/qldh38aslud5sj6uiayic/agroudy-alt_compressed.jpg?rlkey=jkklvt7p50rl1hwfkcztk40lw&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/a5utbhzkotgwvjeotiyvf/agroudy-4_scaled_down.jpg?rlkey=j9fphgmb45g40fm4c65vp8m23&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/ugqlaf5h8tvjaew3mwzx5/agroudy-4.jpg?rlkey=fxnz45eqnarmtqx22mnm2xyf9&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/leqzzy1ako120z5ratqe0/agroudy-5_scaled_down.jpeg?rlkey=m5dhr107aquvrq33bb3qaco8c&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/wxfmr7nenaycupl6xtm9z/agroudy-5.jpeg?rlkey=gkp0g5n46dv7svxh9hp91bwfk&dl=0",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/yxg8oiu44zb7pdbg9acc4/face-samaan_scaled_down.png?rlkey=f6ff25hso8gcooy5z174yg2w2&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/ejonw0hd206km6ioaaw71/face-samaan.png?rlkey=yk9e9p8ykkz8r1e75ax8wcnvi&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/xq30wap2yzlsil57c9ria/samaan-1_scaled_down.jpg?rlkey=0k7qjv7hzhf5zrn3hywhkqg4p&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/3qakarefy8kesz1fsmh3t/samaan-1.jpg?rlkey=20eq78ytug2pdxutigsvo2t2r&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/1a09d1wx4wv0ndrc5nv0b/samaan-2_scaled_down.jpg?rlkey=w2tg3i2q0hmealxg3cje63by4&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/3trtdc1xu54388l3dpdc9/samaan-2.jpg?rlkey=5kbmd9lci9zfn3t3grdj472w2&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/w4r7dmqgobwav7d74ska2/samaan-3_scaled_down.jpg?rlkey=yn41fn61xhulx2epofpsolrtq&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/n4mtu26m9mah1eguhz1f0/samaan-3.jpg?rlkey=h1cuwg96hsheu9qmfmek4soaq&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/qcn2ngpk80cofhwmeideo/samaan-4_scaled_down.jpg?rlkey=pg105abkim6nb3a16w85fdced&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/w9izqh6d56637anqzpyvy/samaan-4.jpg?rlkey=3s2xexll2fkrjhgmihospb70y&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/wt00rn08hudlulde5wj3x/samaan-5_scaled_down.jpg?rlkey=n61ee2zhtp9j0gn4m4xsm3f06&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/h4v9e10ghh5lg5e1xspif/samaan-5.jpg?rlkey=dngou21zfeoszg5ygf9x2tqju&dl=0",
          "top",
        ],
      ],
    },
    {
      id: 32,
      name: "حلمي",
      date: "25.9.2021",
      tags: ["نويبع", "Moderate consumption", "بايو", "Tony Iommi"],
      rating: 2.5,
      points: 0,
      role: "مستجد",
      quote:
        "The mirrors in your mind can reflect the best of yourself, not the worst of someone else",
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/k03diyptlk4okqi4wvisz/face-halooma_scaled_down.png?rlkey=gjlm0ult98gfvqg7zcmd5ok82&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/ohndhbxn660uh9b3uoh6o/face-halooma.png?rlkey=kupym0gc9llfpfuru4zqexd31&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/9pgugcj64z99cj4n1nnuy/WhatsApp-Image-2023-08-13-at-18.02.36_compressed_scaled_down.jpg?rlkey=65qj3je3et0g2wjg5o2l1mxtw&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/sii7mrerg0pu478k11atp/WhatsApp-Image-2023-08-13-at-18.02.36_compressed.jpg?rlkey=sga0zdh947qn0v9xu43yavqjs&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/ldaa7pro9h23kw11z1o4v/WhatsApp-Image-2023-08-13-at-18.02.37_compressed_scaled_down.jpg?rlkey=3c9ehpm6tqbqfkauoh5mc9crm&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/uawi671ykcbpl9ac11l6c/WhatsApp-Image-2023-08-13-at-18.02.37_compressed.jpg?rlkey=gzqupdttpidfk87frlmktu5r4&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/a22z5jszm85fpsvootu96/WhatsApp-Image-2023-08-13-at-18.32.03_compressed_scaled_down.jpg?rlkey=s94k9tn3vc6rprrheess4tsyi&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/ta8jjtpzrw6la0hx79smw/WhatsApp-Image-2023-08-13-at-18.32.03_compressed.jpg?rlkey=l82v4rmo66ggqvn5dfa4721wo&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/z9fb94fjx47tdpsn4e7vh/WhatsApp-Image-2023-08-13-at-18.32.04_compressed_scaled_down.jpg?rlkey=l2rv2a4tr50pj2s4rb585sxe1&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/attwwd2l61c86bxmb3ag5/WhatsApp-Image-2023-08-13-at-18.32.04_compressed.jpg?rlkey=do82c99d9h26j0a3163y2i0ub&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/pbwuwjcg90mubt9pw8mih/WhatsApp-Image-2023-08-13-at-18.34.25_compressed_scaled_down.jpg?rlkey=e27xsbzdr3d2tamy7446r051u&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/9pu5xe85amekt046fu3i7/WhatsApp-Image-2023-08-13-at-18.34.25_compressed.jpg?rlkey=izj10sv4toggxj225pgzbfiok&dl=0",
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
      face: [
        "https://dl.dropboxusercontent.com/scl/fi/z54qdvm4eoqfsc9kw1crx/face-hassan_scaled_down.png?rlkey=huxsdsm7wncqq6pq2cgw3t03e&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/k7w7l43xl43tfhyiezxoj/face-hassan.png?rlkey=elewsi8w0f1otqcgu18qmk2xf&dl=0",
      ],
      images: [
        [
          "https://dl.dropboxusercontent.com/scl/fi/ulbnwg2hyad5kbi9eoe08/hassan-1_compressed_scaled_down.jpg?rlkey=8xobam25nz8e7cv9olkz3tlsl&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/5h5ga5at7trnoz1zopg40/hassan-1_compressed.jpg?rlkey=x88we7rxrwjw89c7dxt7es5rs&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/u8arbtbjjrejc3pyyo3y1/hassan-2_compressed_scaled_down.jpg?rlkey=7h3fieye10vraxn603mi7n9qc&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/k1npj9327ryusi1dq6lbn/hassan-2_compressed.jpg?rlkey=hiwrlq23ibkoghpv83xtdx6zy&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/e2r35oembokil8eunwgg0/hassan-3_compressed_scaled_down.jpg?rlkey=nh5xt8117tw00het01yuip393&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/987rlkwk3ogff0imp5e0t/hassan-3_compressed.jpg?rlkey=gpezpawu5ka8b7oldegiq0soc&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/imvkeycq11coigq70rhj7/hassan-4_compressed_scaled_down.jpg?rlkey=t219kma0olsqon5dzsxgbkp6t&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/etl8xs0e9ul2skfr4hx5a/hassan-4_compressed.jpg?rlkey=6w8ibwwxdwariyr2tqf0yearz&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/tnrsbm53zu4wqnawkun6t/hassan-5_compressed_scaled_down.jpg?rlkey=27rrgl63w4jbqh1l70xch2ycf&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/bpwf6zxbrat8h7xyph6ow/hassan-5_compressed.jpg?rlkey=i11xbeq55d0i98prm5rd63iww&dl=0",
          "top",
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
      "https://dl.dropboxusercontent.com/scl/fi/4757zfk3d5b75v7gfmnte/L_20220819_103350279_scaled_down.jpeg?rlkey=o8q81h81owlr09swy458ozsp8&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/2m3z6plkh4l21o25n3duj/PXL_20220819_103350279.jpeg?rlkey=sy8lyj29zoh80ohqk96bj7vb8&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/fduu98cp8w5z9po4ol1v5/apinsta.app_324845143_562160712186552_3599459270821353216_n_1080_scaled_down.jpg?rlkey=e9ackevswdjji3cf3dkfkanx3&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/yna7hocxgjgpjsaght43i/Snapinsta.app_324845143_562160712186552_3599459270821353216_n_1080.jpg?rlkey=61z5o79w8c7ss6u77culasnom&dl=0",
      1.3219094247246022,
    ],

    [
      "https://dl.dropboxusercontent.com/scl/fi/9jhhd0b8w1ybnb1i4xch0/L_20220819_145723693_scaled_down.jpeg?rlkey=mpd4ahvt2w9i5tmji90hk2gsc&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/sss7vpe71dsm4i62gj4v1/PXL_20220819_145723693.jpeg?rlkey=rkilg6tc1hpnsai7ml3lzbhxl&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/ehsv0zshyya68vth8i2ss/L_20220821_004336949_scaled_down.jpeg?rlkey=yz0a6ucs45hucgb7iswxhw935&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/mtlln597ff2ntaz1mwdr4/PXL_20220821_004336949.jpeg?rlkey=efwaoth4xn197376n74398pib&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/xwka5vhcda7uehyubmev1/atsApp-Image-2022-12-29-at-9.10.22-PM-2_scaled_down.jpeg?rlkey=37t7can5fmkj302rb9ygvaaya&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/evrtt8x6rhtwwipg397jw/WhatsApp-Image-2022-12-29-at-9.10.22-PM-2.jpeg?rlkey=bg656oje3r9xb3nnhqqjzg5k9&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/62dg2rw1g81q8gzd92jda/apinsta.app_324855207_3492073867729182_5138445503043831195_n_1080_scaled_down.jpeg?rlkey=u9qqsr86k668e8fsulgp7lw7k&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/pwbwqawiky41vzvpgmvv2/Snapinsta.app_324855207_3492073867729182_5138445503043831195_n_1080.jpeg?rlkey=p1a6b1vlv7becj82bcu22qc6s&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/39mkg5o80ben7k5c5908x/apinsta.app_325273604_716598833444051_4064935153331406929_n_1080_scaled_down.jpeg?rlkey=2m8ka7fs2gtjb7d7yzurnvpvt&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/nvagdhzsvyqm30zzcairk/Snapinsta.app_325273604_716598833444051_4064935153331406929_n_1080.jpeg?rlkey=otl0kbv1vwkdo9sx1bpgpj3oy&dl=0",
      0.8773354995938262,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/3ngtp1y8jf2o2tnsmnzu0/atsApp-Image-2023-08-07-at-11.51.07_scaled_down.jpeg?rlkey=wbmuk4msjk1xsveywjwss4uuh&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/11yz3ypfybzx6188u5deu/WhatsApp-Image-2023-08-07-at-11.51.07.jpeg?rlkey=mfih3d9c3yu6xrh9hwtlmuwp5&dl=0",
      2.1207658321060383,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/4nszi45mx8e66ccef8zgd/apinsta.app_325309946_156365237170932_2129811349033053585_n_1024_scaled_down.jpeg?rlkey=i6jn6agn4x2lu1dcumvox74sx&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/3tyzxw8sbznmdzyxn9d9h/Snapinsta.app_325309946_156365237170932_2129811349033053585_n_1024.jpeg?rlkey=a9o1rmanak7s1138x7bsaejny&dl=0",
      1.3296296296296297,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/l2eu3ivtkhyezayhe0iwa/apinsta.app_325377129_495928802712349_3959445138179630308_n_1024_scaled_down.jpeg?rlkey=npdoxwuzgxp5phzwa9yt5onkl&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/digmpykaml95f6gklnn1q/Snapinsta.app_325377129_495928802712349_3959445138179630308_n_1024.jpeg?rlkey=87edwddacdsuepv9xbq7h2cfp&dl=0",
      1.3316892725030827,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/cnam9j0agtqus4amjnx6o/apinsta.app_325378377_213270801070438_5638727558883317026_n_1080_scaled_down.jpeg?rlkey=3uxk9d44o1vkaiagyxxr3iots&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/lmcj3o9vbhlpcx37d1z6x/Snapinsta.app_325378377_213270801070438_5638727558883317026_n_1080.jpeg?rlkey=eqj3q6axaf79kkla8n7emragr&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/fnrup964u13o8s00m4lgn/apinsta.app_325412254_748537506888960_1129072179786154317_n_1080_scaled_down.jpeg?rlkey=uraptqmi4ops2xlta51ckoxgz&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/d0fxhbppcj3lk3po8a6m4/Snapinsta.app_325412254_748537506888960_1129072179786154317_n_1080.jpeg?rlkey=adsc20546ebcm2ohlijqz2bpp&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/xytgkgw2zaqod05ld2vee/apinsta.app_325469179_904831710526983_6777950729802012768_n_1080_scaled_down.jpeg?rlkey=2lti44iixwi1utgagyz29ed35&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/856fggmauva62o78ptrj2/Snapinsta.app_325469179_904831710526983_6777950729802012768_n_1080.jpeg?rlkey=84yuxj8tzd2dhp3oapwsagm5c&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/xlnqfismc17ca3ff2tcjp/apinsta.app_325479434_130544899663756_7279507889181171340_n_1080_scaled_down.jpeg?rlkey=l26x8rf8pl58o28pl6cmcz9y7&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/urw83l69fx6h23u35jli3/Snapinsta.app_325479434_130544899663756_7279507889181171340_n_1080.jpeg?rlkey=mf4km07pvliqhkcdwkggwhzw9&dl=0",
      0.8773354995938262,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/9emak1o41mgz1btozl8eo/apinsta.app_325603715_875410756872745_5097108951946532525_n_1080_scaled_down.jpeg?rlkey=3u0n6fi40fhd851rxsmno5e4o&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/o1mdzo9eg8rgytrqjrgaf/Snapinsta.app_325603715_875410756872745_5097108951946532525_n_1080.jpeg?rlkey=99nao2k48mczxuiaxexz063i4&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/81vo9xue4id9xvw56ggu7/apinsta.app_325643699_1252324722018544_7754570991086689079_n_1080_scaled_down.jpeg?rlkey=0djhnn6b8tb2z6bptf4z3vkwr&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/6q79f5z33uq779fmep2sj/Snapinsta.app_325643699_1252324722018544_7754570991086689079_n_1080.jpeg?rlkey=9cv1bq55dlw410ypcd4rtn0qg&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/q6q6ibegogac11vtx6j2j/WhatsApp-Image-2023-07-12-at-02.11.342123_compressed_scaled_down.jpgrlkey=qt03g477vuggc8o82fvineqkm&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/q4dyu839brwce22v0d3sb/WhatsApp-Image-2023-07-12-at-02.11.342123_compressed.jpg?rlkey=pxi9g80h3oeljt57l8i66rfqz&dl=0",
      0.75,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/kl3q6raqdmxlgn6nigbgr/apinsta.app_325649429_577014164368047_2136377605371966923_n_1080_scaled_down.jpeg?rlkey=7auhymy13448tjcbt7h5ekbhl&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ah8aftvwyynwjjdesnuko/Snapinsta.app_325649429_577014164368047_2136377605371966923_n_1080.jpeg?rlkey=7p4n9h3pbiwm2qnubgqe180q0&dl=0",
      0.8777335984095428,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/8ne5i1c383ke5z965ru0a/apinsta.app_325743006_874702150510596_2916817875102450559_n_1080_scaled_down.jpeg?rlkey=27keerskwpyo9bj9xi2zf9x5r&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/nqiuwymu8xvafvhflzvve/Snapinsta.app_325743006_874702150510596_2916817875102450559_n_1080.jpeg?rlkey=9u1nfgp562xcafc1er5g7t36b&dl=0",
      0.8773354995938262,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/2et1mor42z767bt64j082/211129_061011_scaled_down.jpeg?rlkey=hohhxrcnq31trro8hopbsu7ew&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/prwhezm3ilwqz7aeqtvbr/20211129_061011.jpeg?rlkey=cuhlrc42avm3lvjhki7o0rcbj&dl=0",
      0.75,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/ckx3d7x6xsi4j7jw344x3/atsApp-Image-2023-08-07-at-11.51.01_scaled_down.jpeg?rlkey=i30kybb95wdd5yyhc3buqr42a&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/dvoxj2xe0rrzn3p5rga2w/WhatsApp-Image-2023-08-07-at-11.51.01.jpeg?rlkey=c30h3y8ciskh8bqvhanfdosk7&dl=0",
      0.75,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/31unsj30lxj6tp312cr20/atsApp-Image-2023-08-07-at-11.51.09_scaled_down.jpeg?rlkey=c89opikz6eivjro2j0x8wj2nl&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/fmqra5sddbbxwhdndcsj3/WhatsApp-Image-2023-08-07-at-11.51.09.jpeg?rlkey=l2x12s62v3nnhdehmnxt3bntm&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/8kfubggrvzkl5uggof5sa/atsApp-Image-2023-08-07-at-11.51.12_scaled_down.jpeg?rlkey=piibxesaiwiu6wf1e7vqw6k4b&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/i1g0erilr6lyb2pstgtz4/WhatsApp-Image-2023-08-07-at-11.51.12.jpeg?rlkey=m2cy4uzbwetuw559v9j1bogcx&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/paznak0bl79i5tpead94t/atsApp-Image-2023-08-07-at-11.51.23_scaled_down.jpeg?rlkey=c8h6z9w6ddvk2muwblrn1semy&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/hdj0hvxfj811yankvqgt9/WhatsApp-Image-2023-08-07-at-11.51.23.jpeg?rlkey=mqt5flq8znmdobgahqcpux2x0&dl=0",
      0.7508650519031141,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/bg5p0rqmqoqn9ovb9mlcj/atsApp-Image-2023-08-07-at-11.51.31_scaled_down.jpeg?rlkey=cnmm0lxpbelfzvufcq172gh4d&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ccdcczolxb3znkgacd02g/WhatsApp-Image-2023-08-07-at-11.51.31.jpeg?rlkey=30yfaq4yi8cg0k7zfb47qnhpr&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/ssjt6daz2i2sioi15yzo0/atsApp-Image-2023-08-07_-at-11.51.31_scaled_down.jpeg?rlkey=lk0b5zc3g8sq5pha4onhfom1u&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/fgrthjwnzd7sx082uroqs/WhatsApp-Image-2023-08-07_-at-11.51.31.jpeg?rlkey=huhrcdepnl1m28vxhpom5wgv5&dl=0",
      0.75,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/mi059pnqd298gby8jqjna/L_20220204_210121461_scaled_down.jpeg?rlkey=rm6r0mwr2wrfn15mkbjbaijdn&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/3g8j5jzuoe9bfat84vyq1/PXL_20220204_210121461.jpeg?rlkey=yd5x4jmgkcljhtba5y620b9wc&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/q5fm651u99k8ou0xqpl6a/L_20220204_210140329_scaled_down.jpeg?rlkey=72uyglat45ix7im3kq4dor8iw&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/huz6borg1hz3mv39ays36/PXL_20220204_210140329.jpeg?rlkey=iubek1w9aola6k0j6p50v6wyf&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/57m3lh16b1su1wth16c4f/L_20220205_041240738_scaled_down.jpeg?rlkey=uae5wzi1o49l12ryahpf4280s&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/9aw99r1ulhw5tsphhvuui/PXL_20220205_041240738.jpeg?rlkey=osk8pqm8u65q9uqufydghyj98&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/73rkz8a1vkqx1y7okrruh/L_20220205_041247844_scaled_down.jpeg?rlkey=hben8rw6ly104x7cxrwk041uj&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ee2wnjkpe570ac87i6tk1/PXL_20220205_041247844.jpeg?rlkey=701qxt0f3fcvyilztcuaoz8ao&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/q3ybu2chnn1iydt5s6mmy/L_20220205_041413597_scaled_down.jpeg?rlkey=7sozq1cagr5da07wa8bb1vgaj&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/5hy1sz2787xzkpaj64kc7/PXL_20220205_041413597.jpeg?rlkey=dzgmg78utamq70qyjc0xdm41v&dl=0",
      0.5625,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/je3x39tzz75dq3pkp3afw/apinsta.app_323831518_717924316643682_6344567621347560290_n_1080_scaled_down.jpeg?rlkey=i9gcufdjbmbjblbtccwscje66&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/5wp1ph9tfqupdq6gpdog0/Snapinsta.app_323831518_717924316643682_6344567621347560290_n_1080.jpeg?rlkey=krjsg4eavlhe79pul83pn13lw&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/xq353haxbzzgndnlw5fxx/atsApp-Image-2023-01-06-at-11.00.44-PM_scaled_down.jpeg?rlkey=ru1zmuu3249cqk0gpginwdait&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/8nlmw3w9f3nrkpll2y6ve/WhatsApp-Image-2023-01-06-at-11.00.44-PM.jpeg?rlkey=kk7uhqqrb0pqdaeh5xe1pproz&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/yn9727i6vyp58qkkyds3q/atsApp-Image-2023-08-07-at-12.58.34_scaled_down.jpeg?rlkey=l5vtq8a1jkqn6rkbfvrcl6bhw&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/hjbscwmbh9lhnxoju1m2t/WhatsApp-Image-2023-08-07-at-12.58.34.jpeg?rlkey=k311ay8349v05u4khvsmzbcf3&dl=0",
      2.1658206429780034,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/4m2u7mpks6u2acbktd1jl/apinsta.app_322116448_889461365714187_3773389420237815747_n_1080_scaled_down.jpeg?rlkey=h0wnejkjl8nbe0d8bxysckfzx&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/hly19dl14qtr87v6npqd1/Snapinsta.app_322116448_889461365714187_3773389420237815747_n_1080.jpeg?rlkey=xd7dzck7738gp2kvvwvdptgea&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/hemlxl8b1a344bk97b44t/apinsta.app_323701613_122760677352405_6995574614021401569_n_1080_scaled_down.jpeg?rlkey=xh0gycianufpv74k535xlnage&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/6vb7x8unfaf1aypf3286t/Snapinsta.app_323701613_122760677352405_6995574614021401569_n_1080.jpeg?rlkey=aq7qb5c2t3lgav3vb66679ra6&dl=0",
      1.0624349635796047,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/wjg3xvwp1dz6q6ctukwcl/apinsta.app_323804241_701024198302353_2368365549789758912_n_1080_scaled_down.jpeg?rlkey=ym9ipeq5vtk4guszzcnhktwn0&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/2akiwftdic32hbeg8dwkc/Snapinsta.app_323804241_701024198302353_2368365549789758912_n_1080.jpeg?rlkey=4h2hopf1tsjf8mtiub5kf81kk&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/x8fo9ayvbk7goabwheq29/apinsta.app_323874449_553420493369083_3720061485599570598_n_1080_scaled_down.jpeg?rlkey=r5s1fpystqrtqjaamksmgkygr&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ocvo09ilss4gqrgpo961x/Snapinsta.app_323874449_553420493369083_3720061485599570598_n_1080.jpeg?rlkey=vgv4zrwwbbfdtglfv294ldkia&dl=0",
      1.2872467222884387,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/tch6uquhk24yd4eaa4305/apinsta.app_323889818_229788556060341_4591451118688162798_n_1080_scaled_down.jpeg?rlkey=5bs5bcjjp8u2nvfw8kmxd457z&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/vwkr4052btwyrpqomoi81/Snapinsta.app_323889818_229788556060341_4591451118688162798_n_1080.jpeg?rlkey=x7xpr0l9l4uspynq46ptlnrn5&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/tz0afp45tuxgdaqf3gr6a/apinsta.app_323898869_581573227130729_650637531521344061_n_1080_scaled_down.jpeg?rlkey=msf3f0acphxmcbsfxmxs1s0sy&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/o3w6rsiwsc31ckrurvvb8/Snapinsta.app_323898869_581573227130729_650637531521344061_n_1080.jpeg?rlkey=b9ib5jsu558dsmltajvcvw0xa&dl=0",
      1.1751904243743199,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/08uidf57ozxg5c39a63qg/apinsta.app_324093633_558873502809256_132601731855807286_n_1080_scaled_down.jpeg?rlkey=ktfitdwl7xv7jjivm2lin9aeo&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/uwu7enq3z0hnwfyo963n1/Snapinsta.app_324093633_558873502809256_132601731855807286_n_1080.jpeg?rlkey=xy4e1e0y373woetn5itsi1vlf&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/8z8ceen921yupv9550gtv/apinsta.app_324243149_1569659306833493_1553133726214305269_n_1080_scaled_down.jpeg?rlkey=l4sjcsmnl72dxjs4yk1jmczaf&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/sms5jd0guqveus98vgxsi/Snapinsta.app_324243149_1569659306833493_1553133726214305269_n_1080.jpeg?rlkey=25fpgxqfmhjw3nslwpf0fzn5v&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/9j8jpuqgdctroklhtv0cp/apinsta.app_324294468_610179300913479_6970057246088090794_n_1080_scaled_down.jpeg?rlkey=gwnl5ca31nunapymu0mhr1kpq&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/5q6p5j563fgi3nrjhfwg8/Snapinsta.app_324294468_610179300913479_6970057246088090794_n_1080.jpeg?rlkey=wovhvgi4w5566qts7xavgorn8&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/66x2z2m3yrp2cu81zzt4o/apinsta.app_324710930_723582809336954_8912534861103992695_n_1080_scaled_down.jpeg?rlkey=m20z7up1xfzh4w9x2cxveqyzu&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/1x8n3s2vkjbw9z5k10n2i/Snapinsta.app_324710930_723582809336954_8912534861103992695_n_1080.jpeg?rlkey=rccqobvjwpwuwex8oymqb1kwg&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/l3ibmimm12ansgvd9wboy/4191241_1464392157644260_3846226135946430105_n_scaled_down.jpeg?rlkey=p3mc1ziaazbt9gyq2y6y5vqbh&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/2ddgir9h6easr0ullhvdy/364191241_1464392157644260_3846226135946430105_n.jpeg?rlkey=abi9fshxxuzo6xdhk1bkpm52w&dl=0",
      0.75,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/lcee5gdhjb0ifntdtdpwc/4241161_823988899027250_6642180440487887326_n_scaled_down.jpeg?rlkey=0mqosycl7uflfssxkbw9esr4t&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/n4kmb48v0aohc79lkaonq/364241161_823988899027250_6642180440487887326_n.jpeg?rlkey=n72kcl3oifjoxsj3ojiozlity&dl=0",
      0.5625,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/bfv87ywoa1phs2d2ycsgf/G-20210111-WA0083_scaled_down.jpeg?rlkey=hwvrrjbu911xr6tht6squ0jqr&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ltwg7zbvqyll0vv55t6wv/IMG-20210111-WA0083.jpeg?rlkey=yhcx6wxq4reeesf78uyc77m34&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/2c4g5o9gitds17oylmei1/apinsta.app_323695247_924558172253941_747530922886522969_n_1080_scaled_down.jpeg?rlkey=q2tudcz8ndxuajqypcke7xz9q&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/8v1tgxh7m5oktck8tvzbi/Snapinsta.app_323695247_924558172253941_747530922886522969_n_1080.jpeg?rlkey=b4086h0ng25rejfofqvxp6syv&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/wp1b75n2kpaokj8zf5x6i/apinsta.app_323814047_219747350425343_1798337012613300867_n_1080_scaled_down.jpeg?rlkey=cvjmyvgtfzft3lup0744bjvdh&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/gjsvha4qwyikk0w25uaq3/Snapinsta.app_323814047_219747350425343_1798337012613300867_n_1080.jpeg?rlkey=7tn22ssukj6bdwgb2kniwkj5x&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/nlla6rhy6wenocsmnwvwd/apinsta.app_323837765_475782854734800_2780340370118573845_n_1080_scaled_down.jpeg?rlkey=b2bxg0ltjcrim5wrg58qwmw2d&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/0rqyxywyq6e5jxxyqpzd1/Snapinsta.app_323837765_475782854734800_2780340370118573845_n_1080.jpeg?rlkey=59ynktz1hxi5157q4ldyxikbv&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/01gimbtj6wc78wddznq73/apinsta.app_323875352_2122081904846924_6434602259786393166_n_1080_scaled_down.jpeg?rlkey=pvvij57vi184gt198hs5rhw0a&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ny177d4syz4od9mnnofn2/Snapinsta.app_323875352_2122081904846924_6434602259786393166_n_1080.jpeg?rlkey=rwx78bc41j5kpu6fx3bxmpq00&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/h0fp6yfvuo9oxgn3k6dxf/apinsta.app_324070833_129455499990446_4025983316753703822_n_1080_scaled_down.jpeg?rlkey=fzst003izc547qj06ulynntvf&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/2ta7j3rcovocqglcfu8rn/Snapinsta.app_324070833_129455499990446_4025983316753703822_n_1080.jpeg?rlkey=z44f9q1qbcews0fk642vee7an&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/6nvbjoiip82h0akln27a3/apinsta.app_324386138_845784329834876_4828097744743438576_n_1080_scaled_down.jpeg?rlkey=43bma3lqvp1nfqhvzlzu8zhm0&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/mzb9ceit5y6im1nz9m9ra/Snapinsta.app_324386138_845784329834876_4828097744743438576_n_1080.jpeg?rlkey=9n1sxsdtfwvuo8gl5zcm0x347&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/ld19syrkkwwuguti27eev/apinsta.app_324397116_642682604274321_1897066700353685482_n_1080_scaled_down.jpeg?rlkey=hutffurftrg81vprvc4bg7cym&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/670ks88ysw3kpmo6k07hf/Snapinsta.app_324397116_642682604274321_1897066700353685482_n_1080.jpeg?rlkey=gge5jpxg0rt50llvk6j3g0z7o&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/f7l24xgc9hs2a6rwjzq2u/apinsta.app_324552776_702019354665509_5283291066668132284_n_1080_scaled_down.jpeg?rlkey=xeyzz0ynqedofud4ed9hetszy&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/pbl9bx53yeuwjmrjrbej0/Snapinsta.app_324552776_702019354665509_5283291066668132284_n_1080.jpeg?rlkey=qruei5ngfmc2ygne0s2p55cxf&dl=0",
      1.6646825396825398,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/lzr67a3sp1hc17n8hqk34/apinsta.app_325589054_164833915884486_3395971259200360105_n_1080_scaled_down.jpeg?rlkey=pa6efqub850fx1v9mji2ysxx0&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/wpcxylm4lblvsh6594g8w/Snapinsta.app_325589054_164833915884486_3395971259200360105_n_1080.jpeg?rlkey=elh2lb17v9kh6n361al23uf9d&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/kb0cgsm2smm3vzs5nhfkl/apinsta.app_332940653_589176703097204_2352050013320120452_n_1080_scaled_down.jpeg?rlkey=jr8qtnd8f01d0uu1tq7wgfge0&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/zjx0ggdyplliu2ybmy32k/Snapinsta.app_332940653_589176703097204_2352050013320120452_n_1080.jpeg?rlkey=9w4g1h5f7pyrqdwc5i2zcw6ph&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/nsv7pav82k4vlyt3cjndp/apinsta.app_335912012_6042693712512350_4050199580188918720_n_1080_scaled_down.jpeg?rlkey=lxzpjjeusft0xr1axe80w7rxi&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/61nb1s7kwqpzte0zl0fjg/Snapinsta.app_335912012_6042693712512350_4050199580188918720_n_1080.jpeg?rlkey=9a0rain5r5r60dkzr2jzz5gmf&dl=0",
      1.7763157894736843,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/5ek5qc89sq78duo4ujkvt/apinsta.app_336056619_940490594047974_2091238987169082789_n_1080_scaled_down.jpeg?rlkey=lfalnmxd46ypz11o0f4exqb5o&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/z4sqlc971qn0espu36r1z/Snapinsta.app_336056619_940490594047974_2091238987169082789_n_1080.jpeg?rlkey=aprra3omp4zcei4arybaxiqat&dl=0",
      1.7763157894736843,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/vgp9vz28xjtps7dhkqfcs/apinsta.app_336278535_611633220349550_7488170421849941493_n_1080_scaled_down.jpeg?rlkey=69eog3ywv1y3h5kk5kvrwgjpb&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/od7f10l4ey3pl1pphisob/Snapinsta.app_336278535_611633220349550_7488170421849941493_n_1080.jpeg?rlkey=d0b6n5kdrmjh9sti8pkzg0p7y&dl=0",
      1.7763157894736843,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/b1d4o5izl7crln1zbqw4q/4143230_2285022328553143_7965193856809973589_n_scaled_down.jpeg?rlkey=8btgtzoeb3mz3az6iiuthmytj&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/xyozc340poynilevrlvjt/364143230_2285022328553143_7965193856809973589_n.jpeg?rlkey=7sal6t44vc91p4uc6dnw5jqrx&dl=0",
      0.56171875,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/1jwi3xq49vvdadpqcx944/4218221_6815431878477585_7622711298884022232_n_scaled_down.jpeg?rlkey=2qof7bpurfix5mkqe64uc5q0u&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/xns8gw3b0tujif1rizdob/364218221_6815431878477585_7622711298884022232_n.jpeg?rlkey=0zp174k08r0uoysik95w7n57i&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/0gj4jukyciq7uyl9awix7/4229705_1532660507564893_5007600123142401024_n_scaled_down.jpeg?rlkey=lb41lrh17k3rmslrdrpps4heh&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ksa5hz3g15p6lgvlt3y28/364229705_1532660507564893_5007600123142401024_n.jpeg?rlkey=oypxj9r3un4myolhudja8knni&dl=0",
      0.46142578125,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/sq7j59k7bihtguf9pysrj/apinsta.app_323686016_631311368768723_2019984561275696246_n_1080_scaled_down.jpeg?rlkey=rv63q85mr1o1lon7s0guzlo7s&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/83yyionjyofpfmb1pybb1/Snapinsta.app_323686016_631311368768723_2019984561275696246_n_1080.jpeg?rlkey=t184qhrbqqys2xid9m8bu5v4a&dl=0",
      1.2465277777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/izo94l4sd1ae3jb1ga0ln/apinsta.app_323825155_551920356861602_8081615887789313068_n_1080_scaled_down.jpeg?rlkey=4qt3ndgpc6wv25rn2ms8zsce4&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/kqofqg9qvfu8qw1my6qj6/Snapinsta.app_323825155_551920356861602_8081615887789313068_n_1080.jpeg?rlkey=u7t6am821fsibkz3a3uvw99wk&dl=0",
      0.8664259927797834,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/vpdx3leorat0arei3nemg/apinsta.app_324389143_8597294086978975_8953321267841511776_n_1080_scaled_down.jpeg?rlkey=vdlpxrpv1m1w5htum8iyvcgkw&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/sttyv2d708yx9f951b6p1/Snapinsta.app_324389143_8597294086978975_8953321267841511776_n_1080.jpeg?rlkey=632ft4lqqb4bdma1tnut68i2f&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/j23s5vgluczj0syqltn5v/apinsta.app_324850316_886243769353191_864186925555793083_n_1080_scaled_down.jpeg?rlkey=6lh12q628k0q0wfwxv4z4xjvn&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/038ozflrn5afia5fkilkr/Snapinsta.app_324850316_886243769353191_864186925555793083_n_1080.jpeg?rlkey=sbuspdz2umd9v7no6u4cei84o&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/5zq3ts56chd7qb8d6fjjb/atsApp-Image-2023-08-07-at-11.37.48_scaled_down.jpeg?rlkey=c88x3e86q4z58zwbld0aykdqt&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/14673itzsbng04yxbrrch/WhatsApp-Image-2023-08-07-at-11.37.48.jpeg?rlkey=sbiar92ji4iwk29v5qvkpm4cf&dl=0",
      1.336116910229645,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/c6o1prwvqo8xcg2p1i4wh/atsApp-Image-2023-08-07-at-11.37.49_scaled_down.jpeg?rlkey=c3d98n0wvop04q0l5qvzsmd18&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/8k830j3cj4v17k8n0ilaj/WhatsApp-Image-2023-08-07-at-11.37.49.jpeg?rlkey=0fp8arx4j4dpz2vxur40hailr&dl=0",
      2.1176470588235294,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/fbfq7w439n6x200s6m9rl/atsApp-Image-2023-08-07-at-11.39.24_scaled_down.jpeg?rlkey=08y8453pg8v0m1nqan1jw7wx6&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/q5l63u650kr3mcawzwnd5/WhatsApp-Image-2023-08-07-at-11.39.24.jpeg?rlkey=ideda9w3qdb2b3wj0a59ir2o1&dl=0",
      0.75,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/uzrb2ic5im57umyvuk84l/apinsta.app_355845672_585226543716492_3872569476395032827_n_1080_scaled_down.jpeg?rlkey=2fmg8e4vsb8n98q9qowrpmgyq&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/uwynaevwfyq7fkuqoqooz/Snapinsta.app_355845672_585226543716492_3872569476395032827_n_1080.jpeg?rlkey=xc7x6evofqs83igecsbu3x06t&dl=0",
      1.7766497461928934,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/jnhpr2daqhv69xiqvpvca/apinsta.app_355852046_630387525687310_6720491104244061484_n_1080_scaled_down.jpeg?rlkey=0060sk5qu3nmvtpzo2ncnmsaq&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/we2xcdhtfb6rf46f0doyp/Snapinsta.app_355852046_630387525687310_6720491104244061484_n_1080.jpeg?rlkey=91fm6cq6886ure1iv67oqzkie&dl=0",
      1.7763157894736843,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/oov1yt77lusyejl80laj4/apinsta.app_356079178_1459095288223812_2527992258686592523_n_1080_scaled_down.jpeg?rlkey=u102p0pkljeduu324aoyksrjn&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/2vxypdhd7zs82ej3s5r6k/Snapinsta.app_356079178_1459095288223812_2527992258686592523_n_1080.jpeg?rlkey=fs7is689s8v03ojplmp9fnp5y&dl=0",
      1.7763157894736843,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/wb6194nfg31322ean7psz/apinsta.app_356081941_951371559504577_1469490820984959472_n_1080_scaled_down.jpeg?rlkey=qenc66ldyosawg9421mne1q65&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/6gaiak512proe7duxgvx6/Snapinsta.app_356081941_951371559504577_1469490820984959472_n_1080.jpeg?rlkey=5vd3lnd7gme1hitdeotnno1rv&dl=0",
      1.7763157894736843,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/tzxzwpbhngirs80t6jerl/apinsta.app_324069355_220942687022952_5586047616575000885_n_1080_scaled_down.jpg?rlkey=1snm3dpm22bl6bwctqe1fjv3z&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/l1skbbiysk16f1tlvrkfb/Snapinsta.app_324069355_220942687022952_5586047616575000885_n_1080.jpg?rlkey=w7b5s7pkhnam4atl8lhaw8l1z&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/rfds6ds6w4z1mt5sisnwj/apinsta.app_324222609_838015350640183_6661843845777964184_n_1080_scaled_down.jpg?rlkey=c9uaso2o2n31rcd1ub1hzrqza&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/lp3pmzs93usia8mv3kqs8/Snapinsta.app_324222609_838015350640183_6661843845777964184_n_1080.jpg?rlkey=4utljvn1ulyg0c2ovzss9nqim&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/pmu8srsoao3tdc4y5x4ov/apinsta.app_324381859_555575123140647_2252630727649249568_n_1080_scaled_down.jpg?rlkey=2qbpqaarka4jitdht0fxf8c2g&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/q5bjms1u9ozl9x3og6mb8/Snapinsta.app_324381859_555575123140647_2252630727649249568_n_1080.jpg?rlkey=x1nlljlrhofxt1vkumfgdu1do&dl=0",
      1.3328859060402685,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/yhpb2gmo74e43oe59oc4p/apinsta.app_324396615_693335229133004_5211455814492428141_n_1080_scaled_down.jpg?rlkey=dy3bjb1nf6kar3zd96ph86thj&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/1zp92tmpchjsc4983vpb9/Snapinsta.app_324396615_693335229133004_5211455814492428141_n_1080.jpg?rlkey=h746us8up02pbv50nlse4bnbd&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/jzx9rmpz89hb8z4j82kf3/apinsta.app_324410456_687863572882623_4389457392679968600_n_1080_scaled_down.jpg?rlkey=vx0rnoawcfrdmzwm7kjlw0nd1&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/3conslhl79c4yagsjriw6/Snapinsta.app_324410456_687863572882623_4389457392679968600_n_1080.jpg?rlkey=boggma11fax6myouqef5qqbmg&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/4375djqzfyy4ll5qv7io5/apinsta.app_324428145_864022827978498_6677171463452812040_n_1080_scaled_down.jpg?rlkey=b748oyab0j2igchcl977q3ktg&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/msaj8xpt6x61480utbp2l/Snapinsta.app_324428145_864022827978498_6677171463452812040_n_1080.jpg?rlkey=75fdy13ckb0mng6txmahmiqm4&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/or7t97thifgm4eypsshg1/apinsta.app_324557560_894257804941364_4125540679704049614_n_1080_scaled_down.jpg?rlkey=dejf2kri67xazteqovt8z84lg&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/37gewi64doa2rxnfr1cqr/Snapinsta.app_324557560_894257804941364_4125540679704049614_n_1080.jpg?rlkey=iegaouracihw8o7496oq7fdzs&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/2tq2fi3rbr9a98dsuoz86/apinsta.app_324572362_136271865942831_6468796807999029976_n_1080_scaled_down.jpg?rlkey=dy83efy996rtllt1t3w8ru8v0&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/2pep33rniaswkdhdyrkev/Snapinsta.app_324572362_136271865942831_6468796807999029976_n_1080.jpg?rlkey=e0o50a98k8s0bk02oz6nsnm3i&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/7qx061idgkro5kryemcp3/atsApp-Image-2023-03-26-at-05.33.46_scaled_down.jpg?rlkey=9wxwb3iay0cu53e8k1b86hc2o&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/qgovu8ivto8k9yujx2uwj/WhatsApp-Image-2023-03-26-at-05.33.46.jpg?rlkey=hkyc176tly28lpfvb8l8loidy&dl=0",
      2.168021680216802,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/8613vj2pjsetjb95rnyzj/atsApp-Image-2023-03-26-at-05.33.50_scaled_down.jpg?rlkey=05zukrwd8wwxv8plbimy8kb1s&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/1tqk3t8imzrw9rqsyeo9o/WhatsApp-Image-2023-03-26-at-05.33.50.jpg?rlkey=714djj79onlj3khpbtvmnb347&dl=0",
      0.74921875,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/naw2eax7rxoszdc0bxfcc/atsApp-Image-2023-03-26-at-05.34.39_scaled_down.jpg?rlkey=pbc5vcipdklo8m7ubxbn4aa35&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/1kancszucu1zzvvks5623/WhatsApp-Image-2023-03-26-at-05.34.39.jpg?rlkey=tpaczd7jnvafsnnjda2ft4ba7&dl=0",
      0.7424242424242424,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/668a9gs3tfntrncb8op03/atsApp-Image-2023-03-26-at-05.34.42_scaled_down.jpg?rlkey=8l2p7dmnd50vwiiw685429r02&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/jdb3inylqgtl9xby4dccb/WhatsApp-Image-2023-03-26-at-05.34.42.jpg?rlkey=3xgmxihahy5ywd9l56l2prwj8&dl=0",
      0.74921875,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/oui4n8cdqx7d5cn3rc0gf/atsApp-Image-2023-03-26-at-05.34.423_scaled_down.jpg?rlkey=er60s5sbkzl4ceau8jlh7mq9b&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/coy50kmot2ddfethovwlr/WhatsApp-Image-2023-03-26-at-05.34.423.jpg?rlkey=xffd532433en36g10w0ylr0jm&dl=0",
      1.3347236704900938,
    ],
    [
      "",
      "https://dl.dropboxusercontent.com/scl/fi/tf7fxf681xh9jzrf5ybpo/IMG_8363.HEIC?rlkey=t5kciwwdz3j5w1myzrfxz6ysi&dl=0",
    ],
    [
      "",
      "https://dl.dropboxusercontent.com/scl/fi/84f21dnostl1yfnp9etw5/IMG_8391.HEIC?rlkey=g4chnqjae54ff2x1cktc8belq&dl=0",
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/ks5nuue2u5vuzxxhqgetj/apinsta.app_323898873_215220417624705_3262221782744501654_n_1080_scaled_down.jpg?rlkey=qttr19senvqwxbuc3t8pkcro7&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/qg7zb03e28ni61a0vtwrq/Snapinsta.app_323898873_215220417624705_3262221782744501654_n_1080.jpg?rlkey=ups4j3uv0ke0jnr36ur7dat0e&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/cmuhtx6reusxqm1d9bwe1/atsApp-Image-2023-01-06-at-10.57.26-PM_scaled_down.jpeg?rlkey=vhuv6tp7bno9vkycrrd5dzpcx&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/5qixmm8k0pc92hrnosdi4/WhatsApp-Image-2023-01-06-at-10.57.26-PM.jpeg?rlkey=i9m1mz0x6apwg1phpws0vm2tc&dl=0",
      1.336116910229645,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/ox3h97fwz7ja1a0dswwo5/atsApp-Image-2023-01-06-at-11.03.50-PM_scaled_down.jpeg?rlkey=rou09ekid0o938coboriw650c&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/u4wpw5ddn0ipf8ka2hwot/WhatsApp-Image-2023-01-06-at-11.03.50-PM.jpeg?rlkey=fm6zcfs7la5iz3kxqvqv7hyce&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/nntsk6w2jx4l7mmgdzl8f/apinsta.app_324702095_872695884051763_8238256009191518808_n_1080_scaled_down.jpg?rlkey=muenxje52mbh3yyy4qx2pw36q&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/trmswfj69my1ok7mbcrxc/Snapinsta.app_324702095_872695884051763_8238256009191518808_n_1080.jpg?rlkey=zj5vdn6amj91msi0j0wxer6yg&dl=0",
      1.3235294117647058,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/yxzs3sr704iwuj2fdquch/apinsta.app_324715192_699137218406467_9176443893219469802_n_1080_scaled_down.jpg?rlkey=wjzjtqcc9zj9j0fdu11jcrdjv&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/632k6eap2kfjwvs5au0ko/Snapinsta.app_324715192_699137218406467_9176443893219469802_n_1080.jpg?rlkey=z022vbz7cifmqn860kbilkbvy&dl=0",
      1.3219094247246022,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/49vsj0g9xz3nya5mfzc79/L_20220819_143101423_scaled_down.jpeg?rlkey=pdiderojzdreui4mnfszj6n0k&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/u3r6rscdxxtqskblknmnd/PXL_20220819_143101423.jpeg?rlkey=nxj4abowedme3vwhuktvwg2ak&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/2c5zsuosxa4mutxv47itu/atsApp-Image-2023-01-06-at-11.05.32-PM-1_scaled_down.jpg?rlkey=nkhwfgmu2y6xown6pqm0jg0pn&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/kqlpf8wgv8eqfbnhcr932/WhatsApp-Image-2023-01-06-at-11.05.32-PM-1.jpg?rlkey=5cpny6i38m06sh8l6d1x4ve6h&dl=0",
      0.5622263914946842,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/56lncrmqir8olkc2o7akz/atsApp-Image-2023-08-07-at-12.52.49_scaled_down.jpg?rlkey=qzs60uypkuufp1owwad4yj8uk&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/08jq4upd5w02mdn28sbev/WhatsApp-Image-2023-08-07-at-12.52.49.jpg?rlkey=gsbkh7j76dynreoruxn6q5l86&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/2057soynol736x4fkq6c0/atsApp-Image-2023-08-07-at-12.52.52_scaled_down.jpg?rlkey=5wlarhhbyc1uxj8yhvfu44kyy&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ym3etot5u498895vsbd3f/WhatsApp-Image-2023-08-07-at-12.52.52.jpg?rlkey=uk54uwsux05r9nbq3v5mx412k&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/4aqdx8zhgkx3lv1qm44bj/atsApp-Image-2023-08-07-at-12.52.55_scaled_down.jpg?rlkey=49c4npak0uvgh4u4yxgo0529v&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/lbgwkbazgrlvflup2anms/WhatsApp-Image-2023-08-07-at-12.52.55.jpg?rlkey=hhyrhmfmmv1ew87cke05klg72&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/ehp7mx4ssc3hsahaxrj9x/6635031_800774541494269_4331677334773239154_n_scaled_down.jpg?rlkey=8v5jf8pneg91m06zyqkb7sks3&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ob4f0ak9bv8xbeb86htjh/356635031_800774541494269_4331677334773239154_n.jpg?rlkey=hauv1tmk07puj3qkkb75nsrn9&dl=0",
      1.5005861664712778,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/v7465o076iffyk3nv8qqt/atsApp-Image-2023-07-26-at-02.31.57_scaled_down.jpg?rlkey=80b6b0n2v8z4q4sqt4dec3ofx&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ovgtzg084qv2ppbocwml6/WhatsApp-Image-2023-07-26-at-02.31.57.jpg?rlkey=5nh26ix7wtl7ozx48c4zm9jo9&dl=0",
      1.5005861664712778,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/7uq335fdylxo23f7nbszh/apinsta.app_364950577_977250510262882_2013428380608565212_n_1080_scaled_down.jpg?rlkey=d2vgcabv781poxndny9bkon7u&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/eac90ivl76ssp3eomu4hs/Snapinsta.app_364950577_977250510262882_2013428380608565212_n_1080.jpg?rlkey=fe64pqltm5p1b8h83qh56ngwo&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/hmg1n8bolw8bx6jq3du6n/apinsta.app_364981510_260160983461112_2532129805783942074_n_1080_scaled_down.jpg?rlkey=mizmb35noiodrx6mwo3vla077&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/tg0fmojfjeb542gu7ny4g/Snapinsta.app_364981510_260160983461112_2532129805783942074_n_1080.jpg?rlkey=uu9tqmf0gccw4wbzhj9bppybt&dl=0",
      1.0010405827263267,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/u6e3ogh1i71evpgrb1z9g/apinsta.app_365399150_948578683103320_661840702369922565_n_1080_scaled_down.jpg?rlkey=n6v0ittrybp1bv6qd70250lro&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/cq319i75q4jm7eyv0c3kt/Snapinsta.app_365399150_948578683103320_661840702369922565_n_1080.jpg?rlkey=negw2o6y75hrslz78m1tirlsg&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/a2kbwyyrjewm66q75rwhl/G_20230711_163242_scaled_down.jpg?rlkey=c7ht8fj9tql68w6fan4t8cvqm&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/70k06k6bexq0m304n8nk2/IMG_20230711_163242.jpg?rlkey=b3fz7z98z09mi1l92jvs6mnql&dl=0",
      1.7777777777777777,
    ],
    [
      "",
      "https://dl.dropboxusercontent.com/scl/fi/l9jjf1loytatzlz0flnq5/IMG_4419.HEIC?rlkey=xdvzqcqv48r004otik8maqext&dl=0",
    ],
    [
      "",
      "https://dl.dropboxusercontent.com/scl/fi/c7yk4xc72ylw43nglu3kx/IMG_4455.HEIC?rlkey=pk866x5rq4o9kmadr7p7j7bfo&dl=0",
    ],
    [
      "",
      "https://dl.dropboxusercontent.com/scl/fi/qhmlmhktcq9x1rjoqdq9o/IMG_7443.HEIC?rlkey=qadkzkkuejczenn4mighvko0v&dl=0",
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/9hekq646lefhtxhccvcq5/apinsta.app_327020397_1819525201742776_7668143113648629787_n_1080_scaled_down.jpg?rlkey=xt328vk5i8qc4r4fhqmzu9ymv&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/v2tanwvg47zo00nqf19pq/Snapinsta.app_327020397_1819525201742776_7668143113648629787_n_1080.jpg?rlkey=gsglnx79bzg0wpzs4q2g021f4&dl=0",
      1.7763157894736843,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/3u9f7fkutb3wa3ydw0ycu/apinsta.app_327094123_1630815140711865_3038908933210351229_n_1080_scaled_down.jpg?rlkey=kezhz79xduh5qt690tukza0e1&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/nmacq1p191yflmkvnjmu3/Snapinsta.app_327094123_1630815140711865_3038908933210351229_n_1080.jpg?rlkey=sr59eq804oe700okzb0xapcsn&dl=0",
      1.7792421746293245,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/vtjf7oh573icw8k9foeoy/apinsta.app_327167086_1350460502407797_7930930401528849341_n_1080_scaled_down.jpg?rlkey=0ull54xpfuojudxnoa7ydp3or&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/b6q19h39vc2uz61yyi788/Snapinsta.app_327167086_1350460502407797_7930930401528849341_n_1080.jpg?rlkey=te09geqd6vllkif4kg8s3iw52&dl=0",
      1.7763157894736843,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/6flr06633hmr8k11cxed4/apinsta.app_338592481_1202997723745787_2553941586796071781_n_1080_scaled_down.jpg?rlkey=4vztsrc87k2itxqzzebad7nma&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/e83ixubwbf11k0xg48hbp/Snapinsta.app_338592481_1202997723745787_2553941586796071781_n_1080.jpg?rlkey=zqrc3wrwzgeoaoh10y4ox6qdp&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/w3z50u5qnfoeieyr27xoo/apinsta.app_338595492_241338744930063_8141051347475251579_n_1080_scaled_down.jpg?rlkey=o0n7k5npmj07jwgipzetxdus1&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/xcn1iu1i5dea326hj9i4d/Snapinsta.app_338595492_241338744930063_8141051347475251579_n_1080.jpg?rlkey=mawahbyhen6epqt3uwaz2w0yi&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/thxhlic27spmgb71qocu8/apinsta.app_338640440_1369380560513619_3998558440333625598_n_1080_scaled_down.jpg?rlkey=y8iknw247sz7egis7zuv2e39c&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/91n9skhfnf12se7ki62ex/Snapinsta.app_338640440_1369380560513619_3998558440333625598_n_1080.jpg?rlkey=h09uvjrkrh9jjmfjv4td01oef&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/qhl3ky1dx4hjawbgqv8dl/apinsta.app_344149634_187616727506068_7378348929404588292_n_1080_scaled_down.jpg?rlkey=a66l4hj9u2q4xo0pj7m78rvnv&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/j0y037kvku5p6vhofwiw3/Snapinsta.app_344149634_187616727506068_7378348929404588292_n_1080.jpg?rlkey=txm3y8nxayrm0ax3po3d5crhp&dl=0",
      0.7917888563049853,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/h503nqyynca23uhzsxusx/apinsta.app_359479439_294906212914166_7740184807458139394_n_1080_scaled_down.jpg?rlkey=o0lraoxekx0ge3tokdhgzg8qf&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/pq6b9oh8ebpqzo4jxwptc/Snapinsta.app_359479439_294906212914166_7740184807458139394_n_1080.jpg?rlkey=14b5jcl8lj16of9g5l2ep3fkc&dl=0",
      1.0414657666345226,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/qg5cvyp7pyy32rpnlu184/apinsta.app_359492821_1634486270384507_42751909178080751_n_1080_scaled_down.jpg?rlkey=fqwfaeds2hpmwmae4j64atmrv&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/z5tci27ox9cedouzx1dfi/Snapinsta.app_359492821_1634486270384507_42751909178080751_n_1080.jpg?rlkey=31b2vud7tgfk3sg133swsfxs6&dl=0",
      0.8847926267281107,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/tu8fcm7k2xwth8m5vjud0/apinsta.app_359634315_2171461049852532_7396834929931762915_n_1080_scaled_down.jpg?rlkey=zf0m8pjb6t6ahjsykvclgpa5v&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/az652qq8j3k92rzgxaiqk/Snapinsta.app_359634315_2171461049852532_7396834929931762915_n_1080.jpg?rlkey=jhx4665xqe74jnt9xkuh9wch1&dl=0",
      1.0424710424710424,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/y8tsc4f3tv9gx4dp7ualh/apinsta.app_359674728_669759618527143_7919081754596019681_n_1080_scaled_down.jpg?rlkey=282o07j87sxuttewqqc8tlp8i&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/33chq2czejawv21mn5fey/Snapinsta.app_359674728_669759618527143_7919081754596019681_n_1080.jpg?rlkey=njc96j39yhcfrcgvnghkoma4f&dl=0",
      1.0414657666345226,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/ebszyjixrj7czaf45b6c3/apinsta.app_359683756_300230455743866_2247574535068610975_n_1080_scaled_down.jpg?rlkey=f370t0e71cu42o75zooavyk7s&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/uiy4p018jopwr4hpuclje/Snapinsta.app_359683756_300230455743866_2247574535068610975_n_1080.jpg?rlkey=2332myhifjy73env8u21ldwli&dl=0",
      0.8846153846153846,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/i4hul17o07vgbbi02oxvk/apinsta.app_359727729_817964712976176_7420541184121220436_n_1080_scaled_down.jpg?rlkey=1wg3mn2izsqpmcbrke8y275lc&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/sy7ddxsiug82eq8eugbyl/Snapinsta.app_359727729_817964712976176_7420541184121220436_n_1080.jpg?rlkey=axtthg0i8zqecqa1h0nf5p01u&dl=0",
      1.0414657666345226,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/gaet1vyourffyoldl2w4u/apinsta.app_359752378_1436406453875827_3749331503457160861_n_1080_scaled_down.jpg?rlkey=4f2y13xad43cxcdagxh7w57or&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/e7t538l6qh50u1t2696ko/Snapinsta.app_359752378_1436406453875827_3749331503457160861_n_1080.jpg?rlkey=jabyys63ploybe204x8ch3vif&dl=0",
      0.8847926267281107,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/1g4hwd743w6lgtq3z4teh/apinsta.app_359810771_294401059761527_5148080629630088936_n_1080_scaled_down.jpg?rlkey=3rbzbfqht84guq4ae6huibaza&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/gnrinv5a86f1rc9k5pkkd/Snapinsta.app_359810771_294401059761527_5148080629630088936_n_1080.jpg?rlkey=m1mxrt64p1li9mm0ucmx2xjyp&dl=0",
      1.0408626560726448,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/bpd3m2opswv9qz32quxg5/apinsta.app_359826305_300334999118201_2431614077065232388_n_1080_scaled_down.jpg?rlkey=scr35yb1hrllr1yz5akrcngz5&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/q02qx2l9iyh7fxj6zbr0h/Snapinsta.app_359826305_300334999118201_2431614077065232388_n_1080.jpg?rlkey=y4r9d2h4bd4h0zy1aw39ncyd0&dl=0",
      0.8845577211394303,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/kma59fnkys7l3spbbo96x/apinsta.app_360032374_611257304408335_6248535321656377196_n_1080_scaled_down.jpg?rlkey=sb70czzng6sq33fzjdmutpahx&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/vaywlqjwh96k4azg6nqi0/Snapinsta.app_360032374_611257304408335_6248535321656377196_n_1080.jpg?rlkey=s5bjglf3a7z8zsn9r9cttypef&dl=0",
      0.8846715328467153,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/2v16qzdpp17qi6xnz5mcx/apinsta.app_360038227_223273866835077_8021042510164642230_n_1080_scaled_down.jpg?rlkey=tzgvezqet173a3yohuzwjv5c2&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/z8l7r87dlnx83dqizde5o/Snapinsta.app_360038227_223273866835077_8021042510164642230_n_1080.jpg?rlkey=ghm3ecvfp6b2jbjocdd5x3p9m&dl=0",
      1.0414657666345226,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/xpis0z58m89mikxe2vrnu/apinsta.app_360043071_2493853957436113_7277438888129191079_n_1080_scaled_down.jpg?rlkey=2k55wn08qa1qxq53bepe30lx5&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/n11hab7u3nny15x5ir2h1/Snapinsta.app_360043071_2493853957436113_7277438888129191079_n_1080.jpg?rlkey=uz6qh87ipavrr3d7ip336zhbn&dl=0",
      0.8845208845208845,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/z950tkti5zduhso45y6xs/apinsta.app_360045832_808070167634882_1362569499857851544_n_1080_scaled_down.jpg?rlkey=66tmp6j63s3bqd53evdtn2xl1&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/nwkjstzsltx126shh3rrw/Snapinsta.app_360045832_808070167634882_1362569499857851544_n_1080.jpg?rlkey=izz3siciguvd4oqo0ro45yaby&dl=0",
      0.8847926267281107,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/yvm06yhw6mmht3ih1urcf/oto_2022-11-25_13-07-17_scaled_down.jpg?rlkey=ygx56zy45baoqrkanyacf068c&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/8z9rsx2rtjyvx6zmibfdw/photo_2022-11-25_13-07-17.jpg?rlkey=cyudux5ifr70lblwa15ap6cfm&dl=0",
      0.75,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/9ii3prmtv6gct0jte3ci1/oto_2022-11-25_13-07-24_scaled_down.jpg?rlkey=kx2xy0c1iunn1alv2qdk5g696&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/dcdaoic0jyfvgsw78pzet/photo_2022-11-25_13-07-24.jpg?rlkey=u37rphzmrhwz8fhubgqflzye3&dl=0",
      0.75,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/mijqg07trifn1pkhgd9kp/oto_2022-11-25_13-07-31_scaled_down.jpg?rlkey=q1dsao4prskmrhm49f3ngsx3o&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/up6k25ixkl8r8h5hyd1k6/photo_2022-11-25_13-07-31.jpg?rlkey=ujwy9i1dfihdh3rk2n6c1ymhy&dl=0",
      0.75,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/yj4ayuf8vu2u3d9maowh6/oto_2022-11-25_13-07-33_scaled_down.jpg?rlkey=hrf2q56p0fq3lw05myb92gbn5&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/vqjjp3oe6yg8oygahfq9x/photo_2022-11-25_13-07-33.jpg?rlkey=8tlg1cqslm0k8qepwgvrfawas&dl=0",
      0.75,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/30kzqkns99hzp538o1gfi/oto_2022-11-25_13-07-34_scaled_down.jpg?rlkey=0cufwi40usc6limtj7baa8xsf&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/opajcu1d5vd963q93zoyw/photo_2022-11-25_13-07-34.jpg?rlkey=fedv95d4m3rydd2e0ew7iw1iv&dl=0",
      0.75,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/i7nz3rnugu3m316tik298/apinsta.app_325786387_3062632807216122_5874315012586868595_n_1080_scaled_down.jpg?rlkey=vz5xt99ltls2lxz7137goy8aw&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/mp7srmw3sj42cb344nd28/Snapinsta.app_325786387_3062632807216122_5874315012586868595_n_1080.jpg?rlkey=qsex8gj8q9c62die8dekks4mz&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/8zs7crn3f01sbj07mbgja/apinsta.app_325977995_1355493211873775_2330904030681627170_n_1080_scaled_down.jpg?rlkey=b3igjvkdmshds3mrkujt2og7r&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/zf0c4s9s8wfyat30aos5w/Snapinsta.app_325977995_1355493211873775_2330904030681627170_n_1080.jpg?rlkey=d52j0cpp4i9z6qhyo6kpzy0xc&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/8v9jzsx13sdtjykf37jge/atsApp-Image-2023-01-09-at-3.24.03-AM-1_scaled_down.jpeg?rlkey=leapx3c8j7mv0axfw8rywe5p3&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/m25pqnqovo19ti4v6yo3c/WhatsApp-Image-2023-01-09-at-3.24.03-AM-1.jpeg?rlkey=ae9b9ua867acsi0m8yrmj936w&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/ufjlebf6gky7gjn4sduaa/230622_231322_scaled_down.jpg?rlkey=m1pbepqqyf0tx47ee4jbit921&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/3j6jgtuws3zsdywoff0yc/20230622_231322.jpg?rlkey=vyn03qm14vkzr10tgpcygz84j&dl=0",
      0.7505567928730512,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/2vws6kj7knlfvo8ff6tm8/apinsta.app_323932799_907698983723967_813284350487282751_n_1080_scaled_down.jpg?rlkey=fngy8m8x1i0axeps264hody1m&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/n2ftv0nwtrroqjj00p4df/Snapinsta.app_323932799_907698983723967_813284350487282751_n_1080.jpg?rlkey=9omrfff7n3s48v5vpy0xrmle7&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/6vfnmaiirydd4rwvx0iwk/apinsta.app_324224566_229512859417671_6290582043987525715_n_1080_scaled_down.jpg?rlkey=v61whjhtk14nz65pwcsr1h0qo&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/gx9nconx9h9vpe5gc7lp1/Snapinsta.app_324224566_229512859417671_6290582043987525715_n_1080.jpg?rlkey=c2ulmgbbv2d1quakcwrtj552f&dl=0",
      0.7994078460399704,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/f9dopokbdaw34xjpoyrf7/apinsta.app_324261936_1203839836884029_6877654278897615641_n_1080_scaled_down.jpg?rlkey=g6unhghexvs553c8ae9dosg7t&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/op954ou9pqzt91pg7ghcv/Snapinsta.app_324261936_1203839836884029_6877654278897615641_n_1080.jpg?rlkey=3o4ye91k4arklf33v8w8cng9x&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/k4sagyzubhpknsdzwnr6q/apinsta.app_324544523_207244555161415_4495071812192218215_n_1080_scaled_down.jpg?rlkey=57gw47wxgzh9p3xwq3d4p9qcv&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/n0ufpp4qr0mu8yvyhqv1q/Snapinsta.app_324544523_207244555161415_4495071812192218215_n_1080.jpg?rlkey=qncwq2axhi1bd0mownwotcz3w&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/frt289fa2tslhherh5miz/atsApp-Image-2022-11-15-at-5.24.52-PM_scaled_down.jpg?rlkey=ij7uk70vqjqn0bjvbzjjo6ea8&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/huxj8dbkwvk5qo54t8hb7/WhatsApp-Image-2022-11-15-at-5.24.52-PM.jpg?rlkey=wqyqi8808phh3w0n34fxjjb33&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/uttdxgbs7tn8hc60kq4qi/atsApp-Image-2023-08-07-at-11.35.45_scaled_down.jpg?rlkey=6f7dd0yhk3w0vsp2e36ydkl78&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/fcnii4qw38yfn6fpjtasa/WhatsApp-Image-2023-08-07-at-11.35.45.jpg?rlkey=wjwytrq47stisstz57bg94x4h&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/fdt1whnyp657hh8o9v748/4167012_857293999059888_7034074293993884312_n_scaled_down.jpg?rlkey=6deaedgkbm79gm6r3lxx8b3mw&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/pw2xt5qgwd9b2vhu09cbw/364167012_857293999059888_7034074293993884312_n.jpg?rlkey=sseyhundh6r30li8o0vs8xavv&dl=0",
      1.3300492610837438,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/kk7yo0564ijb67t1siyhk/4198491_1636020746909152_5737438771304933191_n_scaled_down.jpg?rlkey=9uyrkthxsxd4q1k30nfdvojax&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/bc24a7yrj6g5b9euw3w74/364198491_1636020746909152_5737438771304933191_n.jpg?rlkey=xsnf5rervysvf02pbpu3zqrdg&dl=0",
      1.3300492610837438,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/iira3p8mg7qj0c56aw2lj/4209134_164791489955850_3298261647602898335_n_scaled_down.jpg?rlkey=gad1bmgbr1jngjtfkj7ivej4v&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/657zts47ur8engwlm6y5b/364209134_164791489955850_3298261647602898335_n.jpg?rlkey=uge1yzbj1e81fuhgdhed87dwn&dl=0",
      0.75,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/anqsoz1ynu8a9gukan98t/4216590_963534138257636_6641643871094041926_n_scaled_down.jpg?rlkey=8z9aiznlgbgtu54eqfmq4vz6o&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/j6sc20y218sm18p8kizb1/364216590_963534138257636_6641643871094041926_n.jpg?rlkey=8eigtzu1ynxdd1crw39kitj5l&dl=0",
      0.75,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/q9kmtcq1mc2nlgmko5ij3/4225636_1000184507793901_5721148280880295212_n_scaled_down.jpg?rlkey=8noiwdu2t0mgxp45m3n7jt3kw&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/qumoah0b6o3qvctvf0hy3/364225636_1000184507793901_5721148280880295212_n.jpg?rlkey=a4tr3lzurk929c9f2iw0j1288&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/lpzmc0xkafn5yixhjbwlu/4404471_985474219396163_5545469858350296542_n_scaled_down.jpg?rlkey=mttoon0ojwrlrlfo1lfqslajm&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/tgoeqrror4zap8x5gy5vp/364404471_985474219396163_5545469858350296542_n.jpg?rlkey=f7gjlixbv0h1pluf2h0lx1e31&dl=0",
      1.3300492610837438,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/ide00q32jik6dffsqk5hd/4432113_837513387730875_1763460143191937478_n_scaled_down.jpg?rlkey=ho2rdf7mg0d6zdmqto8ksuqzx&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ikur9ry962pyn8mcwodry/364432113_837513387730875_1763460143191937478_n.jpg?rlkey=hk3gsxnhu2b7wzncz4m8c855i&dl=0",
      1.3300492610837438,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/5dmna7evnancbog26ik1j/4443099_978429316826456_705190850576951572_n_scaled_down.jpg?rlkey=yy4nzm4s97pdh4j7vcths1616&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/uypggap8ym7krr8q9jhqy/364443099_978429316826456_705190850576951572_n.jpg?rlkey=9qnwes9ts4n4g1wx27pn121v5&dl=0",
      0.5627450980392157,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/8akyzqu6l57s8oumkqb8x/4540268_903520367862105_5408885244707617270_n_scaled_down.jpg?rlkey=pxzluekenh57i94zh82ge633d&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/erv21e39my70700phd5ao/364540268_903520367862105_5408885244707617270_n.jpg?rlkey=024chtpdyfqq6rbxlqcf094ne&dl=0",
      1.3300492610837438,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/hgm1ni8tgehsmzz95prxs/4547602_1649212432243340_2135925171691923456_n_scaled_down.jpg?rlkey=dfy2c4mrnaxwk3feqctn47p8b&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/6fy14kbtokg0i43hfwm1s/364547602_1649212432243340_2135925171691923456_n.jpg?rlkey=uvs359u06znua640truqs84az&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/yalxc7gfasuvfhm5sjw1i/4665018_319359553764187_8338752144286674832_n_scaled_down.jpg?rlkey=k43i7vj4b6wjt3zdpuy1bdsua&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/f3ce8gklba9k3r025xrfz/364665018_319359553764187_8338752144286674832_n.jpg?rlkey=305r1rjhludxjmxrx9gpx4ynn&dl=0",
      0.75,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/vtsg26cfyylylyg73alc0/4706805_1278628539451003_8188968652969998715_n_scaled_down.jpg?rlkey=bxo97721yq8ahvgloru7r1feo&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/xthlc684v4g66bud3hwdp/364706805_1278628539451003_8188968652969998715_n.jpg?rlkey=6k460tag9hbchc28j8ej8of7k&dl=0",
      0.75,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/wgxexi7kn6n1y77x9cova/8117133_6290925427649650_6020510219789883928_n_scaled_down.jpg?rlkey=taa0gychs5jyjab2k0lgqu4fx&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/7kyh0w4p55dzieu3i7i02/358117133_6290925427649650_6020510219789883928_n.jpg?rlkey=h3rx82kqydtl59q16y4qtoo1c&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/67fde57s43k0gdnxzkxk2/4227090_7109879042373206_6395521634602298267_n_scaled_down.jpg?rlkey=cfmlf13q4mifhwkbqrjzx66z6&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/z4e1t12ypn0b5aay4ula9/364227090_7109879042373206_6395521634602298267_n.jpg?rlkey=ykn3lq2k73lcccpditg2m3y9g&dl=0",
      1.346938775510204,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/hv5z307i3db8xo4tiwunk/apinsta.app_327628450_1879981629037787_4813742282531383447_n_1080_scaled_down.jpg?rlkey=riambu1pcl3y3n8o4ddvno03z&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/9wjj69ehokgg0oot0qr68/Snapinsta.app_327628450_1879981629037787_4813742282531383447_n_1080.jpg?rlkey=zjf52js18s01vy1e1eik17lv5&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/cq4pdfrvjfzsi5bkfk8r3/apinsta.app_327774393_2170769266446107_7830287663645416664_n_1080_scaled_down.jpg?rlkey=4priu0q24bnbcdikcfqf6qbk6&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/dlwfstqrzsjmrvj6i6zzm/Snapinsta.app_327774393_2170769266446107_7830287663645416664_n_1080.jpg?rlkey=zagwp2k876vwz1dbjz2tsvuv7&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/u9m5sg8a68idqxyrrpy4c/apinsta.app_327973448_766196011598130_1741681027880804381_n_1080_scaled_down.jpg?rlkey=6fzk9m3uz9nqungw3r1kg8yiu&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/qjcviuz2o7ct2z07koqp2/Snapinsta.app_327973448_766196011598130_1741681027880804381_n_1080.jpg?rlkey=zfk8bqftvzw7ckg6tpxcx98h5&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/5iri6w21yg348jb7cg828/apinsta.app_332021921_665299448640027_986996613775696049_n_1080_scaled_down.jpg?rlkey=y7lb56ykiutfa08tlrvwzbdh8&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/eycqwf8lv16v1dech7wgv/Snapinsta.app_332021921_665299448640027_986996613775696049_n_1080.jpg?rlkey=fomx3lawii3yxz7guegqbhb76&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/59nba29nngtyc67wxplfi/atsApp-Image-2023-08-07-at-11.58.19_scaled_down.jpg?rlkey=fayebqy13l9gdjqzg8pn7lxep&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/7a9su76xpej8xeha7wute/WhatsApp-Image-2023-08-07-at-11.58.19.jpg?rlkey=6lupre37gy8xdzlz9i2j74l7h&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/9g1agcuatb8kiutf5vj72/atsApp-Image-2023-08-07-at-11.58.20_scaled_down.jpg?rlkey=808e9z9ymdbu1icsgp9tt624u&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/8pbt7ipyvm5qzjp01u4v5/WhatsApp-Image-2023-08-07-at-11.58.20.jpg?rlkey=dd67gi02rmualibuev2guwg86&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/9fcgjqu0zdycvvph9m5wv/atsApp-Image-2023-08-07-at-11.58.25_scaled_down.jpg?rlkey=c3wc4fwmhwokj47alxtlf70h5&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/g9uer1j952u118kmiz4lk/WhatsApp-Image-2023-08-07-at-11.58.25.jpg?rlkey=fn4b0p0jb6ir0q13aafphd1rp&dl=0",
      0.46171875,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/j4jqvuj193ptg6nesvp5b/atsApp-Image-2023-08-07-at-11.58.27_scaled_down.jpg?rlkey=49tq1n78chr4zb0i8jp6rfa5j&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/c6y6l7ddqwcqay0fcmira/WhatsApp-Image-2023-08-07-at-11.58.27.jpg?rlkey=3ivkfcdbh4fzldokmspy4u0e6&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/cysbajmh6ki4fcbr077ga/atsApp-Image-2023-08-07-at-11.58.36_scaled_down.jpg?rlkey=oh3byzfualk1uk5c3c7akfcop&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/5msv3i6vj1ozr4d91it20/WhatsApp-Image-2023-08-07-at-11.58.36.jpg?rlkey=1yclig4hkii1www58ctfdcgvb&dl=0",
      0.75234375,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/mbtmk79c3d0fue85ewtr0/atsApp-Image-2023-08-07-at-11.58.51_scaled_down.jpg?rlkey=f1k5q7ffs5ba9rxucrg62yrgu&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/xwp7igs7rjpgvzqlsi3yb/WhatsApp-Image-2023-08-07-at-11.58.51.jpg?rlkey=b5xcnfdz5pbw2p70pazg6xbgd&dl=0",
      0.75,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/1ph7h6x6baynx41lkjo72/atsApp-Image-2023-08-07-at-11.58.53_scaled_down.jpg?rlkey=rfeemvbmxds12fetz2fgk6chm&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/z5e5cr8pa592irumzdsgs/WhatsApp-Image-2023-08-07-at-11.58.53.jpg?rlkey=oc3pibv78hj0omj66uw9tvian&dl=0",
      0.7525,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/i5lagby9ztw6e3pme86cy/atsApp-Image-2023-08-07-at-11.59.25_scaled_down.jpg?rlkey=5hirpw0ormp57kwii0vmxtc14&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/mq7d5z9mzhdndz3ciwuu6/WhatsApp-Image-2023-08-07-at-11.59.25.jpg?rlkey=ckeg9y5pbhhippnjp1zlwoimr&dl=0",
      0.75234375,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/ft028eu1udfplwwbkl47t/atsApp-Image-2023-08-07-at-11.59.31_scaled_down.jpg?rlkey=ytnlclo1txjrputvlzx0pklbt&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/9f5gyhyg3w0d5pkgm5i1q/WhatsApp-Image-2023-08-07-at-11.59.31.jpg?rlkey=1mumhndp8iuuba57so5qczroa&dl=0",
      0.75,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/1uinytygwbxqbrdm505ud/apinsta.app_323801674_142655761954402_6054707039007555952_n_1080_scaled_down.jpg?rlkey=w7fenhiaxqcdgpkc703hgwkcn&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/q0ywwdsssxtrcf56zc1bm/Snapinsta.app_323801674_142655761954402_6054707039007555952_n_1080.jpg?rlkey=gcu0nhbt8ii1re63rl976t1u8&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/dlwspzknx03w1etgrt3s3/apinsta.app_324069243_922574382236534_1683243366106802504_n_1080_scaled_down.jpg?rlkey=goubm026mzbg1wpl27rfpg73b&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/k3wekdmilzfuxypxqbti5/Snapinsta.app_324069243_922574382236534_1683243366106802504_n_1080.jpg?rlkey=u3v71xthx4nurzericmh6nbxo&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/mgcou48ibch5q5uialjae/apinsta.app_324272677_539646864575320_3163729834700539605_n_1080_scaled_down.jpg?rlkey=29e8sdcd960d4qjvqitjwdcxk&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ezlojitfqwgpupvgkcm04/Snapinsta.app_324272677_539646864575320_3163729834700539605_n_1080.jpg?rlkey=qkh3v2yyjj2k539wphhe7gge1&dl=0",
      1.5450643776824033,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/c3zgoo7n8xomorefg9lc6/apinsta.app_324386454_1284092782370833_5904634223870545355_n_1080_scaled_down.jpg?rlkey=40bnz7jthvxqr9nvfrrm0b3lp&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/20f716jvn5w6zqcmyv2y2/Snapinsta.app_324386454_1284092782370833_5904634223870545355_n_1080.jpg?rlkey=qvylordbvc99ppce1riqvmwb4&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/norxenz26zlb1lu2p331f/apinsta.app_324069082_714401493490840_6331602112067775391_n_1080_scaled_down.jpg?rlkey=zptcf9xzz5nnllye87wu8hr0y&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/pzl8l5fv5fgb47ijn2qj5/Snapinsta.app_324069082_714401493490840_6331602112067775391_n_1080.jpg?rlkey=7i0x8o13akgrd7xgh022oexbr&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/1rewoas0hjdi9i78g0xym/apinsta.app_324385744_944456189853438_3807734173717649787_n_1080_scaled_down.jpg?rlkey=nz2mrqwunhld8ag6iuuvldpvz&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/qlagmmlg2046hhcvimdz0/Snapinsta.app_324385744_944456189853438_3807734173717649787_n_1080.jpg?rlkey=f6vz0x1fekz7y3rflnv69dp42&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/6vhxwlapchjqnjjep58zz/apinsta.app_324394483_149338961227974_7025589406687716312_n_1080_scaled_down.jpg?rlkey=3pdwgyaoif8otkiywpxavzv7n&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/u98o3ccm1gj00sldnsfq3/Snapinsta.app_324394483_149338961227974_7025589406687716312_n_1080.jpg?rlkey=cfnn7lnzz7v5iwtid88k74vy1&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/a03uc2eru4x4759c65olr/apinsta.app_324397626_562818412098475_8048790035431798370_n_1080_scaled_down.jpg?rlkey=52alf0e820sycc2a6l36ltr67&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ie3ttmfisv68tu0ltccii/Snapinsta.app_324397626_562818412098475_8048790035431798370_n_1080.jpg?rlkey=vstrctt2usjzw0paxl6bkn0bf&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/uda52cw89y4celoj0sqsc/apinsta.app_324431654_1862906074051326_3063004486129643755_n_1080_scaled_down.jpg?rlkey=3pneujggpkpef7nr1ffe6hgnk&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/s53hqgbikbf08uu0h967e/Snapinsta.app_324431654_1862906074051326_3063004486129643755_n_1080.jpg?rlkey=j6i9rymwovxo22thlfhohsavn&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/wuie7cjsxvt1hpaxh0hke/apinsta.app_324547055_141683252061530_3280895319765016287_n_1080_scaled_down.jpg?rlkey=bp5hkmxyra51hsrbta14jzsjp&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/npbmrthmbdhcbavraxuld/Snapinsta.app_324547055_141683252061530_3280895319765016287_n_1080.jpg?rlkey=kgl7mo321avkninkmhin2kbnt&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/9ap0vgw0rfsyf13pwtks4/apinsta.app_324550872_395670832766620_91770289237685165_n_1080_scaled_down.jpg?rlkey=mdegst0w8b6w6fx5ysartcixk&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/n28bpu710j3ccijtqngis/Snapinsta.app_324550872_395670832766620_91770289237685165_n_1080.jpg?rlkey=y831warn4bcxbdwrel5ubsnqq&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/gjm5hzk2fs7i8991l1139/apinsta.app_324560058_2083809375142687_3754174913544939702_n_1080_scaled_down.jpg?rlkey=039kspinc5r7rbumbbcplc7mw&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/pm1p7zrrbnag6sk1tfz6b/Snapinsta.app_324560058_2083809375142687_3754174913544939702_n_1080.jpg?rlkey=d6x06elth7wxlgjgvi2e4jhon&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/4fgxyg85cnznxjdtvc460/apinsta.app_324696903_208854418221786_7342740444358556281_n_1080_scaled_down.jpg?rlkey=5nwe2uzaztuf3yhqerjuoa5cx&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/tg0m60ve7nshnrjpx5d71/Snapinsta.app_324696903_208854418221786_7342740444358556281_n_1080.jpg?rlkey=juy7wy7ql6m2wv3naajf2k0ay&dl=0",
      0.798999165971643,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/nupqwqxws4n6ytyorfpig/apinsta.app_324773548_698918521778589_3782372854273558024_n_1080_scaled_down.jpg?rlkey=m2itnjm7f7lxunkg7iksbdh22&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/oqh82faygct8jefgay3xt/Snapinsta.app_324773548_698918521778589_3782372854273558024_n_1080.jpg?rlkey=ax6guemwbqx2f62tlbm5qotq2&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/yb9wvsgjc6qv4orj3585f/apinsta.app_325616265_569958271329985_8208582335471076271_n_1080_scaled_down.jpg?rlkey=r2020quzk4h8adkjod535fyex&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/i6zmoniv9c4ss0mdpd9mf/Snapinsta.app_325616265_569958271329985_8208582335471076271_n_1080.jpg?rlkey=pmc5zmzlm6pbiqrk0xpv2qk8z&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/u7m4lta2n662deovdbune/apinsta.app_325682029_723082109435137_1942811837265658273_n_1080_scaled_down.jpg?rlkey=j0lv6s9qay324vg9ao4368pii&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/epu2csd0warde7w8epwtg/Snapinsta.app_325682029_723082109435137_1942811837265658273_n_1080.jpg?rlkey=n3pydb0cwktwsv6lgxn0s1bhl&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/ca1zgixf1n8qtdtza5xfz/apinsta.app_325691605_718089639843240_950867985363828209_n_1080_scaled_down.jpg?rlkey=526dx6k9rcrhva6e9y46aytbb&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/iz4iv4zs2j9ue6lu598yo/Snapinsta.app_325691605_718089639843240_950867985363828209_n_1080.jpg?rlkey=2h226a6lwigt9nqdos2tb835g&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/6vzb8m4u355cripgmqvna/apinsta.app_325762067_1600477443734322_1936589195025487107_n_1080_scaled_down.jpg?rlkey=xozzr5qlg66qbscoiw315no9b&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/szslptjnr87er5mz1o44x/Snapinsta.app_325762067_1600477443734322_1936589195025487107_n_1080.jpg?rlkey=5c6cuarpny6b9vpfill4sov3z&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/a598vumvoww34ih53k2ip/apinsta.app_336097906_1257379375213848_291661922609553599_n_1080_scaled_down.jpg?rlkey=tdapvvget5d21ojfhp2wkeliy&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/px3617t6mhpoz5ux0fs9i/Snapinsta.app_336097906_1257379375213848_291661922609553599_n_1080.jpg?rlkey=83i0g6jeb7acn4dtyhr83esx7&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/zp70w24jhiv0bekuj7zz5/apinsta.app_336263486_6302273706491920_5159304894966183082_n_1080_scaled_down.jpg?rlkey=dafcxzcumv0uptdtycqc8lp1t&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/s59vq7ge3fbg70skeiplt/Snapinsta.app_336263486_6302273706491920_5159304894966183082_n_1080.jpg?rlkey=2vcy4fkkfj1nbion266dltd73&dl=0",
      1.3316892725030827,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/z4hao3q4wtko7igzhgved/apinsta.app_336822580_945725609932007_6715582960063676010_n_1080_scaled_down.jpg?rlkey=7u3c9m98einnu6zlop7etuzav&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/5jsl9cl4ref3iiocwyx2u/Snapinsta.app_336822580_945725609932007_6715582960063676010_n_1080.jpg?rlkey=upsgz02aj9th2mg90y6hgczar&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/mugm04kdto0fd3z36cp6s/apinsta.app_347625182_256185320300744_2338410869768789779_n_1080_scaled_down.jpg?rlkey=wm2y5tvyvu1endx4jmvs6w64q&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/xo7q29s6buhwzj6cgv8rz/Snapinsta.app_347625182_256185320300744_2338410869768789779_n_1080.jpg?rlkey=y2s0kuxut1sqz7wjvq5oce20k&dl=0",
      1.1650485436893203,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/js89rxu1sceyuc8f6jscn/apinsta.app_347654511_923137425635743_7579776224623058150_n_1080_scaled_down.jpg?rlkey=ilz12rqmxbd0fv1fdq9tnnv54&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ibyqgcrfkrh6zt7zbyr8v/Snapinsta.app_347654511_923137425635743_7579776224623058150_n_1080.jpg?rlkey=lko74ra4ns1g4d0ld1ikqpp38&dl=0",
      1.1650485436893203,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/2updpslm9fy77o8z4ryhh/apinsta.app_347879438_3068119226666695_8357729422862625586_n_1080_scaled_down.jpg?rlkey=g70z9eibm19nnvb0lrkkqe2fy&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/1ndxbe3ie7e9g1swg0xj1/Snapinsta.app_347879438_3068119226666695_8357729422862625586_n_1080.jpg?rlkey=nsux3xci647c777lnzp1f7b49&dl=0",
      1.3300492610837438,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/7mg5mgkln4rzz28bvrqip/apinsta.app_348426589_901918857574451_5096585291768118049_n_1080_scaled_down.jpg?rlkey=jnnhkwdyf4ll6mzewdvizsw02&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/lkinunwz26asyz0h1rn74/Snapinsta.app_348426589_901918857574451_5096585291768118049_n_1080.jpg?rlkey=k3y0l3i129ctwcs8tvw7h1upg&dl=0",
      1.1650485436893203,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/sur62ryexzw2ea8of3j59/apinsta.app_348463800_1188294005201679_1498766250626499455_n_1080_scaled_down.jpg?rlkey=dra74a0ofick5crutt4sf854f&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/qc0ajnv8nbvebdk2d0gvx/Snapinsta.app_348463800_1188294005201679_1498766250626499455_n_1080.jpg?rlkey=5e6nuy5urje6w3u5p8byskrp2&dl=0",
      1.3300492610837438,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/4kooslwdbjt0s1nnqd0tf/220715_120500_scaled_down.jpg?rlkey=05amxwpbvd48vez3tyeafdwwu&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/0pry8n7llsowy73nlvw5z/20220715_120500.jpg?rlkey=mcv1ldgmt5dh2tn6vjhw74u3w&dl=0",
      1.7761692650334076,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/szd4539rk3h45g5fd7jo2/9722045_708303844216986_220274640826980576_n_scaled_down.jpg?rlkey=3uxc8haxut34hzzp1qb6y2aur&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ddw3z6l1e7olbahjj8t5s/319722045_708303844216986_220274640826980576_n.jpg?rlkey=eq7z6hb2w98a3kjf505tq2wng&dl=0",
      0.7923697725605282,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/u78c5dvg2jhx0zrmhyots/apinsta.app_326083730_1544450169355597_1691183043210234273_n_1080_scaled_down.jpg?rlkey=ihswsgyl311csk66kh1t454cv&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/9vqjcevlbzf02k64dov47/Snapinsta.app_326083730_1544450169355597_1691183043210234273_n_1080.jpg?rlkey=k2nxdgf2x7cjz8ff8ohu4gg3l&dl=0",
      0.7923697725605282,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/q78y0llcytlji5ga36ihz/L_20220304_050838709_scaled_down.jpg?rlkey=lqk2vbd5vf425mn4f2diop59a&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/3jzpzch2amd9mbvtnzca2/PXL_20220304_050838709.jpg?rlkey=bp64n3gs6lh7rmg90q9zdj0hk&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/lzy9t853h2ebedwcyl79s/L_20220304_073825289_scaled_down.jpg?rlkey=alrvhu4hvfpq9guhu7589p8lu&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/vxze9hql9z8d2n8xeg84h/PXL_20220304_073825289.jpg?rlkey=jhp1qzhkp69ee9w4mg3mae387&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/fb8y04krvnag5d3m8aqrf/L_20220304_143626014_scaled_down.jpg?rlkey=m7ua65e64mlkh4wnwl60kxu4r&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/qk2wrluufrva5bmligrai/PXL_20220304_143626014.jpg?rlkey=le2zgdvmp311jugfdubhuxkse&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/e8u1u78ocg2zem9l9pyro/apinsta.app_324294472_181582091224967_6319662931112273251_n_1080_scaled_down.jpg?rlkey=hr6re49qjexuvvghwwktykx0l&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/x0o6505507dmw2ja9yj32/Snapinsta.app_324294472_181582091224967_6319662931112273251_n_1080.jpg?rlkey=it14czfl6noshdkibuxd99rwc&dl=0",
      1.7763157894736843,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/9g20pbegl0wvwghmlh8dj/apinsta.app_324384390_129266089795899_8020511648024030240_n_1080_scaled_down.jpg?rlkey=i9xgt2s1pc0b6834vig77uhco&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/cp7ym09on97qg5zglpcbb/Snapinsta.app_324384390_129266089795899_8020511648024030240_n_1080.jpg?rlkey=j872pz5hgpp44dvgcz99bmosa&dl=0",
      1.3316892725030827,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/k6tp69jod8ylwuqfrhgxo/apinsta.app_324718753_1033776268011998_953677935640157148_n_1080_scaled_down.jpg?rlkey=tysruu3pa8hg8d0rw2aqi4y1t&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/km21ws68fzv7o27dgiuaa/Snapinsta.app_324718753_1033776268011998_953677935640157148_n_1080.jpg?rlkey=xuw38g5gm8cu2iwc5c6dqmmoj&dl=0",
      1.7733990147783252,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/80l8ix3apfr0s77gqkcxt/211029_213512_scaled_down.jpg?rlkey=yrj9x53java1phdjxwb0u1uae&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/zyrg8r78cu2gwdnppz6jy/20211029_213512.jpg?rlkey=b00539kuk64r3agryolms9isj&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/mc7z35kh9wcf1czpvb5gh/211029_224939_scaled_down.jpg?rlkey=vir0ulbtlbm4wz9wvxvjh8wvc&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/zxhddo83x4u6933v4dm0s/20211029_224939.jpg?rlkey=g2r7yi4c64xqxecv8bpvftt9k&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/9151casx4qgo1i1wplr7q/0249601_773032124186128_667995003706393456_n_scaled_down.jpg?rlkey=ynbykey69xnf43ij8lk9tq0yu&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/h613r00o78ggofuztc7k2/330249601_773032124186128_667995003706393456_n.jpg?rlkey=89pa2s4gfk3kfkhn19o99gw6o&dl=0",
      0.5109375,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/za5yjxukqv15ql18nemp0/0990693_1209743829661975_8305175597162536718_n_scaled_down.jpg?rlkey=fzo381q3rcux0mf559jbaxhen&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ywnxxzafqxi0hlr6jp1jn/330990693_1209743829661975_8305175597162536718_n.jpg?rlkey=ufxg7rnf8273fwt0ugssqhxr3&dl=0",
      1.5,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/85aijcmvugxm0srdtrub1/G-20210401-WA0030_scaled_down.jpg?rlkey=odr5l417z6ndvsreq2kcewd9r&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/di33isosqrrds22zaveu5/IMG-20210401-WA0030.jpg?rlkey=7995s15n097eufpkygf7wnb6n&dl=0",
      1.336116910229645,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/g7duau9cf6f6g81aqf6kb/L_20211230_152700404_scaled_down.jpg?rlkey=r649lcwrcfbw7dfcwdjmmwwp5&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/rogi7zrzbxsieoex4kacp/PXL_20211230_152700404.jpg?rlkey=o13lukd7ervvict4uko7wn2we&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/yycfe9wrqvra7bgaqoxp1/L_20230110_105751743_scaled_down.jpg?rlkey=tw2mssn6hlm3gb4vflotgvia3&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/4r630dtdtyyrrxisn015j/PXL_20230110_105751743.jpg?rlkey=mlbyqp2z5gxcin440eeouu05r&dl=0",
      0.5625,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/7uer4567l0gvlgzddyl1r/apinsta.app_323940134_1142839363047200_8031106471368679049_n_1080_scaled_down.jpg?rlkey=2mmtfdsw7clhixbr6c7v17y2t&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/w8xqq4ukavzg7kr344f4o/Snapinsta.app_323940134_1142839363047200_8031106471368679049_n_1080.jpg?rlkey=cqb5ut6yhx187bsmfxdc96e6e&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/z9ud0jf2slscjy7xulqsa/apinsta.app_324267836_950638682573147_202396225159323136_n_1080_scaled_down.jpg?rlkey=o331dncki7fxoyd3up7zubq4s&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/v2v2nmjr0s9tg15hjgz85/Snapinsta.app_324267836_950638682573147_202396225159323136_n_1080.jpg?rlkey=msm4p27s38phc4m44gi2oy1as&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/15ptwes28qn9sy7m9lfua/apinsta.app_324291881_141995572013826_7960645267313475345_n_1024_scaled_down.jpg?rlkey=bc5j7hfytjrmep7ukz63ev18d&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ve393qciun05h7bksotn9/Snapinsta.app_324291881_141995572013826_7960645267313475345_n_1024.jpg?rlkey=5pl3cw9k68z7i18srwl3hmk5o&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/lfwariql0xkjhrry1z0qp/apinsta.app_324385322_731486561690808_4650486570755094609_n_1080_scaled_down.jpg?rlkey=2s1etbdtagos89y6lt9bdu4zn&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/pvs1j89fs7kwtd269gyil/Snapinsta.app_324385322_731486561690808_4650486570755094609_n_1080.jpg?rlkey=1kawsf387beixmkrpq084iq67&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/b7qfqznxzfsk1d43sx355/apinsta.app_324548439_596938608838029_6776142595586393941_n_1080_scaled_down.jpg?rlkey=gqkiq86hd0azskesw053i5jhj&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/szdmui5tvgqfqej8odl3x/Snapinsta.app_324548439_596938608838029_6776142595586393941_n_1080.jpg?rlkey=r4s3qfjoqd9ehdulabxo4oh72&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/cxz994c1h7vlmis46gk1i/apinsta.app_324548771_1161673664472219_6297738271499808622_n_1080_scaled_down.jpg?rlkey=2jzl5h7lgsbkekvel0cjd2a8d&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/4mw37sy1kasz563ydcxen/Snapinsta.app_324548771_1161673664472219_6297738271499808622_n_1080.jpg?rlkey=wjbgtcbvl8en38mzkuht9dnfh&dl=0",
      0.7994078460399704,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/pr1hzo32hyu3v8dw83s9o/apinsta.app_324566556_883311012857504_3572337332641710021_n_1080_scaled_down.jpg?rlkey=j5bvcr0jj9xucklonwlr8qu69&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/b66fchgo4467o48grze7o/Snapinsta.app_324566556_883311012857504_3572337332641710021_n_1080.jpg?rlkey=bxqcl1uhlc16i6in4enldseie&dl=0",
      1.3316892725030827,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/e19dzfgao5z2lwp3py955/apinsta.app_324695559_6256478074387109_2383867754646089805_n_1024_scaled_down.jpg?rlkey=grefceubmj1tqxlwl3vmgjxqn&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/nxqbcp8xdaqjajm5anoym/Snapinsta.app_324695559_6256478074387109_2383867754646089805_n_1024.jpg?rlkey=sa3s8cuy53g3q3doqatupaf2d&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/12rgd229weanjpq2gfjvy/apinsta.app_324696902_495308489384326_4173549960769733316_n_1080_scaled_down.jpg?rlkey=5835mtaopwaz720x7w553wwvu&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/xktvoy4d6mm8a27v6ehma/Snapinsta.app_324696902_495308489384326_4173549960769733316_n_1080.jpg?rlkey=4r3gcnymzst21q1cpp1qyn572&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/736zsl3d7a7lctzcjxgvg/apinsta.app_324698596_696785048613604_124325653448418314_n_1080_scaled_down.jpg?rlkey=fxgdvgdysl01k6duxlmbepixn&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/sb20wr1zg622y84k5tna5/Snapinsta.app_324698596_696785048613604_124325653448418314_n_1080.jpg?rlkey=xap72qxab2ooqe4b227claqf0&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/uld6a2j49ol7plxkchbri/apinsta.app_324699805_862347401638599_5661566076172987773_n_1080_scaled_down.jpg?rlkey=l1mcyg2n3w8ijb611q43l3z6r&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/mw4cvo1rn3q4bymub4089/Snapinsta.app_324699805_862347401638599_5661566076172987773_n_1080.jpg?rlkey=enaqv7h30c3opt65a6rjoo8e8&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/bcjmfs19yyg68g5u2lfk8/apinsta.app_324783964_209684218293561_964212579973032285_n_1080_scaled_down.jpg?rlkey=ymu7tkfn1w4a20ibwcxrmyypy&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/cil75ofnhqwlvzccv9vzy/Snapinsta.app_324783964_209684218293561_964212579973032285_n_1080.jpg?rlkey=3j1mq9herye0phv6mmu2ruzyc&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/f8e61vhd0ft09gy4elalw/apinsta.app_324930970_230544179325896_1464689734004803804_n_1080_scaled_down.jpg?rlkey=mrm3rfop6xhw4urasesgad6cu&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/wvuvuodph486h9i9iepaf/Snapinsta.app_324930970_230544179325896_1464689734004803804_n_1080.jpg?rlkey=d7uhfxb8mxyv26jwnuzm21q5n&dl=0",
      0.8,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/wciq9bjfkwodggsbxqvi6/apinsta.app_325403889_897622954923338_8548472143445111817_n_1080_scaled_down.jpg?rlkey=tpi29ba1buw0u4jfxw3n8ifkv&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/mvbvdqccdyv3aijw4ojl6/Snapinsta.app_325403889_897622954923338_8548472143445111817_n_1080.jpg?rlkey=smftba9m30phteldy6jfdzdf2&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/qlt1wh7rn1mz9okgw11o2/apinsta.app_325584485_713149547131675_6004059699267791605_n_1080_scaled_down.jpg?rlkey=s2remi5ar0odkr6ngrhpgr8z0&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/rgqrnj6dzuxxzkx853ws1/Snapinsta.app_325584485_713149547131675_6004059699267791605_n_1080.jpg?rlkey=epr3s73sg8j3olojliqntl91e&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/ygg3j6tfmesc271qwxlh8/apinsta.app_325618179_144946395038041_1230251274334165317_n_1080_scaled_down.jpg?rlkey=vqjn2dfl5x7cdjzdykgyzz8l7&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/jyjd6bhopvb2o5x501zwd/Snapinsta.app_325618179_144946395038041_1230251274334165317_n_1080.jpg?rlkey=avk5ty09m8bko5qzvimc0gxuo&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/55l8wv9ave4j7xhcv6ct1/apinsta.app_325695472_753924872823965_3218805779653993148_n_1080_scaled_down.jpg?rlkey=vhncjygmlvcrheo01p68ihdv8&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/07sqa9s835fybxoqtrd6n/Snapinsta.app_325695472_753924872823965_3218805779653993148_n_1080.jpg?rlkey=3m65qdpjiizii1rn9ko704p98&dl=0",
      1.560693641618497,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/s4cb2f248ncu50il000e3/apinsta.app_325713396_552402070148958_9036343623047736467_n_1080_scaled_down.jpg?rlkey=czetzuo063mzqjk4c9oivqrzr&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/y3r6vxjf8zgfuqyyafjqp/Snapinsta.app_325713396_552402070148958_9036343623047736467_n_1080.jpg?rlkey=z06tyrw7idu4i2rlbtnx63h11&dl=0",
      1.7768595041322315,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/81pqfnztua71j51ije7au/apinsta.app_325847639_199937899274475_2834794919303908057_n_1080_scaled_down.jpg?rlkey=lsurjdse6ev1ijltdark5nlrl&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/hn6qel1pj3aw8ijup524i/Snapinsta.app_325847639_199937899274475_2834794919303908057_n_1080.jpg?rlkey=h27d47w7hpn1t9stw5n2lvv57&dl=0",
      1.2735849056603774,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/scxf3m4yimxbs0m8j7z9w/apinsta.app_325854966_155851376876456_907606968036383060_n_1080_scaled_down.jpg?rlkey=x7fgm7i0ppimhpjnbw0zy66k5&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/4ohl1nvmtj48aoe5kn64d/Snapinsta.app_325854966_155851376876456_907606968036383060_n_1080.jpg?rlkey=l3uwauq63546smko0x7dyuapx&dl=0",
      1.0876132930513596,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/otntfgawqy4r5kcx2mapn/apinsta.app_326099095_182999941031869_6447868641177950167_n_1080_scaled_down.jpg?rlkey=39uylba8lkt1qk5at3fmsafij&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/1yd43x73evyrc1vwwa7ha/Snapinsta.app_326099095_182999941031869_6447868641177950167_n_1080.jpg?rlkey=yvilqdan15r7f1ceofsutajk1&dl=0",
      1.2735849056603774,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/qeksqozdd80e0ddynkoap/apinsta.app_326165506_1575259659632626_5861861154053964167_n_1080_scaled_down.jpg?rlkey=7gp9r7bj4t481bx9kmjclifsh&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/dcgm7bctxugao5a5bwb6w/Snapinsta.app_326165506_1575259659632626_5861861154053964167_n_1080.jpg?rlkey=mjdnxv3qy9qoplc3f12n7gci3&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/cj0mhlpmub5gmju0ip2s5/apinsta.app_326761603_173560162046677_1096217936488590_n_1080_scaled_down.jpg?rlkey=mdj76b0vknwgkra6zyq47rc8x&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/vchqgj5dd8iqxz5rywo9h/Snapinsta.app_326761603_173560162046677_1096217936488590_n_1080.jpg?rlkey=rkotn8ow76u1ld7vr4k1r6pfp&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/4itgsk2pm51u0kkh1lwyi/apinsta.app_326906446_706237401077603_6410486921926514590_n_1080_scaled_down.jpg?rlkey=4mme5cy6zh3db1aejcvfyrsma&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/bxt870ls1glog302n9kaa/Snapinsta.app_326906446_706237401077603_6410486921926514590_n_1080.jpg?rlkey=yzg870mponjj3o21kfda4m6z3&dl=0",
      1.7763157894736843,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/ads9568q5vrmn6srl6ig7/apinsta.app_327111748_154112094073735_7184093426229435158_n_1080_scaled_down.jpg?rlkey=c3jwtrs178qfgn4bk67zf2rut&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/dxk7twlyhi6ch1rypwqls/Snapinsta.app_327111748_154112094073735_7184093426229435158_n_1080.jpg?rlkey=hrl7vrbpxql5zl4qbid7dnrgu&dl=0",
      1.0,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/8wxzajbpj97ftlbfp8ty3/apinsta.app_336083597_174056242098558_2904524246264768072_n_1080_scaled_down.jpg?rlkey=58he1wmey6galmmlayd8bz8wb&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/luaxqp4o7hzqzfaakgvaa/Snapinsta.app_336083597_174056242098558_2904524246264768072_n_1080.jpg?rlkey=p6rf22hjgawn0pn7v9ichl96b&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/l84qwmhkwymsll7ty5bt9/apinsta.app_336438920_887957045594396_1879791394464933435_n_1080_scaled_down.jpg?rlkey=pjf53hqzn8uu0o3embc7r0pg4&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/9uxwa2q6gex8sditln1ro/Snapinsta.app_336438920_887957045594396_1879791394464933435_n_1080.jpg?rlkey=qkmeb154iha27o87hfm2ew0oj&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/tgf8tnkuuk01oyvp8vh7p/apinsta.app_336581912_891651785444879_376619141609285173_n_1080_scaled_down.jpg?rlkey=y40frnb61i3z45ctaha1ladxw&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/574yuavtqzf81oxezltfq/Snapinsta.app_336581912_891651785444879_376619141609285173_n_1080.jpg?rlkey=yg7ih1l0ttuahef9awllxwonl&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/u86x1gln0aklqos33t4or/apinsta.app_336821553_239455401809006_3646155803215575104_n_1080_scaled_down.jpg?rlkey=0e3p9retfdoa5adgbn6jnceta&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/b41rl0w8fahsfuo1o1gm7/Snapinsta.app_336821553_239455401809006_3646155803215575104_n_1080.jpg?rlkey=mb9uq67awyhik9jvke7kxr2aj&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/3lniuud1skyzbodu23w1z/apinsta.app_336951412_185160440931645_159656924861036682_n_1080_scaled_down.jpg?rlkey=waogn8h1iyzmy3tk3r24e0ayv&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ht18b2djn4fc7kzv5h4jz/Snapinsta.app_336951412_185160440931645_159656924861036682_n_1080.jpg?rlkey=lrkgno0fohy7hse717gbvqzny&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/n3248alm678sp4vc0wtks/apinsta.app_343272019_940659947059813_2656239270647531942_n_1080_scaled_down.jpg?rlkey=w6476uciuf3txe09mzm922r9a&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/yt2rbwh7051wy5lshnebl/Snapinsta.app_343272019_940659947059813_2656239270647531942_n_1080.jpg?rlkey=znreyt0vg3py2w0pulf92lggh&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/0jfekz2h5uh2tsjchsa7h/apinsta.app_348224866_722692722876045_4299535226793738544_n_1080_scaled_down.jpg?rlkey=6qzyg3f3d9a030lhdae7yyve0&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/1lzuxcjsivj53p39v33ww/Snapinsta.app_348224866_722692722876045_4299535226793738544_n_1080.jpg?rlkey=dzlrkmqmmflvi6bz7nrecqqk6&dl=0",
      1.3300492610837438,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/16wryvly7tef3xstaywh8/apinsta.app_348316048_171816452509333_2262450367547354961_n_1080_scaled_down.jpg?rlkey=z76asj653ppfiltklf89ww39b&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/3pn7r6c6de3jfcex6k9p2/Snapinsta.app_348316048_171816452509333_2262450367547354961_n_1080.jpg?rlkey=s35jo3z5b2rg2qf6vuxuv5rtn&dl=0",
      1.3300492610837438,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/nq70s5q2zbifmshts86n9/atsApp-Image-2022-11-15-at-5.24.52-PM-3_scaled_down.jpeg?rlkey=y46x946rq12tp1stsy9o5zvd2&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ursq5oxxtvzm5k3cwc4c5/WhatsApp-Image-2022-11-15-at-5.24.52-PM-3.jpeg?rlkey=9wq2u0glf6f81uj6u8gdng6vj&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/kn1iuiwi712458vulawjt/atsApp-Image-2022-12-07-at-1.30.00-PM_scaled_down.jpeg?rlkey=ejl00tdnsxos6m3sxbtub4m1l&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ht2lhi4raj8ebo04aroko/WhatsApp-Image-2022-12-07-at-1.30.00-PM.jpeg?rlkey=ywi4f8oxtygml5jtfm5hyi6f8&dl=0",
      1.336116910229645,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/s07qqj2011au6dfxdr1xu/atsApp-Image-2022-12-29-at-11.48.08-PM_scaled_down.jpeg?rlkey=8uziluigco64spcb6o2tgight&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/ssd4bf8d3rfii8maubkmn/WhatsApp-Image-2022-12-29-at-11.48.08-PM.jpeg?rlkey=98r5q5v1uo4brfc2wyof6l72a&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/xwka5vhcda7uehyubmev1/atsApp-Image-2022-12-29-at-9.10.22-PM-2_scaled_down.jpeg?rlkey=37t7can5fmkj302rb9ygvaaya&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/evrtt8x6rhtwwipg397jw/WhatsApp-Image-2022-12-29-at-9.10.22-PM-2.jpeg?rlkey=bg656oje3r9xb3nnhqqjzg5k9&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/9rg6yko3z2ddozgfm40jg/atsApp-Image-2022-12-29-at-9.10.22-PM_scaled_down.jpeg?rlkey=v6cizrm97xdwfcd2hilkrq0q7&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/a334b6vtfh8z3s6y6wqih/WhatsApp-Image-2022-12-29-at-9.10.22-PM.jpeg?rlkey=i6bd9bt0weofqtxlkanqb1tz8&dl=0",
      1.7777777777777777,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/s4hsju2t4cbyuhgzt6bag/atsApp-Image-2022-12-29-at-9.10.23-PM_scaled_down.jpeg?rlkey=crheyk2cyldajcspupn6o23dt&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/z25i9po7sf79fx5mipn9v/WhatsApp-Image-2022-12-29-at-9.10.23-PM.jpeg?rlkey=nwpt5xv7p6da8brye4l3m1szo&dl=0",
      0.5625,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/rv8tfmfi5874nc5ttc5qf/atsApp-Image-2022-12-30-at-3.15.42-PM_scaled_down.jpeg?rlkey=x2swpcy9dhv0xbsqj59sbpya2&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/63ca5iktstprsuxccxkdl/WhatsApp-Image-2022-12-30-at-3.15.42-PM.jpeg?rlkey=m749c5qavkfpfamts08z5f1pa&dl=0",
      0.75,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/8cuzxb965zhv1ojpuxkn0/atsApp-Image-2023-01-06-at-11.00.42-PM_scaled_down.jpeg?rlkey=x2p1oxyg9y0rhtcnjh6053kje&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/9svxnneasfbrch2lrnj2e/WhatsApp-Image-2023-01-06-at-11.00.42-PM.jpeg?rlkey=uli1dbhq7m7k9ocl4tq2uyq23&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/56tu4dkqdv196fhjl12y0/atsApp-Image-2023-01-06-at-11.00.46-PM_scaled_down.jpeg?rlkey=xcdavhyejnp5zd5ezyde3yej6&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/v195lnzj5sjijkwfo4vyp/WhatsApp-Image-2023-01-06-at-11.00.46-PM.jpeg?rlkey=zr5tl1gayrtcoxq8ma87s6v7g&dl=0",
      0.7504,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/e9t7atr5vwnha2qrt4gsr/atsApp-Image-2023-01-06-at-11.05.22-PM_scaled_down.jpeg?rlkey=xwg3o7i8xd7t5pakvopyahbs2&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/1rkqsin45n4gjvusouxaq/WhatsApp-Image-2023-01-06-at-11.05.22-PM.jpeg?rlkey=t40cul2fed8efi85ptm30tvpi&dl=0",
      0.450625,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/50b1pnr4evorvdfsp1ees/atsApp-Image-2023-01-13-at-1.57.08-AM-1_scaled_down.jpeg?rlkey=5qvoq44bix8y44mmwvv2z015l&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/1ybkr687mzygn1wqt7pd2/WhatsApp-Image-2023-01-13-at-1.57.08-AM-1.jpeg?rlkey=n70ypcv4178ol4r4s90y3x8qf&dl=0",
      1.3347236704900938,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/x78qf1pmzkwzq5m3sfken/atsApp-Image-2023-03-01-at-10.20.14-PM_scaled_down.jpeg?rlkey=ooqf09n80uplng7w90gva5i7t&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/twcot98ezpabwf2t5rvib/WhatsApp-Image-2023-03-01-at-10.20.14-PM.jpeg?rlkey=in6x2u3f2twizjatw0tenqn8p&dl=0",
      1.778642936596218,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/9rg6adriii4lfhedrtt07/atsApp-Image-2023-06-19-at-11.29.34_scaled_down.jpg?rlkey=w92cl42mfi7rx25zfa3lutlhn&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/u6q23s1f45muixaod6ldl/WhatsApp-Image-2023-06-19-at-11.29.34.jpg?rlkey=rrijuus2z2k61qlf5t8jcyb6j&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/osjz133zhzd6xjqav12wl/atsApp-Image-2023-06-20-at-19.03.33_scaled_down.jpg?rlkey=7ond9pjsgxe3d5cbdxvlsd9qq&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/0j8kkxiv7aorjfowand9e/WhatsApp-Image-2023-06-20-at-19.03.33.jpg?rlkey=f9i5ihsiyogrs5y1788kipbkh&dl=0",
      1.3333333333333333,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/t21ouarl4oa5mn6buvyxu/atsApp-Image-2023-06-21-at-01.12.48_scaled_down.jpg?rlkey=378n8ywl5rp7jtupdft68b3ja&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/qrfbj16asj0ku3ngzp2kq/WhatsApp-Image-2023-06-21-at-01.12.48.jpg?rlkey=cm9vzw15df5jj277ehyyf4gu3&dl=0",
      0.75,
    ],
    [
      "https://dl.dropboxusercontent.com/scl/fi/zizws1x2l3we7jgdtl2fg/atsApp-Image-2023-06-21-at-01.12.48__scaled_down.jpg?rlkey=inh8vbemo47h0m74z5yz7hz90&dl=0",
      "https://dl.dropboxusercontent.com/scl/fi/y2mimu0jmscgbl6lk8sf8/WhatsApp-Image-2023-06-21-at-01.12.48_.jpg?rlkey=lofei2m2tu8bc0zjdit8yt21k&dl=0",
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

  return (
    <div className="relative App flex flex-col md:flex-row">
      <SideDrawer className="fixed z-50 md:py-8 bg-[#333333] md:bg-[#3333338a] w-[100vw] h-auto md:w-auto md:h-[100vh]" />

      <div className="relative wrapper w-full  h-[calc(100vh-64px)] md:h-[100vh] mt-[64px] md:mt-0 md:mr-[95px] xmd:mr-[140px]">
        <Routes>
          <Route path="/" element={<HomePage details={details} />} />
          <Route path="/members" element={<MembersPage members={members} />} />
          <Route path="/gallery" element={<GalleryPage images={images} />} />
          <Route
            path="/leaderboard"
            element={
              <LeaderboardPage leaderboardDetails={leaderboardDetails} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
