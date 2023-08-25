import React from "react";

import { Box } from "../../constants/mui.constants";

import { InputFieldContainer, FormTitle, FormText } from "./form.styles";

import FormAction from "./form.actions";

import { useContext,useEffect,useState } from "react";
import { TabContext } from "../../context/tab.context";
import { FormContext, } from "../../context/form.context";

function AdditionalForm() {
  const { toggleActive } = useContext(TabContext);
  const { formChangeHandler,form } = useContext(FormContext);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (
      form.dateofbirth === "" ||
      form.github === "" ||
      form.twitter === "" ||
      form.facebook === ""
    ) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [form.dateofbirth, form.github, form.twitter, form.facebook]);

  return (
    <Box>
      <FormTitle variant="h3" component="p">
        Additional Information
      </FormTitle>
      <FormText variant="p" component="p">
        These are optional Fields, you can skip them if you want
      </FormText>
      <InputFieldContainer>
        <Box width={"45%"}>
          <label htmlFor="Date of birth">
            Date of birth <span className="symbol"></span>
          </label>
          <input
            placeholder="Date of birth"
            className="form-control"
            type="text"
            name="dateofbirth"
            onChange={formChangeHandler}
          />
        </Box>

        <Box width={"45%"}>
          <label htmlFor="Github">
            Github <span className="symbol">*</span>
          </label>

          <input
            name="github"
            placeholder="City"
            className="form-control"
            type="text"
            onChange={formChangeHandler}
          />
        </Box>
      </InputFieldContainer>

      <InputFieldContainer>
        <Box width={"45%"}>
          <label htmlFor="Twitter">
            Twitter <span className="symbol">*</span>
          </label>
          <input
            name="twitter"
            placeholder="Twitter"
            className="form-control"
            type="text"
            onChange={formChangeHandler}
          />
        </Box>

        <Box width={"45%"}>
          <label htmlFor="Facebook">
            Facebook <span className="symbol">*</span>
          </label>
          <input
            name="facebook"
            placeholder="facebook"
            className="form-control"
            type="text"
            onChange={formChangeHandler}
          />
        </Box>
      </InputFieldContainer>

      <FormAction toggleActive={toggleActive} next={4} prev={2} isButtonDisabled={isButtonDisabled}/>
    </Box>
  );
}

export default AdditionalForm;
