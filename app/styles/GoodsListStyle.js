import {StyleSheet, PixelRatio, Dimensions} from 'react-native';
const pixelRatio = PixelRatio.get();
let {width, height} =  Dimensions.get('window');

function getAdaptation(num){
  let unitWidth = width / 750; // 1080 => UI设计图的宽度
  return parseFloat((num*unitWidth).toFixed(2));
}

let styles = {
  goods_list: {
    backgroundColor: "#efefef"
  },
  goods_item: {
    width: getAdaptation(368),
    marginBottom: getAdaptation(12),
    borderTopLeftRadius: getAdaptation(6),
    borderTopRightRadius: getAdaptation(6),
    overflow: "hidden",
    backgroundColor: "#fff"
  },
  goods_item_left: {
    marginRight: getAdaptation(12)
  },
  goods_item_picture: {
    width: getAdaptation(368),
    height: getAdaptation(368)
  },
  goods_item_info: {
    paddingTop: getAdaptation(20),
    paddingBottom: getAdaptation(20),
    paddingRight: getAdaptation(20),
    paddingLeft: getAdaptation(20)
  },
  goods_item_info_title: {
    height: getAdaptation(56),
    lineHeight: getAdaptation(28),
    fontSize: getAdaptation(24),
    color: "#333",
    marginBottom: getAdaptation(10)
  },
  goods_item_info_price: {
    fontSize: getAdaptation(24),
    color: "#e4393c",
    marginRight: getAdaptation(10)
  },
  goods_item_info_num: {
    fontSize: getAdaptation(20),
    color: "#999"
  }
};

const styleSheet = StyleSheet.create(styles);

export default styleSheet;
