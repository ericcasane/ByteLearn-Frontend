import { useState, useEffect } from "react";
import { redirect } from 'next/navigation'

const baseUrl = "https://erjose-api-bytelearn-api.azuremicroservices.io/";
//const baseUrl = "http://localhost:8080/"

export function useApiGET(route) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(baseUrl + route, {
                method: 'GET'
            }).then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
    } , [route]);

    return { data };
}

export function apiPOST(route, body) {
    return fetch(baseUrl + route, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then((res) => res.json())
        .catch((err) => console.log(err));
}

/*export function apiGETAuth(route) {
    const [data, setData] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetch(baseUrl + route, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }).then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
    } , [route]);

    return { data };
}*/

export function apiLogin(username, password) {
    apiPOST('authenticate', { "username": username, "password": password })
      .then((data) => {
        console.log(data);
        localStorage.setItem("user", username);
        localStorage.setItem("token", "fgsbvvwcd")
        //localStorage.setItem("token", data.access_token);
        redirect('/account');
      })

        redirect("/dashboard");

}