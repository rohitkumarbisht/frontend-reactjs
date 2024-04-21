import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./GridItem.css";

const GridItem = ({ title, value, icon: Icon, itemComponent: Item , reportType}) => (
  <Grid className="custom-grid-item-1" item  xs={reportType === "teacher" ? 3 : 2.4}>
    <Item >
      <Grid className="custom-grid-item" item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography  className="custom-typography-title" gutterBottom variant="subtitle1" component="div" noWrap>
              {title}
            </Typography>
            <Typography className="custom-typography-value" gutterBottom variant="subtitle2">
              {value}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          {Icon && <img className="img-icon" src={Icon} alt="icon" />}
        </Grid>
      </Grid>
    </Item>
  </Grid>
);

export default GridItem;
