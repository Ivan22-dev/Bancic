// @mui material components
import Grid from "@mui/material/Grid";
import React from 'react';
import { Container,  } from '@mui/material';

import BaseLayout from "layouts/sections/components/BaseLayout";
import MKBox from "components/MKBox";

import GalleryBlocks from "./GalleryBlocks";




function Gallery() {
 

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
        sx={{ overflow: "hidden" }}
      >
       
          <GalleryBlocks/>
       
      </MKBox>
    </Grid>
  </Container>
  </BaseLayout>
  );
}

export default Gallery;
