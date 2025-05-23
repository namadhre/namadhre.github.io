import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-dark">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-highlight">404</h1>
        <p className="text-xl text-slate mb-4">Oops! Page not found</p>
        <Link to="/" className="text-highlight hover:text-highlight/80 transition-colors underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
