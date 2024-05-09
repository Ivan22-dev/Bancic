// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import Container from "@mui/material/Container";
import BaseLayout from "layouts/sections/components/BaseLayout";

// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";


function Contact() {
  return (
    <BaseLayout
    title="Page Headers"
    breadcrumb={[
     
    ]}>
    <Container>
    <Grid container item>
      <MKBox
        width="100%"
        bgColor="white"
        borderRadius="xl"
        shadow="xl"
        mb={6}
        sx={{ overflow: "hidden" }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            lg={5}
            position="relative"
            px={0}
            sx={{
              backgroundImage: ({
                palette: { gradients },
                functions: { rgba, linearGradient },
              }) =>
                `${linearGradient(
                  rgba(gradients.dark.main, 0.8),
                  rgba(gradients.dark.state, 0.8)
                )}, url(${bgImage})`,
              backgroundSize: "cover",
            }}
          >
            <MKBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
            >
              <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
              <MKBox display="flex" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-clock" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                    Pon-pet 06:00 - 21:00 Sub 10:00 - 14:00
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-phone" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                   <a href="tel:+38598311485" style={{color:"white"}}> +385 98 3114 85</a>
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" color="white" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-envelope" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                    <a href="mailto:bancicivo@gmail.com" style={{color:"white"}}>bancicivo@gmail.com</a>
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" color="white" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-map-marker-alt" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                     <a href="https://maps.app.goo.gl/rms7R1CwUuNGnnso7" style={{color:"white"}} target="_blank">Tučepska ul. 20, 21000, Split</a>
                  </MKTypography>
                </MKBox>
                <MKBox mt={3}>
                  <MKButton variant="text" color="white" size="large" iconOnly>
                  <a href="https://web.facebook.com/p/B-GYM-100076471634241/?_rdc=1&_rdr" style={{color:"white"}} target="_blank"><i className="fab fa-facebook" style={{ fontSize: "1.25rem" }} /></a>
                  </MKButton>
                  <MKButton variant="text" color="white" size="large" iconOnly>
                  <a href="https://www.instagram.com/b_gym_by_ivobancic/?hl=en" style={{color:"white"}} target="_blank"> <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} /></a>
                  </MKButton>
                  <MKButton variant="text" color="white" size="large" iconOnly >
                  <a href="https://youtu.be/bmvOC8P27L4" style={{color:"white"}} target="_blank"> <i className="fab fa-youtube" style={{ fontSize: "1.25rem" }} /></a>
                  </MKButton>
                </MKBox>
              </MKBox>
            </MKBox>
          </Grid>
          <Grid  xs={12} lg={6}>
       
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d723.4202726355347!2d16.48893826959915!3d43.508987970852715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDMwJzMyLjQiTiAxNsKwMjknMjIuNSJF!5e0!3m2!1sen!2shr!4v1713888987561!5m2!1sen!2shr" width="722" height="570" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Grid>
        </Grid>
      </MKBox>
    </Grid>
  </Container>
  </BaseLayout>
  );
}

export default Contact;
