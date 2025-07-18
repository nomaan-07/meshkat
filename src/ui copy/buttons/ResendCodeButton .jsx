import { useState, useEffect } from "react";
import { FiRotateCw } from "react-icons/fi";
import Button from "./Button";
import { useResendOtp } from "../../features/authentication/useResendOtp";

const ResendCodeButton = () => {
  const { resendOtp } = useResendOtp();
  const [countdown, setCountdown] = useState(120);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    let timer;

    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else {
      setIsResendDisabled(false);
    }

    return () => clearTimeout(timer);
  }, [countdown]);

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  function handleResendCode() {
    resendOtp();
    setCountdown(120);
    setIsResendDisabled(true);
  }

  return (
    <Button
      onClick={handleResendCode}
      disabled={isResendDisabled}
      variant="danger"
    >
      <FiRotateCw
        className={`ml-1.5 ${isResendDisabled ? "animate-spin" : ""}`}
      />
      {isResendDisabled
        ? `ارسال مجدد پس از ${formatTime(countdown)}`
        : "ارسال مجدد کد"}
    </Button>
  );
};

export default ResendCodeButton;
