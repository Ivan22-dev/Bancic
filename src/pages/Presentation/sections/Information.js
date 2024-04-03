
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotatingfront.jpg";
import bgBack from "assets/images/rotatingback.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Upoznajte se s
                    <br />
                    EMS-om
                  </>
                }
              />
              <RotatingCardBack
                image={bgBack}
                title="Otkrijte više"
                description="Saznajte što je elektromišićna stimulacija"
                action={{
                  type: "internal",
                  route: "/pages/ems",
                  label: "Odaberite",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="restaurant_menu"
                  title="Prehrana"
                  description="Za Vas planiramo te kontinuirano pratimo Vašu prehranu kako bi brže ostvarili željeni cilj"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="fitness_center"
                  title="Treninzi"
                  description="Nudimo mogućnosti svakodnevnih dolazaka, pa do osnovnog paketa dva puta tjedno"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="euro"
                  title="Sačuvaj vrijeme i novac"
                  description="EMS trening traje 3-4 puta kraće od konvencialnog treninga te brže dolazite do ciljanih rezultata"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="directions_run"
                  title="Dodatne aktivnosti"
                  description="Nudimo i ostale aktivnosti poput planinarenja, trčanja u humanitarne svrhe, izleta u nacionalne parkove..."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
