import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../services/formsApi';
import { AuthContext } from '../../context/AuthContext';
import BiometricLogin from '../../components/auth/BiometricLogin';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await API.post('/auth/login', { email, password });
    login(res.data.token);
    navigate(res.data.role === 'admin' ? '/admin' : '/account');
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-4'>
      <div className='w-full max-w-sm bg-white p-6 rounded shadow'>
        <h2 className='text-xl font-bold mb-4 text-center'>Login</h2>
        <input className='w-full mb-2 p-2 border rounded' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
        <input className='w-full mb-4 p-2 border rounded' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        <button className='w-full bg-blue-600 text-white py-2 rounded' onClick={handleLogin}>Login</button>
        <BiometricLogin />
      </div>
    </div>
  );
}
