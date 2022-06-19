export function setMapPlugins(_this) {
  const plugin = _this.plugins.split(',')
  const pluginSetting = _this.pluginSetting
  plugin.forEach(item => {
    if (pluginSetting[item]) {
      //pluginSetting exist
      var item = new AMap[item.split('.')[1]](pluginSetting[item])
    } else {
      var item = new AMap[item.split('.')[1]]()
    }
    _this.map.addControl(item)
  });
}
