
export function Validation() {
    this.checkEmpty = function (value, spanID, message) {
        if (value == "") {
            //!chưa hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            //trả kết quả false
            return false;
        }

        //?hợp lệ
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        //trả kết quả true
        return true;
    }

    this.checkTk = function(value, spanID, message){
        var pattern = /^[0-9]+$/;
        if (value.match(pattern) && value.length >= 4 && value.length <= 6) {
            //?hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            //trả kết quả true
            return true;
        }
        //!chưa hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        //trả kết quả false
        return false;
    }

    this.checkID = function (value, spanID, message, mangDS) {
        // some(): duyệt mảng, kiểm tra theo điều kiện => return true/false
        
        var isExist = mangDS.some(function (p, index) {
            // return biểu thức so sanh
            return p.id === value;
        });

        if (isExist) {
            //đã tồn tại mã
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        //?hợp lệ
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        //trả kết quả true
        return true;
    }

    this.checkName = function (value, spanID, message){
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if(value.match(pattern)){
            //?hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            //trả kết quả true
            return true;
        }
            //!chưa hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            //trả kết quả false
            return false;
    }

    
    this.checkEmail = function (value, spanID, message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(pattern)) {
            //?hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            //trả kết quả true
            return true;
        }
        //!chưa hợp lệ
        //thông báo lỗi
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        //trả kết quả false
        return false;
    }
}