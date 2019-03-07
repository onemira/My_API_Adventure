/*global daum*/

import React, { Component } from 'react'

const app_key = '62281d75f8027bdd0e7541dc15ad2edb'

class App extends Component {
  componentDidMount() {
    var container = document.getElementById('map')
    var mapCenter = new daum.maps.LatLng(33.5563, 126.7958)
    var options = {
      center: mapCenter,
      level: 3
    }
    var map = new daum.maps.Map(container, options)
    var content = '<div class="overlay_info">'
    content +=
      '    <a href="http://place.map.daum.net/17600274" target="_blank"><strong>월정리 해수욕장</strong></a>'
    content += '    <div class="desc">'
    content +=
      '        <img src="http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/place_thumb.png" alt="">'
    content +=
      '        <span class="address">제주특별자치도 제주시 구좌읍 월정리 33-3</span>'
    content += '    </div>'
    content += '</div>'
    var position = new daum.maps.LatLng(33.55635, 126.795841)

    // 커스텀 오버레이를 생성합니다
    var mapCustomOverlay = new daum.maps.CustomOverlay({
      position: position,
      content: content,
      xAnchor: 0.5, // 커스텀 오버레이의 x축 위치입니다. 1에 가까울수록 왼쪽에 위치합니다. 기본값은 0.5 입니다
      yAnchor: 1.1 // 커스텀 오버레이의 y축 위치입니다. 1에 가까울수록 위쪽에 위치합니다. 기본값은 0.5 입니다
    })

    // 커스텀 오버레이를 지도에 표시합니다
    mapCustomOverlay.setMap(map)
  }

  render() {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Ceviche+One|Faster+One|Kristi|Oleo+Script"
          rel="stylesheet"
        />
        <h2 className="title">
          hello,
          <br /> stranger!
        </h2>
        <div
          className="gps"
          id="map"
          style={{ width: '400px', height: '400px' }}
        />
      </>
    )
  }
}

export default App
