import FeHeader from "./FeHeader.vue";
import FeFooter from "./FeFooter.vue";
import FeMenu from "./FeMenu.vue";
import FePhotoFrame from "./FePhotoFrame.vue";

const components = {
  FeHeader,
  FeFooter,
  FeMenu,
  FePhotoFrame,
};

export default {
  install: (Vue) => {
    for (let name in components) {
      Vue.component(name, components[name]);
    }
  },
};
