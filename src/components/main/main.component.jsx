import React from "react";
import Form from "../form/form.component";
import OrderSummary from "../order-summary/order-summary.component";
import { MainContainer } from "./main.styles";

import { Box } from "../../constants/mui.constants";

function Main() {
  return (
    <>
      <MainContainer>
        <Box width={{xs:"100%",md:"60%"}}>
          <Form />
        </Box>

        <Box width={{xs:"100%",md:"35%"}}>
          <OrderSummary />
        </Box>
      </MainContainer>
    </>
  );
}

export default Main;
