/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useQuery } from "react-query";
import { AppState, Loader } from "../../../../reusables";
import { getJetPoolingList } from "../../../../routes/api";
import JetpoolingCard from "../../JetPooling/components/JetpoolingCard";

const HomeJetPoolingContainer = () => {
  const {
    isLoading,
    error,
    data = [],
  } = useQuery("getJetPoolings", getJetPoolingList);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <AppState />;
  }

  const jetPoolings = data.data || [];

  console.log({ jetPoolings });

  return (
    <>
      {jetPoolings.map((data: Record<string, any>) => (
        <JetpoolingCard data={data} key={data?.id} />
      ))}
    </>
  );
};

export default HomeJetPoolingContainer;
