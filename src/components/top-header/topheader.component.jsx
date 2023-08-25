import { Box } from "../../constants/mui.constants";

import Logo from "../../assets/swiftyfilings.png";
import TruckPng from "../../assets/truck.png";
import Tick from "../../assets/tick.png";

import {
  HeaderContainer,
  HeaderItemTextMain,
  HeaderItemTextTitle,
  HeaderLeftItem,
  HeaderRightItem,
  HeaderRightItemRight,
  HeaderRightItemLeft,
} from "./topheader.styles";

function TopHeader() {
  return (
    <>
      <HeaderContainer>
        <HeaderLeftItem>
          <img width={"100%"} src={Logo} alt="swiftyfilings" />
        </HeaderLeftItem>

        <HeaderRightItem>
          <HeaderRightItemLeft>
            <img width={"20%"} src={TruckPng} alt="truck" />
            <Box ml={'.5em'}>
              <HeaderItemTextTitle>Fast, Free Shipping</HeaderItemTextTitle>

              <HeaderItemTextMain>On All Web Orders</HeaderItemTextMain>
            </Box>
          </HeaderRightItemLeft>

          <HeaderRightItemRight>
            <img width={"20%"} src={Tick} alt="tick" />
            <Box ml={'.5em'}>
              <HeaderItemTextTitle>
                100% Money Back Guarantee
              </HeaderItemTextTitle>

              <HeaderItemTextMain>
                & Lifetime Customer Support!
              </HeaderItemTextMain>
            </Box>
          </HeaderRightItemRight>
        </HeaderRightItem>
      </HeaderContainer>
    </>
  );
}

export default TopHeader;
