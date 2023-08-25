import { Box } from "../../constants/mui.constants";

import { InputFieldContainer, FormTitle, FormText } from "./form.styles";

import FormAction from "./form.actions";

import { useContext, useEffect, useState } from "react";
import { TabContext } from "../../context/tab.context";
import { FormContext } from "../../context/form.context";

function BusinessForm() {
  const { toggleActive } = useContext(TabContext);
  const { formChangeHandler, form } = useContext(FormContext);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (
      form.businessname === "" ||
      form.city === "" ||
      form.address1 === "" ||
      form.address2 === ""
    ) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [form.businessname, form.city, form.address2, form.address1]);

  return (
    <Box>
      <FormTitle variant="h3" component="p">
        Drive your business With Us
      </FormTitle>
      <FormText variant="p" component="p">
        Please fill in your business information.
      </FormText>
      <InputFieldContainer>
        <Box width={"45%"}>
          <label htmlFor="Business Name">
            Business Name <span className="symbol">*</span>
          </label>
          <input
            required
            name="businessname"
            placeholder="Business Name"
            className="form-control"
            type="text"
            onChange={formChangeHandler}
          />
        </Box>

        <Box width={"45%"}>
          <label htmlFor="City">
            City <span className="symbol">*</span>
          </label>
          <input
            name="city"
            placeholder="City"
            className="form-control"
            type="text"
            onChange={formChangeHandler}
          />
        </Box>
      </InputFieldContainer>

      <InputFieldContainer>
        <Box width={"45%"}>
          <label htmlFor="Address 1">
            Address 1 <span className="symbol">*</span>
          </label>
          <input
            name="address1"
            placeholder="Address 1"
            className="form-control"
            type="text"
            onChange={formChangeHandler}
          />
        </Box>

        <Box width={"45%"}>
          <label htmlFor="Address 2">
            Address 2 <span className="symbol">*</span>
          </label>
          <input
            name="address2"
            placeholder="Address 2"
            className="form-control"
            type="text"
            onChange={formChangeHandler}
          />
        </Box>
      </InputFieldContainer>

      <FormAction
        toggleActive={toggleActive}
        next={3}
        prev={1}
        isButtonDisabled={isButtonDisabled}
      />
    </Box>
  );
}

export default BusinessForm;
