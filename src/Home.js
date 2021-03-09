import Products from './Product'
import './Home.css'
import ReactDOM from 'react-dom'



function Home(){

  return(
    <div className='home'>
        <section className="home__product">
          <div className='container'>

          <div>
            <Products/>
          </div>
          </div>
        </section>

    </div>
  )
}

export default Home
