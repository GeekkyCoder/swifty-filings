import { styled, Box } from "../../constants/mui.constants";

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "2em 0em",
  padding: "1em",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export { MainContainer };
