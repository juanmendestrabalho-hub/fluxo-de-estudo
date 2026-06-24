const channel = new BroadcastChannel("studyflow");

export const syncSend = (data) => channel.postMessage(data);

export const syncListen = (callback) =>
  channel.onmessage = (e) => callback(e.data);
