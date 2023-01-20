import { createStore, createHook, defaults } from "react-sweet-state";
import initialState from "./initialState";
import actions from "./actions";

defaults.devtools = true;
const mydata = createStore({
  name: "data",
  initialState,
  actions,
});

export const Getmydata = createHook(mydata, {
  selector: (state) => state,
});