
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";


// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";


// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/ems/ems3.jpg";

import {React } from "react";
import 'react-modal-video/css/modal-video.css';
import 'react-modal-video/css/modal-video.min.css';
import "../../css/myCss.css"
import { MyModalVideo } from "examples/ModalVideo";
import DesignBlocks from "pages/LandingPages/MainData/DesignBlocks";
import BBottom from "pages/LandingPages/Bottom/Bottom";

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="85vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            {/*<MKTypography
              variant="h2"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["1xm"],
                },
              })}
            >
              B-GYM{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
              mb={1}
            >
              Add short decription about gym developers around the world.
            </MKTypography>*/}
            <MyModalVideo channel={"youtube"} videoId={"IrDVyLGwAq8?feature=shared"} />
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <DesignBlocks />
        <BBottom />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
