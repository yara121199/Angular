import userJson from './users.json'
import  {user}  from './userr'

let userrr : Array<user>=userJson;
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
    name:string;
    address:string;
    phone: number;
    email:string;
    constructor(name:string,
        address:string,
         phone: number,
         email:string){
             this.address=""
             this.email=""
             this.name=""
             this.phone=76
        
    }

    tostring(){

        this.name
    }

    
}

class student extends person  {
    
    constructor(){
     
        super() 
    }
    
}

enum status{
    freshman, sophomore, junior, senior
}

class employee extends person {
    office:string;
     salary:number;
      date:number;
    constructor(office:string,
        salary:number,
         date:Date){
        super()
        this.office=""
        this.salary=76
        this.date=68484
    }
    tostring(){

        person.name
    }
}

class faculty  extends employee{
    office_hours:number
     rank:string
    constructor(office_hours:number
        ,rank:string){
        super()
        this.office_hours=08
        this.rank=""
    }
    tostring(){

        person.name
    }
}

class staff  extends employee {
    tittle:string
    constructor( tittle:string){
           super()
           this.tittle=""
 
        }
        tostring(){

            person.name
        }
}