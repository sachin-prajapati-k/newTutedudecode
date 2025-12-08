import Header from "./Header";
import Personalinfo from "./Personalinfo";
import Bio from "./Bio";
import Avatar from "./Avatar";
import "./PortfolioCart.css";

function PortfolioCard() {
  return (
    <>
      <div className="portfolio-card">
        <Header />
        <div>
          <Avatar />
        </div>
        <div>
          <Personalinfo />
        </div>
        <div>
          <Bio />
        </div>
      </div>
    </>
  );
}

export default PortfolioCard;
