import Measurements from '../measurement/MeasurmentsData'

class UserData {

    constructor(username, password, email, measure) {
        //save measurements here ?
        this.measure = Measurements(measure);
        this.username = username;
        this.password = password;
        this.email = email;
    }

    static compare(a) {
        const diff_user = (a.username == this.username);
        return diff_user;
    }

    static pass(b){
        const valid_pass = (b.password == this.username);
        return valid_pass;
    }

}