"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_json_1 = __importDefault(require("./users.json"));
let userrr = users_json_1.default;
//1
//userrr.sort((obj1:user , obj2:user)=>obj1.username.localeCompare(obj2.username)).forEach(user=>console.log(user.username));
//2
/*let filterUser:Array<user> = userrr.filter(user=> user.address.geo.lat <"-37.3159" && user.address.geo.lng >= "81.1496" && user.address.geo.lat <"-68.6102" && user.address.geo.lng <= "62.5342" )
filterUser.forEach(user=>console.log(user)
)*/
//3
// class maaaap{
//     constructor(){
//     }
//     get u ():user {
//         return this.u
//     userrr.map(user=>user.address.geo).map(points=> `https://maps.google.com/?q=${points.lat},${points.lng}`).forEach(url=>console.log(url))
// }
// }
//userrr.map(user=>user.address.geo).map(points=> `https://maps.google.com/?q=${points.lat},${points.lng}`).forEach(url=>console.log(url))
//4
class person {
    constructor(name, address, phone, email) {
        this.address = "";
        this.email = "";
        this.name = "";
        this.phone = 76;
    }
    tostring() {
        this.name;
    }
}
class student extends person {
    constructor() {
        super();
    }
}
var status;
(function (status) {
    status[status["freshman"] = 0] = "freshman";
    status[status["sophomore"] = 1] = "sophomore";
    status[status["junior"] = 2] = "junior";
    status[status["senior"] = 3] = "senior";
})(status || (status = {}));
class employee extends person {
    constructor(office, salary, date) {
        super();
        this.office = "";
        this.salary = 76;
        this.date = 68484;
    }
    tostring() {
        person.name;
    }
}
class faculty extends employee {
    constructor(office_hours, rank) {
        super();
        this.office_hours = 08;
        this.rank = "";
    }
    tostring() {
        person.name;
    }
}
class staff extends employee {
    constructor(tittle) {
        super();
        this.tittle = "";
    }
    tostring() {
        person.name;
    }
}
