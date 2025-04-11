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
        width: '300px',
        height: '300px',
        background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🧠</div>
        <h2 style={{ color: '#0A2540' }}>SkySync Brain</h2>
        <p style={{ color: '#555' }}>The Power Core of Skybridge</p>
      </div>
    </div>
  );
}