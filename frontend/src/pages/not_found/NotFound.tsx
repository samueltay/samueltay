import React from "react";
import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <div>
      <Helmet>
        <title>Page Not Found!</title>
      </Helmet>
      <h1>404 Error!</h1>
      <p>Page Not Found!</p>
      {/* Add more content */}
    </div>
  );
}

export default NotFound;
