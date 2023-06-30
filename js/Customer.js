import { Person } from "./Person.js";
export class Customer extends Person{
    constructor(tenCongTy, hoaDon, danhGia, ...restPerson){
        super(...restPerson);
        this.tenCongTy = tenCongTy;
        this.hoaDon = hoaDon;
        this.danhGia = danhGia;
        this.type = "Customer";
    }
    getDetails(){
        this.result = `
        Tên Công Ty: ${this.tenCongTy}<br/>
        Trị Giá Hóa ĐƠn: ${this.hoaDon}<br/>
        Đánh Giá: ${this.danhGia}
        `
    }
}