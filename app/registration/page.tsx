'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationError, setValidationError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setValidationError("All fields are required.");
    } else if (password.length < 8) {
      setValidationError("Password must be at least 8 characters.");
    } else if (password !== confirmPassword) {
      setValidationError("Passwords mis-match.");
    } else {
      setValidationError("");
      alert("Sign-up successful!");
      window.location.href = "/login";
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setConfirmPassword(newPassword);

    if (newPassword && newPassword !== password) {
      setValidationError("Passwords mis-match.");
    } else {
      setValidationError("");
    }
  };

  useEffect(() => { }, []);

  return (
    <div className="bg-[#fbf9f9] flex flex-col items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/drt1jptk7/image/upload/v1697981918/rdaepubukra09usnvvh9.png')" }}>
      <div className="absolute inset-0 bg-[rgba(251, 249, 249, 0.8 flex flex-col items-center justify-center)]" style={{ backgroundImage: "url('https://res.cloudinary.com/drt1jptk7/image/upload/v1697984327/qlikmfoiyas6cfu66mif.png')" }}>
        <div className="bg-grey-5 w-[70%] p-8 rounded-lg shadow-lg " >
          <h2 className="font-bold text-4xl text-center text-[#40B93C] mb-4">

            Welcome to SeraWazi </h2>
          <br />
          <p className="text-2xl text-left text-[#40B93C] mb-0 ">
            Sign Up <br />
            It is our pleasure to have you onboard!
          </p>
          <br />
          <form onSubmit={handleSubmit} className="flex flex-wrap justify-between border border-white p-4 p-16 rounded-[47px]  p-[64px]">


            <div className="w-[48%] mb-4">
              <label
                htmlFor="firstName"
                className="block font-medium text-lg text-white"
              >
                <br />
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full h-10 px-2 border border-solid border-[#527845] rounded-md focus:outline-none text-black rounded-[16px]"
                placeholder="Enter your First Name"
              />
            </div>
            <br /><br />
            <div className="w-[48%] mb-4">
              <label
                htmlFor="lastName"
                className="block font-medium text-lg text-white"
              >
                <br />
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full h-10 px-2 border border-solid border-[#527845] rounded-md focus:outline-none text-black rounded-md"
                placeholder="Enter your Last Name"
              />
            </div>
            <div className="w-[48%] mb-4">
              <label
                htmlFor="email"
                className="block font-medium text-lg text-white"
              >
                <br />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 px-2 border border-solid border-[#527845] rounded-md focus:outline-none text-black rounded-md"
                placeholder="Enter your Email Address"
              />
            </div>

            <div className="w-[48%] mb-4">
              <label
                htmlFor="lastName"
                className="block font-medium text-lg text-white"
              >
                <br />
                User Name
              </label>
              <input
                type="text"
                id="userName"
                onChange={(e) => setLastName(e.target.value)}
                className="w-full h-10 px-2 border border-solid border-[#527845] rounded-md focus:outline-none text-black rounded-md"
                placeholder="Enter your User Name"
              />
            </div>


            <div className="w-[48%] mb-4 relative">
              <label
                htmlFor="password"
                className="block font-medium text-lg text-white"
              >
                <br />
                Create Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-10 px-2 border border-solid border-[#527845] rounded-md focus:outline-none text-black pr-10 rounded-md"
                  placeholder="Create a Password (at least 8 characters)"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEye : faEyeSlash}
                    className="h-6 w-6 text-[#527845]"
                  />
                </button>
              </div>
            </div>
            <div className="w-[48%] mb-4 relative">
              <label
                htmlFor="confirmPassword"
                className="block font-medium text-lg text-white"
              >
                <br />
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="w-full h-10 px-2 border border-solid border-[#527845] mt-1 rounded-md focus:outline-none text-black pr-10 rounded-md"
                  placeholder="Confirm Password"
                />
                {validationError && (
                  <div className="text-red-500 mt-2 text-center">
                    {validationError}
                  </div>
                )}
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  style={{ zIndex: 1 }}
                >
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? faEye : faEyeSlash}
                    className="h-24 mt-2 w-6 text-[#527845]"
                  />
                </button>
              </div>
            </div>
            <div className="w-full mb-4">
              <br />
            </div>



            <div className="w-full ml-80">
              <button
                type="submit"
                className="w-[65%] h-10 bg-[#40B93C] text-white text-lg rounded-md mt-4 item-center w-[48%] mb-4 relative"
              >
                Sign up
              </button>
              <div>

                <p className="text-2xl text-white text-center mr-64">
                  Already have an account?{" "}
                  <Link href="/login">
                    <span className="font-bold text-2xl text-[#40B93C]">Sign in</span>
                  </Link>
                </p>
              </div>

            </div>
            <br />
          </form>
        </div>
      </div>
    </div>

  );
};

export default Registration;
