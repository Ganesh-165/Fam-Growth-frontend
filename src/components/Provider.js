import React, { Fragment, useState } from "react";
import ManageProvider from "../Cards/ManageProvider";
import Started from "../Cards/Started";

const Provider = () => {
  const bool = false;
  return (
    <Fragment>
      { bool ?
      <Started/> :
      <ManageProvider/>
      }
    </Fragment>
  );
};

export default Provider;
