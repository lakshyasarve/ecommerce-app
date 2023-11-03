import './App.css'
import Navigation from './customer/components/Navigation/Navigation.jsx'
// import HomePage from './customer/components/pages/HomePage'
import Footer from './customer/components/Footer/Footer'
// import Product from './customer/components/Product/Product'
// import ProductDetails from './customer/components/ProductDetails/ProductDetails'
// import Cart from './customer/components/Cart/Cart'
import Checkout from './customer/components/Checkout/Checkout'

function App() {

  return (
    <>
      <div>
      <Navigation></Navigation>
      </div>
      <div>
      {/* <HomePage></HomePage> */}
      {/* <Product></Product> */}
      {/* <ProductDetails></ProductDetails> */}
      {/* <Cart></Cart> */}
      <Checkout></Checkout>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
