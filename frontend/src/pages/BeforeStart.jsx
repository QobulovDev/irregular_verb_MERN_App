import React from "react";

export default function BeforeStart() {
  return (
    <div className="conatainer">
      <div className="row">
        <div className="col-1 col-md-3 col-lg-4"></div>
        <div className="col-10 col-md-6 col-lg-4 mt-5">
          <div className="card p-2 px-3">
            {/* <h2 className="text-center mt-1">Game start</h2> */}
            <button type="button" class="btn btn-primary col-3">
              <i class="bx bx-arrow-back"></i> Back
            </button>
            <div class="d-flex justify-content-between mt-2">
              <h6 className="pt-1 fs-5">10/20</h6>
              <h3 className="text-center">Game players:</h3>
              <button type="button" className="btn btn-primary p-1 col-2 m-1" style={{width: '40px'}}>
                <i class="bx bx-refresh" style={{ fontSize: "25px" }}></i>
              </button>
            </div>
            <div className="card" style={{maxHeight: "65vh", overflow:"hidden scroll"}}>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Role</th>
                  </tr>
                </thead>
                <tbody style={{maxHeight: "10vh", overflow: 'scroll'}}>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td><span class="badge text-bg-primary fs-6">Creater</span></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Devid</td>
                    <td><span class="badge text-bg-secondary fs-6">player</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row mt-1">
                <div className="col">
                    <b>Join code:</b> <div class="badge text-bg-primary fs-6">21351</div>
                </div>
                <div className="col">
                    <b>Invitation link: </b> <button className="btn btn-primary" style={{padding: '4px 7px'}}><i class='bx bx-copy' ></i></button>
                </div>
            </div>
            <button
              type="button"
              class="btn btn-primary mt-3"
              style={{ cursor: "not-allowed" }}
            >
              <i class="bx bx-run"></i> Start game
            </button>
          </div>
        </div>
        <div className="col-1 col-md-3 col-lg-4"></div>
      </div>
    </div>
  );
}
