import React from "react";
import "./blogpage.css";
import Img3 from "./blog-images/ttt_img3.png";
import Img4 from "./blog-images/ttt_img4.png";


const TTT = () => {
  return (
    <div className="blog-page-box">

      {/* HEADER / BANNER */}
      <div className="blog-header ttt">
        <div className="blog-header-text">
          <h1>TREASURES, TAXES & TROUBLE</h1>
          <p>An article by <i>Saanvi Vasdev</i></p>
          <p>Inside the British Museum's Money Dilemma</p>
        </div>
      </div>

      {/* BLOG CONTENT */}
      <div className="blog-para">
        <p>
          Britain's Political Chaos Left Its Greatest Museum Begging for Scraps. 
          The Rosetta Stone sits in Gallery 4, blissfully unaware that the roof above it is held together by prayers and declining government grants. 
          Welcome to the British Museum in 2025: home to 8 million artifacts, 6.5 million annual visitors, and exactly £10.6 million in reserves, just enough to keep the lights on until someone important notices the ceiling is crumbling.
        </p>
        <div style={{ height: "15px" }} />

        <p>
          Director Nicholas warned of "critical infrastructure failure." Chunks of Georgian ceiling have been making unscheduled appearances on gallery floors. 
          The museum needs hundreds of millions for urgent repairs. The government's response? A sympathetic nod and a one-year spending review that makes long-term planning about as feasible as predicting British weather. 
          But here's where the story gets properly British, a bit chaotic and tinged with the sort of institutional decline that makes you want to laugh and cry simultaneously.
        </p>
        <div style={{ height: "30px" }} />

        <h3>BREXIT: THE GIFT NOBODY WANTED</h3>
        <div style={{ height: "20px" }} />
        <p>
          2016. The year 96% of Creative Industries Federation members voted Remain, while the other 4% presumably worked somewhere else. 
          Museum funding dropped 13% in real terms between 2007 and 2017—from £829 million to £720 million. That's £109 million, vanished after inflation. 
          International exhibitions became bureaucratic nightmares. Want to borrow a Monet from Paris? Queue up for export licenses, travel documents, and transport costs that would empty pockets sooner than a Vivienne Westwood piece. 
          Northern Ireland museums watched 40% of their visitors suddenly become complicated "international tourists". Local museums got hammered worst: 31% funding cuts between 2010 and 2016. The promised replacement for EU arts funding is still pending.
        </p>
        <div style={{ height: "30px" }} />
        <img src={Img3} alt="Museum ceiling damage" className="image-in-blog2" />


        <h3>THREE PRIME MINISTERS, ONE CATASTROPHE</h3>
        <div style={{ height: "20px" }} />
        <p>
          The leadership carousel began with Boris Johnson's July 2022 exit after Partygate. Museums barely got the time to adjust before Liz Truss's 49-day tenure, outlasted by a Daily Star lettuce, unleashed economic chaos. 
          £300 billion got wiped off markets, mortgage rates topped 6%, and pension funds needed a £65 billion Bank of England bailout. 
          Rishi Sunak arrived with fiscal restraint, offering museums one-year spending reviews, perfect for exhibitions that take five years to organize. His "levelling up" agenda redistributed Arts Council funding from London without increasing the total. Camden Art Centre's subsidy dropped from £920,000 to £600,000.
        </p>
        <div style={{ height: "30px" }} />

        <h3>THE TAX TANGLE: FREE ADMISSION OR FINANCIAL COLLAPSE?</h3>

<p>
  Here's the irony: The British Museum enjoys significant tax breaks, including the VAT Refund Scheme (Section 33A of the VAT Act 1994) and Museums and Galleries Exhibition Tax Relief (40-45% on exhibition costs). Summed up, these save millions each year. 
  The catch? Maintain free general admission or lose everything. Charge a single penny at the door and the entire tax structure collapses faster than Truss's premiership.
  Former interim director Sir Mark Jones suggested charging tourists £20. He pointed out that while 41% of U.S. millionaires focus on charity spending, only 18% of UK millionaires show that same generosity. V&A director Tristram Hunt proposed a "hotel tax" on tourist accommodation. 
  Meanwhile, thousands of smaller museums receive none of these benefits, creating a system where flagship institutions get breaks while community museums struggle. It’s equality in the same way everyone has equal access to expensive lawyers: it sounds good in theory but is practically useless.
</p>

{/* Image 4 */}
<img 
  src={Img4} 
  alt="Tax Tangle Illustration" 
  style={{
    width: "60%",      // smaller width
    maxWidth: "400px", // limit maximum size
    height: "auto",
    display: "block",
    margin: "20px auto",
    borderRadius: "8px"
  }} 
/>

{/* Bullet points */}
<ul>
  <li>The British Museum's government funding (45%) is higher than the Met (15%) but lower than the Smithsonian (65%)</li>
  <li>Museums with paid admission typically have more diversified revenue streams</li>
  <li>UK museums face a double squeeze: declining government support + inability to charge admission without losing tax breaks</li>
  <li>The £109M real-terms cut represents roughly 15% of the British Museum's operating budget</li>
</ul>

        <div style={{ height: "30px" }} />
        <h3>BP OR NOT BP: THE £50 MILLION MORAL CRISIS</h3>
        <div style={{ height: "20px" }} />
        <p>
          After 15 UK establishments severed fossil fuel ties, the British Museum stands alone with its £50 million BP partnership funding the museum's masterplan. 
          Director Cullinan's defense captures the impossible position: "When you have to raise hundreds of millions to prevent critical infrastructure failure, you need a very good reason for turning down £50m." 
          Reject BP money and watch the ceiling collapse or accept it and face climate activists. The museum chose money over morals.
        </p>
        <div style={{ height: "30px" }} />

        <h3>THE THEFT THAT KEEPS ON COSTING</h3>
        <div style={{ height: "20px" }} />
        <p>
          August 2023 brought fresh humiliation: approximately 2,000 items discovered missing, stolen, or damaged, all by a staff member. 
          The recovery operation is costly and ongoing. Only 626 items have been recovered so far of roughly 1,374. The only solution is a digitization project cataloging the entire collection which would take half a decade if not more. 
          Sensible? Absolutely. But it isn't affordable when reserves sit at £10.6 million.
        </p>
        <div style={{ height: "30px" }} />

        <h3>THE VERDICT</h3>
        <div style={{ height: "20px" }} />
        <p>
          The British Museum's challenges reflect Britain's decade of cultural austerity. Brexit cut funding and complicated operations. Political instability created planning chaos. Tax reliefs help but trap institutions in free-admission models. 
          Yet the museum remains one of the world's great cultural institutions, attracting millions annually. With creative funding solutions, potential tourism levies, and renewed public investment on the horizon, there's reason for optimism. 
          The institution has survived 272 years: through wars, recessions, and yes, even lettuce-outlasting prime ministers. 
          The question isn't whether the British Museum can survive, but how it will adapt and thrive in the decades ahead. After all, if you can preserve 5,000-year-old artifacts, surely you can outlast a few budget cycles.
        </p>
      </div>
    </div>
  );
};

export default TTT;
