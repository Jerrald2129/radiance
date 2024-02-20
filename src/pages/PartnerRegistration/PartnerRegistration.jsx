import React, { useState } from "react";
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import "./PartnerRegistration.css";
import {
  Button,
  Dialog,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import {
  AddOutlined,
  HelpOutlineOutlined,
  KeyboardArrowLeft,
} from "@mui/icons-material";
import userIcon from "../../assets/images/user.svg";
import contectIcon from "../../assets/images/Subtract.svg";
import businessIcon from "../../assets/images/SubtractB.svg";
import CheckIcon from "../../assets/images/check.svg";
import { useNavigate } from "react-router";

const PartnerRegistration = () => {
  const [drawerStatus, setDrawerStatus] = useState(true);
  const updateDrawerStatus = () => {
    setDrawerStatus(!drawerStatus);
  };

  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [onBordingCompleted, setOnBordingCompleted] = useState(false);

  const handleNextStep = () => {
    if (currentStep === 3) {
      setOnBordingCompleted(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <div>
      {
        <Dialog open={onBordingCompleted}>
          <div className="p-4 text-center" style={{ width: "400px" }}>
            <div>
              <img style={{ height: "60px" }} src={CheckIcon} />
            </div>
            <div className="mt-2" style={{ fontSize: "20px" }}>
              Successful <b>Onboarding</b>
            </div>
            <div>
              This helps them understand their role within the broader context
              of the company.
            </div>
            <div>
              <Button
                variant="contained"
                className="bg-att custom-button mt-3"
                style={{ width: "70%" }}
                onClick={() => {
                  setOnBordingCompleted(false);
                  navigate("/service");
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </Dialog>
      }
      <ResponsiveDrawer
        updateDrawerStatus={updateDrawerStatus}
        currentTab="none"
      />
      <div className="d-flex">
        <div className="drawer-content" />
        <div className="drawer-body">
          <div className="registration-container">
            <div className="registration-tabs">
              <div
                className={`registration-tab ${
                  currentStep >= 1 ? "registration-tab-completed" : ""
                }`}
              >
                <div
                  className={`registration-tab-numberCircle ${
                    currentStep === 1
                      ? "registration-tab-numberCircleprogress"
                      : currentStep > 1
                      ? "registration-tab-numberCirclecompleted"
                      : ""
                  }`}
                >
                  1
                </div>
                <div>Partner Information</div>
              </div>
              <div
                className={`registration-tab ${
                  currentStep >= 2 ? "registration-tab-completed" : ""
                }`}
              >
                <div
                  className={`registration-tab-numberCircle ${
                    currentStep === 2
                      ? "registration-tab-numberCircleprogress"
                      : currentStep > 2
                      ? "registration-tab-numberCirclecompleted"
                      : ""
                  }`}
                >
                  2
                </div>
                <div>Contact Information</div>
              </div>
              <div
                className={`registration-tab ${
                  currentStep >= 3 ? "registration-tab-completed" : ""
                }`}
              >
                <div
                  className={`registration-tab-numberCircle ${
                    currentStep === 3
                      ? "registration-tab-numberCircleprogress"
                      : currentStep > 3
                      ? "registration-tab-numberCirclecompleted"
                      : ""
                  }`}
                >
                  3
                </div>
                <div>Business Information</div>
              </div>
            </div>
            <div className="registration-tab-content d-flex">
              <div className="registration-tab-subcontent">
                <div className="registration-tabsubcontent-container">
                  <div />
                  <div>
                    <div className="registration-step">
                      Step {currentStep} of 3
                    </div>
                    <div className="registration-step-desc">
                      {" "}
                      {currentStep === 1
                        ? "Please Enter Your Personal Details"
                        : currentStep === 2
                        ? "Please Enter Your Contact Information"
                        : "Please Tell a bit about your business"}
                    </div>
                  </div>
                  <div className="d-flex registration-tabsubcontent-bottom">
                    <Tooltip title={"Current Use of Edge Computing"}>
                      <HelpOutlineOutlined className="pointer registration-tab-info" />
                    </Tooltip>
                    {currentStep === 3 ? (
                      <div className="registration-tab-info-content">
                        Identify your target market or customer demographics.
                        Who are your ideal customers, and what are their
                        characteristics? Understanding your audience
                      </div>
                    ) : (
                      <div className="registration-tab-info-content">
                        It signifies that the entity ororganization you are
                        interacting with requires specific information about you
                        to proceed with a particular action or service
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="registration-tab-maincontent">
                <div className="registration-tab-maincontiner">
                  <div className="registration-dataset">
                    {currentStep === 1 ? (
                      <>
                        <div className="registration-dataset-title">
                          <div style={{ height: "40px", paddingRight: "10px" }}>
                            <img src={userIcon} />
                          </div>
                          <div className="">Partner Information</div>
                        </div>
                        <div className="text-left">
                          These details are crucial for communication purposes
                          and for providing updates or notifications related to
                          the service.
                        </div>
                        <div className="d-flex justify-between my-1">
                          <div className="text-left registration-partner-content">
                            <div className="my-1">First Name</div>
                            <TextField
                              className="registration-partner-input"
                              placeholder="Enter First Name"
                            />
                          </div>
                          <div className="text-left registration-partner-content">
                            <div className="my-1">Last Name</div>
                            <TextField
                              className="registration-partner-input-right"
                              placeholder="Enter Last Name"
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-between my-1">
                          <div className="text-left registration-partner-content">
                            <div className="my-1">Address Line 1</div>
                            <TextField
                              className="registration-partner-input"
                              placeholder="Enter Address Line 1"
                            />
                          </div>
                          <div className="text-left registration-partner-content">
                            <div className="my-1">Address Line 2</div>
                            <TextField
                              className="registration-partner-input-right"
                              placeholder="Enter Address Line 2"
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-between my-1">
                          <div className="text-left registration-partner-content-3">
                            <div className="my-1">City</div>
                            <TextField
                              className="registration-partner-input"
                              placeholder="Enter City"
                            />
                          </div>
                          <div className="text-left registration-partner-content-3">
                            <div className="my-1">State</div>
                            <TextField
                              className="registration-partner-input"
                              placeholder="Enter State"
                            />
                          </div>
                          <div className="text-left registration-partner-content-3">
                            <div className="my-1">Zip</div>
                            <TextField
                              className="registration-partner-input-right"
                              placeholder="Enter Zip"
                            />
                          </div>
                        </div>
                      </>
                    ) : currentStep === 2 ? (
                      <>
                        <div className="registration-dataset-title">
                          <div style={{ height: "40px", paddingRight: "10px" }}>
                            <img src={contectIcon} />
                          </div>
                          <div className="">Contact Information</div>
                        </div>
                        <div className="text-left">
                          These details are crucial for communication purposes
                          and for providing updates or notifications related to
                          the service.
                        </div>
                        <div className="d-flex justify-between my-1">
                          <div className="text-left registration-partner-content">
                            <div className="my-1">Phone Number</div>
                            <TextField
                              className="registration-partner-input"
                              placeholder="Enter Phone Number"
                            />
                          </div>
                          <div className="text-left registration-partner-content">
                            <div className="my-1">Telephone</div>
                            <TextField
                              className="registration-partner-input-right"
                              placeholder="Enter Telephone Number"
                            />
                          </div>
                        </div>
                        <div className="d-flex my-1">
                          <div className="text-left registration-partner-BEmailID">
                            <div className="my-1">Business Email ID</div>
                            <TextField
                              className="registration-partner-input-right"
                              placeholder="Enter Business Email ID"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="registration-dataset-title">
                          <div style={{ height: "40px", paddingRight: "10px" }}>
                            <img src={businessIcon} />
                          </div>
                          <div className="">Business Information</div>
                        </div>
                        <div className="text-left">
                          These details are crucial for communication purposes
                          and for providing updates or notifications related to
                          the service.
                        </div>
                        <div className="d-flex justify-between my-1">
                          <div className="text-left registration-partner-content">
                            <div className="my-1">SSN Name</div>
                            <TextField
                              className="registration-partner-input"
                              placeholder="Enter First Name"
                            />
                          </div>
                          <div className="text-left registration-partner-content">
                            <div className="my-1">DOB</div>
                            <TextField
                              className="registration-partner-input-right"
                              placeholder="Enter DOB"
                              type="date"
                            />
                          </div>
                        </div>
                        <div className="d-flex my-1">
                          <div className="text-left registration-partner-BEmailID">
                            <div className="my-1">Business Name</div>
                            <TextField
                              className="registration-partner-input-right"
                              placeholder="Enter Business Name"
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-between my-1">
                          <div className="text-left registration-partner-content">
                            <div className="my-1">Business Reg No</div>
                            <TextField
                              className="registration-partner-input"
                              placeholder="Enter Business Reg No"
                            />
                          </div>
                          <div className="text-left registration-partner-content">
                            <div className="my-1">TAX ID</div>
                            <TextField
                              className="registration-partner-input-right"
                              placeholder="Enter TAX ID"
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-between my-1">
                          <div className="text-left registration-partner-content">
                            <div className="my-1">Business Type</div>
                            <FormControl className="registration-partner-input">
                              <Select value={"Select Business Type"}>
                                <MenuItem value={"Select Business Type"}>
                                  Select Business Type
                                </MenuItem>
                                <MenuItem value={"Content Delivery"}>
                                  Business Type
                                </MenuItem>
                                <MenuItem value={"Content Delivery"}>
                                  Business Type
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                          <div className="text-left registration-partner-content">
                            <div className="my-1">Billing Type</div>

                            <FormControl className="registration-partner-input-right">
                              <Select value={"Select Billing Type"}>
                                <MenuItem value={"Select Billing Type"}>
                                  Select Billing Type
                                </MenuItem>
                                <MenuItem value={"Content Delivery"}>
                                  Billing Type
                                </MenuItem>
                                <MenuItem value={"Content Delivery"}>
                                  Billing Type
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                        </div>
                      </>
                    )}
                    <div className="d-flex justify-end mt-4">
                      <div className="text-left mx-2">
                        <Button
                          variant="text"
                          className={`custom-button registration-partner-button ${
                            currentStep !== 1 ? "color-att" : ``
                          }`}
                          disabled={currentStep === 1}
                          onClick={() => setCurrentStep(currentStep - 1)}
                          startIcon={<KeyboardArrowLeft />}
                        >
                          Back
                        </Button>
                      </div>
                      <div className="text-left">
                        <Button
                          variant="contained"
                          className="bg-att custom-button registration-partner-button"
                          onClick={() => handleNextStep()}
                        >
                          {currentStep === 3 ? "Submit" : "Next"}
                        </Button>
                      </div>
                    </div>
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

export default PartnerRegistration;
