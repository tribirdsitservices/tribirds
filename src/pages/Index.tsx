import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* Index redirects to Home - Home is the actual page component */
const Index = () => {
  const navigate = useNavigate();
  useEffect(() => { navigate("/", { replace: true }); }, [navigate]);
  return null;
};

export default Index;
