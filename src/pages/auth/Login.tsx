import React, { useState, useRef } from "react";
import "./auth.css";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const validateForm = () => {
    let valid = true;
    if (!email) {
      setEmailError("이메일을 입력하세요.");
      valid = false;
    } else if (!email.includes("@")) {
      setEmailError(`이메일 주소에 '@'를 포함해 주세요.`);
      valid = false;
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }
    return valid;
  };

  const handleEmailKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      passwordInputRef.current && passwordInputRef.current.focus();
    }
  };

  const handlePasswordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    if (!validateForm()) return;

    alert(`이메일 : ${email} 비밀번호 : ${password}`);
    // 로그인 처리 로직
  };

  return (
    <div className="auth-login-inner">
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`auth-input${emailError ? " auth-input-error" : ""}`}
          onKeyDown={handleEmailKeyDown}
          onFocus={() => setEmailError("")}
        />
        {emailError && <div className="auth-error-message">{emailError}</div>}
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`auth-input${passwordError ? " auth-input-error" : ""}`}
          ref={passwordInputRef}
          onKeyDown={handlePasswordKeyDown}
          onFocus={() => setPasswordError(false)}
        />
        {passwordError && (
          <div className="auth-error-message">비밀번호를 입력하세요.</div>
        )}
        <button type="submit" className="auth-button">
          Sign in
        </button>
      </form>
      <Link to="/login/verify-code" className="auth-forgot">
        Forgot password?
      </Link>
    </div>
  );
};

export default Login;
