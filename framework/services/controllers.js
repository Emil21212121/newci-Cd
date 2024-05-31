    import http from "../axios/http.js"



    export const placeOrder = async (order) => {
        const requestPlaceOrder = await http.post ('v2/store/order', {...order});
        return {
            headers: requestPlaceOrder.headers,
            status: requestPlaceOrder.status,
            data: requestPlaceOrder.data
        }
    } 

    export const petAdd = async (petData) => {
        const requestPetAdd = await http.put('/v2/pet', {...petData},);
        return {
            headers: requestPetAdd.headers,
            status: requestPetAdd.status,
            data: requestPetAdd.data
        }
    }

    export const statusPet = async (status) => {
        const requestStatusPet = await http.get ("/v2/pet/findByStatus", {
            params: {
                status: status
            }
        })
        return {
            headers: requestStatusPet.headers,
            status: requestStatusPet.status,
            data: requestStatusPet.data
        }
    } 

    export const petID = async (id) => {
        const requestPetID = await http.get (`/v2/pet/${id}`)
        return {
            headers: requestPetID.headers,
            status: requestPetID.status,
            data: requestPetID.data
        }
    } 

export const inventoryMap = async () => {
    const requestinventoryMap = await http.get ("/v2/store/inventory");
    return {
        headers: requestinventoryMap.headers,
        status: requestinventoryMap.status,
        data: requestinventoryMap.data
    }
}

export const CreateWithList = async (list) => {
    const requestCreateWithList = await http.post ('/v2/user/createWithList', [...list]);   
    return {
        headers: requestCreateWithList.headers,
        status: requestCreateWithList.status,
        data: requestCreateWithList.data
    }
}

export const userName = async (userName) => {
    const requestUserName = await http.get (`/v2/user/${userName}`)
    return {
        headers: requestUserName.headers,
        status: requestUserName.status,
        data: requestUserName.data
    }
}

export const userRefresh = async (userName) => {
    const requestUserRefresh = await http.put (`/v2/user/${userName.username}`, {...userName});
    return {
        headers: requestUserRefresh.headers,
        status: requestUserRefresh.status,
        data: requestUserRefresh.data
    }
}

export const userLogin = async (user) => {
    const requestUserLogin = await http.get ('/v2/user/login', {
        params: {
            username: user.username,
            password: user.password
        }
    })
    return {
        headers: requestUserLogin.headers,
        status: requestUserLogin.status,
        data: requestUserLogin.data
    }
}




























