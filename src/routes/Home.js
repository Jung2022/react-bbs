import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <header className="container">
          <div className="p-5 mb-4 bg-light rounded-3 text-center">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">React와 SpringBoot를 활용한 게시판</h1>
              <p>목록 보기</p>
            </div>
          </div>
        </header>
        <main className="container">
          <section>
            <article>
              <div className="row">
                <div className="col">
                  <table className="table table-hover table-striped text-center">
                    <colgroup>
                      <col width="10%" />
                      <col width="50%" />
                      <col width="15%" />
                      <col width="15%" />
                      <col width="10%" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>글번호</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>등록시간</th>
                        <th>조회수</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>테스트 제목</td>
                        <td>테스트</td>
                        <td>2022.04.29 12:50:00</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>테스트 제목</td>
                        <td>테스트</td>
                        <td>2022.04.29 12:50:00</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button className="btn btn-primary">글쓰기</button>
              </div>
            </article>
          </section>
        </main>
        <footer className="container-fluid mt-5 py-5 border-top">
          <p className="lead text-mute text-center">made by bitc</p>
        </footer>
      </div>
    );
  }
}

export default Home;
