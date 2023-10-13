import { Icon } from 'shared/ui/icons';
import { SmartHeader } from 'shared/ui/smart-header';
import { PageSubMenuAdminStatistics } from 'widgets/page-sub-menu/components/page-sub-menu-admin-statistics/page-sub-menu-admin-statistics';
import styles from './styles.module.css';
import Fieldset from 'shared/ui/fieldset';
import { FieldsetView } from 'shared/ui/fieldset/utils';
import { Input } from 'shared/ui/input';

export const ApplicationsStatisticsPage = () => {
  return (
    <>
      <SmartHeader
        icon={<Icon color="blue" icon="StatisticIcon" size="54" />}
        text="Статистика"
      />
      <PageSubMenuAdminStatistics />
      <div className={styles.wrapper}>
        <div className={styles.period}>
          <Fieldset title="Период" view={FieldsetView.ROW}>
            <div className={styles.period__fields}>
              <p className={styles.period__points}>от</p>
              <Input
                name="from"
                placeholder="дд.мм.гггг"
                extClassName={styles.period__input}
                onChange={() => {
                  console.log('click from');
                }}
              />
              <p className={styles.period__points}>до</p>
              <Input
                name="to"
                placeholder="дд.мм.гггг"
                extClassName={styles.period__input}
                onChange={() => {
                  console.log('click to');
                }}
              />
            </div>
          </Fieldset>
        </div>
      </div>
    </>
  );
};
