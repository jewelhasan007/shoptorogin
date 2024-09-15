import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error.message);
    return (
        <div>
           <h1 className="text-2xl font-bold text-red-500"> Error: {error.message}</h1>
        </div>
    );
};

export default ErrorPage;