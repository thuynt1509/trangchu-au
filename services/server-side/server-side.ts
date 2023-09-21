import { ApiServer } from "./api";
import { logError } from "@/utils/log-helper";
export interface VoteTeamMetadata {
  code: number;
  mess: string;
  data: any;
}
export const serverGetTeamAPLList = async () => {
  let res = {} as VoteTeamMetadata;
  try {
    const result = await ApiServer({
      url: "Event",
      func: "team-apl-get-list",
      data: {},
    });
    if (result.process_status > 0) {
      res = await result.res;
    }
  } catch (error) {
    logError("serverGetTeamAPLList", { error });
  }
  return res;
};
