import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { ModalWithClose } from "../../../src/components/Layout/ModalWithClose";
import { AppText } from "../../../src/components/Layout/AppText";
import { View } from "react-native";

const ModalWrapper = ({ children, ...props }: any) => {
  const [isVisible, setIsVisible] = useState(true);
  return <View {...props}>{children({ isVisible, setIsVisible })}</View>;
};

const modalDecorate = (story: any) => {
  return (
    <ModalWrapper>
      {({ isVisible, setIsVisible }: any) => story({ isVisible, setIsVisible })}
    </ModalWrapper>
  );
};

storiesOf("Layout", module)
  .addDecorator(modalDecorate)
  .add("Modal", (state: any) => (
    <View>
      <ModalWithClose
        isVisible={state.isVisible}
        onExit={() => state.setIsVisible(false)}
        children={<AppText>Modal with close</AppText>}
      />
    </View>
  ));
