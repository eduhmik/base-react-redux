import { test as testAction } from "../actionCreators/test";

export const test = (action) => async (dispatch) => {
    dispatch(testAction())
}