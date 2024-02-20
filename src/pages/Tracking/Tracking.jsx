import React, { useState } from "react";
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import "./Tracking.css";
import ServiceMenu from "../../components/SubMenu/SubMenu";
import ContractImg from "../../assets/images/ticket.png";
import OrderTracking from "../../assets/images/staroutline.png";
import TeansferArrow from "../../assets/images/networkarrow.png";
import TrackbBlue from "../../assets/images/trackblue.png";
import TrackbRed from "../../assets/images/trackred.png";
import TrackbYellow from "../../assets/images/trackyellow.png";
import TrackbGreen from "../../assets/images/trackgreen.png";
import shareIcon from "../../assets/images/share.svg";
import binIcon from "../../assets/images/bin.svg";
import Tower_Icon from "../../assets/images/tower2.png";
import Sim_Icon from "../../assets/images/sim.png";
import Dish_Icon from "../../assets/images/dish.png";
import Workd_Icon from "../../assets/images/world2.png";

import {
  Button,
  Card,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import {
  AddOutlined,
  DeleteOutline,
  HelpOutlineOutlined,
  IosShareOutlined,
} from "@mui/icons-material";
import { pink } from "@mui/material/colors";

const Tracking = () => {
  const [drawerStatus, setDrawerStatus] = useState(true);
  const updateDrawerStatus = () => {
    setDrawerStatus(!drawerStatus);
  };
  const serviceMenuItems = [
    {
      name: "AT&T 5G",
      description:
        "AT&T 5G for MVNOs: Fast. Reliable. Revolutionary Step into the future with AT&T’s leading 5G services, designed to revolutionize connectivity for Mobile Virtual Network Operators (MVNOs). Experience the difference with lightning-fast speeds, expansive nationwide coverage, and unmatched reliability that keeps your customers connected, no matter where they are.",
      image: Tower_Icon,
      key: "5g",
      keybase: "5g",
    },
    {
      name: "EDGE Computing Services",
      description:
        "Experience the future of low-latency, high-efficiency digital solutions that transform your business operations and customer experiences.",
      image: Workd_Icon,
      key: "edge",
      keybase: "edge",
    },

    {
      name: "OEM SIM Procurement",
      description:
        "Harness the power of advanced SIM technology combined with our intuitive billing platform, ensuring a competitive edge in the fast-paced telecom market, while optimizing revenue and operational efficiency Customized for OEMs.",
      image: Dish_Icon,
      key: "ome",
      keybase: "ome",
    },
    {
      name: "Prepaid",
      description:
        "Harness the power of advanced SIM technology combined with our intuitive billing platform, ensuring a competitive edge in the fast-paced telecom market, while optimizing revenue and operational efficiency Customized for OEMs.",
      image: Sim_Icon,
      key: "prepaid",
      keybase: "prepaid",
    },
  ];
  const trackingMenuItems = [
    {
      name: "Order History",
      description:
        "This involves negotiating the terms and conditions of the agreement, drafting the contract document, and ensuring that it accurately reflects the intentions and agreements of all parties involved. ",
      image: OrderTracking,
      key: "none",
      keybase: "order-tracking",
    },
    {
      name: "Order Tracking",
      description:
        "This involves negotiating the terms and conditions of the agreement, drafting the contract document, and ensuring that it accurately reflects the intentions and agreements of all parties involved. ",
      image: TeansferArrow,
      key: "none",
      keybase: "contract_management",
    },

    {
      name: "Request Quote",
      description: `The "Request Quote" feature provides users with the ability to obtain pricing information for products or services offered by a business. By filling out a simple form or providing specific details about their requirements, customers can submit a request to receive a customized quote tailored to their needs.`,
      image: ContractImg,
      key: "none",
      keybase: "transfer_status",
    },
  ];
  const TrackingList = [
    {
      name: "Total no of Tracking",
      count: "348",

      image: TrackbBlue,
    },
    {
      name: "Active Contracts",
      count: "280",

      image: TrackbGreen,
    },
    {
      name: "Awaiting Contracts",
      count: "60",

      image: TrackbYellow,
    },
    {
      name: "Expired Contracts",
      count: "8",
      image: TrackbRed,
    },
  ];
  const addOnItems = [
    {
      name: "Portal as a Service",
      description: `In today's rapidly evolving telecom landscape, staying ahead means offering more than just connectivity. It's about delivering a seamless, intuitive experience to your end subscribers. Recognizing this, AT&T introduces an innovative solution for MVNOs without their own website: our "Portal as a Service." This powerful addon is designed to revolutionize the way you manage your subscribers, offering a turnkey web portal that puts control and convenience at the forefront.`,
      subTitle: `Elevate Your MVNO Operations with AT&T's`,
      key: "Service_Portal",
    },
    {
      name: "Billing, Charging & Rating",
      description: `In today's rapidly evolving telecom landscape, staying ahead means offering more than just connectivity. It's about delivering a seamless, intuitive experience to your end subscribers. Recognizing this, AT&T introduces an innovative solution for MVNOs without their own website: our "Portal as a Service." This powerful addon is designed to revolutionize the way you manage your subscribers, offering a turnkey web portal that puts control and convenience at the forefront.`,
      subTitle: `Transform Your MVNO Business with AT&T's Billing, 
        Charging, & Rating Systems Addons`,
      key: "Billing",
    },
  ];
  const [selectedTracking, setSelectedTracking] = useState(
    "contract_management"
  );
  const [currentTracking, setCurrentTracking] = useState(trackingMenuItems[0]);
  const [checkEdgeComput, setCheckEdgeComput] = useState("Yes");
  const [selectedEdgeComput, setSelectedEdgeComput] =
    useState("Content Delivery");

  const handleRadioChange = (event) => {
    setCheckEdgeComput(event.target.value);
  };
  const updateSelectedTracking = (choosenService) => {
    setCurrentTracking(choosenService);
    setSelectedTracking(choosenService.key);
  };
  return (
    <div>
      <ResponsiveDrawer
        updateDrawerStatus={updateDrawerStatus}
        currentTab="Tracking"
      />
      <div className="d-flex">
        <div className="drawer-content" />
        <div className="drawer-body d-flex">
          <div className="tracking-sidemenu">
            <ServiceMenu
              selectedSubMenu={selectedTracking}
              subMenuItems={trackingMenuItems}
              handleUpdateSelectedSubMenu={updateSelectedTracking}
            />
          </div>
          <div className="tracking-body">
            <div className="tracking-details-container">
              <div className="tracking-head-card">
                <div className="tracking-item-image">
                  <img
                    className={`tracking-${currentTracking.key}`}
                    src={currentTracking.image}
                  />
                  <div className="tracking-menutitle">
                    {currentTracking.name}
                  </div>
                </div>
                <div className="tracking-menucontent">
                  <div className="tracking-menudescription">
                    {currentTracking.description}
                  </div>
                </div>
                {/* {
                  <div className="d-flex-wrap">
                    {TrackingList.map((trackItem) => {
                      return (
                        <div className="tracking-list-container">
                          <div className="tracking-list-card">
                            <div className="d-flex">
                              <img
                                className="tracking-image-list"
                                src={trackItem.image}
                              />
                              <div>
                                <div className="tracking-list-heading">
                                  {trackItem.name}
                                </div>
                                <div className="tracking-list-Count">
                                  {trackItem.count}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                } */}
              </div>
              <div className="tracking-body-card">
                <div className="requestquota-head">Checkout</div>
                <div className="requestquota-checkmenu d-flex justify-between">
                  <div className="d-flex">
                    <Checkbox
                      defaultChecked
                      sx={{
                        color: "rgba(0, 168, 224, 1)",
                        "&.Mui-checked": {
                          color: "rgba(0, 168, 224, 1)",
                        },
                      }}
                    />
                    <div className="pl-1 mY-auto">1/1 Items Selected</div>
                  </div>
                  <div className="d-flex">
                    <div className="mY-auto pr-1">
                      <img src={shareIcon} style={{ height: "25px" }} />
                    </div>
                    <div className="mY-auto">
                      <img src={binIcon} style={{ height: "25px" }} />
                    </div>
                  </div>
                </div>
                {serviceMenuItems.map((selService) => {
                  return (
                    <div className="requestquota-head-card d-flex">
                      <div className="d-flex requestquota-midcontent">
                        <div className="mY-auto requestquota-checkbox">
                          <Checkbox
                            defaultChecked
                            sx={{
                              color: "rgba(0, 168, 224, 1)",
                              "&.Mui-checked": {
                                color: "rgba(0, 168, 224, 1)",
                              },
                            }}
                          />
                        </div>
                        <div className="ml-3">
                          <div className="requestquota-item-image">
                            <img
                              className={`requestquota-${selService.key}`}
                              src={selService.image}
                            />
                            <div className="requestquota-menutitle">
                              {selService.name}
                            </div>
                          </div>
                          <div className="requestquota-menucontent">
                            <div className="requestquota-menudescription">
                              {selService.description}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Divider
                        flexItem
                        orientation="vertical"
                        className="mx-2"
                      />
                      <div className="d-flex requestquota-datas">
                        <div>
                          <div>Select Edge Computing</div>
                          <div>Content Delivery</div>
                        </div>
                        <div>
                          <div>Latency requirements</div>
                          <div>#66876</div>
                        </div>
                      </div>
                      <div className="d-flex requestquota-datas">
                        <div>
                          <div>Estimated Data Volume</div>
                          <div>35 TB</div>
                        </div>
                        <div>
                          <div>Bandwidth</div>
                          <div>#66876</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
