/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactComponent as SmsIcon } from "../../../assets/svgs/sms.svg";
import { ReactComponent as PhoneIcon } from "../../../assets/svgs/phone.svg";
import { useQuery } from "react-query";
import { getHelpPhoneNumbersApi } from "../../../routes/api";

export const helpInfo = () => {
  const { data = [] } = useQuery("help_phone", async () => {
    const data = await getHelpPhoneNumbersApi();
    return data;
  });

  return [
    {
      header: "Customer Care Number",
      hasDivider: true,
      content: data.map((phone: Record<string, any>) => ({
        icon: PhoneIcon,
        text: `Call us ${phone?.phone}`,
      })),
    },
    {
      header: "E-mail:",
      hasDivider: false,
      content: [
        {
          icon: SmsIcon,
          text: "bossbusspremiumng.com",
        },
      ],
    },
  ];
};
