import React, { useState } from "react";
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import WindSLogo from "../../assets/images/windsLogo.svg";
import "./Dashboard.css";
import { Divider } from "@mui/material";

const Dashboard = () => {
  const [drawerStatus, setDrawerStatus] = useState(true);
  const updateDrawerStatus = () => {
    setDrawerStatus(!drawerStatus);
  };
  return (
    <div>
      <ResponsiveDrawer
        updateDrawerStatus={updateDrawerStatus}
        currentTab="Dashboard"
      />
      <div className="d-flex">
        <div className="drawer-content" />
        <div className="drawer-body">
          <CommonHeader />
          <div>
            <div className="d-flex py-3 dashboard-container justify-between">
              <div className="d-flex dashboard-quotation-head">
                <div>
                  <img src={WindSLogo} />
                </div>
                <div className="pl-1">
                  <div className="pb-05 dashboard-quotation-title">
                    Windstream Communication
                  </div>
                  <div className="pb-05">Little Rock, Arkansas</div>
                  <div className="color-att">email@company.com</div>
                </div>
              </div>
              <div className="d-flex">
                <Divider orientation="vertical" flexItem />
                <div className="pl-3">
                  <div className="dashboard-quotation-subtitle pb-05">
                    Start Date
                  </div>
                  <div className="dashboard-quotation-subtitle-d pb-05">
                    01 March, 2024
                  </div>
                  <div className="dashboard-quotation-subtitle pb-05">
                    End Date
                  </div>
                  <div className="dashboard-quotation-subtitle-d pb-05">
                    15 Aug, 2025
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <Divider orientation="vertical" flexItem />
                <div className="pl-3">
                  <div className="dashboard-quotation-subtitle pb-05">
                    Billed to
                  </div>
                  <div className="dashboard-quotation-subtitle-d pb-05">
                    Windstream Communication
                  </div>
                  <div className="dashboard-quotation-description pb-05">
                    City, Country - 00000
                  </div>
                  <div className="dashboard-quotation-description pb-05">
                    +0 (000) 123-4567
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <Divider orientation="vertical" flexItem />
                <div className="pl-3">
                  <div className="dashboard-quotation-subtitle pb-05">From</div>
                  <div className="dashboard-quotation-subtitle-d pb-05">
                    AT&T
                  </div>
                  <div className="dashboard-quotation-description pb-05">
                    City, State, IN - 000 000
                  </div>
                  <div className="dashboard-quotation-description pb-05">
                    TAX ID 00XXXXX1234X0XX
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
