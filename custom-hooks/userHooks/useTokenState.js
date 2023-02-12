import { useCallback, useEffect, useState } from "react";
import STORE_UTIL from "../../utils/native/local-storage";
import CONSTANT from '../../constants/NamesForKeys'
import { useQuery } from "react-query";

export default function useTokenState() {
    const [Tokens, setTokens] = useState(STORE_UTIL.getItem(CONSTANT.TOKENS_KEY))

    const UpdateToken = useCallback((Token) => {
        STORE_UTIL.setItem(CONSTANT.TOKENS_KEY, Token)
    }, [])

    const DeleteToken = useCallback(() => {
        STORE_UTIL.clearStorage()
    }, [])

    return ({
        Tokens,
        UpdateToken,
        DeleteToken
    })
}

