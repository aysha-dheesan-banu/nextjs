'use client';
import { useSession } from 'next-auth/react';

export default function DashboardPage() {
  const { data: session } = useSession();
  return (
    <div className="animate-fade-in">
      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        {[
          { label: 'Total Revenue', value: '$45,231.89', change: '+20.1%', icon: '💰' },
          { label: 'Subscriptions', value: '+2,350', change: '+180.1%', icon: '💳' },
          { label: 'Active Users', value: '+12,234', change: '+19%', icon: '📈' },
          { label: 'Active Now', value: '+573', change: '+201', icon: '🔥' }
        ].map((stat, i) => (
          <div key={i} className="glass" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ fontSize: '14px', color: '#94a3b8' }}>{stat.label}</span>
              <span>{stat.icon}</span>
            </div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '4px' }}>{stat.value}</div>
            <div style={{ fontSize: '12px', color: stat.change.startsWith('+') ? 'var(--success)' : 'var(--error)' }}>
              {stat.change} from last month
            </div>
          </div>
        ))}
      </div>

      {/* Main Sections */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
      <div className="glass" style={{ padding: '30px', minHeight: '400px' }}>
        <h3 style={{ marginBottom: '20px' }}>Welcome back, {session?.user?.name}!</h3>
        <p style={{ color: '#94a3b8', marginBottom: '20px' }}>Here is what's happening with your account today.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '15px', borderBottom: '1px solid var(--glass-border)' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👤</div>
                  <div>
                    <div style={{ fontWeight: '500' }}>User {i + 1}</div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>user{i+1}@example.com</div>
                  </div>
                </div>
                <div style={{ fontWeight: '600' }}>+$1,999.00</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass" style={{ padding: '30px' }}>
          <h3 style={{ marginBottom: '20px' }}>Performance</h3>
          <div style={{ height: '300px', display: 'flex', alignItems: 'flex-end', gap: '10px', justifyContent: 'space-between' }}>
            {[40, 70, 45, 90, 65, 80, 50].map((height, i) => (
              <div 
                key={i} 
                style={{ 
                  width: '100%', 
                  height: `${height}%`, 
                  background: 'linear-gradient(to top, var(--primary), var(--secondary))',
                  borderRadius: '4px 4px 0 0',
                  opacity: 0.8
                }}
              ></div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px', fontSize: '12px', color: '#94a3b8' }}>
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>
      </div>
    </div>
  );
}
