import { getColor, IIconProps } from "./utils";

export const LockIcon = ({ color, size = "24", ...props }: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 196 196"
    fill={getColor(color)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M173.057 196H22.9433C20.981 196 20 195.04 20 193.118V74.9408C20 73.0193 20.981 72.0592 22.9433 72.0592H173.057C175.019 72.0592 176 73.0193 176 74.9408V193.118C176 195.04 174.038 196 173.057 196ZM25.8871 190.235H170.113V77.8237H25.8871V190.235Z" />
    <path d="M147.547 77.8243C145.585 77.8243 144.604 76.863 144.604 74.9414V49.9611C144.604 24.9806 123.019 4.80394 97.5096 4.80394C72.0002 4.80394 50.4154 24.9806 50.4154 49.9611V74.9414C50.4154 76.863 49.4338 77.8243 47.4715 77.8243C45.5093 77.8243 44.5283 76.863 44.5283 74.9414V49.9611C44.5283 22.0983 68.0756 0 97.5096 0C126.943 0 150.49 23.0591 150.49 49.9611V74.9414C150.49 76.863 149.509 77.8243 147.547 77.8243Z" />
    <path d="M97.5096 154.688C95.5473 154.688 94.5663 153.727 94.5663 151.805V116.256C94.5663 114.335 95.5473 113.374 97.5096 113.374C99.4718 113.374 100.453 114.335 100.453 116.256V151.805C100.453 153.727 99.4718 154.688 97.5096 154.688Z" />
  </svg>
);
