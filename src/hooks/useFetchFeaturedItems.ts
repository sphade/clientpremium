/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getFeaturedItemsApi } from "../routes/api";
import { charterMappings } from "../utils";
import { CharterType } from "./types";
import useCheckCharterType from "./useCheckCharterType";

const useFetchFeaturedItems = () => {
  const { id = "" }: { id: string } = useParams();

  const { charterType } = useCheckCharterType();

  const isLand = charterType === CharterType.LAND;
  const isSea = charterType === CharterType.SEA;
  const text = isLand ? "Car" : isSea ? "Boat" : "Jet";

  const type = charterMappings[charterType.toLowerCase()];

  const {
    data = [],
    error,
    isLoading,
  } = useQuery(id, async () => {
    const data = await getFeaturedItemsApi({
      type,
      id,
    });
    return data;
  });

  return { data, isLoading, error, text };
};

export default useFetchFeaturedItems;
