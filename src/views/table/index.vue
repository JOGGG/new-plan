<template>
  <div class="comMain">
    <div id="container"></div>
  </div>
</template>

<script>
import { setMapPlugins } from "@/utils/map";
import { mapState } from "vuex";
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  mounted() {
    this.initMap();
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
      // 坐标拾取
      // https://lbs.amap.com/tools/picker
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
  },
};
</script>

<style lang="scss" scoped>
</style>

