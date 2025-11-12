import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './components/base/Header'
import { Main } from './components/base/Main'
import { ScrollToTop } from './components/base/ScrollToTop'
import { socials } from './data'
import type { Route } from './types'

export const routes: Route[] = [
  {
    title: 'Work',
    path: '/',
    exact: true,
  },
  {
    title: 'Teaching',
    path: '/teaching',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
]

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header routes={routes} socials={socials} />
        <Main routes={routes} />
      </ScrollToTop>
    </Router>
  )
}

export default App
