import { Box } from "../../constants/mui.constants";

import { InputFieldContainer, FormText, FormTitle } from "./form.styles";

import FormAction from "./form.actions";

import { useContext, useEffect, useState } from "react";
import { TabContext } from "../../context/tab.context";
import { FormContext } from "../../context/form.context";

function PlaceOrderForm() {
  const { toggleActive } = useContext(TabContext);
  const { formChangeHandler, form } = useContext(FormContext);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (
      form.ordername === "" ||
      form.ordertype === "" ||
      form.ratings === "" ||
      form.comment === ""
    ) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [form.ordername, form.ordertype, form.ratings, form.comment]);

  return (
    <Box>
      <FormTitle variant="h3" component="p">
        Who is the primary contact for the business?
      </FormTitle>
      <FormText variant="p" component="p">
        This is the person we will contact with all status updates related to
        the order.
      </FormText>
      <InputFieldContainer>
        <Box width={"45%"}>
          <label htmlFor="Order Name">
            Order Name <span className="symbol">*</span>
          </label>
          <input
            name="ordername"
            placeholder="Order name"
            className="form-control"
            type="text"
            onChange={formChangeHandler}
          />
        </Box>

        <Box width={"45%"}>
          <label htmlFor="Order Type">
            Order Type <span className="symbol">*</span>
          </label>
          <input
            name="ordertype"
            placeholder="Order type"
            className="form-control"
            type="text"
            onChange={formChangeHandler}
          />
        </Box>
      </InputFieldContainer>

      <InputFieldContainer>
        <Box width={"45%"}>
          <label htmlFor="Ratings">
            Ratings <span className="symbol">*</span>
          </label>
          <input
            name="ratings"
            placeholder="Ratings"
            className="form-control"
            type="text"
            onChange={formChangeHandler}
          />
        </Box>

        <Box width={"45%"}>
          <label htmlFor="Comment">
            Comment <span className="symbol">*</span>
          </label>
          <input
            name="comment"
            placeholder="Contact email address"
            className="form-control"
            type="text"
            onChange={formChangeHandler}
          />
        </Box>
      </InputFieldContainer>

      <FormAction
        toggleActive={toggleActive}
        next={1}
        prev={3}
        isButtonDisabled={isButtonDisabled}
      />
    </Box>
  );
}

export default PlaceOrderForm;
