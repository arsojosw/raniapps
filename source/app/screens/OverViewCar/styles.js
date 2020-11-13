import { StyleSheet } from "react-native";
import * as Utils from "@utils";

export default StyleSheet.create({
  contain: {
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 100,
    flex: 1,
    width:200,
  },
  slide: {
    flex: 1,
    alignItems: "center"
  },
  textSlide: {
    marginTop: 30
  },
  backgroundTrans:{
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    width:'100%',
  },
  textWithShadow:{
      textShadowColor: 'rgba(0, 0, 0, 0.85)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
  },
});
