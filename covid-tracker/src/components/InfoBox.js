import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function InfoBox({ title, cases, total }) {
  return (
    <Card className="infoBox">
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <h2 className="infoBox__cases">{cases}</h2>
        <Typography>{total} Total</Typography>
      </CardContent>
    </Card>
  );
}
