import moment from "moment";

export const logInfo = (name: string, input?: any, output?: any) => {
  console.log(
    `${moment().format(
      "DD/MM/YYYY HH:MM"
    )} - [${name}] || INFO || Input: ${JSON.stringify(
      input
    )} || Output: ${JSON.stringify(output)} \n`
  );
};
export const logError = (name: string, input?: any, output?: any) => {
  console.log(
    `${moment().format(
      "DD/MM/YYYY HH:MM"
    )} - [${name}] || ERROR || Input: ${JSON.stringify(
      input
    )}|| Output: ${JSON.stringify(output)} \n`
  );
};
export const renderUrlImage = (url: string) => {
  return `url(${process.env.NEXT_PUBLIC_BASE_MEDIA}${url})`;
};

export const renderImage = (url: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_MEDIA}${url}`;
};
