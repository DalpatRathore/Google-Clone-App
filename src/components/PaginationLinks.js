import React, { useEffect, useState } from "react";
import "./PaginationLinks.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const PaginationLinks = ({ searchTerm }) => {
  const [startIndex, setStartIndex] = useState(-1);
  console.log("startIndex Initials :>> ", startIndex);
  useEffect(() => {
    console.log("startIndex UseEff :>> ", startIndex);
    setStartIndex(prevIndex => prevIndex + 1);
  }, [searchTerm]);

  return (
    <div className="paginationLinks">
      {startIndex > 0 && (
        <a
          href={`/search?term=${searchTerm}&start=${startIndex - 1}`}
          className="paginationLinks__link paginationLinks__link--leftChevron"
        >
          <ChevronLeftIcon></ChevronLeftIcon>
          <h5 className="paginationLinks__previous">Previous</h5>
        </a>
      )}
      <span className="paginationLinks__g">G</span>

      <a
        href={`/search?term=${searchTerm}&start=${startIndex + 1}`}
        className="paginationLinks__link paginationLinks__link--active"
      >
        <span>O</span>
        <h5 className="paginationLinks__digit">{startIndex + 1}</h5>
      </a>
      <a
        href={`/search?term=${searchTerm}&start=${startIndex + 2}`}
        className="paginationLinks__link"
      >
        <span>O</span>
        <h5 className="paginationLinks__digit">{startIndex + 2}</h5>
      </a>
      <a href="" className="paginationLinks__link">
        <span>O</span>
        <h5 className="paginationLinks__digit">{startIndex + 3}</h5>
      </a>
      <a href="" className="paginationLinks__link">
        <span>O</span>
        <h5 className="paginationLinks__digit">{startIndex + 4}</h5>
      </a>
      <a href="" className="paginationLinks__link">
        <span>O</span>
        <h5 className="paginationLinks__digit">{startIndex + 5}</h5>
      </a>
      <a href="" className="paginationLinks__link">
        <span>O</span>
        <h5 className="paginationLinks__digit">{startIndex + 6}</h5>
      </a>
      <a href="" className="paginationLinks__link">
        <span>O</span>
        <h5 className="paginationLinks__digit">{startIndex + 7}</h5>
      </a>
      <a href="" className="paginationLinks__link">
        <span>O</span>
        <h5 className="paginationLinks__digit">{startIndex + 8}</h5>
      </a>
      <a href="" className="paginationLinks__link">
        <span>O</span>
        <h5 className="paginationLinks__digit">{startIndex + 9}</h5>
      </a>
      <a href="" className="paginationLinks__link">
        <span>O</span>
        <h5 className="paginationLinks__digit">{startIndex + 10}</h5>
      </a>
      <span className="paginationLinks__gle">
        <span>g</span>
        <span>l</span>
        <span>e</span>
      </span>
      <a
        href={`/search?term=${searchTerm}&start=${startIndex + 10}`}
        className="paginationLinks__link paginationLinks__link--rightChevron"
      >
        <ChevronRightIcon></ChevronRightIcon>
        <h5 className="paginationLinks__next">Next</h5>
      </a>
    </div>
  );
};

export default PaginationLinks;
