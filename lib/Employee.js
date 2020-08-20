class Employee {
    constructor(name ='Todd',id = '18293', email= 'trbergh123@gmail' ){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    getName() {
        return ` name ${this.name}`
        
    };
    getId(){
        return ` ${this.id}`
       
    };
    getEmail(){
        return ` ${this.email}`
        
    };
    getRole(){
        return `${this.role}`
    }
}

module.exports = Employee;