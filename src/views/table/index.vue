<template>
  <div class="comMain">
    <div id="container">
      <div class="mapBtn" @click="pickLocal()" v-if="showPick">坐标拾取</div>
    </div>
  </div>
</template>

<script>
import { setMapPlugins } from "@/utils/map";
import AMapLoader from "@amap/amap-jsapi-loader";
import { mapState } from "vuex";
export default {
  data() {
    return {
      showPick: false,
      // plugins: "AMap.Scale",
      plugins: "AMap.Scale,AMap.ToolBar,AMap.Geolocation",
      pluginSetting: {
        "AMap.ToolBar": {
          position: {
            bottom: "50px",
            right: "10px",
          },
        },
        "AMap.Geolocation": {
          position: {
            bottom: "10px",
            right: "10px",
          },
        },
      },
    };
  },
  mounted() {
    this.initMap();
  },
  computed: {
    ...mapState({
      mapKey: (state) => JSON.parse(state.app.userData).mapKey,
    }),
  },
  methods: {
    initMap() {
      const _this = this;
      AMapLoader.load({
        key: this.mapKey,
        version: "2.0",
        plugins: [this.plugins],
      })
        .then((AMap) => {
          this.showPick = true;
          this.map = new AMap.Map("container", {
            viewMode: "3D",
            zoom: 12,
            center: [113.930478, 22.533191],
            // 113.393615,23.193975
          });
          setMapPlugins(_this);
          var icon = new AMap.Icon({
            // 图标尺寸
            size: new AMap.Size(50, 62),
            // 图标的取图地址
            image: require("@/assets/icon/heartIcon.png"),
            imageOffset: new AMap.Pixel(0, 0),
          });
          var markerOne = new AMap.Marker({
            position: new AMap.LngLat(113.930478, 22.533191),
            title: "Young",
          });
          var marker = new AMap.Marker({
            position: new AMap.LngLat(113.393615, 23.193975),
            offset: new AMap.Pixel(-50, -62),
            icon: icon, // 添加 Icon 图标 URL
            title: "love",
          });
          this.map.add([marker, markerOne]);
          this.map.setFitView();
          var line = new AMap.Polyline({
            strokeColor: "#80d8ff",
            isOutline: true,
            outlineColor: "white",
          });
          line.setMap(this.map);
          var text = new AMap.Text({
            text: "",
            style: {
              "background-color": "#29b6f6",
              "border-color": "#e1f5fe",
              color: "#FFFFFF",
              "font-size": "12px",
              height: "20px",
              "line-height": "20px",
            },
          });
          text.setMap(this.map);
          function computeDis() {
            var p1 = marker.getPosition(),
              p2 = markerOne.getPosition();
            var textPos = p1.divideBy(2).add(p2.divideBy(2)),
              distance = Math.round(p1.distance(p2));
            var path = [p1, p2];
            line.setPath(path);
            text.setText("两点相距" + distance + "米");
            text.setPosition(textPos);
          }
          computeDis();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    //坐标拾取
    pickLocal() {
      window.open("https://lbs.amap.com/tools/picker", "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.mapBtn {
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 999;
  line-height: 1;
  background-color: #ecf5ff;
  padding: 10px 20px;
  border-radius: 8px;
  color: #409eff;
  border: 1px #b3d8ff solid;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background-color: #409eff;
    border-color: #409eff;
  }
}
</style>

