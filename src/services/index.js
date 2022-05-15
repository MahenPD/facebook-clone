import instance from "../api";

export const isHateSpeechPresent = async (message) => {
  instance.post("/processMessage", message).then((data) => {
    console.log(data);
    debugger;
  });
};
