console.log("true");
$(document).ready(function(){
  var testObject = {};
  var addLocal = 0;
    $("#SubBtn").click(function(){
      addLocal++;
      let newName = ("name" + addLocal);
       console.log(newName);
      var submit = $("#txt_area").val();
      testObject[newName] = submit;
       console.log(testObject);
      //  var local = localStorage.setItem("name" : testObject);
       localStorage.setItem('name', JSON.stringify(testObject));
      //  var local = localStorage.getItem(testObject);
       if(submit != ""){
          $(".appendAdd").append(`<textarea class="" style="border:1px solid;width:300px;height: 200px;margin-top: 20px;margin-left: 20px;">${submit}</textarea>`);
        }else{
            console.log(false);
        };
        $("#txt_area").val('');
      });
});
