import MainHeader from "@/components/headers/MainHeader";
import ContentHeading from "@/components/headings/ContentHeading";
import { useContext } from "react";
import DashboardCard from "@/components/cards/DashboardCard";
import SalesChart from "@/components/charts/SalesChart";
import DealsCard from "@/components/cards/DealsCard";
import { AppContext } from "@/contexts/AppContext";

const HomeContent = () => {
  const { dashboardCards } = useContext(AppContext);

  return (
    <div className="home-content">
      <MainHeader />
      <div className="content">
        <ContentHeading label="Dashboard" />
        <div className="cards">
          {dashboardCards.map((dashboardCard) => (
            <DashboardCard dashboardCard={dashboardCard} key={dashboardCard.title} />
          ))}
        </div>
        <SalesChart />
        <DealsCard />
      </div>
    </div>
  );
};

export default HomeContent;
