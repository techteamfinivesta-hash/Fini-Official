import Unveiling_IPO from "./Images/Unveiling_IPO.jpg";
import MoneyMasterclass from "./Images/MoneyMasterclasscopy.png";
import BiddingBlitz from "./Images/BiddingBlitz.png";
import CollegeTrading from "./Images/CollegeTrading.png";
import Finlatics from "./Images/Finlatics.png";
import KharchePeCharche from "./Images/KharchePeCharche.png";
import Melange from "./Images/Melange.png";
import Orientation from "./Images/Orientation.png";
import Speaker from "./Images/Speaker.png";
import BiddingBlitz2 from "./Images/BiddingBlitz2.jpg";
import FinFeud from "./Images/FinFeud.jpg";
import FinWeek1 from "./Images/FinWeek1.png";
import FinWeek2 from "./Images/FinWeek2.png";
import FinWeek3 from "./Images/FinWeek3.png";
import FinWeek4 from "./Images/FinWeek4.png";
import FinWeek5 from "./Images/FinWeek5.png";
import Orientation25 from "./Images/Orientation_25.jpg";
import BiddingBlitz3 from "./Images/BiddingBlitz3.jpg";
import payload from "./Images/payload.jpeg";
import casecomp from "./Images/casecomp.jpeg";
import finopoly2 from "./Images/finopoly2.jpeg";

const events = [

  {
    name: "Finopoly 2.0",
    photo: finopoly2,
    link: "https://www.instagram.com/p/DVxX3krE9YY/",
    byline:
      "A thrilling competition inspired by the classic Monopolyt, where every decision can make or break your empire",
    year: 2026,
    backgroundColor: "rgb(91, 87, 101)",
  },

  {
    name: "Case Study Competition",
    photo: casecomp,
    link: "https://www.instagram.com/p/DVxXqPuE1eV/",
    byline:
      "Step into a high stakes arena where you'll analyze real-world problems, craft innovative strategies, and compete with the brightest minds",
    year: 2026,
    backgroundColor: "rgb(69, 27, 160)",
  },

  {
    name: "PayLoad",
    photo: payload,
    link: "https://www.instagram.com/p/DU04DODky6w/",
    byline:
      "While other hackathons are still hyping 'coming soon', PayLoad is already here, live and loaded",
    year: 2026,
    backgroundColor: "rgb(187, 149, 11)",
  },

  {
    name: "Bidding Blitz 3.0",
    photo: BiddingBlitz3,
    link: "https://www.instagram.com/p/DRE-X0mE3SR/",
    byline:
      "Ready… Set… Bid! Join Finivesta's Bidding Blitz 3.0 where wit meets wealth and the highest stakes win!",
    year: 2025,
    backgroundColor: "#7c5745ff",
  },

  {
    name: "Orientation",
    photo: Orientation25,
    link: "https://www.instagram.com/reel/DPMB8yUEy6m/?utm_source=ig_web_copy_link&igsh=MTcyZXRzY2JyZXMxNQ==",
    byline:
      "Finivesta Orientation 2025: Where Finance Meets Fun! Gear up for a power-packed session where finance meets thrill!",
    year: 2025,
    backgroundColor: "#99e17a",
  },
  {
    name: "Fin Feud",
    photo: FinFeud,
    link: "https://www.instagram.com/p/DHaXzXMzi6d/?igsh=MWVrNGFyNmE3a2F4bQ==",
    byline:
      " Gear up for the ultimate finance showdown – FINFEUD, the finance & economics quiz that will put your knowledge to the ultimate test!",
    year: 2025,
    backgroundColor: "#ff70a6",
  },
  {
    name: "FinWeek - Day 5: Pitch Desk - B Plan",
    photo: FinWeek5,
    link: "https://www.instagram.com/p/DFdGAt4Tak2/?img_index=1",
    byline:
      "Finivesta IGDTUW in collaboration with ECell IIITD invites you to Pitch Desk: Business Plan Competition",
    year: 2025,
    backgroundColor: "#301D24",
  },
  {
    name: "FinWeek - Day 4: Starting a Startup",
    photo: FinWeek4,
    link: "https://www.instagram.com/p/DFx4cOxzkdU/",
    byline:
      "Finivesta IGDTUW in collaboration with Enactus IGDTUW presents an exclusive session on “Starting a Startup” ",
    year: 2025,
    backgroundColor: "#C9A235",
  },
  {
    name: "FinWeek - Day 3: Game Night",
    photo: FinWeek3,
    link: "https://www.instagram.com/p/DF3AT4JzDCr/?img_index=1",
    byline:
      "Game Night featuring Scribble & Pictionary—a night of chaotic drawings and wild guesses",
    year: 2025,
    backgroundColor: "#100E11",
  },
  {
    name: "FinWeek - Day 2: Finopoly",
    photo: FinWeek2,
    link: "https://www.instagram.com/p/DFcP10GT9qe/",
    byline:
      "In our version of Monopoly, you’ll buy, sell and trade stocks instead of cities, putting your financial strategies and market knowledge to test. ",
    year: 2025,
    backgroundColor: "#2B333B",
  },
  {
    name: "FinWeek - Day 1: Of Paradoxes and Crisis",
    photo: FinWeek1,
    link: "https://www.instagram.com/p/DFxz8BjzXGy/",
    byline:
      'Kickstarting FinWeek with an insightful session on "Of Paradoxes and Crises: The Anatomy and the Physiology of Indian Growth"',
    year: 2025,
    backgroundColor: "#E1D2D2",
  },
  {
    name: "Bidding Blitz 2.0",
    photo: BiddingBlitz2,
    link: "https://www.instagram.com/p/DFAbfXuyk7u/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    byline:
      "Gear up for Bidding Blitz 2.0 – the ultimate mock bidding showdown! Test your strategy, outbid rivals, and win big!",
    year: 2025,
    backgroundColor: "#BEB19C",
  },
  {
    name: "Unveiling IPOs",
    photo: Unveiling_IPO,
    link: "https://www.canva.com/design/DAGbu4uhDfU/AVRFjLBax5A2e-bE1gvttw/view?utm_content=DAGbu4uhDfU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb1e6d44f9b",
    byline:
      "Master the basics of IPO and get a headstart into the world of finance.",
    year: 2025,
    backgroundColor: "#439543",
  },
  {
    name: "Money Masterclass",
    photo: MoneyMasterclass,
    link: "/resources/moneymasterclass",
    byline:
      " Our weekly initiative to promote financial literacy among our members and build expertise in both personal and professional finance",
    year: 2024,
    backgroundColor: "#079b6e",
  },
  {
    name: "Finlatics",
    photo: Finlatics,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7160561756463853568/",
    byline:
      "Online webinar on Stock Trading and Investment Banking that unveils the secrets to success in the ever-evolving financial landscape.",
    year: 2024,
    backgroundColor: "#fea106",
  },
  {
    name: "Money Melange",
    photo: Melange,
    link: "https://www.instagram.com/p/C2CkzBTStUb/?igsh=MW5lNmZ6NmRxZTdqMA==",
    byline:
      " A challenge to your strategic and creative prowess, solve financially charged problems in a totally imaginative way.",
    year: 2024,
    backgroundColor: "#c5f7c5",
  },
  {
    name: "Kharche Pe Charcha",
    photo: KharchePeCharche,
    link: "https://www.instagram.com/p/C2AVhH4SE0P/",
    byline:
      "An engaging conversation on money management techniques and to learn the fundamentals of budgeting and develop your financial literacy.",
    year: 2024,
    backgroundColor: "#156c53",
  },
  {
    name: "Bidding Blitz",
    photo: BiddingBlitz,
    link: "https://www.instagram.com/p/CzqYKwRLp24/",
    byline: "Where every bid is a move and every move a chance to victory.",
    year: 2023,
    backgroundColor: "#70b236",
  },
  {
    name: "Guide To Stock Market",
    photo: Speaker,
    link: "https://www.instagram.com/p/CzbC7cLPrex/",
    byline:
      "An insightful webinar from a speaker with 20+ years’ experience in marketing and sales.",
    year: 2023,
    backgroundColor: "#1f433d",
  },
  {
    name: "College Trader Showdown",
    photo: CollegeTrading,
    link: "https://www.instagram.com/p/CxXRs1Pywdn/",
    byline:
      "A NATIONAL LEVEL VIRTUAL TRADING CONTEST, with virtual currency and real money to your bank accounts.",
    year: 2023,
    backgroundColor: "#3aed36",
  },
  {
    name: "Orientation",
    photo: Orientation,
    link: "https://www.instagram.com/p/CxAA9weLEea/?img_index=1",
    byline:
      "The finance society of IGDTUW that aims to bring financial knowledge to the girls of our college.",
    year: 2023,
    backgroundColor: "#6eb335",
  },
];

export default events;
