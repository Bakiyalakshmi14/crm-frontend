import axios from "axios";

export const userLogin = async ( formData)=> {
    return new Promise(async ( resolve, reject)=> {
        try{
        
            const res = await axios.post('http://localhost:8217/v1/user/login/', formData )
            console.log(res)

            sessionStorage.setItem('accessJWT', res.data.accessJWT)
            localStorage.setItem('refreshJWT', JSON.stringify({ refreshJWT: res.data.refreshJWT}))

            resolve(res.data)
        } catch( err){
            console.log(err)
            reject(err)
        }
    })
}

// GET http://localhost:8217/v1/user/
// Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1haWw2QGdtYWlsLmNvbSIsImlhdCI6MTcxNDgzMzYxOSwiZXhwIjoxNzE0ODM3MjE5fQ.2UP6g7yuTwLfYhU5wMch9u3N-EuuOqV3_3nDUX9zb9w

export const fetchUser = async() => {
    return new Promise( async( resolve, reject)=> {
        try{
            const accessJWT = sessionStorage.getItem('accessJWT');
            if(!accessJWT){
                return reject('Token not found');
            }
            const res = await axios.get('http://localhost:8217/v1/user/', {
                headers: {
                    Authorization: accessJWT
                }
            })
            console.log(res);
            resolve(res.data)
        } catch( err){
            console.log(err)
            reject(err.message)
        }
    })
}

export const userLogout = async() => {
    try{
       await axios.delete('http://localhost:8217/v1/user/logout', {
        headers: {
            Authorization: sessionStorage.getItem('accessJWT')
        }
       })
    } catch( err){
        console.log(err)
    }
}

export const fetchNewAccessJWT = async ()=> {
        return new Promise(async( resolve, reject)=> {
            try{
                const {refreshJWT} = JSON.parse(localStorage.getItem("refreshJWT"))

                console.log(`refreshJWT ${refreshJWT}`)

                if(!refreshJWT){
                    reject('Token Not Found');
                }

                let res = await axios.get('http://localhost:8217/v1/tokens/', {
                    headers: {
                        Authorization: refreshJWT
                    }
                })

                if(res.status == 200){
                    sessionStorage.setItem('accessJWT',res.data.accessJWT)
                }

                console.log(res);
                resolve(true)
            } catch(err){
                console.log(err)
                if(err?.response?.data?.message === 'jwt expired' || err?.response?.data?.message === 'invalid token'){
                    localStorage.removeItem('refreshJWT');
                }
                resolve(false)
            }
        })
    }