import { ListPerson } from "./ListPerson.js";
import {Student} from "./Student.js"
import {Employee} from "./Employee.js"
import {Customer} from "./Customer.js"
import { Validation } from "./Vadilation.js";

/**--------------------- */

  const ds = new ListPerson();
  window.ds = ds;
 const validation = new Validation();


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
          <button class="btn btn-danger" id="btnDelete"  onclick="window.deletePerson('${p.id}')">Xóa</button>
          <button class="btn btn-info btnInfo" data-toggle="modal" data-target="#myModal" onclick="window.xemThongTin('${p.id}')">Xem</button>
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

    var isVali = true;
    isVali &= validation.checkEmpty(id,"spanId","Mã không để trống!") 
            && validation.checkTk(id,"spanId","Mã chứa 4-6 kí tự số")
            && validation.checkID(id,"spanId","Mã đã tồn tại!",ds.mangDS);
    isVali  &=   validation.checkName(ten,"spanName","Tên chỉ chứa kí tự chữ!")
            && validation.checkEmpty(ten,"spanName","Tên không để trống!");
    isVali  &=   validation.checkEmail(email,"spanEmail","Email không hợp lệ!")
            &&validation.checkEmpty(email,"spanEmail","Email không để trống!");

    if(isVali){
        var p = new Student(toan,ly,hoa,id,ten,address,email);
        p.diemTB();
        p.getDetails();
        ds.themDS(p);
        setLocalStorage() ;
        hienThi(ds.mangDS);
    }
}
function capNhatStudent() {
    var ten = document.getElementById("txtName").value ;
    var address = document.getElementById("txtAddress").value ;
    var id = document.getElementById("txtId").value ;
    var email = document.getElementById("txtEmail").value ;
    var toan = document.getElementById("txtDiemToan").value ;
    var ly = document.getElementById("txtDiemLy").value ;
    var hoa = document.getElementById("txtDiemHoa").value ;

    var isVali = true;
    isVali &= validation.checkEmpty(id,"spanId","Mã không để trống!") 
            && validation.checkTk(id,"spanId","Mã chứa 4-6 kí tự số");
          // && validation.checkID(id,"spanId","Mã đã tồn tại!",ds.mangDS);
    isVali  &=   validation.checkName(ten,"spanName","Tên chỉ chứa kí tự chữ!")
            && validation.checkEmpty(ten,"spanName","Tên không để trống!");
    isVali  &=   validation.checkEmail(email,"spanEmail","Email không hợp lệ!")
            && validation.checkEmpty(email,"spanEmail","Email không để trống!");

    if(isVali){
        var person = new Student(toan,ly,hoa,id,ten,address,email);
        person.diemTB();
        person.getDetails();
        //console.log("Sau cập nhật:",person);
        var check = window.ds.capNhat(person);
        console.log(check);
        if(check){
            setLocalStorage() ;
            hienThi(ds.mangDS);
            alert("Cập nhật thành công");
        }
        else{
            alert("Cập nhật thất bại !")
        }
    }
}
function themEmployee() {
    var ten = document.getElementById("txtName").value ;
    var address = document.getElementById("txtAddress").value ;
    var id = document.getElementById("txtId").value ;
    var email = document.getElementById("txtEmail").value ;
    var ngayLam = document.getElementById("txtNgayLam").value ;
    var luong = document.getElementById("txtLuong").value ;

    var isVali = true;
    isVali &= validation.checkEmpty(id,"spanId","Mã không để trống!") 
            && validation.checkTk(id,"spanId","Mã chứa 4-6 kí tự số")
            && validation.checkID(id,"spanId","Mã đã tồn tại!",ds.mangDS);
    isVali  &=   validation.checkName(ten,"spanName","Tên chỉ chứa kí tự chữ!")
            && validation.checkEmpty(ten,"spanName","Tên không để trống!");
    isVali  &=   validation.checkEmail(email,"spanEmail","Email không hợp lệ!")
            &&validation.checkEmpty(email,"spanEmail","Email không để trống!");

    if(isVali){
        var p = new Employee(ngayLam,luong,id,ten,address,email);
        console.log(p.type);
        p.totalSalary();
        p.getDetails();
        ds.themDS(p);
        setLocalStorage() ;
        hienThi(ds.mangDS);

    }
}
function capNhatEmployee() {
    var ten = document.getElementById("txtName").value ;
    var address = document.getElementById("txtAddress").value ;
    var id = document.getElementById("txtId").value ;
    var email = document.getElementById("txtEmail").value ;
    var ngayLam = document.getElementById("txtNgayLam").value ;
    var luong = document.getElementById("txtLuong").value ;

    var isVali = true;
    isVali &= validation.checkEmpty(id,"spanId","Mã không để trống!") 
            && validation.checkTk(id,"spanId","Mã chứa 4-6 kí tự số");
           // && validation.checkID(id,"spanId","Mã đã tồn tại!",ds.mangDS);
    isVali  &=   validation.checkName(ten,"spanName","Tên chỉ chứa kí tự chữ!")
            && validation.checkEmpty(ten,"spanName","Tên không để trống!");
    isVali  &=   validation.checkEmail(email,"spanEmail","Email không hợp lệ!")
            &&validation.checkEmpty(email,"spanEmail","Email không để trống!");

    if(isVali){
        var p = new Employee(ngayLam,luong,id,ten,address,email);
        p.totalSalary();
        p.getDetails();
        var check = window.ds.capNhat(p);
        if(check){
            setLocalStorage() ;
            hienThi(ds.mangDS);
            alert("Cập nhật thành công !");
        }
        else{
            alert("Cập nhật thất bại !")
        }
    }
}
function themCustomer() {
    var ten = document.getElementById("txtName").value ;
    var address = document.getElementById("txtAddress").value ;
    var id = document.getElementById("txtId").value ;
    var email = document.getElementById("txtEmail").value ;
    var tenCongTy = document.getElementById("txtTenCongTy").value ;
    var hoaDon = document.getElementById("txtGiaHĐ").value ;
    var danhGia = document.getElementById("txtDanhGia").value ;

    var isVali = true;
    isVali &= validation.checkEmpty(id,"spanId","Mã không để trống!") 
            && validation.checkTk(id,"spanId","Mã chứa 4-6 kí tự số")
            && validation.checkID(id,"spanId","Mã đã tồn tại!",ds.mangDS);
    isVali  &=   validation.checkName(ten,"spanName","Tên chỉ chứa kí tự chữ!")
            && validation.checkEmpty(ten,"spanName","Tên không để trống!");
    isVali  &=   validation.checkEmail(email,"spanEmail","Email không hợp lệ!")
            &&validation.checkEmpty(email,"spanEmail","Email không để trống!");

    if(isVali){    
            var p = new Customer(tenCongTy,hoaDon,danhGia,id,ten,address,email);
            p.getDetails();
            ds.themDS(p);
            setLocalStorage() ;
            hienThi(ds.mangDS);
    }
}
function capNhatCustomer(){
    var ten = document.getElementById("txtName").value ;
    var address = document.getElementById("txtAddress").value ;
    var id = document.getElementById("txtId").value ;
    var email = document.getElementById("txtEmail").value ;
    var tenCongTy = document.getElementById("txtTenCongTy").value ;
    var hoaDon = document.getElementById("txtGiaHĐ").value ;
    var danhGia = document.getElementById("txtDanhGia").value ;

    var isVali = true;
    isVali &= validation.checkEmpty(id,"spanId","Mã không để trống!") 
            && validation.checkTk(id,"spanId","Mã chứa 4-6 kí tự số");
            //&& validation.checkID(id,"spanId","Mã đã tồn tại!",ds.mangDS);
    isVali  &=   validation.checkName(ten,"spanName","Tên chỉ chứa kí tự chữ!")
            && validation.checkEmpty(ten,"spanName","Tên không để trống!");
    isVali  &=   validation.checkEmail(email,"spanEmail","Email không hợp lệ!")
            &&validation.checkEmpty(email,"spanEmail","Email không để trống!");

    if(isVali){
        var person = new Customer(tenCongTy,hoaDon,danhGia,id,ten,address,email);
        person.getDetails();

        var check = window.ds.capNhat(person);
        if(check){
            setLocalStorage() ;
            hienThi(ds.mangDS);
            alert("Cập nhật thành công");
        }
        else{
            alert("Cập nhật thất bại !")
        }
    }
}
/*----*/ 
hienThi(ds.mangDS);
/*----*/ 

window.deletePerson = function(id) {
    ds.xoaPerson(id);
    hienThi(ds.mangDS);
    setLocalStorage();
}


window.xemThongTin = function(id){
    var indexFind = ds.timIndex(id);
    if (indexFind > -1) {
        var personFind = ds.mangDS[indexFind];
        
        document.getElementById("txtId").value = personFind.id;
            //document.getElementById("txtId").disabled = true;
        document.getElementById("txtName").value = personFind.name;
        document.getElementById("txtEmail").value = personFind.email;
        document.getElementById("txtAddress").value = personFind.address;
    if (personFind.type == "Student") {
        document.getElementById("listStudent").style.display = "block";
        document.getElementById("listEmployee").style.display = "none";
        document.getElementById("listCustomer").style.display = "none";

        document.getElementById("doiTuong").value = "Student";
        document.getElementById("btnUpdate").onclick = capNhatStudent;

      document.getElementById("txtDiemToan").value = personFind.toan;
      document.getElementById("txtDiemLy").value = personFind.ly;
      document.getElementById("txtDiemHoa").value = personFind.hoa;
    } else if (personFind.type == "Employee") {
        console.log(personFind);
        document.getElementById("listEmployee").style.display = "block";
        document.getElementById("listStudent").style.display = "none";
        document.getElementById("listCustomer").style.display = "none";
        document.getElementById("doiTuong").value = "Employee";
        document.getElementById("btnUpdate").onclick = capNhatEmployee;
      document.getElementById("txtNgayLam").value = personFind.soNgayLam;
      document.getElementById("txtLuong").value =personFind.luong;

    
    } else if (personFind.type == "Customer") {
        document.getElementById("listCustomer").style.display = "block";
        document.getElementById("listEmployee").style.display = "none";
        document.getElementById("listStudent").style.display = "none";
        document.getElementById("doiTuong").value = "Customer";
        document.getElementById("btnUpdate").onclick = capNhatCustomer;

      document.getElementById("txtTenCongTy").value = personFind.tenCongTy;
      document.getElementById("txtGiaHĐ").value = personFind.hoaDon;
      document.getElementById("txtDanhGia").value = personFind.danhGia;
    }
  }  
}
let mangTmpS = [];
let mangTmpE = [];
let mangTmpC = [];
document.getElementById("renderS").addEventListener('click',()=>{
    ds.mangDS.forEach((p)=>{
        if(p.type == "Student" && !mangTmpS.includes(p)){
            mangTmpS.push(p);
        }
    });
    if(mangTmpS.length>0){
        hienThi(mangTmpS);
    }else alert("Không có đối tượng Student!");
});
document.getElementById("renderE").addEventListener('click',()=>{
    ds.mangDS.forEach((p)=>{
        if(p.type == "Employee" && !mangTmpE.includes(p)){
            mangTmpE.push(p);
        }
    });
    if(mangTmpE.length>0){
        hienThi(mangTmpE);
    }else alert("Không có đối tượng Employee!");

});
document.getElementById("renderC").addEventListener('click',()=>{
    ds.mangDS.forEach((p)=>{
        if(p.type == "Customer" && !mangTmpC.includes(p) ){
            mangTmpC.push(p);
        }
    });
    if(mangTmpC.length>0){
        hienThi(mangTmpC);
    }else alert("Không có đối tượng Customer!");
});

function resetForm() {
    document.getElementById("formQuanLy").reset();
}
document.getElementById("btnReset").onclick = resetForm;




/**
 * 
 * 
 * 
 */
(function(){
    // Back to Top - by CodyHouse.co
	var backTop = document.getElementsByClassName('js-cd-top')[0],
		offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
		offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		scrollDuration = 700,
		scrolling = false;

	if( backTop ) {
		//update back to top visibility on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
			}
		});

		//smooth scroll to top
		backTop.addEventListener('click', function(event) {
			event.preventDefault();
			(!window.requestAnimationFrame) ? window.scrollTo(0, 0) : Util.scrollTo(0, scrollDuration);
		});
	}

	function checkBackToTop() {
		var windowTop = window.scrollY || document.documentElement.scrollTop;
		( windowTop > offset ) ? Util.addClass(backTop, 'cd-top--is-visible') : Util.removeClass(backTop, 'cd-top--is-visible cd-top--fade-out');
		( windowTop > offsetOpacity ) && Util.addClass(backTop, 'cd-top--fade-out');
		scrolling = false;
	}
})();
