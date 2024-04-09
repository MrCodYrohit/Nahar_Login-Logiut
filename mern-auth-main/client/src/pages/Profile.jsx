import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
} from '../redux/user/userSlice';

export default function Profile() {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [error, setError] = useState('');

  const { currentUser, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      setError('');

      // Validate username
      if (formData.username?.length < 4 || formData.username?.length > 32) {
        setError('Username must be between 4 and 32 characters');
        dispatch(updateUserFailure({ message: 'Username must be between 4 and 32 characters' }));
        return;
      }

      // Validate password
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
      if (formData.password && !passwordRegex.test(formData.password)) {
        setError('Password must contain at least one letter, one number, and one special character');
        dispatch(updateUserFailure({ message: 'Password must contain at least one letter, one number, and one special character' }));
        return;
      }

      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        setError(data.message);
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
      setError('Something went wrong. Please try again later.');
    } finally {
      // Reset the loading state
      dispatch(updateUserFailure(null));
    }
  };

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/signout');
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 ">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-center">
            <img
              src={formData.profilePicture || currentUser.profilePicture}
              alt="profile"
              className="h-32 w-32 self-center cursor-pointer rounded-full object-cover"
              onClick={() => fileRef.current.click()}
            />
            <input
              type="file"
              ref={fileRef}
              hidden
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <p className="text-sm text-gray-600 mt-2">
              {imageError ? (
                <span className="text-red-500">
                  Error uploading image (file size must be less than 2 MB)
                </span>
              ) : imagePercent > 0 && imagePercent < 100 ? (
                <span className="text-gray-600">{`Uploading: ${imagePercent} %`}</span>
              ) : imagePercent === 100 ? (
                <span className="text-green-500">Image uploaded successfully</span>
              ) : (
                ''
              )}
            </p>
          </div>

          <input
            defaultValue={currentUser.username}
            type="text"
            id="username"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            defaultValue={currentUser.email}
            type="email"
            id="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
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
                defaultChecked={currentUser.gender === 'male'}
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
                defaultChecked={currentUser.gender === 'female'}
              />
              <label htmlFor="gender">Female</label>
            </div>
          </div>

          <div className="relative">
            <select
              id="skill"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              onChange={handleChange}
              value={formData.skill || currentUser.skill}
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

          <div className="flex justify-between space-x-4">
            <button
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg uppercase flex-1 transition-colors duration-300"
            >
              {loading ? 'Loading...' : 'Update'}
            </button>
            <button
              type="button"
              onClick={handleDeleteAccount}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg uppercase flex-1 transition-colors duration-300"
            >
              Delete Account
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center mt-6 space-x-2">
          <span
            onClick={handleSignOut}
            className="text-blue-500 hover:text-blue-600 cursor-pointer transition-colors duration-300"
          >
            Sign out
          </span>
        </div>
        {error && (
          <p className="text-red-500 mt-4 text-center">
            {error}
          </p>
        )}
        <p className="text-green-500 mt-4 text-center">
          {updateSuccess && 'User is updated successfully!'}
        </p>
      </div>
    </div>
  );
}