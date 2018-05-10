import { listagem, comentario, like, notifica, apaga } from '../actions/actionCreator';
import 'isomorphic-fetch';

const handleStatus = res =>
  res.ok ? res : Promise.reject(res.statusText);

export default class TimelineApi {
  static lista(urlPerfil) {
    return dispatch => {
      return fetch(urlPerfil)
        .then(response => response.json())
        .then(fotos => {
          dispatch(listagem(fotos));
          return fotos;
        });
    }
  }

  static comenta(fotoId, textoComentario) {
    return dispatch => {
      const requestInfo = {
        method: 'POST',
        body: JSON.stringify({ texto: textoComentario }),
        headers: new Headers({
          'Content-type': 'application/json'
        })
      };

      fetch(`http://localhost:8080/api/fotos/${fotoId}/comment?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, requestInfo)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("não foi possível comentar");
          }
        })
        .then(novoComentario => {
          dispatch(comentario(fotoId, novoComentario));
          return novoComentario;
        });
    }
  }

  static like(fotoId) {
    return dispatch => {
      fetch(`http://localhost:8080/api/fotos/${fotoId}/like?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, { method: 'POST' })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("não foi possível realizar o like da foto");
          }
        })
        .then(liker => {
          dispatch(like(fotoId, liker));
          return liker;
        });
    }
  }

  static pesquisa(login) {
    return dispatch => {
      fetch(`http://localhost:8080/api/public/fotos/${login}`)
        .then(response => response.json())
        .then(fotos => {
          if (fotos.length === 0) {
            dispatch(notifica('usuario não encontrado'));
          } else {
            dispatch(notifica('usuario encontrado'));
          }

          dispatch(listagem(fotos));
          return fotos;
        });
    }
  }

  static apaga(fotoId) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-AUTH-TOKEN', localStorage.getItem('auth-token'));
    alert(localStorage.getItem('auth-token'));
    const config = {
      method: 'delete',
      headers
    };

    return dispatch =>
      fetch(`http://localhost:8080/api/fotos/${fotoId}`, config)
        .then(handleStatus)
        .then(() => {
          dispatch(apaga(fotoId));
          dispatch(notifica('Foto apagada com sucesso'));
          return fotoId;
        })
        .catch(err => {
          console.log(err);
          dispatch(notifica('Não foi possível apagar a foto'));
        });
  }
}