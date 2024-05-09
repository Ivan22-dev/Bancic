
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

import MKTypography from "components/MKTypography";



// Data
import data from "./designBlocksData";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function DesignBlocks() {
  const renderData = data.map(({ title, description, img,fulldescription }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <CenteredBlogCard
              image={img}
              title={title}
              description={fulldescription}
           
        />
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto",  }}
        >
          
          <MKTypography variant="h2" fontWeight="bold">
            B-GYM ponuda
          </MKTypography>
          <MKTypography variant="body1" color="text">
            Pogledajte što smo sve za Vas pripremili
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
