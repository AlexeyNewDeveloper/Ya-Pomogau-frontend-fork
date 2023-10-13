import { Icon } from 'shared/ui/icons';
import { SmartHeader } from 'shared/ui/smart-header';
import { PageSubMenuAdminStatistics } from 'widgets/page-sub-menu/components/page-sub-menu-admin-statistics/page-sub-menu-admin-statistics';
import styles from './styles.module.css';
import Fieldset from 'shared/ui/fieldset';
import { FieldsetView } from 'shared/ui/fieldset/utils';
import { Input } from 'shared/ui/input';
import { Select } from 'shared/ui/select';

interface IStatusApplicationOptions {
  value: 'open' | 'atWork' | 'close';
  label: 'Открытые' | 'В работе' | 'Закрытые';
}

export const ApplicationsStatisticsPage = () => {
  const statusApplicationOptions: Array<IStatusApplicationOptions> = [
    { value: 'open', label: 'Открытые' },
    { value: 'atWork', label: 'В работе' },
    { value: 'close', label: 'Закрытые' },
  ];
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
                extClassNameInput={styles.period__input_field}
                onChange={() => {
                  console.log('click from');
                }}
              />
              <p className={styles.period__points}>до</p>
              <Input
                name="to"
                placeholder="дд.мм.гггг"
                extClassName={styles.period__input}
                extClassNameInput={styles.period__input_field}
                onChange={() => {
                  console.log('click to');
                }}
              />
            </div>
          </Fieldset>
        </div>
        <div className={styles.status_application}>
          <Fieldset title="Статус заявки" view={FieldsetView.COLUMN}>
            <div className={styles.status_application__fields}>
              <Select
                name="status_application"
                placeholder="Выберите статус заявки"
                defaultValue="open"
                extClassName={styles.select_container}
                options={statusApplicationOptions}
                onChange={() => {
                  console.log('Click accordion');
                }}
              />
            </div>
          </Fieldset>
        </div>
      </div>
    </>
  );
};
