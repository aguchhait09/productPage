import { axiosInstance } from "@/service";

import { Root, Root2 } from "@/typescript/common.all.interface";
import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import endpoints from "./endpoints.config";

export function products() {

    const { isPending, error, data } = useQuery({
        queryKey: ['products'],
        queryFn: async ()=>{
          const dta = await axiosInstance.get<Root2[]>(
              endpoints.fetchProduct.products
          )
          console.log('data', dta)
          return dta?.data      
        }
      })
    
      if (isPending) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message
  
    return data
  }