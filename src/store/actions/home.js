import { apis } from "../../apis"
import actionsType from "./ationsType";
export const getHome = () => async (dispatch) => {
    let res = await apis.getHome();
    try {
        if (res?.data?.feeds[0]) {
            dispatch({
                type: actionsType.GET_HOME,
                homeData: res.data.feeds[0]
            })
        }
        else {
            dispatch({
                type: actionsType.GET_HOME,
                homeData: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionsType.GET_HOME,
            homeData: null
        })
    }

}