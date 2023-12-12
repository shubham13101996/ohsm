import React from "react";
import Layouts from "../components/Layout/Layouts";

const Policy = () => {
  return (
    <Layouts title={"Privacy Policy"}>
      <div className="row display ">
        <div className="col-md-6 ">
          <img
            src="data:image/jpeg;base64,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"
            alt="policy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
        </div>
      </div>
    </Layouts>
  );
};

export default Policy;