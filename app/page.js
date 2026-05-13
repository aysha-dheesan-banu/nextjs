'use client';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function LandingPage() {
  const { data: session } = useSession();
  return (
    <main>
      {/* Navigation */}
      <nav className="container flex-center" style={{ justifyContent: 'space-between', height: '80px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }} className="gradient-text">NextFlow</div>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          {session ? (
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <span style={{ fontWeight: '500' }}>Hi, {session.user.name}</span>
              <Link href="/dashboard" className="btn btn-primary">Dashboard</Link>
            </div>
          ) : (
            <>
              <Link href="/login" className="btn btn-outline">Login</Link>
              <Link href="/signup" className="btn btn-primary">Sign Up</Link>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section flex-center" style={{ flexDirection: 'column', textAlign: 'center', minHeight: '80vh' }}>
        <div className="container animate-fade-in">
          <h1 style={{ fontSize: '72px', marginBottom: '24px', lineHeight: 1.1 }}>
            Build Faster with <span className="gradient-text">Precision</span>
          </h1>
          <p style={{ fontSize: '20px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 40px' }}>
            Elevate your workflow with our premium Next.js dashboard. 
            Seamless integration, stunning visuals, and unmatched performance.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link href="/signup" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>
              Get Started Free
            </Link>
            <Link href="/dashboard" className="btn btn-outline" style={{ padding: '16px 32px', fontSize: '18px' }}>
              Live Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '48px', marginBottom: '60px' }}>Everything you need</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { title: 'Real-time Analytics', desc: 'Monitor your performance as it happens with live data streams.' },
              { title: 'Premium Components', desc: 'Crafted with attention to detail using glassmorphism aesthetics.' },
              { title: 'Lightning Fast', desc: 'Optimized for speed and core web vitals out of the box.' }
            ].map((feature, i) => (
              <div key={i} className="glass" style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '16px' }} className="gradient-text">{feature.title}</h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section" style={{ borderTop: '1px solid var(--glass-border)', padding: '60px 0' }}>
        <div className="container flex-center" style={{ justifyContent: 'space-between' }}>
          <div>© 2024 NextFlow. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#">Twitter</a>
            <a href="#">GitHub</a>
            <a href="#">Discord</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
