import { blue } from '@/data'
import dancingTomato from '@/assets/images/backgrounds/dancing-tomato.gif'

export function NoMatch() {
  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{
        background: `url(${dancingTomato}) no-repeat`,
        backgroundColor: blue,
        backgroundSize: 'cover',
        backgroundPosition: '50%',
      }}
    >
      <h1 className="text-white text-9xl font-bold">404</h1>
    </section>
  )
}
