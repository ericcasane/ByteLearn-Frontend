import { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import { Logo } from '@/components/icons';
import NextLink from "next/link";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // handle login logic here
  };

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
          />
          <Button type="submit" className="w-full bg-indigo-600">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
