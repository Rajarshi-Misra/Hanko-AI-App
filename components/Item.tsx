import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const ImgMediaCard = (props: string | undefined) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={props} image={props} />
      <CardActions>
        <a
          href={props}
          target="_blank"
          className="text-green-600 font-semibold"
        >
          DOWNLOAD
        </a>
      </CardActions>
    </Card>
  );
};
