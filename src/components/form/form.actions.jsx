import {
  Box,
  Typography,
  Button,
  Popover,
} from "../../constants/mui.constants";

import { HorizontalLine } from "./form.styles";

import Lock from "../../assets/icon-secure.png";

import { useContext, useState } from "react";
import { TabContext } from "../../context/tab.context";

function FormAction({ toggleActive, next, prev, isButtonDisabled }) {
  const { activeTab } = useContext(TabContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box mt={"3em"}>
      <HorizontalLine component={"hr"}></HorizontalLine>
      <Box display={"flex"} justifyContent={"space-between"} p={".5em"} flexDirection={{xs:"column",md:"row"}}>
        <Box
          display={"flex"}
          justifyContent={{xs:"flex-star",md:"space-between"}}
          alignItems={"center"}
        >
          <img width={"20px"} src={Lock} alt="lock" />
          <Typography
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            aria-owns="mouse-over-popover"
            sx={{ color: "#3b88c3" }}
            component={"p"}
            variant="p"
            ml={{xs:".5em",md:"0em"}}
          >
            Your information is Safe and Secure.
            <Popover
              sx={{
                pointerEvents: "none",
                width: "400px",
              }}
              id="mouse-over-popover"
              open={open}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography sx={{ p: 2, fontFamily: "inherit" }}>
                Your information and data is safe with Swyft Filings. Our
                servers are located in secured data centers and our website uses
                SSL 256-bit AES encryption for all sensitive data. Our servers
                are also backed up daily ensuring your data is never lost or
                destroyed.
              </Typography>
            </Popover>
          </Typography>
        </Box>

        <Box display={"flex"} alignItems={"center"} >
          {activeTab != 1 ? (
            <Typography
              color={"#3b88c3"}
              mr={"2em"}
              component={"p"}
              variant="p"
              onClick={(e) => toggleActive(e, prev)}
            >
              Back
            </Typography>
          ) : null}
          <Button
            disabled={isButtonDisabled ? true : false}
            onClick={(e) => toggleActive(e, next)}
            variant="contained"
            sx={{
              bgcolor: "#fb7b2c",
              color: "white",
              fontWeight: "400",
              ":hover": { bgcolor: "#db7b2c" },
              width:{xs:"100%"},
              my:{xs:"1.5em",md:"0em"}
            }}
          >
            Save and Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default FormAction;
