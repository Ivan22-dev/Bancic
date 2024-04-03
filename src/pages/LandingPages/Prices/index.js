// @mui material components
import Grid from "@mui/material/Grid";
import React, {useState,useEffect} from 'react';
import { Backdrop, CircularProgress, Container,  } from '@mui/material';

import BaseLayout from "layouts/sections/components/BaseLayout";
import MKBox from "components/MKBox";

//base
import {firestore} from "../../../firebase"
import { getDocs,collection } from "@firebase/firestore";
import MKAlert from "components/MKAlert";


function Prices() {
  const [pricesList,setPrices]=useState();
  const [loader,setLoader]=useState(true);
  const ref=collection(firestore,"prices");
  useEffect(()=>{
    const fetchdata=async()=>{
      try {
        const data=await getDocs(ref);
        let array=[];
        data.docs.forEach((item)=>{
          array.push(item._document.data.value.mapValue.fields);
          }
        )
        setPrices(array);
        setLoader(false)
      } catch (error) {
        console.log("ERROR: ",error)
      }
    }
    fetchdata()
  },[])
 
  const listItems = pricesList?.map((price) =>
  <>
     <MKAlert color="light">{price.description.stringValue}{" - "}{price.price.stringValue}{" €"}</MKAlert>
  </>
);
  return (
    <BaseLayout>
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

          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loader}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        <Grid item xs={12}>
          {listItems}
        </Grid>
      </MKBox>
    </Grid>
  </Container>
  </BaseLayout>
  );
}

export default Prices;
