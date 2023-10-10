const getLogins = async ()=> {
    try {
        let data = await fetch('http:localhost:3000/api/logins')
        console.log("🚀 ~ file: api.ts:4 ~ getLogins ~ data:", data)
        data = await data.json()
        return data
    } catch (error) {
        console.log("🚀 ~ file: api.ts:8 ~ getLogins ~ error:", error)
    }
}

const getSignUps = async () =>{
    try {
        let data = await fetch('http:localhost:3000/api/signups')
        console.log("🚀 ~ file: api.ts:14 ~ getSignUps ~ data:", data)
        data = await data.json()
        return data
    } catch (error) {
        console.log("🚀 ~ file: api.ts:8 ~ getLogins ~ error:", error)
    }
}

const getUpgrades = async () =>{
    try {
        let data = await fetch('http:localhost:3000/api/upgrades')
        data = await data.json()
        return data
    } catch (error) {
        console.log("🚀 ~ file: api.ts:8 ~ getLogins ~ error:", error)
    }
}

export {getLogins, getSignUps, getUpgrades}