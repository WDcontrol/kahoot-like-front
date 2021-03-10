import { io } from "socket.io-client";
import { socketEvents } from "./events";
// import { getQueueLength } from "./emit";
import { SOCKET_SERVER_URL } from "../config/env";

export const socket = io(SOCKET_SERVER_URL);
export const initSockets = ({ setValue }: any) => {
  socketEvents({ setValue });
  // setValue    ^ is passed on to be used by socketEvents
  // getQueueLength();
};
