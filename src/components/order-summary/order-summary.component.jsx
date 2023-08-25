import { Box, Typography } from "../../constants/mui.constants";
import { HorizontalLine } from "../form/form.styles";

import NortranPng from "../../assets/nortron.png";

function OrderSummary() {
  return (
    <>
      <Box sx={{ bg: "linear-gradient(to bottom,#fff 0,#e6e6e6 100%)" }}>
        <Typography
          component={"p"}
          varaint="p"
          sx={{
            color: "#0068d3",
            fontWeight: "800",
            fontSize: "1rem",
            textAlign: "center",
          }}
        >
          My Order Summary
        </Typography>
        <Box
          boxShadow={"rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset"}
          p={"1em"}
          borderRadius={"10px"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            my={"1em"}
          >
            <Typography
              color="#333389"
              fontWeight={"600"}
              fontSize={"1rem"}
              fontFamily={"inherit"}
            >
              Swyft’s Service Fee
            </Typography>
            <Typography fontWeight={"300"} fontFamily={"inherit"}>
              $
            </Typography>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            my={"1em"}
          >
            <Typography
              color="#333389"
              fontWeight={"600"}
              fontSize={"1rem"}
              fontFamily={"inherit"}
            >
              State Filing Fee
            </Typography>
            <Typography fontWeight={"300"} fontFamily={"inherit"}>
              $0
            </Typography>
          </Box>

          <HorizontalLine />

          <Box>
            <Typography
              color="#333389"
              fontWeight={"600"}
              fontSize={"1rem"}
              fontFamily={"inherit"}
            >
              Expediting Option
            </Typography>
            <Box
              component={"ul"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              my={".5em"}
              pl={"1.2em"}
            >
              <Box
                sx={{ listStyleType: "square" }}
                component={"li"}
                color={"#0085cf"}
                fontFamily={"inherit"}
              >
                Standard Processing
              </Box>
              <Typography fontWeight={"300"} fontFamily={"inherit"}>
                Free
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              color="#333389"
              fontWeight={"600"}
              fontSize={"1rem"}
              fontFamily={"inherit"}
            >
              Shipping & Delivery
            </Typography>
            <Box
              component={"ul"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              my={".5em"}
              pl={"1.2em"}
            >
              <Box
                sx={{ listStyleType: "square" }}
                component={"li"}
                color={"#0085cf"}
                fontFamily={"inherit"}
              >
                1st Class Shipping
              </Box>
              <Typography fontWeight={"300"} fontFamily={"inherit"}>
                Free
              </Typography>
            </Box>

            <Box
              component={"ul"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              my={".5em"}
              pl={"1.2em"}
            >
              <Box
                sx={{ listStyleType: "square" }}
                component={"li"}
                color={"#0085cf"}
                fontFamily={"inherit"}
              >
                Electronic Delivery
              </Box>
              <Typography fontWeight={"300"} fontFamily={"inherit"}>
                Free
              </Typography>
            </Box>
          </Box>

          <HorizontalLine />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              color="#281361"
              fontWeight={"700"}
              fontSize={"1.2rem"}
              fontFamily={"inherit"}
            >
              Your Total
            </Typography>
            <Typography fontWeight={"300"} fontFamily={"inherit"}>
              $
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box my="2em" mt={"3em"}>
        <img width={"100%"} src={NortranPng} alt="nortran" />
        <Box my={"2em"}>
          <Typography
            component={"p"}
            variant="p"
            fontFamily={"inherit"}
            fontWeight={"400"}
            fontSize={"1.3rem"}
            letterSpacing={"2px"}
          >
            Have Questions? Call us.
          </Typography>
          <Typography
            component={"p"}
            variant="p"
            fontFamily={"inherit"}
            fontWeight={"400"}
            fontSize={".9rem"}
            letterSpacing={"2px"}
            my={"1em"}
          >
            <Typography
              component={"span"}
              varaint="span"
              mr=".5em"
              color={"#47b475"}
              fontFamily={"inherit"}
            >
              (877) 777 0450
            </Typography>
            M-F: 9am - 6pm CST | Se Habla Español
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default OrderSummary;
