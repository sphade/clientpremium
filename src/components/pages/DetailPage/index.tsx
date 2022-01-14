import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useCheckCharterType } from "../../../hooks";
import { Preloader } from "../../../reusables";
import { fetchCharterById } from "../../../routes/api";
import { charterMappings } from "../../../utils";
import DetailBanner from "./DetailBanner";
import DetailContent from "./DetailContent";
import FeaturedItems from "./FeaturedItems";

const DetailPage = () => {
  const { id = "" }: { id: string } = useParams();

  const { charterType } = useCheckCharterType();

  const charterQuery = charterMappings[charterType.toLowerCase()] || "";

  const {
    isLoading,
    error,
    data = [],
  } = useQuery([id, charterQuery], async () => {
    const data = await fetchCharterById(charterQuery, id);
    return data;
  });

  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    return <h3>Error Fetching</h3>;
  }

  const charter = data?.data;

  return (
    <div style={{ backgroundColor: "white" }}>
      <DetailBanner charter={charter} />
      <DetailContent charter={charter} />
      <FeaturedItems />
    </div>
  );
};

export default DetailPage;
