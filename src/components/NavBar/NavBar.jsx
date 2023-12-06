import React, { useState, useEffect } from "react";
import { MdNotifications } from "react-icons/md";
import { FcBusinesswoman } from "react-icons/fc";
import { CgMenuRight } from "react-icons/cg";
import "./NavBar.css";
import { GrCloudlinux } from "react-icons/gr";
import { Product, Solution } from "./index";
import { Button } from "../componentsindex";
const NavBar = () => {
  const [product, setProduct] = useState(false);
  const [solution, setSolution] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText === "Products") {
      setProduct(true);
      setSolution(false);
    } else if (btnText === "Solutions") {
      setProduct(false);
      setSolution(true);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_container_left">
          <div className="navbar_container_left_box_input_box">
            <GrCloudlinux className="cloud" />
          </div>
        </div>

        <div className="navbar_container_right">
          <div className="navbar_container_right_Product">
            <p onClick={(e) => openMenu(e)}>Products</p>
            {product && (
              <div className="navbar_container_right_Product_box">
                <Product />
              </div>
            )}
          </div>

          <div className="navbar_container_right_Solution">
            <p onClick={(e) => openMenu(e)}>Solutions</p>
            {solution && (
              <div className="navbar_container_right_Solution_box">
                <Solution />
              </div>
            )}
          </div>

          <div className="navbar_container_right_notify">
            <MdNotifications className="notify" onClick={() => {}} />
          </div>

          <div className="navbar_container_right_button">
            <Button btnName="Sign in" handleClick={() => {}} />
          </div>

          <div className="navbar_container_right_profile_box">
            <div className="navbar_container_right_profile">
              <FcBusinesswoman className="woman" />
            </div>
          </div>
          <div className="navbar_container_right_menuBtn">
            <CgMenuRight className="menuIcon" onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
