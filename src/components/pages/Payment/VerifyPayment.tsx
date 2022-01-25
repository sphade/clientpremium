import React, { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import useCustomSnackbar from "../../../hooks/useSnackbar";
import { Preloader } from "../../../reusables";
import { useAxios } from "../../../routes/api";
import { APP_ROUTES } from "../../../routes/path";
import { getUrlQueryEntries } from "../../../utils";

const VerifyPayment = () => {
  console.log("verify payments");
  const history = useHistory();

  const request = useAxios();

  const queryClient = useQueryClient();

  const { succesSnackbar, errorSnackbar } = useCustomSnackbar();
  const { reference = "" } = getUrlQueryEntries();

  const { mutate, isLoading } = useMutation(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (data: Record<string, any>) => {
      const response = await request.post(
        `/charter/land/3fcf2405-47a4-4280-a64a-2c1022645d00&price=50000`,
        data
      );
      return response.data;
    },
    {
      onSuccess: async (data) => {
        console.log({ data });
        succesSnackbar(data?.message || "Success");
        history.push(APP_ROUTES.bookedPage);
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (error: any) => {
        errorSnackbar(error?.response?.data?.error || "Error");
      },
      onSettled: () => {
        queryClient.invalidateQueries("create");
      },
    }
  );

  useEffect(() => {
    const data = {
      duration: "daily",
      destination: "Ikeja, Lagos",
      pickupLocation: "Ijaye, Lagos",
      pickupDate: "22021-12-28 23:00:00+00",
      amount: 8500000,
      reference: reference,
      provider: "paystack",
    };

    mutate(data);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }
  return (
    <div>
      <p>Payments</p>
    </div>
  );
};

export default VerifyPayment;
