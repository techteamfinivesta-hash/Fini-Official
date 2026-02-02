// import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import Layout from "./NavbarFooter/Layout";
import PopupMessage from "../src/Components/PopupMessage.js";

// import Loader from './Loader/Loader';

import Navbar from "./NavbarFooter/Navbar";
import Footer from "./NavbarFooter/Footer";

import Home from "./Home/Home";
import Events from "./Events/Events";
import Sponsor from "./Sponsors/Sponsor";
import Resources from "./Resources/Resources";
import MoneyMasterclass from "./Resources/MoneyMasterclass/MoneyMasterclass";
import Newsletter from "./Resources/Newsletter/newsletter";

import Game from "./Games/Game.js";
/*
import BudgetingGameOne from "./Games/BudgetingGame/one.js";
import BudgetingGameTwo from "./Games/BudgetingGame/two.js";
import BudgetingGameThree from "./Games/BudgetingGame/three.js";
import BudgetingGameFour from "./Games/BudgetingGame/four.js";
import BudgetingGameFive from "./Games/BudgetingGame/five.js";
import BudgetingGameSix from "./Games/BudgetingGame/six.js";
import BudgetingGameSeven from "./Games/BudgetingGame/seven.js";
import BudgetingGameEight from "./Games/BudgetingGame/eight.js";
import BudgetingGameNine from "./Games/BudgetingGame/nine.js";
import FinanceBingo from "./Games/FinanceBingo/FinanceBingo/FinanceBingo.js";
import HigherLower from "./Games/HigherLower/src/App1.js";
import Scramble from "./Games/Scramble/Scramble.js";
*/
import Wordle from "./Games/Wordle/WordleTitle";

// blogs
import Blog from "./Resources/Blogs/Blog";
import TradingApps from "./Resources/TradingApps/TradingApps";
import AIinfinance from "./Resources/Blogs/Blogpages/AI-in-finance";
import Financeandtechnology from "./Resources/Blogs/Blogpages/finance-and-technology";
import Powerofcompounding from "./Resources/Blogs/Blogpages/power-of-compounding";
import Liquidation from "./Resources/Blogs/Blogpages/liquidation";
import Financialliteracy from "./Resources/Blogs/Blogpages/financial-literacy";
import Bidding from "./Resources/Blogs/Blogpages/bidding";
import DigitalGold from "./Resources/Blogs/Blogpages/digitalgold";
import GoldHistory from "./Resources/Blogs/Blogpages/goldhistory";
import DhanterasDynamics from "./Resources/Blogs/Blogpages/dhanteras-dynamics";
import GoldOnDhanteras from "./Resources/Blogs/Blogpages/buying-gold-on-dhanteras";
import BNPLBlog from "./Resources/Blogs/Blogpages/BNPLBlog.js";
import Cryptocurrency from "./Resources/Blogs/Blogpages/Cryptocurrency.js";
import USelection from "./Resources/Blogs/Blogpages/US-election2024";
import InvestmentGuide from "./Resources/Blogs/Blogpages/investment_guide";
import StockMarket from "./Resources/Blogs/Blogpages/stockmarket.js";
import IndiaUPISystem from "./Resources/Blogs/Blogpages/IndiasUPI-system.js";
import DigitalPayments from "./Resources/Blogs/Blogpages/digital.js";
import IndiaEconomicGrowth from "./Resources/Blogs/Blogpages/IndiaEconomicGrowth.js";
import EconomicGrowth from "./Resources/Blogs/Blogpages/economicgrowth.js";
import TTT from "./Resources/Blogs/Blogpages/ttt";


import Louvre_heist from "./Resources/Blogs/Blogpages/Louvre-heist.js";
import  UStariffs from "./Resources/Blogs/Blogpages/us-tariffs.js";
import TTT from "./Resources/Blogs/Blogpages/TTT";

import BookReview from "./Resources/BookReviews/BookReview";
import Youtube from "./Resources/Youtube/Youtube";
import Stocks from "./Resources/StockMarket/Stocks";
import Team from "./Team/Team";

// Book Reviews
import Review1 from "./Resources/BookReviews/bookpages/Review1";
import Review2 from "./Resources/BookReviews/bookpages/Review2";
import Review3 from "./Resources/BookReviews/bookpages/Review3";
import Review4 from "./Resources/BookReviews/bookpages/Review4";
import Review5 from "./Resources/BookReviews/bookpages/Review5";
import Review6 from "./Resources/BookReviews/bookpages/Review6";
import Review7 from "./Resources/BookReviews/bookpages/Review7";
import Review8 from "./Resources/BookReviews/bookpages/Review8";
import Review9 from "./Resources/BookReviews/bookpages/Review9";
import Review10 from "./Resources/BookReviews/bookpages/Review10";
import Review11 from "./Resources/BookReviews/bookpages/Review11";
import Review12 from "./Resources/BookReviews/bookpages/Review12";
import Review13 from "./Resources/BookReviews/bookpages/Review13";
import Review14 from "./Resources/BookReviews/bookpages/Review14";
import Review15 from "./Resources/BookReviews/bookpages/Review15.js";
import Review16 from "./Resources/BookReviews/bookpages/Review16.js";
import Review17 from "./Resources/BookReviews/bookpages/Review17.js";
import Review18 from "./Resources/BookReviews/bookpages/Review18.js";
import Review20 from "./Resources/BookReviews/bookpages/Review20.js";
import Review19 from "./Resources/BookReviews/bookpages/Review19.js";
import Review21 from "./Resources/BookReviews/bookpages/Review21.js";
import Review22 from "./Resources/BookReviews/bookpages/Review22.js";

// Podcasts
import Podcast from "./Resources/Podcasts/Podcast";
import WeStudyBillionaires from "./Resources/Podcasts/podcastlist/we_study_billionaires";
import FinshotsReview from "./Resources/Podcasts/podcastlist/finshot_review";
import FinanceReview from "./Resources/Podcasts/podcastlist/school_of_finance";
import Panchratna from "./Resources/Podcasts/podcastlist/panchratna";
import Indicator from "./Resources/Podcasts/podcastlist/indicator";
import PersonalFinance from "./Resources/Podcasts/podcastlist/PersonalFinance";
import MoneyExplained from "./Resources/Podcasts/podcastlist/MoneyExplained";
import MoneyControl from "./Resources/Podcasts/podcastlist/moneycontrol.js";

// import FinWeek25 from './Events/FinWeek25/FinWeek25.js';
import Hackathon from './Hackathon/Hackathon';

const AppContent = () => {
  const location = useLocation();
  const isGameFullScreen =
    location.pathname.startsWith("/games/") && location.pathname !== "/games/";

  /*
  const location = useLocation();
  useEffect(() => {}, [location]);

  const [loaded, setLoaded] = useState(false);

  // Trigger animation once the loader disappears
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true); // Trigger animation after loader disappears
    }); // Small delay to ensure smooth animation
  }, []);
  */

  return (
    /* <div className={`App app-content ${loaded ? 'loaded' : ''}`}> */

    <div className="App">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {!isGameFullScreen && <Navbar />}
      <Layout>
      <PopupMessage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sponsors" element={<Sponsor />} />
          <Route path="/hackathon" element={<Hackathon/>}/>
          <Route path="/resources" element={<Resources />} />

          {/* Under resources */}
          <Route
            path="/resources/newsletter"
            element={<Newsletter />}
          />
          <Route
            path="/resources/moneymasterclass"
            element={<MoneyMasterclass />}
          />
          <Route path="/resources/blogs" element={<Blog />} />

          {/* Blog pages */}
          
          <Route
            path="/resources/blogs/01-AI-in-finance"
            element={<AIinfinance />}
          />
          <Route
            path="/resources/blogs/02-finance-and-technology"
            element={<Financeandtechnology />}
          />
          <Route
            path="/resources/blogs/03-power-of-compounding"
            element={<Powerofcompounding />}
          />
          <Route
            path="/resources/blogs/04-liquidation"
            element={<Liquidation />}
          />
          <Route
            path="/resources/blogs/05-financial-literacy"
            element={<Financialliteracy />}
          />
          <Route path="/resources/blogs/06-bidding" element={<Bidding />} />
          <Route
            path="/resources/blogs/07-digital-gold"
            element={<DigitalGold />}
          />
          <Route
            path="/resources/blogs/08-gold-history"
            element={<GoldHistory />}
          />
          <Route
            path="/resources/blogs/09-dhanteras-dynamics"
            element={<DhanterasDynamics />}
          />
          <Route
            path="/resources/blogs/10-gold-on-dhanteras"
            element={<GoldOnDhanteras />}
          />
          <Route
            path="/resources/blogs/11-US-election-2024"
            element={<USelection />}
          />
          <Route
            path="/resources/blogs/12-investing-and-annual-returns"
            element={<InvestmentGuide />}
          />
          <Route
            path="/resources/blogs/13-buy-now-pay-later"
            element={<BNPLBlog />}
          />
          <Route
            path="/resources/blogs/14-Cryptocurrency"
            element={<Cryptocurrency />}
          />
          <Route
            path="/resources/blogs/15-stockmarket"
            element={<StockMarket />}
          />
          <Route
            path="/resources/blogs/16-digitalcashclash"
            element={<DigitalPayments />}
          />
          <Route
            path="/resources/blogs/17-IndiasUPISys"
            element={<IndiaUPISystem />}
          />
          <Route
            path="/resources/blogs/18-EconomicGrowth"
            element={<EconomicGrowth />}
          />
          <Route
            path="/resources/blogs/19-IndiasEconomicGrowth"
            element={<IndiaEconomicGrowth />}
          />
          <Route

          path="/resources/blogs/20-ttt"
          element={<TTT />}
          />


            path="/resources/blogs/20-Louvre-heist"
            element={<Louvre_heist />}
          />
          <Route
            path="/resources/blogs/20-UStariffs"
            element={<UStariffs />}
          />
          <Route
          path="/resources/blogs/20-TTT"
          element={<TTT />}
          />



          {/*Book pages*/}
          <Route path="/resources/bookreviews" element={<BookReview />} />
          <Route path="/resources/bookreviews/doglapan" element={<Review1 />} />
          <Route
            path="/resources/bookreviews/intelligentinvestor"
            element={<Review2 />}
          />
          <Route
            path="/resources/bookreviews/richdadpoordad"
            element={<Review3 />}
          />
          <Route
            path="/resources/bookreviews/psychologyofmoney"
            element={<Review4 />}
          />
          <Route
            path="/resources/bookreviews/richestmaninbabylon"
            element={<Review5 />}
          />
          <Route
            path="/resources/bookreviews/millnextdoor"
            element={<Review6 />}
          />
          <Route
            path="/resources/bookreviews/moneyorlife"
            element={<Review7 />}
          />
          <Route
            path="/resources/bookreviews/zerotoone"
            element={<Review8 />}
          />
          <Route
            path="/resources/bookreviews/thebigshort"
            element={<Review9 />}
          />
          <Route
            path="/resources/bookreviews/fromtheratrace"
            element={<Review11 />}
          />
          <Route
            path="/resources/bookreviews/epicmoney"
            element={<Review10 />}
          />
          <Route
            path="/resources/bookreviews/IWillTeachYouToBeRich"
            element={<Review12 />}
          />
          <Route
            path="/resources/bookreviews/TheBarefootInvestor"
            element={<Review13 />}
          />
          <Route
            path="/resources/bookreviews/thesimplestpathtowealth"
            element={<Review14 />}
          />
          <Route
            path="/resources/bookreviews/theleanstartup"
            element={<Review15 />}
          />
          <Route
            path="/resources/bookreviews/moneyworks"
            element={<Review16 />}
          />
          <Route
            path="/resources/bookreviews/themillnextdoor"
            element={<Review17 />}
          />
          <Route
            path="/resources/bookreviews/intellinvestor"
            element={<Review18 />}
          />
          <Route
            path="/resources/bookreviews/alchemyfinance"
            element={<Review20 />}
          />
          <Route
            path="/resources/bookreviews/letstalkmoney"
            element={<Review19 />}
          />
          <Route
            path="/resources/bookreviews/thePersonalMBA"
            element={<Review21 />}
          />
          <Route
            path="/resources/bookreviews/thinkandgrowrich"
            element={<Review22 />}
          />
          <Route path="/resources/youtube" element={<Youtube />} />
          <Route path="/resources/podcasts" element={<Podcast />} />
          <Route
            path="/resources/podcasts/we_study_billionaires"
            element={<WeStudyBillionaires />}
          />
          <Route
            path="/resources/podcasts/finshots"
            element={<FinshotsReview />}
          />
          <Route
            path="/resources/podcasts/school-of-finance"
            element={<FinanceReview />}
          />
          <Route path="/resources/stocks" element={<Stocks />} />
          <Route path="/resources/videos" element={<Youtube />} />
          <Route path="/resources/trading" element={<TradingApps />} />
          <Route
            path="/resources/podcasts/MoneyExplained"
            element={<MoneyExplained />}
          />
          <Route path="/resources/podcasts/indicator" element={<Indicator />} />
          <Route
            path="/resources/podcasts/PersonalFinance"
            element={<PersonalFinance />}
          />
          <Route
            path="/resources/podcasts/MoneyExplained"
            element={<MoneyExplained />}
          />
          <Route
            path="/resources/podcasts/Panchratna"
            element={<Panchratna />}
          />
          <Route
            path="/resources/podcasts/moneycontrol"
            element={<MoneyControl />}
          />

          <Route path="/team" element={<Team />} />
          <Route path="/games" element={<Game />} />
          <Route path="/games/wordle" element={<Wordle />} />

          {/* <Route path="/contact" element={<Contact/>}/> */}
        </Routes>
        {!isGameFullScreen && <Footer />}
      </Layout>
    </div>
  );
};

/*
function App() {
  const [showLoader, setShowLoader] = useState(() => {
    return sessionStorage.getItem("loaderShown") ? false : true;
  });
  

  useEffect(() => {
    if (showLoader) {
      const timer = setTimeout(() => {
        setShowLoader(false);
        sessionStorage.setItem("loaderShown", "true"); // Mark loader as shown for this session
      }, 3000); // Loader duration (3 seconds)
  
      return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }
  }, [showLoader]);
  

  return (
    <Router>
      {showLoader && <Loader />}
      {!showLoader && <AppContent />}

    </Router>
  );
}
*/

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
