import type { Page } from "@/context/appContext";
import type { FC } from "react";

export type MainHeadingProps = {
  page: Page;
};

const MainHeading: FC<MainHeadingProps> = ({ page }) => {
  return (
    <div className={`main-heading ${page.name === "" ? "no-text" : ""}`}>
      <span className="main-heading-span">{page.name}</span>
    </div>
  );
};

export default MainHeading;
