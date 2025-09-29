import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav'
import MyNav from './Components/MyNav'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import ResultsCharts from './Components/ResultsCharts/ResultsCharts'
const pricingPormise = fetch('./PricingOptions.json').then(res => res.json())

function App() {
 
  return (
    <>
      <header>
        <MyNav></MyNav>
      </header>
      <main>
        <Suspense fallback='loading'>
          <PricingOptions pricingPormise={pricingPormise}></PricingOptions>
        </Suspense>

        <ResultsCharts></ResultsCharts>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
