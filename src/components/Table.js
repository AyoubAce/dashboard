import React, { useState } from "react";

const Table = ({ headData, renderHead, bodyData, renderBody, limit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const initialData = limit && bodyData ? bodyData.slice(0, limit) : bodyData;
  const [showData, setShowData] = useState(initialData);
  let pages = 1;
  let range = [];
  if (limit && limit !== "undefined") {
    let page = Math.floor(bodyData.length / limit);
    pages = bodyData.length % limit === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }
  const handlePagination=(index)=>{
    setCurrentPage(index+1);
    setShowData(bodyData.slice(index*limit, (index*limit) + limit))
  }
  return (
    <div className="table-wrapper">
      <table>
        {headData && renderHead && (
          <thead>
            <tr>{headData.map((item, index) => renderHead(item, index))}</tr>
          </thead>
        )}
        {bodyData && renderBody && (
          <tbody>
            {showData.map((item, index) => renderBody(item, index))}
          </tbody>
        )}
      </table>
      <div className="pagination">
        {pages > 1 &&
          range.map((item, index) => {
            return (
              <div
                key={index}
                className={`pagination-item ${
                  currentPage === index+1 && "active"
                }`}
                onClick={()=>handlePagination(index)}
              >
                {item+1}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Table;
