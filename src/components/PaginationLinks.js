import React, { useEffect, useState } from "react";
import "./PaginationLinks.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { useHistory } from "react-router";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const PaginationLinks = ({ searchTerm, index }) => {
  const [pageIndex, setPageIndex] = useState(index);
  const [{}, dispatch] = useStateValue();
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: searchTerm,
      startIndex: pageIndex,
    });
    history.push(`/search?term=${searchTerm}&page=${pageIndex / 10 - 0.1 + 1}`);
    document.title = `${searchTerm} - Google Search`;
  }, [searchTerm, pageIndex]);
  // console.log("object :>> ", pageIndex);
  // console.log("Page :>> ", searchTerm);
  return (
    <div className="paginationLinks">
      {pageIndex > 1 && (
        <button
          onClick={() => setPageIndex(pageIndex - 10)}
          className="paginationLinks__btnPN paginationLinks__link--leftChevron"
        >
          <ChevronLeftIcon></ChevronLeftIcon>
          <p className="paginationLinks__pn">Previous</p>
        </button>
      )}

      <span className="paginationLinks__g">G</span>
      {numbers.map((number, index) => {
        return (
          <button
            onClick={() => setPageIndex(index * 10 + 1)}
            key={index}
            className={`paginationLinks__link ${
              pageIndex / 10 - 0.1 + 1 === number && "paginationLinks__disabled"
            }`}
          >
            <span>o</span>
            <p className="paginationLinks__digit">{number}</p>
          </button>
        );
      })}

      <span className="paginationLinks__gle">
        <span>g</span>
        <span>l</span>
        <span>e</span>
      </span>

      {pageIndex < 90 && (
        <button
          onClick={() => setPageIndex(pageIndex + 10)}
          className="paginationLinks__btnPN paginationLinks__link--leftChevron"
        >
          <ChevronRightIcon></ChevronRightIcon>
          <p className="paginationLinks__pn">Next</p>
        </button>
      )}
    </div>
  );
};

export default PaginationLinks;
