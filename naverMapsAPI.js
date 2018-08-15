
//전체화면지도와 미니맵
// size 옵션이 생략되면 map DOM 요소의 HTML 렌더링 크기로 자동 리사이즈 됩니다.
var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.5666805, 126.9784147),
    zoom: 8,
    minZoom: 1,
    mapTypeId: naver.maps.MapTypeId.NORMAL,
    zoomControl: false,
    zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT
    },
    disableKineticPan: false
});

map.setOptions({
    mapTypeControl: false,
    scaleControl: false,
    logoControl: false
});
