import React from 'react';
import axios from 'axios';

// has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
// http의 보안때문에 생기는 에러, 리소트 요청시 서버의 주소와 요청하는 곳의 주소가 같아야함
// 스프링부트로 생성한 로컬 서버에 접속시 오류가 발생함(CORS 오류)
// CORS(Cross-Origin Resource Sharing) : http헤더를 사용하려 한 출처에서 실행 중인 웹 애플리케이션이 다른 출처의 자원에 접근할 경우 오류가 발생함
//  package.json에  "proxy":"http://localhost:9091", 집어넣기
class AxiosTest extends React.Component {
  getData = () => {
    axios
      .get('/ajax/test?data=test')
      //.get('https://yts-proxy.now.sh/list_movies.json')
      .then((res) => {
        console.log('통신 성공');
        console.log(res);
      })
      .catch((err) => {
        console.log('통신 실패');
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>리액트로 서버와 통신하기</h1>
        <button type="button" onClick={this.getData}>
          클릭 시 서버와 통신
        </button>
      </div>
    );
  }
}

export default AxiosTest;
