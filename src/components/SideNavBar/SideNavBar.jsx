import React from "react";
import "./SideNavBar.css";
import Icons from "./../../assets/icons/Icons";
import Button from "./Button";
import Histories from "./../../contants/History.json";


function SideNavBar() {
  return (
    <>
      <div className="sideNavbar col">
        <div className="logo">
          <img src={Icons.vector} alt="" />
          <span> Divum AI </span>
        </div>

        <div className="sidebar-buttons">
        <span className="sub-heading">Demos</span>

       
        <ul className="demo-list">
          <li>
            <img src={Icons.pdf_icon} />
            <p>PDFChatBot</p>
          </li>
          <li>
            <img src={Icons.text_icon} alt="" />
            <p>Text ProductDescriber</p>
          </li>
          <li>
            <img src={Icons.image_icon} alt="" />
            <p>Image ProductDescriber</p>
          </li>
        </ul>
</div>
<hr className="line-2" />
        <div className="history-constainer">
          <span className="side-heading">History</span>
          <ul>
            {Histories.map((history) => (
              <li className="history-record">
                <img src={Icons.history_icon} alt="" />
                <p>{history.title}</p>
              </li>
            ))} 
           
          </ul>
        </div>
<hr className="line-1"/>
        <div className="feature-btn-container">
          <ul>
            <li>
              <img src={Icons.delete_icon} alt="" />
              <p>Clear Conversations</p>
            </li>
            <li>
              <img src={Icons.light_mode_icon} alt="" />
              <p>Light Mode</p>
            </li>
            <li>
              <img src={Icons.account_icon} alt="" />
              <p>My Account</p>
            </li>
            <li>
              <img src={Icons.updates_icon} alt="" />
              <p>Updates & FAQ</p>
            </li>
            <li>
              <img src={Icons.logout_icon} alt="" />
              <p>Log out</p>
            </li>
          </ul>
        </div>
          

      </div>
    </>
  );
}

export default SideNavBar;
