import './commonResource/css/styles.css'
import './commonResource/css/bootstrap.css'
import Wrapper from './components/Wrapper/Wrapper'
import { Route, Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound/NotFound'
import Layout from './Pages/Layout/Layout'
import IPhone from './Pages/IPhone/IPhone'
import SingleProduct from './Pages/SingleProduct/SingleProduct'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Wrapper />} />
          <Route path="/iphone" element={<IPhone />} />
          <Route path="/iphone/:productID" element={<SingleProduct />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
