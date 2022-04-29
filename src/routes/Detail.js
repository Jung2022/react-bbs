import React from 'react';

class Detail extends React.Component {
  render() {
    return (
      <div>
        <header class="container">
          <div class="p-5 mb-4 bg-light rounded-3 text-center">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">React와 SpringBoot를 활용한 게시판</h1>
            </div>
          </div>
        </header>
        <main class="container">
          <section>
            <article>
              <div class="row my-3">
                <div class="col-sm-12">
                  <input type="text" class="form-control" id="title"></input>
                </div>
              </div>
              <div class="row my-3">
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="create-id"></input>
                </div>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="hit-cnt"></input>
                </div>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="create-date"></input>
                </div>
              </div>
              <div class="row my-3">
                <div class="col-sm-12">
                  <textarea rows="10" class="form-control" id="content"></textarea>
                </div>
              </div>
              <div class="clearfix">
                <button class="btn btn-secondary float-start">목록</button>
                <button class="btn btn-warning float-end">취소</button>
                <button class="btn btn-primary float-end mx-3">등록</button>
              </div>
            </article>
          </section>
        </main>
        <footer class="container-fluid mt-5 py-5 border-top">
          <p class="lead text-mute text-center">made by bitc</p>
        </footer>
      </div>
    );
  }
}

export default Detail;
