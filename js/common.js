$(document).ready(function(){
 var testObject = {};
 var arrayName =[];
 var addLocal = 0;
 
$("#SubBtn").click(function(){
  addLocal++;
 let newName = ("name" + addLocal);
 var submit = $("#txt_area").val();
 var textTitle = $("#txt_ttl").val();
 console.log(textTitle);
  
  if(submit != "" && textTitle != ""){
    let objSubEdit = {
      title: textTitle ,
      body: submit,
      background : "",
    }
    console.log(objSubEdit);
    let txtttl = objSubEdit.title;
    let txtbody = objSubEdit.body;
    console.log(txtbody);
    console.log(txtttl);
  testObject[newName]= objSubEdit; 
  console.log(testObject);
  window.localStorage.setItem('name', JSON.stringify(testObject));
  var SubButton = `<div class="addbtnSpot" data-id="${newName}"><input type="text" placeholder="Title..." class="textTitleAdd" id="append_ttl" value="${txtttl}" data-id="${newName}"><textarea class="textareaBox" data-id="${newName}" title="Must be at least 8 characters.">${txtbody}</textarea>
   <ul id="nav">
    <li class="spotImg">
      <ul class="dropdown">
      <li><button class="del_id" data-id="${newName}" id = 'dlt_btn'  type='button' >Delete</button></li>
      </ul>
    </li>
   </ul>
  </div>`;
  $(".appendAdd").append(SubButton);
  $("#txt_ttl").append(SubButton);
  console.log(SubButton);
  }else{
    console.log(false);
  };
  $("#txt_area").val('');
  $(".txt").val('');
  });
 function get(){
 var getJson = window.localStorage.getItem('name');
  if(getJson){
   arrayName = JSON.parse(getJson);
   }
  } 
 get();

  Object.entries(arrayName).forEach(([key, value]) => {
  let addnew = arrayName[key];
  let objsub = `<div class="addbtnSpot" data-id="${key}"><input type="text" placeholder="Title..." class="textTitleAdd" id="append_ttl" value="${addnew.title}" data-id="${key}"><textarea class="textareaBox" data-id="${key}">${addnew.body}</textarea>
  <ul id="nav">
    <li class="spotImg">
      <ul class="dropdown">
        <li><button class="del_id" data-id="${key}" id ='dlt_btn' type='button'>Delete</button></li>
      </ul>
    </li>
  </ul>
  </div>`
  $(".appendAdd").append(objsub);
  get();
  addLocal++;
  let newName = ("name" + addLocal);
    testObject[newName]= (value);
  });

// delect //
 $(document).on('click', '#dlt_btn', function(){
  let btnDataId = $(this).data('id');
   $(`.del_id[data-id='${ btnDataId }']`).remove();
   let secLocal = localStorage.getItem("name");
   console.log(secLocal);
   console.log(secLocal[btnDataId]);
   if(secLocal){
    secLocals = JSON.parse(secLocal);
   }
   secLocals = JSON.parse(secLocal);
   console.log(secLocals);
   delete secLocals[btnDataId];
   console.log(secLocals);
   localStorage.setItem('name', JSON.stringify(secLocals));

   ($(".addbtnSpot").data('id'));
   $(`.addbtnSpot[data-id='${ btnDataId }']`).remove()
   localStorage.removeItem(testObject);
});
// delect //
// edit //
$(document).on('change' , '.textareaBox, .textTitleAdd' ,function() {
let btnDataId = $(this).data('id');
var submit = $(`.textareaBox[data-id='${btnDataId}']`).val();
console.log(submit);
var textTitle = $(`.textTitleAdd[data-id='${btnDataId}']`).val();
console.log(textTitle);
let objSubEditbx = {
  title: textTitle ,
  body: submit,
  background : "",
}
console.log(objSubEditbx);
testObject[btnDataId]= objSubEditbx;
 (window.localStorage.setItem('name', JSON.stringify(testObject)));
});

});
