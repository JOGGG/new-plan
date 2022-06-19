<template>
  <div class="comMain">
    <div id="container">
      <div class="mapBtn" @click="pickLocal()">坐标拾取</div>
    </div>
  </div>
</template>

<script>
import { setMapPlugins } from "@/utils/map";
import { mapState } from "vuex";
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  mounted() {
    this.$nextTick(() => {
      this.initMap();
    });
  },
  data() {
    return {
      map: null,
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
          this.map = new AMap.Map("container", {
            viewMode: "3D",
            zoom: 14,
            center: [113.930478, 22.533191],
          });
          setMapPlugins(_this);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    //坐标拾取
    pickLocal() {
      window.open('https://lbs.amap.com/tools/picker', "_blank");
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

