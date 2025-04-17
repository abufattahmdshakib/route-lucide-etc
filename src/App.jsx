import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Priceing from './components/Priceing/Priceing'
import Recharts from './components/Recharts/Recharts';
import Axios from './components/Axios/Axios';
import axios from 'axios';

function App() {
  const priceingPromes = fetch('PriceingData.json').then(response => response.json());
  const markPromes = axios.get('Result.json');
  return (
    <>
    <header>
    <Navbar></Navbar>
    </header>
      <main >
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Priceing priceingPromes={priceingPromes}></Priceing>
        </Suspense>

        <Recharts></Recharts>

       <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
       <Axios markPromes={markPromes}></Axios>
       </Suspense>
      </main>

    </>
  )
}

export default App
