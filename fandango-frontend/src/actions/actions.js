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

export function signupAction (newData) {
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    console.log("Data sent : ",newData);
    const request = axios("http://localhost:8900/signup/", {
        method: 'post',
        mode: 'cors',
        redirect: 'follow',
        withCredentials: true,
        headers: headers,
        data: newData
    })
    return {
        type: 'SUCCESS',
        payload: request
    };
}

export function signinAction (newData) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    console.log("Data sent : ",newData);
    const request = axios('http://localhost:8900/signin', {
        method: 'post',
        mode: 'cors',
        redirect: 'follow',
        withCredentials: true,
        headers: headers,
        data: JSON.stringify(newData)
    })
    return {
        type: 'LOGIN_SUCCESS',
        payload: request
    };
}

export function submitBooking (newData) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    console.log("Data sent : ",newData);
    const request = axios('http://localhost:8900/booking', {
        method: 'post',
        mode: 'cors',
        redirect: 'follow',
        headers: headers,
        data: JSON.stringify(newData)
    })
    return {
        type: 'SUBMIT_BOOKING',
        payload: request
    };
}

export function updateHall (newData) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    console.log("Data sent : ",newData);
    const request = axios('http://localhost:8900//hall/' + newData.hallname, {
        method: 'post',
        mode: 'cors',
        redirect: 'follow',
        headers: headers,
        data: JSON.stringify(newData)
    })
    return {
        type: 'UPDATE_HALL',
        payload: request
    };
}
