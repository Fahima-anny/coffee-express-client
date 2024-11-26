import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard'

function App() {

const allData = useLoaderData() ;
const [coffees, setCoffees] = useState(allData) ;

  return (
    <div className=''>
     
      <h1 className='text-center text-5xl font-semibold bg-amber-950 text-white py-5'> Expresso Emporium</h1>

      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-6 py-20'>
        {
          coffees.map(coffee => <CoffeeCard 
            key={coffee._id} 
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            ></CoffeeCard>)
        }
      </div>
      
    </div>
  )
}

export default App
