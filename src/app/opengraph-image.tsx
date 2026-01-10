import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'SwingSpot - Premier Indoor Golf Simulator'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #050505, #111111)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Background Grid Pattern */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />

                {/* Glow Effect */}
                <div
                    style={{
                        position: 'absolute',
                        width: '600px',
                        height: '600px',
                        background: '#8EFF33',
                        filter: 'blur(200px)',
                        opacity: 0.1,
                        borderRadius: '100%',
                    }}
                />

                {/* Logo/Brand */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, zIndex: 10 }}>
                    <div style={{ display: 'flex', fontSize: 100, fontWeight: 900, color: 'white', letterSpacing: '-0.05em' }}>
                        SWING<span style={{ color: '#8EFF33' }}>SPOT</span>
                    </div>
                    <div style={{ display: 'flex', fontSize: 24, fontWeight: 500, color: '#A1A1A1', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                        Clovis, New Mexico
                    </div>
                </div>

                {/* Tagline */}
                <div style={{
                    position: 'absolute',
                    bottom: 60,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    background: 'rgba(255,255,255,0.05)',
                    padding: '12px 24px',
                    borderRadius: 100,
                    border: '1px solid rgba(255,255,255,0.1)',
                    zIndex: 10
                }}>
                    <div style={{ width: 12, height: 12, borderRadius: 100, background: '#8EFF33' }} />
                    <div style={{ color: 'white', fontSize: 20 }}>Powered by Trackman iO</div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
