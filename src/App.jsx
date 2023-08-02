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
      tags: ["هيئة التحزيب", "عمود", "SC", "SSSSNOA", "نويبع"],
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
          "https://dl.dropboxusercontent.com/scl/fi/slw2y5c728ge72tbj7k3g/bassel-1_compressed_scaled_down.jpeg?rlkey=pdcfm5gvltmh37ya15mjwrbi9&dl=0",
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
      tags: ["CS", "ReaktJS"],
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
      tags: ["CS", "المطرية", "العزبة"],
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
      tags: ["هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
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
          "https://dl.dropboxusercontent.com/scl/fi/z9zyz2wumck46pna3bg8i/ayman-2_compressed_scaled_down.jpg?rlkey=nqe7gz2bq0l1e4txd0ijsvc6e&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/gd3uujvfps4ggtvioc0g5/ayman-2_compressed.jpg?rlkey=rlsrxoysco4w8nq12za5cavhe&dl=0",
          "top",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/48l5vk15o09w5qxikm933/ayman-3_compressed_scaled_down.jpg?rlkey=j0mn9d7pioxmdisw7eqfi3des&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/zp5j2ciad319ey5dlscko/ayman-3_compressed.jpg?rlkey=tg4qbfr2fgte6uaryb3jzdl1x&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/0rgtqcigzrykh8crgv9lc/ayman-4_compressed_scaled_down.jpg?rlkey=1nksbbfignmwetvsmhefc3unx&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/ar5jnr8ws0uy1z7ofy967/ayman-4_compressed.jpg?rlkey=of9q3cq9h73fuiukdyvmh50ij&dl=0",
          "center",
        ],
        [
          "https://dl.dropboxusercontent.com/scl/fi/f7d7z2h3y8oj7uv72mwxt/ayman-5_compressed_scaled_down.jpg?rlkey=sbsj8w73lg8fhhi0lnx5sqpt4&dl=0",
          "https://dl.dropboxusercontent.com/scl/fi/4p4yrr2l3bysxromgfi04/ayman-5_compressed.jpg?rlkey=0yok6bqmzmwdz0fwjosf915et&dl=0",
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
      tags: ["SC", "لذيذ", "FL studio", "امممممممم"],
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
      tags: ["IS IS IS IS", "لايحة قديمة", "المطرية"],
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
      tags: ["SC", "السمعة الطيبة", "عمر خالخ", "نائب مدير القرب (سابقا)"],
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
      tags: ["هيئة التحزيب", "عمود", "شايل انجليزي", "IS IS IS IS"],
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

  const leaderboardDetails = details.map((member) => {
    return {
      name: member.name,
      rating: member.rating,
      points: member.points,
      face: member.face,
    };
  });

  return (
    <div className="relative App flex">
      <SideDrawer className="fixed z-10 py-8 bg-[#333333] h-[100vh]" />

      <div className="relative wrapper h-[100vh] grow mr-[130px]">
        <Routes>
          <Route path="/" element={<HomePage details={details} />} />
          <Route path="/members" element={<MembersPage members={members} />} />
          <Route path="/gallery" element={<GalleryPage />} />
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
