import { useState } from "react";
import localStorage from "../../utils/native/local-storage";
import NamesForKeys from "../../constants/NamesForKeys";
import { useQuery } from "react-query";

export default function useUserState(accessToken){
        
    const userQuery = useQuery({
        queryKey:["user"],
        queryFn: ()=>{
            return getUserDetails(accessToken);
        }
    })
    return {
        userQuery
    }
    
}

