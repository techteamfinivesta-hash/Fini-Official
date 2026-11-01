import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PopupMessage() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem("popupShown");
    
    if (!popupShown) {
      setShowPopup(true);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    // Set the flag when closing
    sessionStorage.setItem("popupShown", "true");
  };

  
  const handleBiddingBlitzClick = () => {
    sessionStorage.setItem("popupShown", "true");
    setShowPopup(false);
    navigate("/biddingblitz");
  };


  const handleNewsletterClick = () => {
    setShowPopup(false);
    // Set the flag before navigation
    sessionStorage.setItem("popupShown", "true");
    navigate("/resources/newsletter");
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button
          onClick={handleClose}
          className="popup-close"
        >
          ✕
        </button>

        <h2>Register Now</h2>
        <p>Bidding Blitz is live!</p>
        <br/>
        <button
          onClick={handleBiddingBlitzClick}
          className="button"
        >
          Check out
        </button>
      </div>
    </div>
  );
}