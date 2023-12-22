import { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import { Logo } from '@/components/icons';
import NextLink from "next/link";
import { apiLogin, apiPOST } from '@/utils/apiUtils';
import { redirect } from 'next/dist/server/api-utils';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    apiLogin(username, password);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md">
        <NextLink className="flex justify-center" href="/">
            <Logo size={90}/>
        </NextLink>
        <h2 className="mb-6 text-2xl font-bold text-center ">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='current-password'
          />
          <Button type="submit" className="w-full bg-indigo-600">
            Login
          </Button>
          <div className="text-center">
            <h2 className="text-md font-medium text-gray-600 text-center pb-2">
              Demo accounts credentials:
            </h2>
            <Button
              type='button'
              className="ml-1"
              onClick={() => {
                setUsername('student');
                setPassword('password123');
              }}
            >Student</Button>
            <Button
              type='button'
              className="ml-1"
              onClick={() => {
                setUsername('teacher');
                setPassword('password123');
              }}
            >Teacher</Button>
            <Button
              type='button'
              className="ml-1"
              onClick={() => {
                setUsername('admin');
                setPassword('password123');
              }}
            >Admin</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
