import { Oval } from "react-loader-spinner";

const loadingSpinnerStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const LoadingSpinner = () => (
  <div style={loadingSpinnerStyle}>
    <Oval
      visible={true}
      height="50"
      width="50"
      color="#2773FF"
      secondaryColor="#A0BDF4"
      ariaLabel="oval-loading"
      strokeWidth={6}
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
);

export default LoadingSpinner;