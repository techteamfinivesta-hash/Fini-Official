import React from "react";
import "../Resources.css";

import new0 from '../Images/Newsletter/new0.png';
import new1 from '../Images/Newsletter/new1.png';
import new2 from '../Images/Newsletter/new2.png';
import new3 from '../Images/Newsletter/new3.png';
import new4 from '../Images/Newsletter/new4.png';
import new5 from '../Images/Newsletter/new5.png';
import new6 from '../Images/Newsletter/jan.png';
import new7 from '../Images/Newsletter/new7.png';
import new8 from '../Images/Newsletter/feb.png';
import new9 from '../Images/Newsletter/new8.png';



const sessions = [
  {
    id: 10,
    title: "August Edition",
    tenure: "2026-27",
    image: new9,
    link:'/Newsletter8.pdf'

  },
  {
    id: 9,
    title: "July Edition",
    tenure: "2026-27",
    image: new7,
    link:'/Newsletter7.pdf'

  },
  {
    id: 8,
    title: "February Edition",
    tenure: "2025-26",
    image: new8,
    link:'/Newsletterfeb.pdf'

  },
  {
    id: 7,
    title: "January Edition",
    tenure: "2025-26",
    image: new6,
    link:'/Newsletter6.pdf'

  },

  
  {
    id: 6,
    title: "December Edition",
    tenure: "2025-26",
    image: new5,
    link: '/Newsletter5.pdf',
  },

  
  {
    id: 5,
    title: "November Edition",
    tenure: "2025-26",
    image: new4,
    link: '/Newsletter4.pdf',
  },

  {
    id: 4,
    title: "October Edition",
    tenure: "2025-26",
    image: new3,
    link: '/Newsletter3.pdf',
  },
  
  {
    id: 3,
    title: "September Edition",
    tenure: "2025-26",
    image: new1,
    link: '/Newsletter1.pdf',
  },
  {
    id: 2,
    title: "August Edition",
    tenure: "2025-26",
    image: new2,
    link: '/Newsletter2.pdf',
  },
  {
    id: 1,
    title: "24-25 Recap",
    tenure: "2025-26",
    image: new0,
    link: '/Newsletter0.pdf',
  },
];

const Newsletter = () => {
  const tenures = [...new Set(sessions.map((session) => session.tenure))];
  return (
    <div className="MoneyMasterclass">
      <div className="header newslettermc">
        <h1>Newsletter</h1>
        <p>
          A monthly dose of finance news and insights, delivered straight to you. <br />– an initiative by Finivesta
        </p>
      </div>
      {tenures.map((tenure) => (
        <section key={tenure}>
          <h1 className="year">Tenure: {tenure}</h1>

          <div className="resourcesbox">
            {sessions
            .filter((session) => session.tenure === tenure)
            .map((session) => (
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
        </section>
      ))}
    </div>
  );
};

export default Newsletter;