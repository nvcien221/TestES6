import { ListPerson } from "./ListPerson.js";
import {Student} from "./Student.js"
import {Employee} from "./Employee.js"
import {Customer} from "./Customer.js"


/**--------------------- */

 const ds = new ListPerson();

function setLocalStorage() {
    localStorage.setItem("DS",JSON.stringify(ds.mangDS));
}
function getLocalStorage() {
    var dataLocal = JSON.parse(localStorage.getItem("DS")); 
    if(dataLocal !== null){
       // hienThi(dataLocal);

        ds.mangDS = dataLocal;
    }
}
getLocalStorage();


document.getElementById("doiTuong").addEventListener("change", function() {
    var selectedOption = this.value;
    
    switch (selectedOption){
        case "Student":
            document.getElementById("listStudent").style.display = "block";
            document.getElementById("listEmployee").style.display = "none";
            document.getElementById("listCustomer").style.display = "none";
            /**--------------------- */

            document.getElementById("btnAdd").onclick = themStudent;
            break;
        case "Employee":
            document.getElementById("listEmployee").style.display = "block";
            document.getElementById("listStudent").style.display = "none";
            document.getElementById("listCustomer").style.display = "none";

            document.getElementById("btnAdd").onclick = themEmployee;
            break;
        case "Customer":
            document.getElementById("listCustomer").style.display = "block";
            document.getElementById("listEmployee").style.display = "none";
            document.getElementById("listStudent").style.display = "none";

            document.getElementById("btnAdd").onclick = themCustomer;
            break;
        case "Đối Tượng":
            alert("Hãy chọn đối tượng!");
    }
});
/**--------------------- */


function hienThi(mang) {
    var content = "";
    mang.map(function (p) {
      var tr = `<tr>
        <td>${p.id}</td>
        <td>${p.name}</td>
        <td>${p.address}</td>
        <td>${p.email}</td>
        <td>${p.result}</td>
        <td>
          <button class="btn btn-danger" onclick ='deletePerson(${p.id})'>Xóa</button>
          <button class="btn btn-info btnInfo" data-toggle="modal" data-target="#myModal" onclick="xemThongTin('${p.id}')">Xem</button>
        </td>
      </tr>`;
      content += tr;
    });
    document.getElementById("tbodyDS").innerHTML = content;
  }



 
/*----*/ 

function themStudent() {
    var ten = document.getElementById("txtName").value ;
    var address = document.getElementById("txtAddress").value ;
    var id = document.getElementById("txtId").value ;
    var email = document.getElementById("txtEmail").value ;
    var toan = document.getElementById("txtDiemToan").value ;
    var ly = document.getElementById("txtDiemLy").value ;
    var hoa = document.getElementById("txtDiemHoa").value ;

    var p = new Student(toan,ly,hoa,id,ten,address,email);
    p.diemTB();
    p.getDetails();
    ds.themDS(p);
    setLocalStorage() ;
    hienThi(ds.mangDS);

}
function themEmployee() {
    var ten = document.getElementById("txtName").value ;
    var address = document.getElementById("txtAddress").value ;
    var id = document.getElementById("txtId").value ;
    var email = document.getElementById("txtEmail").value ;
    var ngayLam = document.getElementById("txtNgayLam").value ;
    var luong = document.getElementById("txtLuong").value ;

    var p = new Employee(ngayLam,luong,id,ten,address,email);
    p.totalSalary();
    p.getDetails();
    ds.themDS(p);
    setLocalStorage() ;
    hienThi(ds.mangDS);

}
function themCustomer() {
    var ten = document.getElementById("txtName").value ;
    var address = document.getElementById("txtAddress").value ;
    var id = document.getElementById("txtId").value ;
    var email = document.getElementById("txtEmail").value ;
    var tenCongTy = document.getElementById("txtTenCongTy").value ;
    var hoaDon = document.getElementById("txtGiaHĐ").value ;
    var danhGia = document.getElementById("txtDanhGia").value ;

    var p = new Customer(tenCongTy,hoaDon,danhGia,id,ten,address,email);
    p.getDetails();
    ds.themDS(p);
    setLocalStorage() ;
    hienThi(ds.mangDS);
}

/*----*/ 

 function deletePerson(id){
    ds.xoaPerson(id);
    hienThi(ds.mangDS);
    setLocalStorage();
}
export default deletePerson;

