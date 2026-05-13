'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn('wytpass', { callbackUrl: '/dashboard' });
  };

  return (
    <main className="flex-center" style={{ minHeight: '100vh', padding: '20px' }}>
      <div className="glass animate-fade-in" style={{ width: '100%', maxWidth: '400px', padding: '40px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '8px', textAlign: 'center' }}>Welcome Back</h2>
        <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '32px' }}>Please enter your details</p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleLogin}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '14px', fontWeight: '500' }}>Email Address</label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              style={{ 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid var(--glass-border)', 
                padding: '12px', 
                borderRadius: '8px', 
                color: 'white',
                outline: 'none'
              }} 
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '14px', fontWeight: '500' }}>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              style={{ 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid var(--glass-border)', 
                padding: '12px', 
                borderRadius: '8px', 
                color: 'white',
                outline: 'none'
              }} 
            />
          </div>

          <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
            Sign In
          </button>
        </form>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '24px 0' }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
          <span style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase' }}>Or continue with</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }}></div>
        </div>

        <button 
          onClick={() => signIn('wytpass', { callbackUrl: '/dashboard' })}
          className="btn btn-outline" 
          style={{ width: '100%', justifyContent: 'center', gap: '12px' }}
        >
          <img src="https://wytnet.com/logo.png" alt="WytPass" style={{ width: '20px', height: '20px' }} />
          Sign in with WytPass
        </button>

        <p style={{ marginTop: '24px', textAlign: 'center', color: '#94a3b8' }}>
          Don't have an account? <Link href="/signup" style={{ color: 'var(--primary)' }}>Sign Up</Link>
        </p>
        
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <Link href="/" style={{ fontSize: '14px', color: '#94a3b8' }}>← Back to home</Link>
        </div>
      </div>
    </main>
  );
}
