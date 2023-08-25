import { styled, Box, Typography } from "../../constants/mui.constants";

const FormContainer = styled(Box)(({ theme }) => ({}));

const FormTitle = styled(Typography)(({ theme }) => ({
  color: "#281361",
  fontSize: "1.5rem",
  fontWeight: "500",
  lineHeight:"40px",
  [theme.breakpoints.down("sm")]:{
    fontSize:"1.2rem",
    fontWeight:"600",
    lineHeight:"20px"
  }
}));

const FormText = styled(Typography)(({ theme }) => ({
  color: "#281361",
  fontWeight: "300",
  lineHeight:"40px",
  [theme.breakpoints.down("sm")]:{
    fontSize:"1rem",
    fontWeight:"400",
    lineHeight:"20px",
    margin:"1em 0"
  }
}));

const InputFieldContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center",
    margin:"1.3em 0em"
  }));


const HorizontalLine = styled(Box)(({theme}) => ({
    width: "100%",
    height: "1px",
    margin: "0 0 24px",
    borderTop: "none",
    background: "linear-gradient(to right,#063959 0,#063959 50%,#5aaade 25%,#5aaade 25%,#5aaade 100%)"
}))



export { FormContainer, FormTitle, FormText,InputFieldContainer,HorizontalLine };
