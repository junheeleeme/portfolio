interface Routes {
  id: string
  path: string
  title: string
}

const routes: Array<Routes> = [
  { id: '1', title: 'Home', path: '/' },
  { id: '2', title: 'About', path: '/about' },
  { id: '3', title: 'Skill', path: '/skill' },
  { id: '4', title: 'History', path: '/history' },
  { id: '5', title: 'Contact', path: '/contact' },
]

export default routes
