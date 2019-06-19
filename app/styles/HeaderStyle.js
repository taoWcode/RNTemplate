import {StyleSheet, PixelRatio, Dimensions} from 'react-native';
const pixelRatio = PixelRatio.get();
let {width, height} =  Dimensions.get('window');

function getAdaptation(num){
  let unitWidth = width / 750; // 750 => UI设计图的宽度
  return parseFloat((num*unitWidth).toFixed(2));
}

let styles = {
  header: {
    flexDirection: "row",
    shadowOffset: {
      width: getAdaptation(1),
      height: getAdaptation(3)
    },
    shadowOpacity: .1,
    shadowColor: "#000",
    borderBottomWidth: getAdaptation(1),
    borderBottomColor: "rgba(0,0,0,.1)",
    borderStyle: "solid"
  },
  header_right_text: {
    fontSize: getAdaptation(32),
    color: "#666",
    textAlign: "center",
    lineHeight: 44
  },
  header_middle: {
    flex: 1,
    height: 44
  },
  header_middle_text: {
    fontSize: getAdaptation(32),
    color: "#333",
    lineHeight: 44,
    textAlign: "center",
    overflow: "hidden"
  },
  header_left: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center"
  },
  header_right: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center"
  }
};

const styleSheet = StyleSheet.create(styles);

export default styleSheet;
