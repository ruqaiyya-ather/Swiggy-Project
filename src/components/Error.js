import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>404 Not Found, Something went wrong </h1>
      <p>{err.statusText}</p>
      <p>{err.status}</p>
    </div>
  );
};

export default Error;