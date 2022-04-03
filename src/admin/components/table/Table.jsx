import React, { useState, useMemo } from "react";

import "./table.css";

const Table = (props) => {
  const { bodyData, headData, renderBody, renderHead, limit } = props;
  const initDataShow =
    limit && bodyData ? bodyData.slice(0, Number(limit)) : bodyData;

  // const [dataShow, setDataShow] = useState(initDataShow);

  let pages = 1;

  let range = [];

  if (limit !== undefined) {
    pages = Math.ceil(bodyData.length / Number(limit));
    range = [...Array(pages).keys()];
  }

  const [currPage, setCurrPage] = useState(0);

  const dataShow = useMemo(() => {
    const start = limit * currPage;
    const end = start + limit;
    return bodyData.slice(start, end);
  }, [currPage, bodyData.length]);

  return (
    <div>
      <div className="table-wrapper">
        <table>
          {headData && renderHead ? (
            <thead>
              <tr>{headData.map((item, index) => renderHead(item, index))}</tr>
            </thead>
          ) : null}
          {bodyData && renderBody ? (
            <tbody>
              {dataShow.length > 0 &&
                dataShow.map((item, index) => renderBody(item, index))}
            </tbody>
          ) : null}
        </table>
      </div>
      {pages > 1 ? (
        <div className="table-pagination">
          {range.map((item, index) => (
            <div
              key={index}
              className={`table-pagination-item ${
                currPage === index ? "active" : ""
              }`}
              onClick={() => setCurrPage(index)}
            >
              {item + 1}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Table;
