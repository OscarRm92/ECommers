import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)
  console.log(context.searchByTitle);
  

  return (
     <Layout >
       <div className='flex w-90 items-center relative justify-center mb-6'>
         <h1 className='font-medium text-xl'>Exclusive Products</h1>
       </div>
       <input 
          className='rounded-lg border border-black w-90 p-4 mb-4 focus:outline-none' 
          type='text' 
          placeholder='Search a product'
          onChange={(event) => context.setSearchByTitle(event.target.value)}  
        />
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
         {/* {
          items?.map(() =>
          { return <Card></Card>})
        } */}
        {
          context.items?.map(item => (<Card key={item.id} data={item}></Card>))
        }
        </div>
        <ProductDetail></ProductDetail>
     </Layout>
  )
}

export default Home