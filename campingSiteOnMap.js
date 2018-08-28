function allCampingSiteOnMap(){
  /*소제목 치환*/
  $("<small> : 모든 캠핑장</small>").replaceAll("small");

  /*ajax로 json 데이터 가져옴*/
  $.ajax({
    url: "전국야영(캠핑)장표준데이터.json"
  })
  .done(function(json){
      console.log("요청성공");

      $("<div id='map' style='width: 99%; height: 500px;'></div>").replaceAll(".playground");
      //매개변수로 json 좌표 데이터 전달해서 출력 가능?

      var map = new naver.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: new naver.maps.LatLng(json.records[0].위도, json.records[0].경도)
        /* [수정예정] center는 HTML5 GEO 정보 받아와서 현재 위치로 설정하도록*/
      });

      var latlngs = [];
/*
          new naver.maps.LatLng(json.records[0].위도, json.records[0].경도),
          new naver.maps.LatLng(json.records[1].위도, json.records[1].경도),
          new naver.maps.LatLng(json.records[2].위도, json.records[2].경도),
          new naver.maps.LatLng(json.records[3].위도, json.records[3].경도),
          new naver.maps.LatLng(json.records[4].위도, json.records[4].경도),
          new naver.maps.LatLng(json.records[5].위도, json.records[5].경도),
          new naver.maps.LatLng(json.records[6].위도, json.records[6].경도),
          new naver.maps.LatLng(json.records[7].위도, json.records[7].경도),
          new naver.maps.LatLng(json.records[8].위도, json.records[8].경도),
          new naver.maps.LatLng(json.records[9].위도, json.records[9].경도),
          new naver.maps.LatLng(37.3595646, 129.1174323)
      ];
*/
      for(var j= 0; j< json.records.length; j++){
        latlngs[j] = new naver.maps.LatLng(json.records[j].위도, json.records[j].경도);
        /*위도와 경도 정보를 객체로 저장하여 marker의 위치(position)으로 사용할 */
      }

      var markerList = [];

      for (var i=0, ii=latlngs.length; i<ii; i++) {

              marker = new naver.maps.Marker({
                  position: latlngs[i],
                  map: map,
              });

          markerList.push(marker);

      }
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
