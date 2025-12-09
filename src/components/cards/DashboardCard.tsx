import Graph3Image from "@/components/images/Graph3Image";
import type { FC } from "react";
import type { DashboardCard as DashboardCardType } from "@/types/contexts.types";
import Graph4Image from "@/components/images/Graph4Image";

export type DashboardCardProps = {
  dashboardCard: DashboardCardType;
};

const DashboardCard: FC<DashboardCardProps> = ({ dashboardCard }) => {
  return (
    <div className="dashboard-card">
      <div className="top">
        <div className="top-desc">
          <span className="top-desc-span">{dashboardCard.title}</span>
          <span className="number">{dashboardCard.number}</span>
        </div>
        <figure className="top-figure">{dashboardCard.image}</figure>
      </div>
      <div className={`bottom ${dashboardCard.trend}`}>
        <figure className="bottom-figure">
          {dashboardCard.trend === "up" ? <Graph3Image /> : <Graph4Image />}
        </figure>
        <p className="bottom-text">
          <span className="bottom-text-span">{dashboardCard.percentage} </span>
          {dashboardCard.description}
        </p>
      </div>
    </div>
  );
};

export default DashboardCard;
