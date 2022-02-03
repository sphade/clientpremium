/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; //

import { useHistory } from "react-router-dom";
import { APP_ROUTES } from "../../../routes/path";
import { useCheckCharterType } from "../../../hooks";
import { Pagination } from "@mui/material";
import useGlobalStoreProvider from "../../../context";
import CharterCard from "./components/CharterCard";

const AvailableCharter = ({ charter }: { charter: Record<string, any> }) => {
  const history = useHistory();

  const { isLand, charterType, isSea } = useCheckCharterType();
  const [pageNumber, setPageNumber] = useState(1);
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);

  const {
    state: { charter: storeCharter },
  } = useGlobalStoreProvider();

  const itemsToDisplay = 2;

  const [newCharter, setNewCharter] = useState([]);

  const handleLightBoxView = ({
    item,
    index,
  }: {
    item: any;
    index: number;
  }) => {
    setImages(item?.ProductImages.map((image: any) => image?.url) || []);
    setPhotoIndex(index);
    setOpen(true);
  };

  const handlePageChange = () => {
    const beginning =
      pageNumber === 1 ? pageNumber - 1 : (pageNumber - 1) * itemsToDisplay;
    const ending = pageNumber * itemsToDisplay;
    const newSliceCharter = charter.slice(beginning, ending);
    setNewCharter(newSliceCharter);
  };

  const handleCharterCar = ({ item }: { item: Record<string, any> }) => {
    history.push(
      APP_ROUTES.getBookingSummaryPrimary({
        type: charterType.toLowerCase(),
        id: item.id,
      }),
      storeCharter || {}
    );
  };

  useEffect(() => {
    setNewCharter(charter.slice(0, itemsToDisplay));
  }, [charter]);

  useEffect(() => {
    handlePageChange();
  }, [pageNumber]);

  return (
    <div className="private-jets">
      <h3 className="private-jets__title">
        AVAILABLE {isLand ? "CARS" : "PRIVATE JETS"}{" "}
      </h3>

      {newCharter.map((item: any, index: number) => (
        <CharterCard
          key={index}
          item={item}
          handleCharterCar={handleCharterCar}
          handleLightBoxView={handleLightBoxView}
        />
      ))}

      <div className="private-jets__footer">
        <Pagination
          onChange={(e, page: number) => {
            setPageNumber(page);
          }}
          count={charter.length / itemsToDisplay}
          variant="outlined"
          shape="rounded"
        />
        {/* <p className="private-jets__footer--sumary">Showing 4 from 12 Jets</p>
        <div className="private-jets__footer--buttons">
          <button>
            <span>{"<<"}</span>
            <span>Previous</span>
          </button>

          <div className="paginations">
            <h3 className="active">1</h3>
            <h3>2</h3>
            <h3>3</h3>
          </div>
          <button>
            <span>Next</span>
            <span>{">>"}</span>
          </button>
        </div> */}
      </div>

      {open && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() => {
            const newIndex = (photoIndex + images.length - 1) % images.length;
            setPhotoIndex(newIndex);
          }}
          onMoveNextRequest={() => {
            const next = (photoIndex + 1) % images.length;
            setPhotoIndex(next);
          }}
        />
      )}
    </div>
  );
};

export default AvailableCharter;
