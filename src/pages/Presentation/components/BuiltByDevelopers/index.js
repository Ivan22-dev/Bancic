// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// img
import bgImage from "assets/images/tren.png";


function BuiltByDevelopers() {
 
  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
        
          <MKTypography variant="h3" color="white" mb={1}>
            Ivo Bančić  &nbsp;&nbsp;&nbsp;
          </MKTypography>
          <MKTypography variant="body2" color="white" opacity={0.8} mb={2}>
            Naš dugogodišnji ems trener s preko petnaest godina iskustva Ivo Bančić uz svoj stručni tim će se pobrinuti za 
            našeg svakog člana. Dovoljno je spomenuti naše mnogobrojne korisnike koji su uz našeg trenera ostvarili željene rezultate.
            Donosimo neke od značajnijih rezultata koji su ga pratili kroz godine djelovanja:
            <br/>
            <li>Educencirani EMS trener </li>
            <li>Završena nogometna akademija</li>
            <li>Nutricionist </li>
            <li>Viši profesionalni nogometaš</li>
            <li>Dugogodišnji ems trener</li>
          </MKTypography>
         
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
