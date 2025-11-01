import WaitlistCard from "@/components/WaitListClient";
import React from "react";

const WaitListpage = () => {
  console.log("Env sheet ID:", process.env.GOOGLE_SHEET_ID);
  console.log("Env key exists:", process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
  return (
    <div>
      <WaitlistCard></WaitlistCard>
    </div>
  );
};

export default WaitListpage;
