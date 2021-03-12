import React from "react";
import { storiesOf } from "@storybook/react-native";
import { LightBox } from "../../../src/components/Layout/LightBox";
import { View, Text } from "react-native";

storiesOf("Layout", module).add("LightBox", () => (
  <View>
    <LightBox
      width={200}
      height={200}
      label={<Text>Box size (200,200)</Text>}
    />
  </View>
));
