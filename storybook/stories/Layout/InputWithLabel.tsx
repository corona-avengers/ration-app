import React from "react";
import { storiesOf } from "@storybook/react-native";
import { InputWithLabel } from "../../../src/components/Layout/InputWithLabel";
import { size } from "../../../src/common/styles";
import { View } from "react-native";

const inputWithLabelElements = (): JSX.Element[] => {
  return [
    <>
      <InputWithLabel label="Input with label" />
    </>,
    <>
      <InputWithLabel label="Not Editable Input" editable={false} />
    </>,
  ];
};

storiesOf("Layout", module).add("InputWithLabel", () => (
  <View style={{ margin: size(3) }}>
    {inputWithLabelElements().map((inputWithLabelElement, index) => (
      <View key={index} style={{ marginBottom: size(1) }}>
        {inputWithLabelElement}
      </View>
    ))}
  </View>
));
