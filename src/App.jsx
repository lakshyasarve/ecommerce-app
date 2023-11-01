import './App.css'
import Navigation from './customer/components/Navigation/Navigation.jsx'
import HomePage from './customer/components/pages/HomePage'
import Footer from './customer/components/Footer/Footer'

function App() {

  return (
    <>
      <div>
      <Navigation></Navigation>
      </div>
      <div>
      <HomePage></HomePage>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
