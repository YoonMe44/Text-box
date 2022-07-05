$(document).ready(function(){
 var testObject = {};
 var arrayName =[];
 var addLocal = 0;
 
$("#SubBtn").click(function(){
  addLocal++;
 let newName = ("name" + addLocal);
 var submit = $("#txt_area").val();
 var TextTitle = $("#txt_ttl").val();
 console.log(TextTitle);
  if(submit != "" && TextTitle != ""){
    const objSubEdit = {
      title: TextTitle ,
      body: submit,
      background : "",
    }
    console.log(objSubEdit);
    let txtttl = objSubEdit.title;
    console.log(txtttl);
  testObject[newName]= objSubEdit;
  console.log(testObject);
  window.localStorage.setItem('name', JSON.stringify(testObject));
  var SubButton = `<div class="addbtnSpot" data-id="${newName}"><input type="text" placeholder="Title..." class="" id="append_ttl">${txtttl}<textarea class="textareaBox" data-id="${newName}" title="Must be at least 8 characters.">${objSubEdit}</textarea>
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
  });
  

  function get(){
 var getJson = window.localStorage.getItem('name');
  if(getJson){
   arrayName = JSON.parse(getJson);
   }
  } 
 get();

  Object.entries(arrayName).forEach(([key, value]) => {
  let objsub = `<div class="addbtnSpot" data-id="${key}"><input type="text" placeholder="Title..." class="" id="append_ttl"><textarea class="textareaBox" data-id="${key}">${value}</textarea>
  <ul id="nav">
    <li class="spotImg">
      <ul class="dropdown">
        <li><button class="del_id" data-id="${key}" id ='dlt_btn' type='button'>Delete</button></li>
      </ul>
    </li>
  </ul>
  </div>`

  console.log(`${key}: ${value}`)
  $(".appendAdd").append(objsub);
  get();
  addLocal++;
  let newName = ("name" + addLocal);
    console.log(testObject[newName]= (value));
  });

// delect //
 $(document).on('click', '#dlt_btn', function(){
  let btnDataId = $(this).data('id');
   $(`.del_id[data-id='${ btnDataId }']`).remove();
   let SecLocal = localStorage.getItem("name");
   console.log(SecLocal);
   console.log(SecLocal[btnDataId]);
   if(SecLocal){
    SecLocals = JSON.parse(SecLocal);
   }
   SecLocals = JSON.parse(SecLocal);
   console.log(SecLocals);
   delete SecLocals[btnDataId];
   console.log(SecLocals);
   localStorage.setItem('name', JSON.stringify(SecLocals));

   ($(".addbtnSpot").data('id'));
   $(`.addbtnSpot[data-id='${ btnDataId }']`).remove()
   localStorage.removeItem(testObject);
});
// delect //
// edit //
$(document).on('change', '.textareaBox', function() {
  let EditbtnDataId = $(this).data('id');
  console.log(EditbtnDataId);
  let EditSystem = $(this).val();
  console.log(EditSystem);
  var Edit = $("#txt_area").val();
  console.log(Edit);
  testObject[EditbtnDataId]= EditSystem;
  console.log(testObject);
  window.localStorage.setItem('name', JSON.stringify(testObject));
});
// edit //

});
