import {StyleSheet, PixelRatio, Dimensions} from 'react-native';
const pixelRatio = PixelRatio.get();
let {width, height} =  Dimensions.get('window');

function getAdaptation(num){
  let unitWidth = width / 750; // 750 => UI设计图的宽度
  return parseFloat((num*unitWidth).toFixed(2));
}

let styles = {
  flex: {
    flex: 1
  },
  flex_row: {
    flexDirection: "row"
  },
  flex_row_l: {
    flexDirection: "row",
    alignItems: "center"
  },
  flex_row_t: {
    flexDirection: "row",
    justifyContent: "center"
  },
  flex_row_lt: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  flex_row_wrap: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  flex_column_l: {
    alignItems: "center"
  },
  flex_column_t: {
    justifyContent: "center"
  },
  flex_column_lt: {
    justifyContent: "center",
    alignItems: "center"
  },
  ps_re: {
    position: "relative"
  },
  ps_ab: {
    position: "absolute"
  },
  ps_ab_top: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    zIndex: 5
  },
  ps_ab_bottom: {
    position: "absolute",
    left: 0,
    bottom: 0,
    zIndex: 5
  }
};

const styleSheet = StyleSheet.create(styles);

export default styleSheet;
