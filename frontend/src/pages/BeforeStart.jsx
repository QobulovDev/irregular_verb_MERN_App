import React, { useState } from "react";

export default function BeforeStart({ data, setData}) {
  const [users, setUsers] = useState([])
  // useEffect(()=>{ 
  //   setUsers([{...data.creater, status: "owner"}])
  // }, [])
  // console.log(data);

  const logout = () => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm("Would do you like leave the room ?")){
      setData("")
      window.localStorage.removeItem("game_data")
    }
  }
  return (
    <div className="conatainer">
      <div className="row">
        <div className="col-1 col-md-3 col-lg-4"></div>
        <div className="col-10 col-md-6 col-lg-4 mt-5">
          <div className="card p-2 px-3">
            <button type="button" className="btn btn-primary col-3" onClick={logout}>
              <i className="bx bx-arrow-back"></i> Back
            </button>
            <div className="d-flex justify-content-between mt-2">
              <h6 className="pt-1 fs-5">10/20</h6>
              <h3 className="text-center">Game players:</h3>
              <button type="button" className="btn btn-primary p-1 col-2 m-1" style={{width: '40px'}}>
                <i className="bx bx-refresh" style={{ fontSize: "25px" }}></i>
              </button>
            </div>
            <div className="card" style={{maxHeight: "65vh", overflow:"hidden scroll"}}>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Role</th>
                  </tr>
                </thead>
                <tbody style={{maxHeight: "10vh", overflow: 'scroll'}}>
                  {
                    users?.map((user, index) => (
                      <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{user.name}</td>
                        {
                          user.status==="owner"? 
                          <td><span className="badge text-bg-primary fs-6">creater</span></td>:
                          <td><span className="badge text-bg-secondary fs-6">player</span></td>
                        }
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            <div className="row mt-1">
                <div className="col">
                    <b>Join code:</b> <div className="badge text-bg-primary fs-6">{data.code}</div>
                    <button 
                      className="btn btn-primary" 
                      style={{padding: '1px 7px', marginTop: -4, marginLeft: 5}}
                      onClick={()=>navigator.clipboard.writeText(data.code)}
                    ><i className='bx bx-copy' ></i></button>
                </div>
            </div>
            {
              (data.user.status==="owner")?
              <button
                type="button"
                className="btn btn-primary mt-3"
                style={{ cursor: "not-allowed" }}
              >
                <i className="bx bx-run"></i> Start game
              </button>:
              <></>
            }
          </div>
        </div>
        <div className="col-1 col-md-3 col-lg-4"></div>
      </div>
    </div>
  );
}
