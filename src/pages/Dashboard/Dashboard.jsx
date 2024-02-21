import React, { useState } from "react";
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import WindSLogo from "../../assets/images/windsLogo.svg";
import "./Dashboard.css";
import {
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const Dashboard = () => {
  const [drawerStatus, setDrawerStatus] = useState(true);
  const updateDrawerStatus = () => {
    setDrawerStatus(!drawerStatus);
  };
  const selectedService = [
    {
      name: `AT&T 5G`,
      desc: `AT&T 5G for MVNOs: Fast. Reliable. Revolutionary Step into the future with AT&T’s leading 5G services, designed to revolutionize connectivity for Mobile Virtual Network Operators (MVNOs).`,
      qty: "-",
      tb: 35,
      rate: 342.85,
      linetotal: 12000.0,
    },
    {
      name: `Portal as a Service`,
      desc: `In today's rapidly evolving telecom landscape, staying ahead means offering more than just connectivity. It's about delivering a seamless, intuitive experience to your end subscribers.`,
      qty: "1",
      tb: 0,
      rate: 2000.0,
      linetotal: 2000.0,
    },
  ];
  const TAX_RATE = 7.3;

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  function priceRow(qty, unit) {
    return qty * unit;
  }

  function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }

  function subtotal(items) {
    return items
      .map(({ linetotal }) => linetotal)
      .reduce((sum, i) => sum + i, 0);
  }
  const invoiceSubtotal = subtotal(selectedService);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

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
            <div className="m-2 dashboard-Quotationinfo">
              <div className="pb-05 dashboard-quotation-title">
                Quotation Information
              </div>
              <Table>
                <TableHead className="custom-head">
                  <TableRow>
                    <TableCell>Service name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell>TB</TableCell>
                    <TableCell>Line Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="custom-body">
                  {selectedService.map((service) => {
                    return (
                      <TableRow>
                        <TableCell className="impField">
                          {service.name}
                        </TableCell>
                        <TableCell
                          size="medium"
                          className="Quotation-table-Description"
                        >
                          <div style={{ maxWidth: "500px" }}>
                            {service.desc}
                          </div>
                        </TableCell>
                        <TableCell className="impField">
                          {service.qty}
                        </TableCell>
                        <TableCell className="impField">
                          <b>$</b> {service.tb}
                        </TableCell>
                        <TableCell className="impField">
                          <b>$</b> {service.linetotal}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  <TableRow className="bg-black">
                    <TableCell rowSpan={4} />
                    <TableCell colSpan={1} />
                    <TableCell
                      className="impField color-white custom-cell-border"
                      colSpan={2}
                    >
                      Subtotal
                    </TableCell>
                    <TableCell className="impField color-white custom-cell-border">
                      <b>$</b>
                      {invoiceSubtotal}
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-black">
                    <TableCell colSpan={1} />
                    <TableCell
                      colSpan={2}
                      className="impField color-white custom-cell-border"
                    >
                      Tax(7.3%)
                    </TableCell>
                    <TableCell className="impField color-white custom-cell-border">
                      <b>$</b> {invoiceTaxes}
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-black">
                    <TableCell colSpan={1} />
                    <TableCell className="impField color-white" colSpan={2}>
                      Total
                    </TableCell>
                    <TableCell className="impField color-white custom-cell-border">
                      <b>$</b>
                      {invoiceTotal}
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-black">
                    <TableCell colSpan={1} />
                    <TableCell
                      className="impField color-white custom-cell-border-2"
                      colSpan={2}
                    >
                      Amount due
                    </TableCell>
                    <TableCell className="impField color-white custom-cell-border-2 ">
                      <b>US$ {ccyFormat(invoiceTotal)}</b>
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-black">
                    <TableCell
                      colSpan={1}
                      className="rowRemovePadding impField color-white"
                    >
                      <div>
                        <b>Thanks for the business.</b>
                      </div>
                      <div style={{ fontSize: "14px" }}>Admin@AT&T.com</div>
                    </TableCell>
                    <TableCell
                      colSpan={2}
                      className="rowRemovePadding impField color-white"
                    >
                      <div className="text-center">
                        <b>Terms & Conditions</b>
                      </div>
                      <div style={{ fontSize: "12px" }} className="text-center">
                        Please pay within 15 days of receiving this invoice.
                      </div>
                    </TableCell>
                    <TableCell className="rowRemovePadding" colSpan={2} />
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="d-flex justify-end m-2">
              <div className="text-left mx-2">
                <Button
                  variant="outlined"
                  className="custom-button color-att border-att"
                  style={{ minWidth: "120px" }}
                >
                  Reject
                </Button>
              </div>
              <div className="text-left">
                <Button
                  variant="contained"
                  className="bg-att custom-button"
                  // onClick={() => setRequestSended(true)}
                  style={{ minWidth: "120px" }}
                >
                  Accept
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
