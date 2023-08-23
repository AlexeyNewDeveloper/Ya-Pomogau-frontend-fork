import { SmartHeader } from 'shared/ui/smart-header';
import { ErrorDialog } from 'shared/ui/error-dialog';
import image from '../assets/no-conection.png';
import styles from '../styles.module.css';
import { Icon } from 'shared/ui/icons';

interface ErrorDialogProps {
  text?: string;
}

export const NoConectionPage = ({ text }: ErrorDialogProps) => {
  return (
    <>
      <ErrorDialog text={text}></ErrorDialog>

      <SmartHeader
        extClassName={styles.smart_header}
        filterIcon={<Icon color="blue" icon="FilterIcon" size="54" />}
        filterText="Фильтр"
        settingIcon={<Icon color="blue" icon="MapApplicationIcon" size="54" />}
        settingText="Карта заявок"
      />
      <div className={styles.content_box}>
        <img
          className={styles.image}
          src={image}
          alt="disconection_image"
        ></img>
      </div>
    </>
  );
};
