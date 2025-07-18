import { useState } from 'react';
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import image from "../assets/google.png";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      username,
      password,
    };
    console.log(formData);

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials");
      }

      const data = await response.json();
      localStorage.setItem("token", data.accessToken);
      toast.success("Login Successful!");
      navigate('/home')
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-[700px] bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <div className="block">
          <h1 className="text-2xl text-black">Login</h1>
          <p className="text-xs text-black">Hi, Welcome back🙌</p>
        </div>

        <button className="mt-6 hover:bg-gray-100 duration-200 cursor-pointer px-3 py-2.5 w-full border border-gray-200 rounded-md flex items-center justify-center space-x-3">
          <img src={image} alt="Google logo" className="w-4" />
          <span className="font-medium text-sm">Sign up with Google</span>
        </button>

        <div className="flex space-x-2 items-center my-6">
          <hr className="border border-gray-100 flex-1" />
          <span className="text-xs text-gray-500">or Login with Email</span>
          <hr className="border border-gray-100 flex-1" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Username</label>
          <input
            type="text"
            value={username}
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Password</label>
          <div className="relative">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className="absolute inset-y-0 right-0 pr-3 text-gray-500 flex items-center cursor-pointer">
              {isPasswordVisible ? (
                <AiTwotoneEyeInvisible onClick={() => setIsPasswordVisible(false)} />
              ) : (
                <AiTwotoneEye onClick={() => setIsPasswordVisible(true)} />
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          {loading ? (
            <FaSpinner className="animate-spin text-xl text-white mx-auto text-center" />
          ) : (
            "Submit"
          )}
        </button>

        <p className="text-md text-center text-gray-400 cursor-pointer my-5">
          Not registered yet? <a href="#" className="text-purple-700 underline cursor-pointer">Create an account</a>
        </p>

        {error && (
          <p className="text-red-500 text-center mt-2">{error}</p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
