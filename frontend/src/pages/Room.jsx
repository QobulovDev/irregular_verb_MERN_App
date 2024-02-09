import React from "react";
import BeforeStart from "./BeforeStart";
import imgGold from '../assets/imgs/gold.png';
import imgSilver from '../assets/imgs/silver.png';
import imgbronz from '../assets/imgs/bronz.png';

export default function Room() {
  return (
    <>
      <div class="modal" tabindex="-1" style={{ display: "none" }}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Players rating</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">rating</th>
                    <th scope="col">place</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>1</td>
                    <td><img src={imgGold} alt="medal" width="30px"/></td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>2</td>
                    <td><img src={imgSilver} alt="medal" width="30px"/></td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>3</td>
                    <td><img src={imgbronz} alt="medal" width="30px"/></td>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-primary p-1 col-2 m-1"
                  style={{ width: "40px" }}
                >
                  <i class="bx bx-refresh" style={{ fontSize: "25px" }}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="conatainer">
        <div className="row">
          <div className="col-1 col-md-3 col-lg-4"></div>
          <div className="col-10 col-md-6 col-lg-4 mt-5">
            <div className="card p-2 px-3">
              <div className="d-flex justify-content-between">
                <h6 className="pt-3 fs-5">10/20</h6>
                <h2 className="text-center mt-1">Quiz</h2>
                <button
                  type="button"
                  class="btn btn-danger p-1 col-2 m-1"
                  style={{ width: "40px" }}
                >
                  <i class="bx bx-exit"></i>
                </button>
              </div>
              <div
                className="time border rounded w-100"
                style={{ height: "15px" }}
              >
                <div
                  class="progress bg-primary"
                  style={{ width: "80%", height: "14px" }}
                ></div>
              </div>
              <div className="card bg-light mt-2">
                <p className="fs-4 text-center text-muted fw-bold pt-3 ps-3">
                  HTML nima ?
                </p>
              </div>
              <ul className="list-group d-flex flex-column p-3">
                <li class="form-check d-flex justify-content-start p-0 ">
                  <input
                    class="form-check-input"
                    style={{margin: "20px 10px"}}
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label border px-3 py-2 my-2 rounded w-100 d-flex justify-content-between" for="flexRadioDefault1">
                    Default radio
                    <span class="badge text-bg-primary" style={{height: "22px", marginTop: "2px"}}>1</span>
                  </label>
                </li>
                <li class="form-check d-flex justify-content-start p-0 ">
                  <input
                    class="form-check-input"
                    style={{margin: "20px 10px"}}
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault11"
                  />
                  <label class="form-check-label border px-3 py-2 my-2 rounded w-100 d-flex justify-content-between" for="flexRadioDefault11">
                    Default radio
                    <span class="badge text-bg-primary" style={{height: "22px", marginTop: "2px"}}>1</span>
                  </label>
                </li>
              </ul>
              {/* <ul className="list-group d-flex flex-column p-3">
                <li class="form-check d-flex justify-content-start p-0 ">
                  <input
                    class="form-check-input"
                    style={{margin: "20px 10px"}}
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="bg-success text-light form-check-label border px-3 py-2 my-2 rounded w-100 d-flex justify-content-between" for="flexRadioDefault1">
                    Default radio
                    <span class="badge text-bg-primary" style={{height: "22px", marginTop: "2px"}}>1</span>
                  </label>
                </li>
                <li class="form-check d-flex justify-content-start p-0 ">
                  <input
                    class="form-check-input"
                    style={{margin: "20px 10px"}}
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault11"
                  />
                  <label class="bg-danger text-light form-check-label border px-3 py-2 my-2 rounded w-100 d-flex justify-content-between" for="flexRadioDefault11">
                    Default radio
                    <span class="badge text-bg-primary" style={{height: "22px", marginTop: "2px"}}>1</span>
                  </label>
                </li>
              </ul> */}
              <div className="d-flex justify-content-around mt-2">
                <div className="col-5">
                  <div className="d-flex">
                    <div
                      className="bg-secondary border rounded-circle text-light text-center hover-index"
                      style={{
                        padding: "1px 0",
                        width: "26px",
                        fontSize: "15px",
                        height: "26px",
                        marginLeft: "-10px",
                      }}
                      title="username"
                    >
                      1
                    </div>
                    <div
                      className="bg-secondary border rounded-circle text-light text-center hover-index"
                      style={{
                        padding: "1px 0",
                        width: "26px",
                        fontSize: "15px",
                        height: "26px",
                        marginLeft: "-10px",
                      }}
                      title="username"
                    >
                      2
                    </div>
                    <div
                      className="bg-secondary border rounded-circle text-light text-center hover-index"
                      style={{
                        padding: "1px 0",
                        width: "26px",
                        fontSize: "15px",
                        height: "26px",
                        marginLeft: "-10px",
                      }}
                      title="username"
                    >
                      11
                    </div>
                  </div>
                </div>
                <button type="btn" className="btn btn-primary">
                  rate
                </button>
              </div>
            </div>
          </div>
          <div className="col-1 col-md-3 col-lg-4"></div>
        </div>
      </div>
      {/* <BeforeStart/> */}
    </>
  );
}
