import React from "react";
import "../Resources.css";

import I1 from "../Images/blogs/1.jpg";
import I2 from "../Images/blogs/2.webp";
import I3 from "../Images/blogs/3.jpg";
import I4 from "../Images/blogs/4.jpg";
import I5 from "../Images/blogs/5.jpg";
import I6 from "../Images/blogs/6.jpg";
import I7 from "../Images/blogs/gold.jpeg";
import I8 from "../Images/blogs/CarthageCoins.jpg";
import I9 from "../Images/blogs/9.jpg";
import I10 from "../Images/blogs/dhanteras.webp";
import I11 from "../Images/blogs/11.png";
import I12 from "../Images/blogs/investment.png";
import I13 from "../Images/blogs/bnplcover.jpg";
import I14 from "../Images/blogs/10.jpg";
import I15 from "../Images/blogs/15.png";
import I16 from "../Images/blogs/cash.png";
import I17 from "../Images/blogs/IndiaUpiSys.png";
import I18 from "../Images/blogs/economicgrowth.jpg";
import I19 from "../Images/blogs/19.jpeg";
import I20 from "../Images/blogs/20.jpeg";
import I21 from "../Images/blogs/louvre-img.jpg";
import I22 from "../Images/blogs/ttt_tax_image1.png";

const blogs = [
  {
    id:22,
    title:"Treasures,Taxes and Trouble",
    description:"Inside the British Museum's money dilemma",
    image:I22,

    link:"/resources/blogs/20-TTT",
  },

  {
    id: 21,
    title: "The Day the Louvre Lost Its Crown Jewels",
    description: "The boldest heists in modern history",
    image: I21,
    link: "/resources/blogs/20-Louvre-heist",
  },
  {
    id: 20,
    title: "The U.S. vs. The World (Again)",
    description: "What’s Behind America’s New Tariff War?",
    image: I20,
    link: "/resources/blogs/20-UStariffs",
  },

  {
    id: 19,
    title: "India’s Economic Growth and Industrialization: A Path to Progress",
    description: "Can India Turn Its Economic Potential into Global Power?",
    image: I19,
    link: "/resources/blogs/19-IndiasEconomicGrowth",
  },
  {
    id: 18,
    title: "Economic Growth and Industrialization in India",
    description: "From Vision to Reality: India's Growth Story",
    image: I18,
    link: "/resources/blogs/18-EconomicGrowth",
  },
  {
    id: 17,
    title: "India's UPI System",
    description: "UPI is set to change the way the world pays",
    image: I17,
    link: "/resources/blogs/17-IndiasUPISys",
  },
  {
    id: 16,
    title: "The Death of Cash? How Digital Payments Are Shaping the Future of Money",
    description: "Is cash still king, or is digital the new normal?",
    image: I16,
    link: "/resources/blogs/16-digitalcashclash",
  },
  {
    id: 15,
    title: "Stock Market vs. Real Estate",
    description: "Where Should You Invest?",
    image: I15,
    link: "/resources/blogs/15-stockmarket",
  },
  {
    id: 14,
    title: "Cryptocurrency Investing: Risks and Rewards",
    description: "What if the money in your wallet wasn’t made of paper but powered by code?",
    image: I14,
    link: "/resources/blogs/14-cryptocurrency",
  },
  {
    id: 13,
    title: "Buy Now, Pay Later",
    description: "The Future of Smart Shopping",
    image: I13,
    link: "/resources/blogs/13-buy-now-pay-later",
  },
  {
    id: 12,
    title: "Introduction to Investing and Annual Returns",
    description: "A comprehensive guide to investment options and their potential returns",
    image: I12,
    link: "/resources/blogs/12-investing-and-annual-returns",
  },
  {
    id: 11,
    title: "The 2024 U.S. Election",
    description: "What a Trump Return V/S Harris Victory Means for the Global Economy",
    image: I11,
    link: "/resources/blogs/11-US-election-2024",
  },
  {
    id: 10,
    title: "Auspiciousness of Buying Gold on Dhanteras",
    description: "Unveiling the story behind the festival",
    image: I10,
    link: "/resources/blogs/10-gold-on-dhanteras",
  },
  {
    id: 9,
    title: "Dhanteras Dynamics",
    description: "Gold prices and Market Sentiments amidst Global Uncertainty",
    image: I9,
    link: "/resources/blogs/09-dhanteras-dynamics",
  },
  {
    id: 8,
    title: "Gold Through the Ages",
    description: "Is It Still the Ultimate Asset in Today's World?",
    image: I8,
    link: "/resources/blogs/08-gold-history",
  },
  {
    id: 7,
    title: "Digital Gold",
    description: "Explore how digital gold works",
    image: I7,
    link: "/resources/blogs/07-digital-gold",
  },
  {
    id: 1,
    title: "AI in Finance",
    description: "World of artificial intelligence overlaps with that of finance",
    image: I1,
    link: "/resources/blogs/01-AI-in-finance",
  },
  {
    id: 2,
    title: "Finance and Technology",
    description: "Bridging Finance and Innovation",
    image: I2,
    link: "/resources/blogs/02-finance-and-technology",
  },
  {
    id: 3,
    title: "Power of Compounding",
    description: "Wealth unlocks through Compounding Magic",
    image: I3,
    link: "/resources/blogs/03-power-of-compounding",
  },
  {
    id: 4,
    title: "Liquidation",
    description: "Turning assets into Financial Opportunities",
    image: I4,
    link: "/resources/blogs/04-liquidation",
  },
  {
    id: 5,
    title: "Financial Literacy",
    description: "Empowering Education and Mastering Finance",
    image: I5,
    link: "/resources/blogs/05-financial-literacy",
  },
  {
    id: 6,
    title: "Bidding",
    description: "Strategic Bidding: Key to Success",
    image: I6,
    link: "/resources/blogs/06-bidding",
  },
];

const Blog = () => {
  return (
    <div className="blogpage">
      <div className="header blogs">
        <h1>Blogs</h1>
        <p>Explore Captivating Finance Stories and Smart Money Insights!</p>
      </div>

      <div className="resourcesbox">
        {blogs.map((blog) => (
          <div key={blog.id} className="boxsmall blog">
            <a href={blog.link}>
              <div className="img">
                <img src={blog.image} alt={blog.title} loading="lazy"/>
              </div>
              <div className="text">
                <h2>{blog.title}</h2>
                <p className="blog-byline-card">{blog.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
