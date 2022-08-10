/* eslint-disable @typescript-eslint/no-explicit-any */
import { CircularProgress, Stack } from "@mui/material";
import React from "react";
import JetpoolingCard from "../../JetPooling/components/JetpoolingCard";

const HomeJetPoolingContainer = ({
  jetPoolings,
  fetchingJetpooling = false,
}: {
  fetchingJetpooling?: boolean;
  jetPoolings: Record<string, any>[];
  }) => {
  
  return (
    <>
      {fetchingJetpooling && (
        <Stack
          sx={{ color: "red", paddingTop: "8rem" }}
          display="flex"
          justifyContent="center"
          spacing={2}
          direction="row"
        >
          <CircularProgress size={100} color="inherit" />
        </Stack>
      )}
      {jetPoolings.map((data: Record<string, any>) => (
        <JetpoolingCard data={data} key={data?.id} />
      ))}
    </>
  );
};

export default HomeJetPoolingContainer;
