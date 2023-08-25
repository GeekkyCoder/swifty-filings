import { styled, Box, Typography } from "../../constants/mui.constants";

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const HeaderRightItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  alignSelf: "right",
  [theme.breakpoints.down("sm")]: {
    display:"none"
  }
}));

const HeaderLeftItem = styled(Box)(({ theme }) => ({
  width: "20%",
  [theme.breakpoints.down("sm")]:{
    width:"60%",
    margin:"0 auto"
  }
}));

const HeaderItemTextTitle = styled(Typography)(({ theme }) => ({
    fontSize:"12px",
    fontWeight:"600",
    color:"#333389"
}));

const HeaderItemTextMain = styled(Typography)(({ theme }) => ({
    fontSize:"10px",
    fontWeight:"400",
    color:"#3185db"
}));

const HeaderRightItemLeft = styled(Box)(({ theme }) => ({
  width: "40%",
  display: "flex",
  alignItems: "center",
}));

const HeaderRightItemRight = styled(Box)(({ theme }) => ({
  width: "40%",
  display: "flex",
  alignItems: "center",
}));

export {
  HeaderContainer,
  HeaderRightItem,
  HeaderLeftItem,
  HeaderItemTextTitle,
  HeaderItemTextMain,
  HeaderRightItemLeft,
  HeaderRightItemRight,
};
