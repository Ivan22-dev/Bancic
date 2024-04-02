

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components;
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "./pagesData";
import { useState } from "react";
import { Slider } from "./Slider";
import Modal from "./Modal";


function GalleryBlocks()
 { const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  
  const renderData = data.map(({ title, items }) => (
  
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={12}>
        <Grid container spacing={4}>
          <Modal show={show} title="B-GYM" onClose={onClose}>
            <Slider images={items} active={active} setActive={setActive} />
          </Modal> 
          {items.map(({ image_url, caption, description, pro, },i) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={caption}>
              <div
            className={i === active ? "active" : ""}
            onClick={() => handleClick(i)}
            key={caption}
            style={{ cursor: "pointer"}}
          >
                <ExampleCard image={image_url} name={caption} count={description} pro={pro} /></div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h2" fontWeight="bold">
            B-GYM
          </MKTypography>
          <MKTypography variant="body1" color="text">
            Zavirite u našu galeriju slika i pogledajte fotografije ambijenta koji smo za Vas pripremili
          </MKTypography>
        </Grid>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </>
  );
}

export default GalleryBlocks;
