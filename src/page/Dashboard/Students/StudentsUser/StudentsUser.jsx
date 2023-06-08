import dashboard from "../../../../../public/dashboard.json";
import Lottie from "lottie-react";
const StudentsUser = () => {
    return (
        <div>
            <Lottie animationData={dashboard} loop={true} />
        </div>
    );
};

export default StudentsUser;