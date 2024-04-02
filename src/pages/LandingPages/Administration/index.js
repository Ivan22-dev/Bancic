// @mui material components
import Grid from "@mui/material/Grid";
import React, {useEffect, useState} from 'react';
import { TextField, Button, Container, Stack, CircularProgress, Backdrop } from '@mui/material';


import BaseLayout from "layouts/sections/components/BaseLayout";
import MKBox from "components/MKBox";

//base
import {firestore} from "../../../firebase"
import {getDocs, deleteDoc,addDoc,collection,doc } from "@firebase/firestore";
import MKAlert from "components/MKAlert";
import MKButton from "components/MKButton";


function Administration() {
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [pricesList,setPrices]=useState();
  const [loader,setLoader]=useState(true);
  const ref=collection(firestore,"prices")
  useEffect(()=>{
    const fetchdata=async()=>{
      try {
        const data=await getDocs(ref);
        let array=[];
        data.docs.forEach((item)=>{
          array.push(item);
          }
        )
        setPrices(array);
        setLoader(false);
      } catch (error) {
        console.log("ERROR: ",error)
      }
    }
    fetchdata()
  },[])
  function handleSubmit(event) {
    event.preventDefault();
    let data={
      price:price,
      description:description
    }
    try {
      addDoc(ref,data)
      setDescription("")
      setPrice("")
      alert("Uspješno dodano, osvježite stranicu!")
    } catch (error) {
      console.log("ERROR: ",error)
    }
  }
  const deleteSubmit=async(event)=> {
    const ref=doc(firestore,"prices",event);
    await deleteDoc(ref);
    alert("Uspješno izbrisano, osvježite stranicu!")
  }
  const listItems = pricesList?.map((price) =>
  <>
     <MKAlert color="light">{price._document.data.value.mapValue.fields.description.stringValue}{" - "}{price._document.data.value.mapValue.fields.price.stringValue}{" €"}   <Button variant="text" onClick={()=>deleteSubmit(price.id)} type="submit">Izbriši</Button></MKAlert>
  </>
  )
  const  logout=()=>{
    document.cookie = "username=0";
    window.location.replace("/");
    window.location.reload();
  }
  
  return (
    <BaseLayout
    title=""
    breadcrumb={[
     
    ]}>
      
    <Container>
    <MKBox display="flex" alignItems="center" ml={-1}><MKButton  onClick={()=>{logout()}}><h1>ODJAVA</h1></MKButton></MKBox>
    <Grid container item>
      <MKBox
        width="100%"
        bgColor="white"
        borderRadius="xl"
        shadow="xl"
        mb={6}
        sx={{ overflow: "hidden" }}
      >
        <React.Fragment>
            <h2>Unesi artikal</h2>
            <form onSubmit={handleSubmit} >
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Opis"
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Cijena"
                        onChange={e => setPrice(e.target.value)}
                        value={price}
                        fullWidth
                        required
                    />
                </Stack>
               
                <Button variant="text" type="submit">Spremi</Button>
            </form>
            <br/> <br/> 
            
        </React.Fragment>
        <React.Fragment>
            <h2>Izbriši artikal</h2>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loader}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
            <Grid item xs={12}>
              {listItems}
            </Grid>
        </React.Fragment>
      </MKBox>
    </Grid>
  </Container>
  </BaseLayout>
  );
}

export default Administration;
