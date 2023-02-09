export default {
    getItem(key) {
       if(Boolean(window)){
        const data = localStorage.getItem(key)
        return JSON.parse(data)
       }
       return {}
    },
    isPresent(key) {
        return this.getItem(key) != null
    },
    setItem(key, data) {
        localStorage.setItem(key,JSON.stringify(data))
    }
}