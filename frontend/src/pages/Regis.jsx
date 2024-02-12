import { useState } from "react";
import { toast } from "react-toastify";
// import { redirect } from "react-router-dom";

export default function Regis(props) {
  const {setData} = props;

  const [roomType, setRoomType] = useState("join"); //create | join
  const [roomConfigs, setRoomConfigs] = useState({
    username: "",
    roomname: "",
    roomcode: "",
  });
  const submitForm = () => {
    if (roomConfigs.username.length < 3 || roomConfigs.roomcode.length < 5) {
      return toast.error("Some inputs is invalid");
    }
    if(roomType === "create" && roomConfigs.roomname.length < 4){
      return toast.error("Room name is invalid");
    }
    fetch(roomType === "create"? "http://localhost:5000/api/startgame/create": "http://localhost:5000/api/startgame/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...roomConfigs})
    }).then(res=>{
      res.json().then(d=>{
        if(!d.ok && d.error) {
          return toast.error(d.error);
        }
        window.localStorage.setItem("game_data", JSON.stringify(d));
        toast.success("Room successful created");
        setData(d);
      })
    }).catch(err=>{
      console.log(err);
    })
  };
  return (
    <>
      <div className="conatainer">
        <div className="row">
          <div className="col-1 col-md-3 col-lg-4"></div>
          <div className="col-10 col-md-6 col-lg-4 mt-5">
            <div className="card p-2 px-3">
              <h2 className="text-center mt-1">Welcome Back</h2>
              <div className="btn-group" role="group">
                <input
                  type="radio"
                  className="btn-check"
                  name="room_type"
                  id="create"
                  autoComplete="off"
                  onChange={(e) => setRoomType(e.target.id)}
                />
                <label className="btn btn-outline-primary" htmlFor="create">
                  Create new Room
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="room_type"
                  id="join"
                  autoComplete="off"
                  defaultChecked={true}
                  onChange={(e) => setRoomType(e.target.id)}
                />
                <label className="btn btn-outline-primary" htmlFor="join">
                  Join existing room
                </label>
              </div>
              <div className="mb-3 mt-2">
                <label htmlFor="exampleInputUsername" className="form-label">
                  Enter username <i className="text-danger">*</i>
                </label>
                <input
                  type="text"
                  className="form-control"
                  required={true}
                  id="exampleInputUsername"
                  placeholder="username..."
                  value={roomConfigs.username}
                  onChange={(v) =>
                    setRoomConfigs({ ...roomConfigs, username: v.target.value })
                  }
                  name="name"
                />
              </div>
              {roomType === "create" ? (
                <div className="mb-3 mt-2">
                  <label htmlFor="exampleInputUsername" className="form-label">
                    Room name <i className="text-danger">*</i>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required={true}
                    id="exampleInputUsername"
                    placeholder="room name..."
                    value={roomConfigs.roomname}
                    onChange={(v) =>
                      setRoomConfigs({
                        ...roomConfigs,
                        roomname: v.target.value,
                      })
                    }
                    name="roomname"
                  />
                </div>
              ) : (
                <></>
              )}
              <div className="mb-3 mt-2">
                <label htmlFor="exampleInputUsername" className="form-label">
                  Room code <i className="text-danger">*</i>
                </label>
                <input
                  type="text"
                  className="form-control"
                  required={true}
                  id="exampleInputUsername"
                  placeholder="1a2b3c..."
                  value={roomConfigs.roomcode}
                  onChange={(v) =>
                    setRoomConfigs({ ...roomConfigs, roomcode: v.target.value })
                  }
                  name="roomcode"
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={submitForm}
              >
                {roomType === "create" ? "Create" : "Join"}
              </button>
            </div>
          </div>
          <div className="col-1 col-md-3 col-lg-4"></div>
        </div>
      </div>
    </>
  );
}
