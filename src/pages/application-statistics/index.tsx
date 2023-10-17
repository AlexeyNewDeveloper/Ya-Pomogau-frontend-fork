import { Icon } from 'shared/ui/icons';
import { SmartHeader } from 'shared/ui/smart-header';
import { PageSubMenuAdminStatistics } from 'widgets/page-sub-menu/components/page-sub-menu-admin-statistics/page-sub-menu-admin-statistics';
import styles from './styles.module.css';
import Fieldset from 'shared/ui/fieldset';
import { FieldsetView } from 'shared/ui/fieldset/utils';
import { Input } from 'shared/ui/input';
import { Accordion } from 'shared/ui/accordion';
import Checkbox from 'shared/ui/checkbox';
import { Button } from 'shared/ui/button';
import excelIconImage from '../../app/assets/images/ExcelIcon.svg';
import { useState } from 'react';

interface IStatusApplicationOptions {
  value: 'open' | 'atWork' | 'close';
  label: 'Открытые' | 'В работе' | 'Закрытые';
}

export enum ButtonsNameForStatisticsPage {
  generateReport = 'generateReport',
  downloadReport = 'downloadReport',
}

export const ApplicationsStatisticsPage = () => {
  const statusApplicationOptions: Array<IStatusApplicationOptions> = [
    { value: 'open', label: 'Открытые' },
    { value: 'atWork', label: 'В работе' },
    { value: 'close', label: 'Закрытые' },
  ];
  const regexDate = /^\d{1,2}\.\d{1,2}\.\d{4}$/;
  const templateDatePeriod = 'дд.мм.гггг';

  const [selectedCategoryFromAccordion, setSelectedCategoryFromAccordion] =
    useState<string | null>(null);

  const [period, setPeriod] = useState<{
    from: string | null;
    to: string | null;
  }>({ from: null, to: null });

  const [
    currentStatusApplicationCheckbox,
    setCurrentStatusApplicationCheckbox,
  ] = useState<boolean>(false);

  const handleFormAccordion = (value: string) => {
    setSelectedCategoryFromAccordion(value);
  };

  function daysInMonth(month: number, year: number): number {
    return new Date(year, month, 0).getDate();
  }

  const validatePeriod = (value: string): boolean => {
    const arrayDateValues = value.split('.');
    const date = Number(arrayDateValues[0]);
    const month = Number(arrayDateValues[1]);
    const year = Number(arrayDateValues[2]);
    if (month > 12 || date >= daysInMonth(month, year)) {
      return false;
    }
    return true;
  };

  const handleInputDate = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const element = e.target as HTMLInputElement;
    if (element.value.length > templateDatePeriod.length) {
      return;
    }
    switch (element.name) {
      case 'from':
        setPeriod({ ...period, from: element.value });
        if (element.value.length === templateDatePeriod.length) {
          if (
            !regexDate.test(element.value) ||
            !validatePeriod(element.value)
          ) {
            console.log('неправильный формат даты в поле ОТ');
            setPeriod({ ...period, from: null });
          }
        }
        break;
      case 'to':
        setPeriod({ ...period, to: element.value });
        if (element.value.length === templateDatePeriod.length) {
          if (
            !regexDate.test(element.value) ||
            !validatePeriod(element.value)
          ) {
            console.log('неправильный формат даты в поле ДО');
            setPeriod({ ...period, to: null });
          }
        }
        break;
      default:
        return;
    }
  };

  const handleCurrentStatusApplicationCheckbox = () => {
    setCurrentStatusApplicationCheckbox(!currentStatusApplicationCheckbox);
  };

  const handleSubmit = (
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>
  ) => {
    e.preventDefault();
    const buttonName = e.nativeEvent.submitter as HTMLButtonElement;
    const formData = {
      period: {
        from: period.from,
        to: period.to,
      },
      statusApplication: selectedCategoryFromAccordion,
      currentStatusApplication: currentStatusApplicationCheckbox,
    };
    if (buttonName.name === ButtonsNameForStatisticsPage.downloadReport) {
      console.log(formData);
    }
    if (buttonName.name === ButtonsNameForStatisticsPage.generateReport) {
      console.log(formData);
    }
  };

  const disabledButton =
    !selectedCategoryFromAccordion || !period.from || !period.to;

  return (
    <>
      <SmartHeader
        icon={<Icon color="blue" icon="StatisticIcon" size="54" />}
        text="Статистика"
      />
      <PageSubMenuAdminStatistics extClassName={styles.submenu} />
      <form
        id="applicationStatisticForm"
        name="applicationStatisticForm"
        className={styles.wrapper}
        onSubmit={handleSubmit}
      >
        <div className={styles.period}>
          <Fieldset title="Период" view={FieldsetView.ROW}>
            <div className={styles.period__fields}>
              <p className={styles.period__points}>от</p>
              <Input
                name="from"
                placeholder={templateDatePeriod}
                extClassNameInput={styles.period__input_field}
                onChange={handleInputDate}
                value={period.from || ''}
              />
              <p className={styles.period__points}>до</p>
              <Input
                name="to"
                placeholder={templateDatePeriod}
                extClassName={styles.period__input}
                extClassNameInput={styles.period__input_field}
                onChange={handleInputDate}
                value={period.to || ''}
              />
            </div>
          </Fieldset>
        </div>
        <div className={styles.status_application}>
          <Fieldset title="Статус заявки" view={FieldsetView.COLUMN}>
            <div className={styles.status_application__fields}>
              <Accordion
                name="status_application"
                arrayOptions={statusApplicationOptions}
                onChange={handleFormAccordion}
                placeholder="Выберите статус заявки"
              />
            </div>
          </Fieldset>
        </div>
        <Checkbox
          label="Статус на данный момент"
          name="currentStatusApplication"
          id="currentStatusApplication"
          extClassName={styles.current_status_application_checkbox}
          onChange={handleCurrentStatusApplicationCheckbox}
        />
        <div className={styles.buttons_container}>
          <Button
            buttonType="primary"
            label="Сформировать отчет"
            actionType="submit"
            id={ButtonsNameForStatisticsPage.generateReport}
            name={ButtonsNameForStatisticsPage.generateReport}
            disabled={disabledButton}
          />
          <Button
            buttonType="secondary"
            label="Скачать отчет"
            actionType="submit"
            id={ButtonsNameForStatisticsPage.downloadReport}
            name={ButtonsNameForStatisticsPage.downloadReport}
            disabled={disabledButton}
            customIcon={<img src={excelIconImage} alt="excelIcon" />}
          />
        </div>
      </form>
    </>
  );
};
