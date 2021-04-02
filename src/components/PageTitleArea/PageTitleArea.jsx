import React from "react";
import { MainPageTitle } from "./PageTitleElements";

function PageTitleArea({ className, children }) {
  return <MainPageTitle className={className}>{children}</MainPageTitle>;
}

export default PageTitleArea;
