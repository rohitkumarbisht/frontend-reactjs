import { useState, useEffect } from "react";
import config from "../config/config";
import AlertDialog from "../components/common/AlertDialog";

const RedirectToLogin = ({ error, status }) => {
  const [openAlert, setOpenAlert] = useState(false);

  const handleCloseAlert = () => {
    setOpenAlert(false);
    window.parent.location.href = config.reportsUrl;
  };

  useEffect(() => {
    setOpenAlert(true);
  }, []);

  return (
    <AlertDialog
      open={openAlert}
      handleClose={handleCloseAlert}
      error={error}
      status={status}
    />
  );
};

export default RedirectToLogin;
