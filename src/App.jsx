import { createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, RouterProvider, useParams } from "react-router-dom";
import Search from './components/Search'
import Home from './components/Home'
const router = createBrowserRouter(createRoutesFromElements((
  <Route path='/' element={<RootLayout />}>
    <Route path=":cityName" element={<Home />} />
    <Route path="/search" element={<Search />} />
    <Route path="/profile" element={<ProfilePage />} />
  </Route>
)))
function HomePage() {
  const { cityName } = useParams()
  return <h1>Home {cityName} </h1>
}
function SearchPage() {
  return <h1>Search</h1>
}
function ProfilePage() {
  return <h1>Profile</h1>
}
function RootLayout() {
  return <>
    <div style={{ display: 'flex', gap: '10px' }}>
      <Link to='/' >Главное</Link>
      <Link to='/search' >Поиск</Link>
      <Link to='/profile' >Профиль</Link >
    </div >
    <Outlet />
  </>

}
function App() {
  return <RouterProvider router={router} />
}
export default App