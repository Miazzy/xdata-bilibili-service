import { AnyAction, Dispatch } from "redux";
import { setShouldLoad, setUpUserInfo } from "../actions";
import { getUserInfo } from "../../api/up-user";
import { UpUser } from "../../models";

export default function getUser(mId: number) {
  return (dispatch: Dispatch<AnyAction>) => {
    return getUserInfo(mId).then((result) => {
      if (result.code === "1") {
        const data = result.data;
        const upUser = new UpUser(
          data.mid,
          data.name,
          data.face,
          data.level,
          data.sex,
          data.sign,
          data.status.following,
          data.status.follower
        );
        dispatch(setUpUserInfo(upUser));
      }
      if (process.env.REACT_ENV === "server") {
        dispatch(setShouldLoad(false));
      }
    });
  }
}
