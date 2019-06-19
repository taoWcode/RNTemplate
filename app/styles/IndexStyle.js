import {StyleSheet, PixelRatio, Dimensions} from 'react-native';
const pixelRatio = PixelRatio.get();
let {width, height} =  Dimensions.get('window');

function getAdaptation(num){
  let unitWidth = width / 750; // 1080 => UI设计图的宽度
  return parseFloat((num*unitWidth).toFixed(2));
}

let styles = {
  fheader: {
    height: 44
  },
  fheader_bg: {
    backgroundColor: "#e4393c"
  },
  fheader_user: {
    width: 44,
    height: 44,
    marginRight: getAdaptation(20)
  },
  fheader_user_text: {
    fontSize: getAdaptation(24),
    color: "#fff"
  },
  fheader_user_avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: "hidden"
  },
  fheader_user_avatar_img: {
    width: 32,
    height: 32
  },
  fheader_search: {
    marginRight: 10,
    height: 30,
    borderRadius: 15,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: "#fff"
  },
  fheader_search_bg: {
    backgroundColor: "#f5f5f5"
  },
  fheader_search_logo: {
    width: 48,
    height: 16,
    marginRight: 5
  },
  fheader_search_bar: {
    paddingLeft: 5,
    borderLeftWidth: getAdaptation(1),
    borderLeftColor: "#aaa",
    borderStyle: "solid"
  },
  fheader_search_placeholder: {
    color: "#aaa",
    fontSize: 12,
    paddingLeft: 10
  },
  navlist: {
    paddingTop: getAdaptation(20),
    paddingBottom: getAdaptation(20),
    paddingRight: 0,
    paddingLeft: 0
  },
  navlist_item: {
    width: "20%",
    overflow: "hidden"
  },
  navlist_item_icon: {
    width: getAdaptation(80),
    height: getAdaptation(80),
    marginTop: getAdaptation(24),
    marginBottom: 0,
    marginRight: "auto",
    marginLeft: "auto"
  },
  navlist_item_label: {
    fontSize: getAdaptation(24),
    color: "#333",
    textAlign: "center",
    marginTop: getAdaptation(12)
  },
  banner_header_img: {
    width: getAdaptation(750),
    height: getAdaptation(70)
  },
  banner_body_item: {
    width: "50%",
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: getAdaptation(10),
    paddingLeft: getAdaptation(10),
    borderRightWidth: getAdaptation(1),
    borderRightColor: "rgba(112,112,112,0.15)",
    borderStyle: "solid",
    borderBottomWidth: getAdaptation(1),
    borderBottomColor: "rgba(112,112,112,0.15)"
  },
  banner_body_item_title: {
    fontSize: getAdaptation(32),
    color: "#333"
  },
  banner_body_item_tip: {
    fontSize: getAdaptation(24),
    color: "#648EFF"
  },
  banner_body_item_img: {
    width: getAdaptation(310),
    height: getAdaptation(130),
    marginTop: getAdaptation(20),
    marginBottom: getAdaptation(10),
    marginRight: "auto",
    marginLeft: "auto"
  },
  banner_body_item_small: {
    width: "25%"
  },
  banner_body_item_small_img: {
    width: getAdaptation(128),
    height: getAdaptation(128)
  },
  recommend: {
    backgroundColor: "#f5f5f5"
  },
  recommend_header: {
    paddingTop: getAdaptation(40),
    paddingBottom: getAdaptation(40),
    paddingRight: getAdaptation(40),
    paddingLeft: getAdaptation(40)
  },
  recommend_header_text: {
    fontSize: getAdaptation(32),
    color: "#666",
    marginLeft: getAdaptation(10)
  },
  fheader_menu: {
    width: 44,
    height: 44
  }
};

const styleSheet = StyleSheet.create(styles);

export default styleSheet;
