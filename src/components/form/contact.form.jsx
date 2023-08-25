import { Box } from "../../constants/mui.constants";

import { InputFieldContainer, FormText, FormTitle } from "./form.styles";

import FormAction from "./form.actions";

import { useContext,useEffect,useState } from "react";
import { TabContext } from "../../context/tab.context";
import { FormContext } from "../../context/form.context";

function ContactForm() {
  const { toggleActive } = useContext(TabContext);
  const { formChangeHandler,form } = useContext(FormContext);
  const [isButtonDisabled,setIsButtonDisabled] = useState(true)


  useEffect(() => {
    if(form.firstname === "" || form.lastname === "" || form.phone === "" || form.email === ""){
      setIsButtonDisabled(true)
    }else {
      setIsButtonDisabled(false)
    }
  },[form.firstname,form.lastname,form.phone,form.email])

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
          <label htmlFor="First Name">
            First Name <span className="symbol">*</span>
          </label>
          <input
            required
            name="firstname"
            placeholder="Contact first name"
            className="form-control"
            type="text"
            onChange={formChangeHandler}
          />
        </Box>

        <Box width={"45%"}>
          <label htmlFor="Last Name">
            Last Name <span className="symbol">*</span>
          </label>
          <input
            required
            name="lastname"
            placeholder="Contact last name"
            className="form-control"
            type="text"
            onChange={formChangeHandler}
          />
        </Box>
      </InputFieldContainer>

      <InputFieldContainer>
        <Box width={"45%"}>
          <label htmlFor="Phone">
            Phone <span className="symbol">*</span>
          </label>
          <input
            required
            name="phone"
            placeholder="(xxx) xxx-xxxx"
            className="form-control"
            type="tel"
            onChange={formChangeHandler}
          />
        </Box>

        <Box width={"45%"}>
          <label htmlFor="Email">
            Email <span className="symbol">*</span>
          </label>
          <input
            required
            name="email"
            placeholder="Contact email address"
            className="form-control"
            type="email"
            onChange={formChangeHandler}
          />
        </Box>
      </InputFieldContainer>

      <FormAction toggleActive={toggleActive} next={2} isButtonDisabled={isButtonDisabled}/>
    </Box>
  );
}

export default ContactForm;
