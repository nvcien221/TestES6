import { Person } from "./Person.js";
export class Student extends Person{
    constructor(toan, ly, hoa, ...restPerson){
        super(...restPerson);
        this.toan = toan;
        this.ly = ly;
        this.hoa = hoa;
        this.type = "Student";
    }
    diemTB() {
        this.dtb = ((Number(this.toan) + Number(this.ly) + Number(this.hoa) ) / 3).toFixed(2);
        //console.log(this.dtb);  
    }
    getDetails(){
        this.result = `
        Điểm Toán: ${this.toan}    <br/>
        Điểm Lý: ${this.ly}        <br/>
        Điểm Hóa: ${this.hoa}      <br/>
        Điểm Trung Bình: ${this.dtb}`;
    }
}