import { PageSubMenu } from '../page-sub-menu/page-sub-menu';
import { PageSubMenuLink } from '../page-sub-menu-link/page-sub-menu-link';
import styles from './styles.module.css';

export const PageSubMenuAdminStatistics = () => {
  return (
    <div className={styles.wrapper}>
      <PageSubMenu
        links={
          <>
            <PageSubMenuLink
              to="/profile/statistics/applications"
              text="Заявки"
            />
            <PageSubMenuLink
              to="/profile/statistics/users"
              text="Пользователи"
            />
          </>
        }
      />
    </div>
  );
};
