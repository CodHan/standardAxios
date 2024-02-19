import axios from 'axios';

// TODO: Axios 인스턴스를 생성합니다. App.jsx
const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// 요청 인터셉터 추가
api.interceptors.request.use(
  //요청을 보내기 전 수행되는 함수
  function (config) {
    console.log('요청합니다.');
    return config;
  },
  //오류 요청을 보내기 전 수행되는 함수
  function (error) {
    console.log('인터셉터 요청 오류!');
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
api.interceptors.response.use(
  //응답을 내보내기 전 수행되는 함수
  function (response) {
    console.log('응답입니다.');
    return response;
  },
  //오류응답을 내보내기 전 수행되는 함수
  function (error) {
    console.log('인터셉터 응답 오류 발생');
    return Promise.reject(error);
  }
);

export default api;
