import React, { useState, useContext } from "react";
import { View, Image, Clipboard, ToastAndroid, ScrollView } from "react-native";
import { SecondaryBgView, SecondaryHeader } from "../../components/Layouts";
import { ThemeContext } from "../../hooks/useTheme";
import { Paragraph } from "../../components/Typography";
import { SettingsCard, SettingsItemCard } from "../../components/cards";
import SnowflakeContext from "../../context/SnowFlake/snowflakeContext";
import Button from "../../components/Button";

const Settings = ({ navigation }) => {

  const snowflakeContext = useContext(SnowflakeContext);

  const { hydroAddress } = snowflakeContext;
  console.log(hydroAddress)
  //This function generates a random number used for the generation of qr code
  //   function generateRandomString(length) {
  //     var result = "";
  //     var characters =
  //       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //     var charactersLength = characters.length;
  //     for (var i = 0; i < length; i++) {
  //       result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //     }
  //     return result;
  //   }

  //   const [qrValue, setQrValue] = useState({
  //     initialValue: generateRandomString(10),
  //     valueForQRCode,
  //   });
  //   getValue = () => {
  //     setQrValue({ valueForQRCode: initialValue });
  //   };

  const CopyToClipboard = async () => {
    await Clipboard.setString(hydroAddress);
    ToastAndroid.show("Copied To Clipboard!", ToastAndroid.SHORT);
  };
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <SecondaryBgView>
      <SecondaryHeader.Back title="Settings" onBackPress={navigation.goBack} />
      <SettingsCard hydroAddress={hydroAddress} onIdPress={CopyToClipboard} />

      <View
        style={{
          flex: 1,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          marginTop: "10%",
        }}
      >
        <SettingsItemCard value="Export keys" />
        <SettingsItemCard value="Advanced" />

        <SettingsItemCard value="Change Password" />
        <SettingsItemCard value="Dark Mode" onPress={toggleTheme} />
        <SettingsItemCard value="Contact Card" />
        <SettingsItemCard value="Rate Us" />
      </View>
    </SecondaryBgView>
  );
};

export default Settings;
