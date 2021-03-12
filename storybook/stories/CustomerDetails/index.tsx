import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { InputSelection } from "../../../src/components/CustomerDetails/InputSelection";
import { InputIdSection } from "../../../src/components/CustomerDetails/InputIdSection";
import { ManualPassportInput } from "../../../src/components/CustomerDetails/ManualPassportInput";
import { size } from "../../../src/common/styles";
import { View } from "react-native";
import { IdentificationFlag } from "../../../src/types";

const selectionArray: IdentificationFlag[] = [
  {
    scannerType: "CODE_39",
    type: "STRING",
    validation: "NRIC",
  },
];

const CustomerDetailWrapper = ({ children, ...props }: any) => {
  const [inputValue, setInputValue] = useState("");
  return <View {...props}>{children({ inputValue, setInputValue })}</View>;
};

const customerDetailDecorate = (story: any) => {
  return (
    <CustomerDetailWrapper>
      {({ inputValue, setInputValue }: any) =>
        story({ inputValue, setInputValue })
      }
    </CustomerDetailWrapper>
  );
};

storiesOf("CustomerDetail", module)
  .addDecorator(customerDetailDecorate)
  .add("InputSelection", () => (
    <View>
      <InputSelection
        selectionArray={selectionArray}
        currentSelection={selectionArray[0]}
        onInputSelection={() => null}
      />
    </View>
  ))
  .add("InputIdSection", (state: any) => (
    <View style={{ margin: size(3) }}>
      <InputIdSection
        openCamera={() => alert("Open camera action")}
        idInput={state.inputValue}
        setIdInput={(text) => state.setInputValue(text)}
        submitId={() => alert("Submitted")}
        keyboardType={"default"}
      />
    </View>
  ))
  .add("ManualPassportInput", () => (
    <View style={{ margin: size(3) }}>
      <ManualPassportInput
        setIdInput={() => null}
        submitId={() => alert("Submitted")}
      />
    </View>
  ));
