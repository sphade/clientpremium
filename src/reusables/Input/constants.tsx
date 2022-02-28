import React from "react";
import { ReactComponent as NavigatorIcon } from "./../../assets/svgs/navigator.svg";
import { ReactComponent as LocationIcon } from "./../../assets/svgs/location-outlined.svg";
import { SvgIcon } from "@mui/material";

export const HiddenEye = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // className="h-6 w-6"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
    />
  </svg>
);

export const IconType = {
  navigator: (
    <SvgIcon color="primary">
      <NavigatorIcon />
    </SvgIcon>
  ),
  location: (
    <SvgIcon color="primary">
      <LocationIcon />
    </SvgIcon>
  ),
};

//     return (
//       <FormControl
//         error={hasError as unknown as boolean}
//         required={required}
//         disabled={disabled}
//         fullWidth={fullWidth}
//       >
//         {label && (
//           <FormLabel id={`${name ?? id}-label`} htmlFor={name ?? id}>
//             {label}
//           </FormLabel>
//         )}
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//           <DateRangePicker
//             ref={ref}
//             allowSameDateSelection
//             clearable
//             desktopModeMediaQuery="@media (min-width: 767px)"
//             // views={["year", "month", "day"]}
//             // minDate={new Date("1920-01-01").toUTCString()}
//             calendars={2}
//             {...(showCalendarIcon && {
//               InputProps: {
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <SvgIcon>
//                       <CalendarIcon />
//                     </SvgIcon>
//                   </InputAdornment>
//                 ),
//               },
//             })}
//             disabled={disabled}
//             disableCloseOnSelect={false}
//             {...rest}
//             value={[]}
//             // onChange={(d: any): (() => void) => handleDateChange(d)}
//             inputFormat={format}
//             renderInput={(startProps, endProps) => (
//               <Fragment>
//                 <PrimaryInput
//                   required={required}
//                   placeholder={placeholder}
//                   hasError={hasError}
//                   errorMessage={errorMessage}
//                   // useIconType={useIconType}
//                   showHelperText={showHelperText}
//                   {...omit(startProps, "label")}
//                 />
//                 <Box sx={{ mx: 2 }}> ~ </Box>
//                 <PrimaryInput
//                   required={required}
//                   placeholder={placeholder}
//                   hasError={hasError}
//                   errorMessage={errorMessage}
//                   // iconType=""
//                   showHelperText={showHelperText}
//                   {...omit(endProps, "label")}
//                 />
//               </Fragment>
//             )}
//           />
//         </LocalizationProvider>
//       </FormControl>
//     );
//   }
// );

// DateRangeInput.displayName = "DateRangePicker";

// export default DateRangeInput;
