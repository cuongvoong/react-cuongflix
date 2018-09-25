import React from "react";
import Link from "./Link";

const MainViewLink = props => {
  return (
    <Link href={props.href} className={props.className}>
      {props.children}
    </Link>
  );
};

export default MainViewLink;
