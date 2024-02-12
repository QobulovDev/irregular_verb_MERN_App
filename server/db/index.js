class Game {
    constructor(){
        this.games = []
    }

    generateId(){
        return Math.random().toString(16).slice(2)+Date.now().toString().slice(8)
    }
}

class RoomManager extends Game {
    constructor(){
        super();
        this.rooms = [];
    }

    isExistRoomByCode(code){
        if(this.rooms.length===0) return false;
        const roomCodes = this.rooms.filter(room=> room.code==code)
        if(roomCodes.length==1)
            return true;
        else return false;
    }

    isExistRoomByName(name){
        if(this.rooms.length===0) return false;
        const roomNames = this.rooms.filter(r=>r.name==name);
        if(roomNames.length>0) return true;
        else return false;
    }
    isExistRoomByUserName(username, code){
        const roomNames = this.rooms.filter(r=>r.code==code);
        const roomusers = roomNames[0].players.filter(r=>r.name==username);
        if(roomusers.length>0) return roomNames;
        else return false;
    }

    addSocketIdToAdmin(username, code, socketId){
        const roomNames = this.rooms.filter(r=>r.code==code);
        const roomusers = roomNames[0].players.filter(r=>r.name==username);
        if(roomusers.length>0 && roomusers[0].status=="owner"){
            roomusers[0].socketId=socketId;
            return true;
        }
        else return false;
    }

    createRooms(creater, name, code){
        if(this.isExistRoomByName(name)) return { userError: {ok: false, error: "The room name already exists."}}; 
        if(this.isExistRoomByCode(code)) return {userError: {ok: false, error: "The room code already exists."}}; 

        const id = this.generateId()
        let newRoom = {
            creater: {name: creater, id: id},
            messages: [],
            name: name,
            code: code,
            players: [{name: creater, id: id, status: "owner"}]
        }
    
        this.rooms.push(newRoom);
        return {newRoom};
    }
    
    joinRoom(code, name){
        if(this.games.length==0)  throw new Error("There is no available game.");
        if(!this.isExistRoomByCode(code)) throw new Error('No such room');
        if(this.isExistRoomByUserName(name)) throw new Error('The username already exists.');

        const id = this.generateId()
        let playerIndex = this.rooms.findIndex((r)=> r.code === code)
        this.rooms[playerIndex].players.push({name: name, id: id, status: "player"})
        return id;
    }

    // startGame(code){
    //     for(let room of this.rooms){
    //         if(room.code == code || room.name == name){
    //             throw new Error("room code or roome name is invalid")
    //         }
    //     }
    //     this.games.push()
    // }
}

const roomManager = new RoomManager();

module.exports = roomManager
