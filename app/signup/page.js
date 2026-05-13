'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function SignupPage() {
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    signIn('wytpass', { callbackUrl: '/dashboard' });
  };

  return (
    <main className="flex-center" style={{ minHeight: '100vh', padding: '20px' }}>
      <div className="glass animate-fade-in" style={{ width: '100%', maxWidth: '400px', padding: '40px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '8px', textAlign: 'center' }}>Get Started</h2>
        <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '32px' }}>Create your free account today</p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSignup}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '14px', fontWeight: '500' }}>Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
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
            Create Account
          </button>
        </form>

        <p style={{ marginTop: '24px', textAlign: 'center', color: '#94a3b8' }}>
          Already have an account? <Link href="/login" style={{ color: 'var(--primary)' }}>Log In</Link>
        </p>
        
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <Link href="/" style={{ fontSize: '14px', color: '#94a3b8' }}>← Back to home</Link>
        </div>
      </div>
    </main>
  );
}
