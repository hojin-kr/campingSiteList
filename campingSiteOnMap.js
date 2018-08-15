function allCampingSiteOnMap(){
  /*소제목 치환*/
  $("<small> : 모든 캠핑장</small>").replaceAll("small");

  /*ajax로 json 데이터 가져옴*/
  $.ajax({
    url: "전국야영(캠핑)장표준데이터.json"
  })
  .done(function(json){
      console.log("요청성공");
      console.log(json);
      $("<div id='map' style='width: 99%; height: 500px;'></div>").replaceAll(".playground");
      //매개변수로 json 좌표 데이터 전달해서 출력 가능?
      naverMap();
  })
  .fail(function(){
    console.log("요청실패");
  })
  .always(function(){
    console.log("ajax요청시항상실행");
  })

}


function carCampingSiteOnMap(){
  /*소제목 치환*/
  $("<small> : 자동차 캠핑장</small>").replaceAll("small");

  /*ajax로 json 데이터 가져옴*/
  $.ajax({
    url: "전국야영(캠핑)장표준데이터.json"
  })
  .done(function(json){
      console.log("요청성공");
  })
  .fail(function(){
    console.log("요청실패");
  })
  .always(function(){
    console.log("ajax요청시항상실행");
  })

}

function noCarCampingSiteOnMap(){
  /*소제목 치환*/
  $("<small> : 캠핑장</small>").replaceAll("small");

  /*ajax로 json 데이터 가져옴*/
  $.ajax({
    url: "전국야영(캠핑)장표준데이터.json"
  })
  .done(function(json){
      console.log("요청성공");

  })
  .fail(function(){
    console.log("요청실패");
  })
  .always(function(){
    console.log("ajax요청시항상실행");
  })

}
