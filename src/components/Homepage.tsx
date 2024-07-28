import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { loginUser, signupUser } from '../features/auth/authSlice';
import background from '../assets/techno-background-mq8hgexbdg8ms4xq.jpg';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interests, setInterests] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated, loading, error } = useAppSelector((state) => state.auth);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(loginUser({ email, password }));
    if (loginUser.fulfilled.match(result)) {
      navigate('/dashboard');
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(signupUser({ email, password, name, phone, interests }));
    if (signupUser.fulfilled.match(result)) {
      alert('Signup successful');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left side with image */}
      <div className="w-3/4 bg-cover bg-center h-full" style={{ backgroundImage: `url(${background})` }}></div>
      {/* Right side with form */}
      <div className="w-1/4 flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
          {error && <p className="text-red-500">{error}</p>}
          <form className="space-y-4" onSubmit={isLogin ? handleLogin : handleSignup}>
            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input type="text" className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Interests</label>
                  <input type="text" className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={interests} onChange={(e) => setInterests(e.target.value)} required />
                </div>
              </>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" disabled={loading}>
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <p className="text-sm text-center text-gray-600">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <a href="#" className="text-blue-500 hover:underline" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Sign up' : 'Login'}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
