import axios from "axios";

import config from "../../../common/config";



const baseURL = config.BASE_API;

const base = async (options) => {
  let mytoken = "NFS-6_PA56qc8XUus7YG";





  const res = await axios({
    baseURL,
    headers: {
      Authorization: "Bearer " + mytoken,
    },
    ...options,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

  return res;
};

export const get = (url, params) => {
  const options = {
    method: "get",
    url,
    params,
  };
  return base(options);
};

export const patch = (url, data) => {
  const options = {
    method: "patch",
    url,
    data,
  };
  return base(options);
};

export const post = (url, data) => {
  const options = {
    method: "post",
    url,
    data,
  };
  return base(options);
};

export const put = (url, data) => {
  const options = {
    method: "put",
    url,
    data,
  };
  return base(options);
};

export const del = (url, data) => {
  const options = {
    method: "delete",
    url,
    data,
  };
  return base(options);
};
export const putt = (url, data) => {
  const options = {
    method: "put",
    url,
    data,
  };
  return base(options);
};