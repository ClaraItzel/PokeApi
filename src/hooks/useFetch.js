import { useEffect, useState } from "react"
const localCache={}

export const useFetchApi= (url) =>{
    //CREANDON LAPETICION A LA API

    const [data, setData] = useState({
        data:null,
        loading:false,
        hasError:false, 
        errorMessage:null
    })


    useEffect(()=>{
        setLoading()
        getFetch(url)

    },[url])


    const setLoading = () =>{
        setData({
            data:null,
            loading:true,
            hasError:false,
            errorMessage:null
        })
    }

    const getFetch = async( url ) =>{

        if(localCache[url]){

            setData({
                data: localCache[url],
                loading: false,
                hasError: false,
                error: null
            })
            return;
        }


        try {

            const response= await fetch(url);
            
            const pokemons= await response.json()

            setData({
                data:pokemons,
                loading:true,
                hasError:false,
                errorMessage:null
            })
            
        } catch (error) {
            setData({
                data:null,
                loading:true,
                hasError:true,
                errorMessage:error
            })
        }

    }

    return{
        ...data,
    }
}