// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import OAuth from '../components/OAuth';

// export default function SignUp() {
//   const [formData, setFormData] = useState({});
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       setError('');

//       // Validate username
//       if (formData.username.length < 4 || formData.username.length > 32) {
//         setError('Username must be between 4 and 32 characters');
//         setLoading(false);
//         return;
//       }

//       // Validate password
//       const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
//       if (!passwordRegex.test(formData.password)) {
//         setError('Password must contain at least one letter, one number, and one special character');
//         setLoading(false);
//         return;
//       }

//       const res = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       console.log(data);
//       setLoading(false);
//       if (data.message === 'User already exists') {
//         setError(data.message);
//         return;
//       }
//       navigate('/sign-in');
//     } catch (error) {
//       setLoading(false);
//       setError('An error occurred. Please try again later.');
//     }
//   };

//   const handleReset = () => {
//     setFormData({});
//     setError('');
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-200">
//       <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">Sign Up</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Username"
//             id="username"
//             className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={handleChange}
//             value={formData.username || ''}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             id="email"
//             className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={handleChange}
//             value={formData.email || ''}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             id="password"
//             className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={handleChange}
//             value={formData.password || ''}
//           />
//           <input
//             type="text"
//             placeholder="gender"
//             id="gender"
//             className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={handleChange}
//             value={formData.gender || ''}
//           />
//           <input
//             type="text"
//             placeholder="skill"
//             id="skill"
//             className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={handleChange}
//             value={formData.skill || ''}
//           />

//           <div className="flex justify-between space-x-4 mt-6">
//             <button
//               disabled={loading}
//               className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg uppercase flex-1 transition-colors duration-300"
//             >
//               {loading ? 'Loading...' : 'Sign Up'}
//             </button>
//             <button
//               type="button"
//               onClick={handleReset}
//               className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg uppercase flex-1 transition-colors duration-300"
//             >
//               Reset
//             </button>
//           </div>
//         </form>
//         <OAuth />
//         <div className="flex items-center justify-center mt-6 space-x-2">
//           <p className="text-gray-700">Have an account?</p>
//           <Link to="/sign-in" className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
//             Sign in
//           </Link>
//         </div>
//         {error && <p className="text-red-500 mt-4">{error}</p>}
//       </div>
//     </div>
//   );
// }





import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');

      // Validate username
      if (formData.username.length < 4 || formData.username.length > 32) {
        setError('Username must be between 4 and 32 characters');
        setLoading(false);
        return;
      }

      // Validate password
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
      if (!passwordRegex.test(formData.password)) {
        setError('Password must contain at least one letter, one number, and one special character');
        setLoading(false);
        return;
      }

      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.message === 'User already exists') {
        setError(data.message);
        return;
      }
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError('An error occurred. Please try again later.');
    }
  };

  const handleReset = () => {
    setFormData({});
    setError('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.username || ''}
          />
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

          <div className="flex items-center mb-4">
            <label className="mr-4">Gender:</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="gender"
                name="gender"
                value="male"
                className="mr-2"
                onChange={handleChange}
              />
              <label htmlFor="gender">Male</label>
            </div>
            <div className="flex items-center ml-4">
              <input
                type="radio"
                id="gender"
                name="gender"
                value="female"
                className="mr-2"
                onChange={handleChange}
              />
              <label htmlFor="gender">Female</label>
            </div>
          </div>

          <div className="relative">
            <select
              id="skill"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              onChange={handleChange}
              value={formData.skill || ''}
            >
              <option value="">Select a skill</option>
              <option value="js">JavaScript</option>
              <option value="react">React</option>
              <option value="api">API</option>
              <option value="backend">Backend</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 fill-current text-gray-500" viewBox="0 0 20 20">
                <path d="M6 8l4 4 4-4z" />
              </svg>
            </div>
          </div>

          <div className="flex justify-between space-x-4 mt-6">
            <button
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg uppercase flex-1 transition-colors duration-300"
            >
              {loading ? 'Loading...' : 'Sign Up'}
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
          <p className="text-gray-700">Have an account?</p>
          <Link to="/sign-in" className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
            Sign in
          </Link>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
}