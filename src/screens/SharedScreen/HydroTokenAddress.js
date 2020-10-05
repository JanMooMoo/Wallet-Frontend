import React, { useState, useEffect, useContext } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Clipboard,
  ToastAndroid,
  Text,
} from "react-native";
import { LabelInput } from "../../components/Forms";
import SnowflakeContext from "../../context/SnowFlake/snowflakeContext";
import { BgView, Header } from "../../components/Layouts";
import Button from "../../components/Button";
import { Lead, Paragraph } from "../../components/Typography";
import { ThemeContext } from "../../hooks/useTheme";

const HydroTokenAddress = ({ navigation }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

  const theme = isLightTheme ? lightTheme : darkTheme;

  const snowflakeContext = useContext(SnowflakeContext);

  const { getHydroAddress, error, hydroAddress } = snowflakeContext;

  useEffect(() => {
    getHydroAddress;
  }, []);

  const CopyToClipboard = async () => {
    await Clipboard.setString(hydroAddress);
    ToastAndroid.show("Copied To Clipboard!", ToastAndroid.SHORT);
  };

  console.log(hydroAddress)

  return (
    <BgView>
      <Header.Back
        title="Hydro Address"
        onBackPress={navigation.goBack}
      />
      <ScrollView>
        <KeyboardAvoidingView>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10%",
              marginBottom: "10%",
            }}
          >
            <Button text="Get Address" onPress={getHydroAddress} />
          </View>
          <Lead style={{ fontWeight: "300", fontSize: 14, marginBottom: 4 }}>
            Hydro Address
          </Lead>
          <View
            style={{
              borderRadius: 16,
              marginBottom: 15,
              backgroundColor: theme.secondary,
              fontFamily: "Rubik-Regular",
              color: theme.basic,
              fontSize: 16,
              padding: 15,
            }}
          >
            {hydroAddress !== null ? (
              <TouchableOpacity onPress={CopyToClipboard}>
                <Paragraph style={{ color: theme.basic }}> {hydroAddress}</Paragraph>
              </TouchableOpacity>
            ) : (
              <Paragraph>Hydro Address</Paragraph>
            )}
          </View>

          {error ? <Text style={{ color: "red" }}>Error : {error}</Text> : null}
        </KeyboardAvoidingView>
      </ScrollView>
    </BgView>
  );
};

export default HydroTokenAddress;
