import { LocalGihubUser } from "../../types";
import { UserInfo } from "../UserInfo";
import { UserStat } from "../UserStat";
import { UserTitle } from "../UserTitle";
import styles from "./UserCard.module.scss";

interface UserCardProps extends LocalGihubUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <img src={props.avatar} alt={props.login} className={styles.avatar} />
      <UserTitle
        name={props.name}
        login={props.login}
        created={props.created}
      />
      <p className={`${styles.bio}${props.bio ? "" : `${styles.empty}`}`}>
        {props.bio || "This profile has no bio"}
      </p>
      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />
      <UserInfo
        blog={props.blog}
        company={props.company}
        location={props.location}
        twitter={props.twitter}
      />
    </div>
  );
};
