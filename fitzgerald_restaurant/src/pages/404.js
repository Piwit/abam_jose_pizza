import React, { useEffect } from "react";
import { navigate } from "gatsby";

const NotFoundPage = () => {
  useEffect(() => {
    // Redirect to the homepage after 3 seconds (or immediately if desired)
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 1);
    // Cleanup timeout if the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Redirecting to the homepage...</p>
    </div>
  );
};

export default NotFoundPage;
