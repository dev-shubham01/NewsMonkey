import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  article = [
    {
      source: {
        id: null,
        name: "Hipertextual",
      },
      author: "José María López",
      title: "Chrome OS Flex: ¿una amenaza para Linux?",
      description:
        "Todos queremos estar a la última. A quién no le gustaría tener el modelo más nuevo de su televisor, teléfono, consola de videojuegos, tablet u ordenador. Pero eso tiene un precio. La vida media de estos dispositivos suele ser superior al lanzamiento de modelo…",
      url: "https://hipertextual.com/2022/04/chrome-os-flex-versus-linux",
      urlToImage:
        "https://i0.wp.com/hipertextual.com/wp-content/uploads/2022/03/MacBook-Old-Chrome-OS-Flex.jpg?fit=2000%2C1333&quality=50&strip=all&ssl=1",
      publishedAt: "2022-04-14T03:20:00Z",
      content:
        "Todos queremos estar a la última. A quién no le gustaría tener el modelo más nuevo de su televisor, teléfono, consola de videojuegos, tablet u ordenador. Pero eso tiene un precio. La vida media de es… [+7689 chars]",
    },
    {
      source: {
        id: null,
        name: "Fast Company",
      },
      author: "Rachel Brennan",
      title: "How to spot human bias in the tech your company uses",
      description:
        "Bizagi’s VP of product marketing points out what gets overlooked and how everyone can play a part in rooting out bias.\nThroughout the pandemic, technology decision-makers have quickly adopted new solutions to streamline remote and hybrid business processes. B…",
      url: "https://www.fastcompany.com/90740524/how-to-spot-human-bias-in-the-tech-your-company-uses",
      urlToImage:
        "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2022/04/p-1-how-to-spot-human-bias-in-the-tech-your-company-uses.jpg",
      publishedAt: "2022-04-14T00:30:12Z",
      content:
        "Throughout the pandemic, technology decision-makers have quickly adopted new solutions to streamline remote and hybrid business processes. But this onboarding process shined a light on a long-standin… [+5436 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Rebecca Moon",
      title:
        "Man in India dies by self-immolation after his boss asks for sex with his wife in exchange for transfer",
      description:
        "A man in India has died by self-immolation after his boss reportedly demanded to have sex with his wife in exchange for a transfer.  Gokul Prasad, a 45-year-...",
      url: "https://news.yahoo.com/man-india-dies-self-immolation-022655058.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/A2PJ1EF7IZ9FpVIYUONFfw--~B/aD00MjU7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/nextshark_articles_509/1e7b38a96ad257b264027ac6d06c38a7",
      publishedAt: "2022-04-14T02:26:55Z",
      content:
        "A man in India has died by self-immolation after his boss reportedly demanded to have sex with his wife in exchange for a transfer.\r\nGokul Prasad, a 45-year-old technical lineman, was feeling distres… [+2423 chars]",
    },
    {
      source: {
        id: null,
        name: "Daringfireball.net",
      },
      author: "John Gruber",
      title: "★ Studio Display, One Month In",
      description:
        "I expect a *display* from the world’s most-renowned computer company to be at least as reliable a computer as my refrigerator.",
      url: "https://daringfireball.net/2022/04/studio_display_one_month_in",
      urlToImage: "https://daringfireball.net/graphics/df-square-1024.png",
      publishedAt: "2022-04-14T01:00:01Z",
      content:
        "A few updates to my review of the Apple Studio, after using it just about every day for the last month.\n\nWhat I’m Buying\n\nI’m ordering a Studio Display with the works: the nano-texture display and th… [+3841 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Cristina Alexander",
      title: "Google launches Switch to Android app to chirping crickets",
      description:
        "Google has launched the Switch to Android app on Monday to the sound of chirping crickets. It will help ease iPhone users' transition from iOS to Android.",
      url: "https://www.digitaltrends.com/mobile/google-launches-switch-to-android-app/",
      urlToImage:
        "https://icdn.digitaltrends.com/image/digitaltrends/switch-to-android_concept.jpg",
      publishedAt: "2022-04-14T01:20:43Z",
      content:
        "Google has quietly launched the Switch to Android app on the App Store to the sound of chirping crickets. As reported by TechCrunch, the tech giant rolled out the app on Monday to make it easier for … [+1514 chars]",
    },
    {
      source: {
        id: null,
        name: "Gigazine.net",
      },
      author: "@GIGAZINE",
      title:
        "Appleが「マクロ写真コンテスト」の結果を発表、iPhoneのカメラ性能をフルに発揮した美麗マクロ写真がズラリ",
      description:
        "iPhone 13 ProとiPhone 13 Pro Maxのマクロ機能で撮影された写真のみを対象としたコンテスト「Shot on iPhoneマクロ写真撮影チャレンジ」の結果を2022年4月13日に発表しました。上位入賞者の写真を見ると、「iPhoneならばこんな写真も撮れるのか」と驚かされます。続きを読む...",
      url: "https://gigazine.net/news/20220414-apple-shot-on-iphone-macro-challenge/",
      urlToImage:
        "https://i.gzn.jp/img/2022/04/14/apple-shot-on-iphone-macro-challenge/00.jpg",
      publishedAt: "2022-04-14T04:15:00Z",
      content:
        "iPhone 13 ProiPhone 13 Pro MaxShot on iPhone2022413iPhone\r\nAppleShot on iPhone - Apple ()https://www.apple.com/jp/newsroom/2022/04/apple-unveils-the-best-photos-from-the-shot-on-iphone-macro-challeng… [+453 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "dpa",
      title:
        '"Metropolis goes Down Under": Fritz-Lang-Klassiker wird zur Serie für Apple TV+',
      description:
        "Der Schöpfer von Mr-Robot verantwortet jetzt die Neuadaption des Science-Fiction-Klassikers Metropolis. Gedreht wird in Australien.",
      url: "https://www.heise.de/news/Metropolis-goes-Down-Under-Fritz-Lang-Klassiker-wird-zur-Serie-fuer-Apple-TV-6675935.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/4/5/6/5/9/8/Maria_from_the_film_Metropolis__on_display_at_the_Robot_Hall_of_Fame-bdbfd521ebf82d71.jpg",
      publishedAt: "2022-04-14T04:49:00Z",
      content:
        'Mit seinem Science-Fiction-Epos "Metropolis" schrieb Fritz Lang vor fast 100 Jahren Filmgeschichte. Nun wird der Stummfilm-Klassiker als Serie neu aufgelegt in Australien. Die Dreharbeiten sollen vor… [+1948 chars]',
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title:
        "Clubhouse is finally rolling out dark mode support to its users on iOS and Android",
      description:
        "Live audio platform Clubhouse announced this week that it is finally rolling out dark mode support to its users on iOS and Android, so they can use the Clubhouse mobile app with a dark interface. However, it will still take some time before the option becomes…",
      url: "https://9to5mac.com/2022/04/13/clubhouse-is-finally-rolling-out-dark-mode-support-to-its-users-on-ios-and-android/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/04/Clubhouse-Dark-Mode.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-04-14T02:35:16Z",
      content:
        "Live audio platform Clubhouse announced this week that it is finally rolling out dark mode support to its users on iOS and Android, so they can use the Clubhouse mobile app with a dark interface. How… [+1634 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: null,
      title: "Beats Studio Budsに春の新色がやってきました",
      description:
        "Beats Studio Budsに新色モデル登場。「サンセットピンク」「ムーングレイ」「オーシャンブルー」の3色。",
      url: "https://www.gizmodo.jp/2022/04/new-color-of-beats-studio-buds-available.html",
      urlToImage:
        "https://assets.media-platform.com/gizmodo/dist/images/2022/04/14/MMT83-w960.jpeg",
      publishedAt: "2022-04-14T04:00:00Z",
      content:
        "AppleBeats Studio Buds\r\nImage: Apple\r\nBeats Studio Buds\r\nBeats Studio Buds17800Beats Studio BudsAirPodsBeats\r\nSource: Apple",
    },
    {
      source: {
        id: null,
        name: "Phandroid - News for Android",
      },
      author: "Tyler Lee",
      title:
        "Google’s new app makes it easier for iOS users to switch to Android",
      description:
        "Google has finally launched its long-rumored “Switch to Android” app on iOS, making it an easier process for iOS users to make the jump over to Android.\nThe post Google’s new app makes it easier for iOS users to switch to Android first appeared on Phandroid.",
      url: "https://phandroid.com/2022/04/13/googles-new-app-makes-it-easier-for-ios-users-to-switch-to-android/",
      urlToImage:
        "https://phandroid.com/wp-content/uploads/2021/12/iphone13-pro-pixel-6-pro-640x480.jpg",
      publishedAt: "2022-04-14T00:20:00Z",
      content:
        "Apple has an app for Android devices that helps make the process of switching from Android to iOS easier, but on Google’s end, all the company did was publish a set of instructions asking iOS users t… [+1223 chars]",
    },
    {
      source: {
        id: null,
        name: "Phandroid - News for Android",
      },
      author: "Mike V.",
      title: "The 5 Best Wireless Earbuds for Under $50",
      description:
        "Looking to turn your fifty bucks into a jam session? Check out this list of some of the best budget wireless earbuds you can find on the market.\nThe post The 5 Best Wireless Earbuds for Under first appeared on Phandroid.",
      url: "https://phandroid.com/2022/04/13/the-5-best-wireless-earbuds-for-under-50/",
      urlToImage:
        "https://phandroid.com/wp-content/uploads/2022/04/soundcore-life-p2-640x357.jpg",
      publishedAt: "2022-04-14T00:00:16Z",
      content:
        "The integration of wireless audio products into the mainstream has certainly led to a lot of innovation and impressive technology, and it’s interesting to think that in the past few years, we’ve gott… [+4663 chars]",
    },
    {
      source: {
        id: null,
        name: "Dpreview.com",
      },
      author: "Gannon Burgett",
      title: "Nikon developing MC-N10 remote grip for Z-mount cameras",
      description:
        "<table>\n\n<tr>\n<td></td>\n</tr>\n\r\n\n</table>\nIn addition to the announcement of its new 2.0 firmware for is Z9 mirrorless camera, Nikon has also revealed it’s developing a new remote grip that shows just how serious the company is getting about the video capabil…",
      url: "https://www.dpreview.com/news/8783229264/nikon-developiong-mc-n10-remote-grip-for-z-mount-cameras",
      urlToImage:
        "https://1.img-dpreview.com/files/p/E~TS940x788~articles/8783229264/Nikon_MC-N10_1.jpeg",
      publishedAt: "2022-04-14T04:01:00Z",
      content:
        "The Nikon Z9 is about to get a massive firmware updated, and we got our hands on it early!\r\nNikon has announced a major firmware update for its flagship Z9 full-frame mirrorless camera. Firmware 2.0 … [+5710 chars]",
    },
    {
      source: {
        id: null,
        name: "Dpreview.com",
      },
      author: "DPReview",
      title: "DPReview TV: Nikon Z9 Firmware 2.0 Impressions",
      description:
        "The Nikon Z9 is about to receive a huge firmware update, and we got our hands on it early! Take a look at the exciting new features, and see if there are any limitations that might have been hidden in the fine print.\n\nSubscribe to our YouTube channel to get n…",
      url: "https://www.dpreview.com/videos/2673575412/dpreview-tv-nikon-z9-firmware-2-0-impressions",
      urlToImage:
        "https://3.img-dpreview.com/files/p/E~TS940x788~articles/2673575412/Nikon_Z9_2.0_16.9.jpeg",
      publishedAt: "2022-04-14T04:03:00Z",
      content:
        "The Nikon Z9 is about to get a massive firmware updated, and we got our hands on it early!\r\nNikon has announced a major firmware update for its flagship Z9 full-frame mirrorless camera. Firmware 2.0 … [+5710 chars]",
    },
    {
      source: {
        id: null,
        name: "HYPEBEAST",
      },
      author: "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
      title:
        "Apple Signs Exclusive Multi-Year Deal With Tom Hanks' Production Company",
      description:
        "Apple TV+ has signed an exclusive multi-year deal with Tom Hanks and Gary Geotzman's multiple-award-winning production company Playtone. Under the agreement, the companies will partner on developing, producing and distributing all forms of television, includi…",
      url: "https://hypebeast.com/2022/4/apple-exclusive-multi-year-deal-tom-hanks-production-company-playtone",
      urlToImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Fapple-exclusive-multi-year-deal-tom-hanks-production-company-playtone-TW.jpg?w=960&cbr=1&q=90&fit=max",
      publishedAt: "2022-04-14T00:41:09Z",
      content:
        "Apple TV+ has signed an exclusive multi-year deal with Tom Hanks and Gary Geotzman’s multiple-award-winning production company Playtone. Under the agreement, the companies will partner on developing,… [+1183 chars]",
    },
    {
      source: {
        id: null,
        name: "HYPEBEAST",
      },
      author: "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
      title:
        "20th Century Studios Taps Sinqua Walls for Lead Role in 'White Men Can't Jump' Reboot",
      description:
        "20th Century Studios has tapped Sinqua Walls and Jack Harlow to star in its reboot of White Men Can't Jump. The remake was first announced in 2017, when Blake Griffin and Black-Ish creator Kenya Barris signed on to develop the project. The film will be a reim…",
      url: "https://hypebeast.com/2022/4/sinqua-walls-jack-harlow-20th-century-studios-white-men-cant-jump-reboot-casting",
      urlToImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Fsinqua-walls-jack-harlow-20th-century-studios-white-men-cant-jump-reboot-casting-tw.jpg?w=960&cbr=1&q=90&fit=max",
      publishedAt: "2022-04-14T03:40:10Z",
      content:
        "20th Century Studios has tapped Sinqua Walls and Jack Harlow to star in its reboot of White Men Can’t Jump. The remake was first announced in 2017, when Blake Griffin and Black-Ish creator Kenya Barr… [+829 chars]",
    },
    {
      source: {
        id: null,
        name: "HYPEBEAST",
      },
      author: "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
      title: "Toyota Announces Pricing for Its bZ4X Electric SUV",
      description:
        "Toyota has finally put a price tag on its long-awaited bZ4X electric SUV. Announcing the news via a press release, Toyota has set the starting price for the car at $42,000 USD, and if that wasn't attractive enough, the automaker also points out that according…",
      url: "https://hypebeast.com/2022/4/toyota-bz4x-electric-suv-pricing-announcement",
      urlToImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F04%2Ftoyota-bz4x-electric-suv-pricing-announcement-tw.jpg?w=960&cbr=1&q=90&fit=max",
      publishedAt: "2022-04-14T00:43:09Z",
      content:
        "Toyota has finally put a price tag on its long-awaited bZ4X electric SUV. Announcing the news via a press release, Toyota has set the starting price for the car at $42,000 USD, and if that wasn’t att… [+1348 chars]",
    },
    {
      source: {
        id: null,
        name: "BGR",
      },
      author: "Chris Smith",
      title: "Mark Zuckerberg’s plan to kill the iPhone: Meta’s AR glasses",
      description:
        "It’s no secret that Mark Zuckerberg hates the hold that mobile operating systems have over its platform, especially Apple’s iPhone. We already know that the CEO of Facebook (now called Meta) wants to deliver a killing blow to the iPhone with the help of augme…",
      url: "http://bgr.com/tech/mark-zuckerbergs-plan-to-kill-the-iphone-metas-ar-glasses/",
      urlToImage:
        "https://bgr.com/wp-content/uploads/2021/10/rsz_mega457068_001.jpg?quality=82&strip=all",
      publishedAt: "2022-04-14T04:15:00Z",
      content:
        "It’s no secret that Mark Zuckerberg hates the hold that mobile operating systems have over its platform, especially Apple’s iPhone. We already know that the CEO of Facebook (now called Meta) wants to… [+4067 chars]",
    },
    {
      source: {
        id: null,
        name: "/FILM",
      },
      author: "Kaylee Dugan",
      title: "Ted Lasso Season 3 Recruits For All Mankind Actress Jodi Balfour",
      description:
        'Sneaks and peaks of the third season of "Ted Lasso" have been rolling in and they\'re making me wish it was available to watch right now. Like immediately. Like I would prefer to stop writing this story and start watching TV. Unfortunately for me, my wants and…',
      url: "https://www.slashfilm.com/831904/ted-lasso-season-3-recruits-for-all-mankind-actress-jodi-balfour/",
      urlToImage:
        "https://www.slashfilm.com/img/gallery/ted-lasso-season-3-recruits-for-all-mankind-actress-jodi-balfour/l-intro-1649902911.jpg",
      publishedAt: "2022-04-14T02:24:54Z",
      content:
        'Besides her role in the sci-fi series "All for Mankind," Balfour has also appeared as Jackie Kennedy in "The Crown" and won a Canadian Screen Award for Best Actress for her role in the TV show "Bomb … [+1042 chars]',
    },
    {
      source: {
        id: null,
        name: "36kr.com",
      },
      author: "8点1氪",
      title:
        "8点1氪 | iPhone14或将支持卫星网络连接；上海：进一步规范快递费、跑腿费价格明显上涨问题；微信灰测腾讯数字人民币钱包小程序",
      description:
        "iPhone14或将支持卫星网络连接，无需经过运营商即可发送紧急信息 \n据彭博社报道，苹果公司计划在未来为Apple Watch带来卫星连接功能，紧急短信和SOS求救功能将随之推出。卫星网络最早可能在下半年发布的iPhone14中实现，不过由于各地监管条例不同，具体情况需要根据当地的法规实行。 \n上海：对快递费、跑腿费价格明显上涨问题进一步依法规范 \n在上海疫情防控工作新闻发布会上，上海市市场监管局副局长彭文皓表示，目前，市商务委、邮政、发改委和我局，将对大家所关心的快递费和跑腿费价格明显上涨的问题，联合采取措施…",
      url: "https://36kr.com/p/1697769277407495",
      urlToImage:
        "https://img.36krcdn.com/20220414/v2_93558b5d63ef422b852f82d61b130cf4_img_000?x-oss-process=image/resize,m_mfit,w_600,h_400,limit_0/crop,w_600,h_400,g_center",
      publishedAt: "2022-04-14T00:22:53Z",
      content:
        "TOP3\r\niPhone14\r\nApple WatchSOSiPhone14\r\n4 13  \r\n/\r\n6\r\n6\r\n25.9\r\n1325.9Sienta3Sienta\r\n25\r\n41225\r\n36132.03%1.01%5001.12%Netflix1%3%Meta0.4%0.28%B5%3%362%11%7%4%\r\nE\r\n20224170E20226120\r\niPhone\r\n4122022App… [+624 chars]",
    },
    {
      source: {
        id: null,
        name: "Ifanr.com",
      },
      author: "方嘉文",
      title:
        "早报 | iPhone 14 或支持卫星网络连接 / 蔚来回应汽车失控撞墙事件 / 椰树再发争议广告",
      description:
        "- 麦当劳说：条条大路通🍟\n- Lululemon 在美国推出以旧换新和转售平台#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
      url: "https://www.ifanr.com/1482351",
      urlToImage:
        "https://s3.ifanr.com/wp-content/uploads/2022/04/werewr.001.jpeg",
      publishedAt: "2022-04-14T01:21:06Z",
      content:
        "<ul><li>iPhone 14 </li><li></li><li></li><li>iQOO Neo6 8 Gen12799 </li><li>Vespa Justin Bieber </li><li>adidas Originals M&amp;Ms </li><li>Twitter NFT </li><li></li><li>Meta 40%</li><li></li><li>Lulu… [+890 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      article: this.article,
    };
  }
  render() {
    return (
      <div className="container my-5">
        <h2>News Moneky-Top Headlines</h2>
        <div className="row">
          {this.state.article.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem


      title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
