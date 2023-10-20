import { PageSubMenu } from '../page-sub-menu/page-sub-menu';
import { PageSubMenuLink } from '../page-sub-menu-link/page-sub-menu-link';
import styles from './styles.module.css';

interface IPageSubMenuAdminStatisticsProps {
  extClassName?: string;
}

export const PageSubMenuAdminStatistics = ({
  extClassName,
}: IPageSubMenuAdminStatisticsProps) => {
  return (
    <PageSubMenu
      links={
        <>
          <PageSubMenuLink
            to="/profile/statistics/applications"
            text="Заявки"
          />
          <PageSubMenuLink to="/profile/statistics/users" text="Пользователи" />
        </>
      }
    />
  );
};
