import React from "react";

import { Box, Typography } from "../../constants/mui.constants";

import UsFlagPng from "../../assets/america.png";
import NortanPng from "../../assets/norton-small.png";
import TrustPilotPng from "../../assets/trustpilot-logo-color.png";
import VisaPng from "../../assets/visa.png";
import DiscoverPng from "../../assets/discover-card.png";
import AmericanExpressPng from "../../assets/american-express.png";
import MasterCardPng from "../../assets/master-card.png";

function Footer() {
  return (
    <Box component={"footer"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={{xs:"column",md:"row"}}
        padding={{xs:"1em",md:"0em"}}
      >
        <Box flex={{xs:1,md:2}}>
          <Typography
            fontSize={".9rem"}
            color={"#BDBDBD"}
            fontFamily={"inherit"}
          >
            © Copyright 2023 - Swyft Filings, LLC
          </Typography>
          <Typography
            fontSize={".9rem"}
            color={"#BDBDBD"}
            fontFamily={"inherit"}
            my="1em"
            maxWidth={'800px'}
          >
            Swyft Filings is a document filing service. We are not a law firm
            and cannot offer legal advice. The information on our website is for
            general informational purposes only and is not legal advice. Use of
            the website is subject to our{" "}
            <Typography
              fontFamily={"inherit"}
              component={"span"}
              color={"#47b475"}
            >
              Terms of Service
            </Typography>{" "}
            and{" "}
            <Typography
              fontFamily={"inherit"}
              component={"span"}
              color={"#47b475"}
            >
              Privacy Policy.
            </Typography>
          </Typography>
        </Box>

        <Box flex={{xs:1,md:.8}} ml={{xs:'0em',md:"6em"}}> 
          <Box display={'flex'} maxWidth={'180px'} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={"center"}>
            <img style={{margin:"1em 0"}} width="40px" src={UsFlagPng} alt="us" />
            <img style={{margin:"1em 0"}} width="40px" src={NortanPng} alt="nortran" />
            <img style={{margin:"1em 0"}} width="40px" src={TrustPilotPng} alt="trust-pilot" />
            <img style={{margin:"1em 0"}} width="40px" src={VisaPng} alt="visa" />
            <img style={{margin:"1em 0"}} width="40px" src={DiscoverPng} alt="discover" />
            <img style={{margin:"1em 0"}} width="40px" src={AmericanExpressPng} alt="american-express" />
            <img style={{margin:"1em 0"}} width="40px" src={MasterCardPng} alt="master-card" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
