import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@mui/material";

export default function InfoBox({
  active,
  isred,
  title,
  cases,
  total,
  ...props
}) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isred && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${!isred && "infoBox--cases--green"}`}>
          {cases}
        </h2>
        <Typography className="infoBox__total">{total} Total</Typography>
      </CardContent>
    </Card>
  );
}
