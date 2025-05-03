import { useState, useEffect } from "react";

const VerifyCode: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [isSendCode, setIsSendCode] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(300);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isSendCode && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isSendCode, seconds]);

  const handleEmailKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendCode();
    }
  };

  // mm:ss 포맷
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  const handleSendCode = () => {
    setIsSendCode(true);
    setSeconds(300); // 타이머 리셋
    // 인증코드 발송 로직
    alert("인증코드 발송");
  };

  const handleCheckCode = () => {
    // 인증코드 발송 로직
    alert("인증코드 확인");
  };

  return (
    <div className="auth-login-inner">
      <div className="auth-form">
        {!isSendCode ? (
          <>
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`auth-input${errorMsg ? " auth-input-error" : ""}`}
              onKeyDown={handleEmailKeyDown}
              onFocus={() => setErrorMsg("")}
            />
            {errorMsg && <div className="auth-error-message">{errorMsg}</div>}
            <p>입력하신 메일 주소로 코드가 발송됩니다.</p>
            <button onClick={handleSendCode} className="auth-button">
              Send Code
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="auth-input"
            />
            <p style={{ marginBottom: 0 }}>
              전송 후 5분 안에 입력해주세요. <br />
              <span className="auth-timer">{formatTime(seconds)}</span>
            </p>
            <button
              className="auth-button"
              onClick={seconds === 0 ? handleSendCode : handleCheckCode}
              disabled={seconds !== 0 ? false : undefined}
            >
              {seconds === 0 ? "Resend Code" : "Check Code"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyCode;
