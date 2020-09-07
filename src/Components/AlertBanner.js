import React from "react";

function AlertBanner(props) {
  let bannerOn = false;
  function nomineeTest() {}

  return (
    <div>
      <h1>Thank you for choosing five nominees!</h1>
      <button onClick={() => props.setAlertBanner(false)}>Edit nominees</button>
    </div>
  );
}
