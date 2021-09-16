import {Text, Tooltip } from "react-native-elements";

const PopupStatus = ({msg}) => {
    return(
      <Tooltip popover={<Text></Text>}>
        <Text>{msg}</Text>
      </Tooltip>
    )
}

export default PopupStatus; 