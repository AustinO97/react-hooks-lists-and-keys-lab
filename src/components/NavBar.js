import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksArr = links.map((link, index) => {
    return <a key={index} href={'#' + link}>{link}</a>
  })

  return <nav>{linksArr}</nav>;
}

export default NavBar;
