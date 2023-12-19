import { ReactComponent as CompanyIcon } from "../../assets/icon-company.svg";
import { ReactComponent as LocationIcon } from "../../assets/icon-location.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icon-twitter.svg";
import { ReactComponent as BlogIcon } from "../../assets/icon-website.svg";

import { LocalGihubUser } from "../../types";
import { InfoItem, InfoItemProps } from "../InfoItem";
import styles from "./UserInfo.module.scss";

interface UserInfoProps
  extends Pick<LocalGihubUser, "blog" | "company" | "location" | "twitter"> {}

export const UserInfo = ({
  blog,
  company,
  location,
  twitter,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
  ];

  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
};
