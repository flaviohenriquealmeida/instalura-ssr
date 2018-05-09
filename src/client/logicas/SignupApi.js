import 'isomorphic-fetch';

const handleStatus = res => 
    res.ok ? res : Promise.reject(res.statusText);

export default class SignupApi {

    static signup(newUser) {
        
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('X-AUTH-TOKEN', '');

        const config  = {
            method: 'post',
            headers,
            body: JSON.stringify(newUser),
        };
        
        console.log(config.body);

        return fetch(`http://localhost:8080/usuarios`, config)
            .then(handleStatus)
            .catch(err => {
                console.log(err);
                return Promise.reject('Não foi possível realizar o cadastro');
            });
    }
}