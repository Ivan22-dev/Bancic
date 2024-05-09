import { Grid } from "@mui/material"
import MKBox from "components/MKBox"
import MKInput from "components/MKInput"
import MKTypography from "components/MKTypography"
import MKButton from "components/MKButton";
import { useEffect, useState } from "react";

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
 }

export const ContactForm =()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const [error,setError]=useState();
    const [errorMail,setErrorMail]=useState("");
    const [validator,setValidator]=useState(false);

    useEffect(() => {
        if(email!==""&&name!==""&&message!==""){
            if(validateEmail(email)){
                setError("");
                setValidator(true);
                setErrorMail("")
            }
            else{
                setErrorMail("Unesite ispravan format");
                setValidator(false);
            } 
        }
        else{
            setValidator(false);
            setError("");
        }
      
    }, [email,name,message]);

    const handleForm=()=>{
        if(name!==""&&email!==""&&message!==""&&validator){
          setError("");
          console.log("data")
        }else{
            setError("Unesite tražene podatke");
        }
    }
    return (
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 8, sm: 6, md: 8 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Kontaktirajte nas
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                Popunite formu i pošaljite nam poruku. Potrudit će mo se odgovoriti Vam u što kraćem roku.
              </MKTypography>
              <MKBox width="100%"  component="form" autoComplete="off">
              <div style={{color:"red",fontSize:"15px"}}>{error}</div>
                <Grid container spacing={3}>  
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Ime i prezime"
                      onChange={(e)=>{setName(e.target.value)}}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      onChange={(e)=>{setEmail(e.target.value)}}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    /> 
                    <div style={{color:"red",fontSize:"12px"}}>{errorMail}</div>
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="Kako Vam možemo pomoći?"
                      placeholder="Postavite nam pitanje..."
                      onChange={(e)=>{setMessage(e.target.value)}}
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton onClick={()=>handleForm()} variant="gradient" color="info">
                    Pošalji poruku
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
    )
}