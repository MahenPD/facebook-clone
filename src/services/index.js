import instance from "../api";

export const isHateSpeechPresent = (message) => {
  try {
    return instance.post("/processMessage", message);
  } catch (error) {
    console.log(error);
  }
};
