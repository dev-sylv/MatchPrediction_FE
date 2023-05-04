import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserISVerified } from "./Api";

const ConfirmPage = () => {
  const { id }: any = useParams();

  useEffect(() => {
    UserISVerified(id);
  });
  return <div>You are now a verified user Continue to sign in</div>;
};

export default ConfirmPage;
