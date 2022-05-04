import { data } from "./db/friends";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function PortfolioOfFriends(props) {
  return (
    <div className="backgroundColorPaleWhite">
      <Box sx={{ flexGrow: 1 }} className="friends">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {data.map((data) => (
            <Grid item xs={2} sm={4} md={4} key={data.name}>
              <section className="friendsCard">
                {/* Mark, Dalena, Thomas Sigwalt, Ayrat, Dallin, Dave */}
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <img
                      src={data.image_url}
                      alt={data.name}
                      className="friendImages"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {data.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    {data.linkedIn ? (
                      <Button size="small" color="primary">
                        <a
                          href={data.linkedIn}
                          target="_blank"
                          className="iconLink"
                          rel="noreferrer"
                        >
                          LinkedIn
                        </a>
                      </Button>
                    ) : (
                      ""
                    )}

                    {data.github ? (
                      <Button size="small" color="primary">
                        <a
                          href={data.github}
                          target="_blank"
                          className="iconLink"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                      </Button>
                    ) : (
                      ""
                    )}

                    {data.portfolio ? (
                      <Button size="small" color="primary">
                        <a
                          href={data.portfolio}
                          target="_blank"
                          className="iconLink"
                          rel="noreferrer"
                        >
                          Profile
                        </a>
                      </Button>
                    ) : (
                      ""
                    )}
                  </CardActions>
                </Card>
              </section>
            </Grid>
          ))}
          ;
          <div className="backToTop" onClick={() => window.scrollTo(0, 0)}>
            <ArrowCircleUpIcon fontSize="larger" /> Back to the top
          </div>
        </Grid>
      </Box>
    </div>
  );
}
