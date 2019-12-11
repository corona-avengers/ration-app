import React, { FunctionComponent, useEffect, useState } from "react";
import { View } from "react-native";
import { useDbContext } from "../../context/db";
import {
  DocumentObject,
  NavigationProps,
  DocumentProperties
} from "../../types";
import { DocumentRenderer } from "./DocumentRenderer";
import { DocumentDetailsSheet } from "./DocumentDetailsSheet";
import { LoadingView } from "../Loading";
import { ScreenView } from "../ScreenView";
import { CheckStatus } from "../../constants/verifier";

export const LocalDocumentRendererContainer: FunctionComponent<NavigationProps> = ({
  navigation
}) => {
  const id = navigation.getParam("id");
  const { db } = useDbContext();
  const [document, setDocument] = useState<DocumentObject | null>(null);

  useEffect(() => {
    const subscription = db!.documents
      .findOne({ id: { $eq: id } })
      .$.subscribe(setDocument);
    return () => subscription.unsubscribe();
  }, [db, id]);

  const onVerification = async (checkStatus: CheckStatus): Promise<void> => {
    const updateFunction = (
      oldData: DocumentProperties
    ): DocumentProperties => {
      oldData.isVerified = checkStatus === CheckStatus.VALID;
      oldData.verified = Date.now();
      return oldData;
    };
    await document?.atomicUpdate(updateFunction);
  };

  const output = document ? (
    <View style={{ flex: 1 }}>
      <DocumentRenderer
        document={document.document}
        goBack={() => navigation.goBack()}
      />
      <DocumentDetailsSheet
        document={document.document}
        onVerification={onVerification}
      />
    </View>
  ) : (
    <LoadingView />
  );

  return <ScreenView>{output}</ScreenView>;
};