import styled from "@emotion/styled";
import { Grid, Container, Button, Box, Typography } from "@mui/material";

const StyledContainer = styled(Container)`
bottom: 0;
padding: 20px;
min-width: 100vw;
max-width: 100vw;
min-height: 100vh;
background-color: #000;
  }
`;
function Education() {
  return (
    <Container
      sx={{
        bottom: 0,
        p: "20px",
        minWidth: "100vw",
        maxWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "#000",
      }}
    >
      <Typography color="white">holi</Typography>
    </Container>
  );
}
export default Education;
