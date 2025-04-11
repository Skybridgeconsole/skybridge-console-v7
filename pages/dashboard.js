export default function Dashboard() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f4',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        width: '320px',
        height: '320px',
        background: 'white',
        borderRadius: '24px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseOver={(e) => {e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 48px rgba(0, 0, 0, 0.15)';}}
      onMouseOut={(e) => {e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';}}
      >
        <img src="/brain-icon.png" alt="SkySync Brain Icon" style={{ width: '80px', marginBottom: '1rem' }} />
        <h2 style={{ color: '#0A2540', fontWeight: 'bold', fontSize: '1.5rem' }}>SkySync Brain</h2>
        <p style={{ color: '#555', fontSize: '0.9rem' }}>AI Powered Intelligence Core</p>
      </div>
    </div>
  );
}