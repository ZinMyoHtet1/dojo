import { useEffect, useState } from 'react';
// const abortCon=new AbortController();

const useFetch=(url)=>{
    const [data,setData]= useState(null);
        const [isPending,setPending]= useState(true);
        const [error,setError]= useState(null);

    useEffect(()=>{
        fetch(url)
        .then(res=> {
            if(!res.ok){
                throw Error("Cannot fetch the resource")
            }
            return res.json();
        })
        .then(data=>{
            setData(data);
            setPending(false);
            setError(null);
        })
        .catch(err=>{
            if(err.name==="AbortError"){
                console.log("abort error");
            }else{
                setPending(false)
                setError(err.message);
            }
        });
    }   
    ,[url]);
    return {data,isPending,error}
}   

export default useFetch;