
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import footerRoutes from "footer.routes";

// Routes
import routes from "routes";
import DefaultFooter from "examples/Footers/DefaultFooter";

function BaseLayout({  children }) {
  return (
    <MKBox display="flex" flexDirection="column" bgColor="white" minHeight="100vh">
      <MKBox bgColor="white" shadow="sm" py={0.25}>
        <DefaultNavbar
          routes={routes}
        />
      </MKBox>
      <Container sx={{ mt: 16 }}>
        <Grid container item xs={12} flexDirection="column" justifyContent="center" mx="auto">
         
          <MKTypography variant="h3" mb={1}>
       
          </MKTypography>
          {children}
        </Grid>
      </Container>
      <MKBox mt="auto">
        <DefaultFooter  content={footerRoutes}/>
      </MKBox>
    </MKBox>
  );
}

// Typechecking props for the BaseLayout
BaseLayout.propTypes = {
  breadcrumb: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
