/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import JetpoolingCard from "../../JetPooling/components/JetpoolingCard";

const HomeJetPoolingContainer = ({
  jetPoolings,
}: {
  jetPoolings: Record<string, any>[];
}) => {
  return (
    <>
      {jetPoolings.map((data: Record<string, any>) => (
        <JetpoolingCard data={data} key={data?.id} />
      ))}
    </>
  );
};

export default HomeJetPoolingContainer;
