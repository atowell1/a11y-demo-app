import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Aria from "./Aria"
import Chart from "./Chart";
import Images from "./Images";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = TabPanel.props;
  console.log("data", data);

  const allTabs = [ 0, 1, 2, 3];


  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="secondary"
          centered
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Aria" {...a11yProps(1)} />
          <Tab label="Chart" {...a11yProps(2)} />
          {/* <Tab label="More" {...a11yProps(3)} />
          <Tab label="Wish List" {...a11yProps(4)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <Images />
      </TabPanel>
      <TabPanel value={value} index={1}>
          <Aria />
      </TabPanel>
      <TabPanel value={value} index={2}>
          {/* <Chart /> */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        
      </TabPanel>
      <TabPanel value={value} index={4}>
      </TabPanel>
    </Box>
  );
}