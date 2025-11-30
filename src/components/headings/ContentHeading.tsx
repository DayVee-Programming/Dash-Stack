import type { FC } from "react";

export type ContentHeadingProps = {
  label: string;
};

const ContentHeading: FC<ContentHeadingProps> = ({ label }) => {
  return <h1 className="content-heading">{label}</h1>;
};

export default ContentHeading;
