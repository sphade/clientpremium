/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { useAppStorage } from ".";
import useGlobalStoreProvider from "../context";
import { UserReducerType } from "../context/reducers/userReducer";
import { login } from "../routes/api";
import { APP_ROUTES } from "../routes/path";
import useCustomSnackbar from "./useSnackbar";

const { MUTATE_USER } = UserReducerType;

const useLogin = () => {
  const history = useHistory();

  const { succesSnackbar, errorSnackbar } = useCustomSnackbar();
  const { checkAuthenticated, dispatch } = useGlobalStoreProvider();

  const queryClient = useQueryClient();

  const { addToStore } = useAppStorage();

  const { mutate, isLoading } = useMutation(login, {
    onSuccess: async (data) => {
      await addToStore("user", data.data);
      dispatch({ type: MUTATE_USER, payload: data.data });

      succesSnackbar(data.message || "Success");
      await checkAuthenticated();
      history.push(APP_ROUTES.home);
    },
    onError: (error: any) => {
      errorSnackbar(error?.response?.data?.error || "Error");
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  return { mutate, isLoading };
};

export default useLogin;
