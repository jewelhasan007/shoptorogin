import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error.message);
    return (
        <div>
            THIS is ERROR PAGE...
        </div>
    );
};

export default ErrorPage;