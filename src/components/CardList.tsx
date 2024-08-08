import {
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Stack,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
const CardList = () => {
  return (
    <div>
      <Stack
        className="m-3 mt-4"
        direction="row"
        justifyContent="space-evenly"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Grid
          container
          spacing={5}
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="m-3"
        >
          <Card
            variant="outlined"
            className="m-3 p-3 mb-2 bg-primary text-white"
          >
            <Grid>
              <CardContent className="m-3">
                <h4>Finish th task on the board</h4>
                <p>home</p>
                <p>
                  remember to finish task on the board After finishing give for
                  evaluation
                </p>
                <p>5/12/2020</p>
                <IconButton aria-label="delete" color="error" size="large">
                  <DeleteIcon fontSize="inherit" />
                </IconButton>

                <IconButton size="large">
                  <ModeEditIcon fontSize="inherit" />
                </IconButton>
              </CardContent>
            </Grid>
          </Card>
          <Card
            variant="outlined"
            className="m-3 p-3 mb-2 bg-success text-white"
          >
            <Grid>
              <CardContent className="m-3 ">
                <h4>Finish th task on the board</h4>
                <p> business</p>
                <p>
                  remember to finish task on the board After finishing give for
                  evaluation
                </p>
                <p>5/12/2020</p>
                <IconButton aria-label="delete" color="error" size="large">
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
                <IconButton size="large">
                  <ModeEditIcon fontSize="inherit" />
                </IconButton>
              </CardContent>
            </Grid>
          </Card>
          <Card
            variant="outlined"
            className="m-3 p-3 mb-2 bg-warning text-dark"
          >
            <Grid>
              <CardContent className="m-3">
                <h4>Finish th task on the board</h4>
                <p>personel</p>
                <p>
                  remember to finish task on the board After finishing give for
                  evaluation
                </p>
                <p>5/12/2020</p>
                <IconButton aria-label="delete" color="error" size="large">
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
                <IconButton size="large">
                  <ModeEditIcon fontSize="inherit" />
                </IconButton>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
      </Stack>
    </div>
  );
};

export default CardList;

{
  /* <Card className="p-2 ">
          <CardContent>
            <h4>Finish th task on the board</h4>
            <p>
              remember to finish task on the board After finishing give for
              evaluation
            </p>
            <p>5/12/2020</p>
          </CardContent>
        </Card>
        <Card className="p-2">
          <CardContent>
            <h4>Finish th task on the board</h4>
            <p>
              remember to finish task on the board After finishing give for
              evaluation
            </p>
            <p>5/12/2020</p>
          </CardContent>
        </Card>
        <Card className="p-2">
          <CardContent>
            <h4>Finish th task on the board</h4>
            <p>
              remember to finish task on the board After finishing give for
              evaluation
            </p>
            <p>5/12/2020</p>
          </CardContent>
        </Card> */
}
