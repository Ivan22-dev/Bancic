
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function BBottom() {
  return (
  
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 6 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
             Obratite nam se s povjerenjem
            </MKTypography>
            <MKTypography variant="body2" color="white" mt={5}>
             <i>Mi dajemo sve od sebe da Vi ostvarite željeni cilj, potrudite se i Vi promijeniti loše životne navike  i krenite skupa sa nama u rješavanje problema.</i>
            </MKTypography>
         
          </Grid>
        </Container>
      </MKBox>

  );
}

export default BBottom;
