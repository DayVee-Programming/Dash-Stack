import type { FC } from "react";
import MainSidebar from "@/components/sidebars/MainSidebar";

const HomePage: FC = () => {
  return (
    <div className="home-page">
      <div className="container wrapper">
        <MainSidebar />
      </div>
    </div>
  );
};

export default HomePage;
