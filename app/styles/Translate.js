const toStyles = require("react-native-sass-to-stylesheet");

toStyles.init('../styles',{
    space:2,
    postfix:'Style.js',
    initTransform:false,
    adaptation:true,
    ignored:[]
});