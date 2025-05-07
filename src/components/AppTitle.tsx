import React from "react";

interface AppTitleProps {
  className?: string;
}

const AppTitle: React.FC<AppTitleProps> = ({ className }) => (
  <span className={className ?? "header-title"}>Tekville Task Board</span>
);

export default AppTitle;
