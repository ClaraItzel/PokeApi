import { useEffect, useState } from "react"
const localCache={}

export const useFetchApi= (number) =>{
    //CREANDON LAPETICION A LA API

    


    const [data, setData] = useState({
        data:null,
        loading:false,
        hasError:false, 
        errorMessage:null
    })

    

    useEffect(()=>{

        if(number===0) return;

        const url = `https://pokeapi.co/api/v2/pokemon/${number}`;

        setLoading()
       getFetch(url)

    },[number])


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
                loading:false,
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