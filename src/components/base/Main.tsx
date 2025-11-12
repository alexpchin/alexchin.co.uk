import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Teaching } from '../pages/Teaching'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { NoMatch } from '../pages/NoMatch'

export function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </main>
  )
}
