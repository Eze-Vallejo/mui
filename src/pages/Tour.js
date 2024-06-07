import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BasicModal from "../components/Modal";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the world in Vegas.
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://d2ru2mvuh5wx24.cloudfront.net/avtivity_bootstrap/1241/flight_of_angels_3__1920x864.jpg"
          alt=""
          height={270}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem
          sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia
          dolor sit amet consectetur adipiscing velit, sed quia non numquam do
          eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam
          quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur?
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frecuently asked questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
