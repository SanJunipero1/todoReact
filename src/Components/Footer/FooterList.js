import React from "react";
import FooterListItem from "./FooterListItem";
import { footerData } from "../../Data/footerData";
import uuid from "react-uuid";

export default function FooterList() {
  const footerItems = footerData.map((item) => {
    return (
      <FooterListItem
        name={item.name}
        linkExists={item.linkExists}
        linkHref={item.linkHref}
        key={uuid()}
      />
    );
  });
  return <ul id="linksFooter">{footerItems}</ul>;
}
