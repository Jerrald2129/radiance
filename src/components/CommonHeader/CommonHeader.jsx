import React from "react";
import "./CommonHeader.css";
import {
  Breadcrumbs,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { NavigateNext, Search } from "@mui/icons-material";
import { Stack, width } from "@mui/system";
import aboutIcon from "../../assets/images/question.svg";
import notificationIcon from "../../assets/images/bell.svg";
import SettingIcon from "../../assets/images/setting.svg";

const CommonHeader = () => {
  return (
    <div className="common-header-container">
      <div className="common-header-card">
        <div className="common-header-headitem d-flex justify-between">
          <div className="" style={{ width: "40%" }}>
            <TextField
              className="common-header-search"
              style={{ width: "100%" }}
              placeholder="Search by Contract Title or Company name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="d-flex">
            <div className="pr-2">
              <img src={aboutIcon} className="pointer" />
            </div>
            <div className="pr-2">
              <img src={notificationIcon} className="pointer" />
            </div>
            <div>
              <img src={SettingIcon} className="pointer" />
            </div>
          </div>
        </div>
        <div className="py-1">
          <Stack spacing={2}>
            <Breadcrumbs
              separator={<NavigateNext fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Typography
                // underline="hover"
                key="2"
                color="inherit"
                // href="/material-ui/getting-started/installation/"
                // onClick={handleClick}
              >
                Core
              </Typography>
              ,
              <Typography key="3" color="text.primary">
                Breadcrumb
              </Typography>
            </Breadcrumbs>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;
