import axios from "axios"

export const getAllTickets = async ()=> {
    return new Promise(async ( resolve, reject)=>{
        try{
            let result = await axios.get( 'http://localhost:8217/v1/ticket/', {
                headers: {
                    Authorization: sessionStorage.getItem('accessJWT')
                }
            })
            resolve(result)
        } catch(err){
            reject(err)
        }
    })
}

export const getSingleTicket = async (_id)=> {
    return new Promise(async ( resolve, reject)=>{
        try{
            let result = await axios.get( `http://localhost:8217/v1/ticket/${_id}`, {
                headers: {
                    Authorization: sessionStorage.getItem('accessJWT')
                }
            })
            console.log(result.data);
            resolve(result.data.ticket)
        } catch(err){
            console.log(err)
            reject(err)
        }
    })
}


export const updateReplyTicket = async (_id, msgObj)=> {
    return new Promise(async ( resolve, reject)=>{
        try{
            let result = await axios.put( `http://localhost:8217/v1/ticket/${_id}`, msgObj, {
                headers: {
                    Authorization: sessionStorage.getItem('accessJWT')
                }
            })
            console.log(result.data);
            resolve(result.data)
        } catch(err){
            console.log(err)
            reject(err)
        }
    })
}

export const updateTicketStatusClosed = async ( _id)=> {
    return new Promise(async ( resolve, reject)=>{
        try{
            let result = await axios.patch( `http://localhost:8217/v1/ticket/close-ticket/${_id}`, {}, {
                headers: {
                    Authorization: sessionStorage.getItem('accessJWT')
                }
            })
            console.log(result.data);
            resolve(result.data)
        } catch(err){
            console.log(err)
            reject(err)
        }
    })
}

export const createNewTicket = async ( formData) => {
    return new Promise(async ( resolve, reject)=> {
        try{
            const result = await axios.post('http://localhost:8217/v1/ticket/', formData, {
                headers: {
                    Authorization: sessionStorage.getItem('accessJWT')
                }
            })
            resolve( result.data);
        } catch( err){
            console.log(err);
            reject( err)
        }   
    })

}