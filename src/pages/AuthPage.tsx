import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Logo } from "../components/Logo";

type AuthPageProps = {
  mode: "login" | "register" | "verify-email" | "forgot-password" | "reset-password";
};

export default function AuthPage({ mode }: AuthPageProps) {
  const navigate = useNavigate();
  const isLogin = mode === "login";
  const isRegister = mode === "register";
  const isVerify = mode === "verify-email";
  const isForgot = mode === "forgot-password";
  const isReset = mode === "reset-password";
  const [statusText, setStatusText] = useState("");

  const pageTitle = isLogin
    ? "Welcome back"
    : isRegister
      ? "Create your studzAi account"
      : isVerify
        ? "Verify your email"
        : isForgot
          ? "Forgot your password?"
          : "Reset your password";

  const pageSubtitle = isLogin
    ? "Sign in to continue learning with studzAi."
    : isRegister
      ? "Create your account to unlock personalized AI learning."
      : isVerify
        ? "Enter the verification code sent to your email."
        : isForgot
          ? "We'll send you a secure link to reset your password."
          : "Create a new password to secure your account.";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      setStatusText("Login successful. Redirecting to dashboard...");
      setTimeout(() => navigate("/dashboard"), 700);
      return;
    }

    if (isRegister) {
      setStatusText("Account created. Continue with email verification.");
      setTimeout(() => navigate("/verify-email"), 700);
      return;
    }

    if (isVerify) {
      setStatusText("Email verified successfully. Redirecting...");
      setTimeout(() => navigate("/dashboard"), 700);
      return;
    }

    if (isForgot) {
      setStatusText("Reset link requested. Continue to reset password.");
      setTimeout(() => navigate("/reset-password"), 700);
      return;
    }

    setStatusText("Password updated. Please sign in with your new password.");
    setTimeout(() => navigate("/login"), 700);
  };

  return (
    <Layout>
      <div className="section-padding py-32 flex flex-col items-center justify-center min-h-[70vh]">
        <Logo size="lg" className="mb-10" />
        <div className="w-full max-w-md p-8 rounded-2xl glass">
          <h1 className="text-2xl font-bold text-gradient text-center">{pageTitle}</h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 text-center">{pageSubtitle}</p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            {(isLogin || isRegister || isForgot) && (
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-studz-brand/50"
                />
              </div>
            )}

            {isRegister && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-studz-brand/50"
                />
              </div>
            )}

            {(isLogin || isRegister || isReset) && (
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1.5">
                  {isReset ? "New password" : "Password"}
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder={isReset ? "Enter new password" : "Enter password"}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-studz-brand/50"
                />
              </div>
            )}

            {(isRegister || isReset) && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1.5">
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-studz-brand/50"
                />
              </div>
            )}

            {isVerify && (
              <div>
                <label htmlFor="verificationCode" className="block text-sm font-medium mb-1.5">
                  Verification code
                </label>
                <input
                  id="verificationCode"
                  type="text"
                  placeholder="Enter 6-digit code"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-studz-brand/50"
                />
              </div>
            )}

            <button type="submit" className="w-full btn-accent !py-3.5 !rounded-xl">
              {isLogin
                ? "Sign in"
                : isRegister
                  ? "Create account"
                  : isVerify
                    ? "Verify email"
                    : isForgot
                      ? "Send reset link"
                      : "Update password"}
            </button>
          </form>

          {statusText && (
            <p className="mt-4 text-xs text-center text-studz-brand dark:text-studz-brandLight">
              {statusText}
            </p>
          )}

          <div className="mt-6 text-sm text-zinc-500 text-center space-y-1.5">
            {isLogin && (
              <>
                <p>
                  Don&apos;t have an account?{" "}
                  <Link to="/register" className="text-studz-brand hover:underline">
                    Create one
                  </Link>
                </p>
                <p>
                  <Link to="/forgot-password" className="text-studz-brand hover:underline">
                    Forgot password?
                  </Link>
                </p>
              </>
            )}

            {isRegister && (
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-studz-brand hover:underline">
                  Sign in
                </Link>
              </p>
            )}

            {(isForgot || isReset) && (
              <p>
                Back to{" "}
                <Link to="/login" className="text-studz-brand hover:underline">
                  login
                </Link>
              </p>
            )}

            {isVerify && (
              <p>
                Didn&apos;t get a code?{" "}
                <Link to="/verify-email" className="text-studz-brand hover:underline">
                  Resend
                </Link>
              </p>
            )}

            <p>
              <Link to="/" className="text-studz-brand hover:underline">
                Back to home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
