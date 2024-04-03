

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";


// Images
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import profilePicture from "assets/images/ems/ems.jpg";



function Profile() {
  return (
    <MKBox component="section" py={12}>
    <Container>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <Grid container justifyContent="flex-start">
            <Grid item xs={12} md={6}>
              <MKBox mb={5}>
                <DefaultInfoCard
                  icon="diamond"
                  title="EMS proizvodi"
                  description="EMS proizvodi su fleksibilni alati bilo da šetate na traci ili kombinirate vježbe na power plait-u"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKBox mb={5}>
                <DefaultInfoCard
                  icon="bolt"
                  title="Intenzivne EMS jedinice"
                  description="Intenzivne EMS jedinice ne samo da pružaju snagu, već i impresivnu mišićnu definiciju"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKBox mb={{ xs: 5, md: 0 }}>
                <DefaultInfoCard
                  icon="spa"
                  title="Elastitet kože"
                  description="Efekt kod brzog gubitka kilograma EMS u potpunosti anulira efekt obješene kože jer sama EMS stimulacija djeluje na elastitet kože i zatezanje kože"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKBox mb={{ xs: 5, md: 0 }}>
                <DefaultInfoCard
                  icon="fitbit"
                  title="EMS trening"
                  description="EMS trening se fleksibilno prilagođava vašim potrebama, omogućuje individualne treninge i ne samo da podržava rast mišića i izgradnju snage, već potiče i hipertrofiju - rast mišićnih vlakana"
                />
              </MKBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
          <CenteredBlogCard
            image={profilePicture}
            description="EMS trening nudi vam inovativnu metodu za učinkovitu mršavljenjai  izgradnju mišića. Izgradnja snage ključna je za performanse profesionalnih sportaša,aktivnih rekreativaca a isto tako osoba koje se nikad aktivno  nisu  bavile sportom ili rekreacijom. EMS potiče rast mišića i gubitak masti omogućuje ciljano intenziviranje različitih vrsta snage kao što su brzina, izdržljivost i maksimalna snaga. Posebna prednost je što se gotovo sve glavne mišićne skupine treniraju istovremeno, što povećava učinkovitost i povećava intenzitet treninga. Osim toga, EMS dopire i do dubljih mišića koje je inače teško aktivirati."
          />
        </Grid>
      </Grid>
    </Container>
  </MKBox>
  );
}

export default Profile;
