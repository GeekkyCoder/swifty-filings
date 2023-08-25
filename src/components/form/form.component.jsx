import { useContext } from "react";

import { TabContext } from "../../context/tab.context";

import AdditionalForm from "./additional.form";
import BusinessForm from "./business.form";
import ContactForm from "./contact.form";
import PlaceOrderForm from "./place-order.form.component";

import { Box } from "../../constants/mui.constants";

import { FormContainer } from "./form.styles";

import "./form.styles.css";

function Form() {
  const { activeTab } = useContext(TabContext);

  return (
    <>
      <FormContainer component={"form"} className="checkout-form">
        <Box my={"1em"} p={"1em"}>
          {activeTab == 1 && <ContactForm />}
          {activeTab == 2 && <BusinessForm />}
          {activeTab == 3 && <AdditionalForm />}
          {activeTab == 4 && <PlaceOrderForm />}
        </Box>
      </FormContainer>
    </>
  );
}

export default Form;
