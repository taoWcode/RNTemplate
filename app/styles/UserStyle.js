import {StyleSheet, PixelRatio, Dimensions} from 'react-native';
const pixelRatio = PixelRatio.get();
let {width, height} =  Dimensions.get('window');

function getAdaptation(num){
  let unitWidth = width / 750; // 750 => UI设计图的宽度
  return parseFloat((num*unitWidth).toFixed(2));
}

let styles = {
  header: {
    paddingTop: getAdaptation(40),
    paddingBottom: getAdaptation(40),
    paddingRight: getAdaptation(30),
    paddingLeft: getAdaptation(30),
    backgroundColor: "#f6f6f6"
  },
  header_info_left: {
    width: getAdaptation(88),
    height: getAdaptation(88),
    borderRadius: getAdaptation(44),
    overflow: "hidden"
  },
  header_info_picture: {
    width: getAdaptation(88),
    height: getAdaptation(88)
  },
  header_info_right: {
    marginLeft: getAdaptation(30),
    justifyContent: "space-around"
  },
  header_info_name: {
    fontSize: getAdaptation(36),
    color: "#333"
  },
  header_info_level: {
    fontSize: getAdaptation(24),
    color: "#999"
  },
  header_link: {
    marginLeft: getAdaptation(30)
  },
  header_link_text: {
    fontSize: getAdaptation(24),
    color: "#999"
  },
  main: {
    paddingTop: getAdaptation(40),
    paddingBottom: getAdaptation(40),
    paddingRight: getAdaptation(30),
    paddingLeft: getAdaptation(30)
  },
  order: {
    borderRadius: getAdaptation(6),
    overflow: "hidden",
    shadowOffset: {
      width: getAdaptation(10)
    },
    shadowOpacity: 0,
    shadowColor: "rgba(0,0,0,0.06)",
    borderWidth: getAdaptation(1),
    borderColor: "#ddd",
    borderStyle: "solid",
    paddingTop: getAdaptation(40),
    paddingBottom: getAdaptation(40),
    paddingRight: 0,
    paddingLeft: 0
  },
  order_left: {
    overflow: "hidden"
  },
  order_right: {
    flexShrink: 0,
    width: getAdaptation(100),
    height: getAdaptation(90),
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: getAdaptation(24),
    paddingLeft: getAdaptation(24),
    borderLeftWidth: getAdaptation(1),
    borderLeftColor: "#ddd",
    borderStyle: "solid"
  },
  order_right_text: {
    fontSize: getAdaptation(24),
    color: "#999"
  },
  order_item_value: {
    fontSize: getAdaptation(32),
    color: "#666"
  },
  order_item_label: {
    fontSize: getAdaptation(24),
    color: "#666",
    marginTop: getAdaptation(10)
  },
  export: {
    borderRadius: getAdaptation(6),
    overflow: "hidden",
    shadowOffset: {
      width: getAdaptation(10)
    },
    shadowOpacity: 0,
    shadowColor: "rgba(0,0,0,0.06)",
    borderWidth: getAdaptation(1),
    borderColor: "#ddd",
    borderStyle: "solid"
  },
  export_item: {
    width: "33.33%",
    borderRightWidth: getAdaptation(1),
    borderRightColor: "#ddd",
    borderStyle: "solid",
    borderBottomWidth: getAdaptation(1),
    borderBottomColor: "#ddd",
    paddingTop: getAdaptation(30),
    paddingBottom: getAdaptation(30),
    paddingRight: getAdaptation(10),
    paddingLeft: getAdaptation(10)
  },
  export_item_icon: {
    width: getAdaptation(36),
    height: getAdaptation(36),
    marginTop: 0,
    marginBottom: 0,
    marginRight: "auto",
    marginLeft: "auto"
  },
  export_item_label: {
    fontSize: getAdaptation(24),
    color: "#666",
    textAlign: "center",
    marginTop: getAdaptation(10)
  }
};

const styleSheet = StyleSheet.create(styles);

export default styleSheet;
