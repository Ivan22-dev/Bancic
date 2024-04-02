
// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

const date = new Date().getFullYear();

function DefaultFooter({ content }) {
  const { brand, socials } = content;

  return (
    <MKBox component="footer">
      <Container>
          <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
          <MKBox>
              <Link to={brand.route}>
                <MKBox component="img" src={brand.image} alt={brand.name} maxWidth="2rem" mb={2} />
              </Link>
              <MKTypography variant="h6">{brand.name}</MKTypography>
            </MKBox>
            <MKBox sx={{ ml: "auto",mr:"auto", mb: 3 }}  mt={3}>
              {socials.map(({ icon, link }, key) => (
                <MKTypography
                  key={link}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="dark"
                  opacity={0.8}
                  mr={key === socials.length - 1 ? 0 : 2.5}
                >
                  {icon}
                </MKTypography>
              ))}
            </MKBox>
            <MKTypography variant="body2">
             {date}
            </MKTypography>
          </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;
