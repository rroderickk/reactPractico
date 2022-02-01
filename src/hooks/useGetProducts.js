import { useEffect, useState } from "react";
// import axios from 'axios';

const useGetProducts = (API) => {
try{	

/* 
// 	//? useEffect with axios more slowly//
// console.time('[t] useGetEffectWithAxios <=@');
// 	const [products, setProducts] = useState([]);
// 	useEffect(()=>{
// 	axios.get(API)
//     .then((response)=> {
// 			const {data} = response;
// 			setProducts(data);
// 		});
// 	}, []);
// 	console.timeEnd('[t] useGetEffectWithAxios <=@');
// 	return products;

//   //? async useEffect//
// const [products, setProducts] = useState([]);
// useEffect(async () => {
// 	const response = await axios(API);
// 	setProducts(response.data);
// }, []);
// return products;
*/



 //** useEffect */
console.time('[t] useGetEffect <=@')
  const useGetEffect = (API) => {
    const [products, setProducts] = useState([]);
    useEffect( ()=>{
      fetch(API)
      .then((response)=> response.json())
      .then((json)=>setProducts(json))
    },[]);
    return products     																			//!$#"&/?"$#%&&@=>[Endpoint]<=@$#"&/?"$#%&&@
  };
console.timeEnd('[t] useGetEffect <=@');

return useGetEffect(API); 
	} catch(e) {	
		console.warn(e.stack,'\n[*] <=@ '+e.name,'\n[-] <=@ '+e.message);
	};
}; 
export default useGetProducts;
