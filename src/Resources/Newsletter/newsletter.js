import React from "react";
import "../Resources.css";

import new0 from '../Images/Newsletter/new0.png';
import new1 from '../Images/Newsletter/new1.png';
import new2 from '../Images/Newsletter/new2.png';
import new3 from '../Images/Newsletter/new3.png';
import new4 from '../Images/Newsletter/new4.png';
import new5 from '../Images/Newsletter/new5.png';
import new6 from '../Images/Newsletter/jan.png';
import new7 from '../Images/Newsletter/feb.png';

const sessions = [
  {
    id: 7,
    title: "February Edition",
    image: new7,
    link:'/Newsletter7.pdf'

  },
  {
    id: 7,
    title: "January Edition",
    image: new6,
    link:'/Newsletter6.pdf'

  },

  
  {
    id: 6,
    title: "December Edition",
    image: new5,
    link: '/Newsletter5.pdf',
  },

  
  {
    id: 5,
    title: "November Edition",
    image: new4,
    link: '/Newsletter4.pdf',
  },

  {
    id: 4,
    title: "October Edition",
    image: new3,
    link: '/Newsletter3.pdf',
  },
  
  {
    id: 3,
    title: "September Edition",
    image: new1,
    link: '/Newsletter1.pdf',
  },
  {
    id: 2,
    title: "August Edition",
    image: new2,
    link: '/Newsletter2.pdf',
  },
  {
    id: 1,
    title: "24-25 Recap",
    image: new0,
    link: '/Newsletter0.pdf',
  },
];

const Newsletter = () => {
  return (
    <div className="MoneyMasterclass">
      <div className="header newslettermc">
        <h1>Newsletter</h1>
        <p>
          A monthly dose of finance news and insights, delivered straight to you. <br />– an initiative by Finivesta
        </p>
      </div>

      <div className="resourcesbox">
        {sessions.map((session) => (
          <div key={session.id} className="boxsmall">
            <a href={session.link} target="_blank" rel="noreferrer">
              <div className="img review">
                <img src={session.image} alt={`${session.title} Cover`} loading="lazy"/>
              </div>
              <div className="text">
                <h2>{session.title}</h2>
                <p>{session.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsletter;