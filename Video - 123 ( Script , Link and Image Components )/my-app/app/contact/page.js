import React from "react";
import Script from "next/script";

const contact = () => {
  return (
    <>
      <div>
        <Script>{`alert("Welcome To My Website , Dear User !!! ")`}</Script>
        Contact Page
      </div>
    </>
  );
};

export default contact;

export const metadata = {
  title: "Contact  Facebook | Contact Section FB",
  description:
    "This is Contact Page of Facebook , through it , u can contact with the help center of FB ",
};
