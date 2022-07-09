import React from "react";
import "./Loading.css";

export const Loading = () => {
  return (
    <div className="d-flex justify-content-center fullscreen">
      <div className="spinner-grow" role="status">
        <span className="visually-hidden "></span>
      </div>
    </div>
  );
};
export default Loading;
