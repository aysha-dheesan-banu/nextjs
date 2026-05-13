'use client';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="flex-center" style={{ minHeight: '100vh', flexDirection: 'column', gap: '20px' }}>
        <div style={{ width: '40px', height: '40px', border: '4px solid var(--glass-border)', borderTopColor: 'var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
        <p>Loading your profile...</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!session) return null;
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside className="glass" style={{ width: '260px', borderRadius: '0', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', padding: '30px' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '40px' }} className="gradient-text">NextFlow</div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[
            { name: 'Overview', icon: '📊' },
            { name: 'Analytics', icon: '📈' },
            { name: 'Customers', icon: '👥' },
            { name: 'Settings', icon: '⚙️' }
          ].map((item, i) => (
            <Link 
              key={i} 
              href="/dashboard" 
              className="btn btn-outline" 
              style={{ justifyContent: 'flex-start', border: 'none', background: i === 0 ? 'rgba(255,255,255,0.05)' : 'transparent' }}
            >
              <span style={{ marginRight: '12px' }}>{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', position: 'absolute', bottom: '30px', left: '30px', right: '30px' }}>
          <button 
            onClick={() => signOut({ callbackUrl: '/' })} 
            className="btn btn-outline" 
            style={{ width: '100%', justifyContent: 'center', color: '#ef4444' }}
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '28px' }}>Dashboard Overview</h1>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div className="glass" style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              background: session?.user?.image ? `url(${session.user.image})` : 'linear-gradient(var(--primary), var(--secondary))',
              backgroundSize: 'cover'
            }}></div>
            <div>
              <div style={{ fontWeight: '600' }}>{session?.user?.name || 'User'}</div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>{session?.user?.email || 'Admin'}</div>
            </div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
