
function dataGet(){
  $.ajax({
    url: "전국야영(캠핑)장표준데이터.json"
  })
  .done(function(json){
      console.log("요청성공");
      console.log(json);
      console.log(json.records[1].이용요금);
  })
  .fail(function(){
    console.log("요청실패");
  })
  .always(function(){
    console.log("ajax요청시항상실행");
  })
}
