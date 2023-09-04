import {useState, useEffect} from 'react';


const useFetch = (url) => {
    const [error, setError] = useState(null);
  const [data,setData] = useState(null);
   const [namm, setName] = useState('harekrushna');
   const [isPending, setisPEnding] = useState(true);
    useEffect(() => {
      const abortCont = new AbortController();        
      setTimeout(() => {
          fetch(url, { signal: abortCont.signal })
          .then(res => {
            console.log(res);
            if(!res.ok){
                throw Error('could not fetch the data for that resource') 
            }
           return res.json();
          })
          .then( data => {
              console.log(data);
              setData(data);
              setisPEnding(false);
              setError(null);
          })
          .catch(err => {
            if(err.name === 'AbortError'){
              console.log("fetch aborted");
            }else{
              console.log(err.message);
              setError(err.message);
              setisPEnding(false);
            }
            
          })
        },1000);
        console.log('use effect ran');
         return () => abortCont.abort();
        // console.log(blogs);
      }, [url]);
      return {data, isPending,error}
}
export default useFetch;