import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductList.scss';                   /*@styles*/ //! (@) => @styles

const ProductList =()=> { 

  const API = "https://api.escuelajs.co/api/v1/products";
  	const products = useGetProducts(API);                        //!$1 <=@ ENDPOINT
      return (
        <section className="main-container-productlist">
        <div className="ProductList-productlist">
          {products.map(product => (
            <ProductItem 
            product={product} 
            key={product.id}/>
          ))}
        </div>
    </section>
  );
}; export default ProductList;





//todo╔═╗╔╗ ┌─┐╔╦╗┬─┐┌─┐┌─┐╔═╗╦┌─┐┌┐┌
//todo╠═╣╠╩╗└─┐ ║ ├┬┘├─┤│  ║  ║│ ││││
//todo╩ ╩╚═╝└─┘ ╩ ┴└─┴ ┴└─┘╚═╝╩└─┘┘└┘
//CustomHook // /* useEffect */
  // const useGetEffect = (API) => {
  //   const [products, setProducts] = useState([]);
  //   useEffect( ()=>{
  //     fetch(API)
  //     .then((response)=> response.json())
  //     .then((json)=>setProducts(json))
  //   },[]);
  //   return products
  // } 