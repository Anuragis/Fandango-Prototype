import axios from 'axios';



export function login(data){
    console.log("Action Triggered",data);

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    console.log("Data sent : ",data);
    const res = axios('http://localhost:1500/signin/', {
        method: 'post',
        mode: 'no-cors',
        redirect: 'follow',
        withCredentials: true,
        headers: headers,
        data: JSON.stringify(data)
    })

    return{
        type:'LOGIN_SUCCESS',
        payload:res
    };
}