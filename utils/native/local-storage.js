export default {
    getItem(key) {
        const data = localStorage.getItem(key)
        return JSON.parse(data)
    },
    isPresent(key) {
        return this.getItem(key) != null
    },
    setItem(key, data) {
        localStorage.setItem(key,JSON.stringify(data))
    }
}