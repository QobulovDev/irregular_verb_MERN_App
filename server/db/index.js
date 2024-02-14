const { v4: uuidv4 } = require('uuid');
class Game {
    constructor(){
        this.games = []
    }

    generateId(){
        return uuidv4();
    }
}

class RoomManager extends Game {
    constructor(){
        super();
        this.rooms = [];
    }

    isExistRoomByCode(code){
        if(this.rooms.length==0) return false;
        const roomCodes = this.rooms.filter(room=> room.code==code)
        if(roomCodes.length>0)
            return true;
        else return false;
    }

    isExistRoomByName(name){
        if(this.rooms.length==0) return false;
        const roomNames = this.rooms.filter(r=>r.name==name);
        if(roomNames.length>0) return true;
        else return false;
    }
    isExistRoomByUserName(username, code){
        const roomNames = this.rooms.filter(r=>r.code==code);
        const roomusers = roomNames[0].players.filter(r=>r.name==username);
        if(roomusers.length>0) return roomusers;
        else return false;
    }
    isAdminByRoomcode(username, code){
        const roomNames = this.rooms.filter(r=>r.code==code);
        const roomusers = roomNames[0].players.filter(r=>r.name==username);
        if(roomusers[0].status=="owner") return true;
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
            roomState: false,
            players: [{name: creater, id: id, status: "owner"}]
        }
    
        this.rooms.push(newRoom);
        return {newRoom};
    }
    
    joinRoom(code, name){
        if(this.rooms.length==0)  return {userError: {ok: false, error: "There is no available game."}};
        if(!this.isExistRoomByCode(code)) return {userError: {ok: false, error: "No such room"}};
        if(this.isExistRoomByUserName(name, code)) return {userError: {ok: false, error: "The username already exists."}};

        const id = this.generateId()
        let playerIndex = this.rooms.findIndex((r)=> r.code === code)
        if(this.rooms[playerIndex].roomState) return {userError: {ok: false, error: "This room games already started"}};
        this.rooms[playerIndex].players.push({name: name, id: id, status: "player"})
        return  {users: this.rooms[playerIndex].players, userId: id};
    }

    startGame(code, creator){
        if(this.rooms.length==0)  return {userError: {ok: false, error: "There is no available game."}};
        if(!this.isExistRoomByCode(code)) return {userError: {ok: false, error: "No such room"}};
        if(this.isExistRoomByUserName(creator, code)[0].status !=="owner") return {userError: {ok: false, error: "Only the owner can start a game."}};
        let roomIndex = this.rooms.findIndex((r)=> r.code === code)
        if (this.rooms[roomIndex].roomState) return {userError: {ok: false, error:"This room game already started"}};
        this.rooms[roomIndex].roomState = true 
        return true;
    }
}

const roomManager = new RoomManager();

module.exports = roomManager
