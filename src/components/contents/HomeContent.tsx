import MainHeader from "@/components/headers/MainHeader";
import ContentHeading from "@/components/headings/ContentHeading";
import { AppContext } from "@/context/appContext";
import { useContext } from "react";
import DashboardCard from "@/components/cards/DashboardCard";

const HomeContent = () => {
  const { dashboardCards } = useContext(AppContext);
  
  return (
    <div className="home-content">
      <MainHeader />
      <div className="content">
        <ContentHeading label="Dashboard" />
        <div className="cards">
          {dashboardCards.map(dashboardCard => (
            <DashboardCard dashboardCard={dashboardCard} key={dashboardCard.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
