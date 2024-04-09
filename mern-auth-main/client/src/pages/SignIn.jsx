
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../components/OAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));

      // Display the pop-up animation
      toast.success('Successfully Logged In!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });

      // sleep for 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Navigate to the profile page
      navigate('/profile');
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  const handleReset = () => {
    setFormData({});
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.email || ''}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.password || ''}
          />

          <div className="flex justify-between space-x-4">
            <button
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg uppercase flex-1 transition-colors duration-300"
            >
              {loading ? 'Loading...' : 'Sign In'}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg uppercase flex-1 transition-colors duration-300"
            >
              Reset
            </button>
          </div>
        </form>
        <OAuth />
        <div className="flex items-center justify-center mt-6 space-x-2">
          <p className="text-gray-700">Don't Have an account?</p>
          <Link to="/sign-up" className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
            Sign up
          </Link>
        </div>
        {error && (
          <p className="text-red-500 mt-4">
            {error.message || 'Something went wrong!'}
          </p>
        )}
        <ToastContainer />
      </div>
    </div>
  );
}