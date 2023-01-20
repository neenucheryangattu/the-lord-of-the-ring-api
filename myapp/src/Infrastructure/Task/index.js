import { get, del, put, post } from "../common/remote/base_api";
export const datalist = (data) => {
  return get(`/character`, data);
};
export const characterDetails = (id) => {
  return get(`/character/${id}`);
};