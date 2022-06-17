$(document).ready(function(){
  var testObject = {};
  var addLocal = 0;
    $("#SubBtn").click(function(){
      addLocal++;
      let newName = ("name" + addLocal);
       console.log(newName);
      var submit = $("#txt_area").val();
      testObject[newName]= submit;
      console.log(testObject);
      localStorage.setItem('name', JSON.stringify(testObject));
       if(submit != ""){
         var SubButton = `<div id="addbtnSpot"><textarea class="" style="border:1px solid;width:300px;height: 200px;padding: 20px;margin-top: 20px;margin-left: 20px;position:relative;">${submit}</textarea><div class="spotImg"></div><button id = 'dlt_btn' type='button'>Delete</button></div>`;
          $(".appendAdd").append(SubButton);
        }else{
            console.log(false);
        };
        $("#txt_area").val('');
      });
      function get(){
        var getJson = localStorage.getItem('name')
        if(getJson){
            arrayName = JSON.parse(getJson);
        }
        console.log(getJson);
    } 
    get();
    console.log(arrayName);
    Object.entries(arrayName).forEach(([key, value]) => {
      console.log(`${key}: ${value}`)
      $(".appendAdd").append(`<div id="addbtnSpot"><textarea class="" style="border:1px solid;width:300px;height: 200px;padding: 20px;margin-top: 20px;margin-left: 20px;">${value}</textarea><div class="spotImg"></div><button id = 'dlt_btn' type='button'>Delete</button></div>`);
      get();
  });
  // $(".spotImg").click(function(){
  //   $("#dlt_btn").show();
  // });
});
