import styles from './styles.module.css';
import { IconArrow } from '../select';
import { useState } from 'react';

interface IAccordionProps {
  extraClasses?: {
    extraClassContainer?: string;
    extraClassToggleButton?: string;
    extraClassListContainer?: string;
    extraClassListItem?: string;
    extraClassListInput?: string;
    extraClassLabel?: string;
    extraClassLabelText?: string;
  };
  arrayOptions: Array<{ value: string; label: string }>;
  name: string;
  onChange: (value: string) => void;
}

export const Accordion = ({
  extraClasses,
  arrayOptions,
  name,
  onChange,
}: IAccordionProps) => {
  const [isOpenList, setIsOpenList] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const classContainer = extraClasses?.extraClassContainer || styles.container;
  const classToggleButton =
    extraClasses?.extraClassToggleButton || styles.button_toggle_list;
  const classListContainer =
    extraClasses?.extraClassListContainer || styles.list_container;
  const classListItem = extraClasses?.extraClassListItem || styles.list_item;
  const classListInput = extraClasses?.extraClassListInput || styles.list_input;
  const classLabel = extraClasses?.extraClassLabel || styles.list_label;
  const classLabelText =
    extraClasses?.extraClassLabelText || styles.list_label_text;

  const handleButtonOpenList = () => {
    setIsOpenList(!isOpenList);
  };

  const handleFieldset = (e: React.FormEvent<HTMLFieldSetElement>) => {
    const element = e.target as HTMLInputElement;
    setSelectedCategory(element.value);
    onChange(element.value);
  };

  return (
    <div className={classContainer}>
      <button
        type="button"
        className={classToggleButton}
        name="buttonToggleList"
        onClick={handleButtonOpenList}
      >
        <div>Выберите статус заявки</div>
        <IconArrow extClassName={isOpenList ? styles.icon_arrow : ''} />
      </button>
      {isOpenList && (
        <fieldset
          onChange={handleFieldset}
          className={styles.fieldset_container}
        >
          <ul className={classListContainer}>
            {arrayOptions.map((option, index) => {
              return (
                <li className={classListItem} key={index}>
                  <label htmlFor={option.value} className={classLabel}>
                    <input
                      type="radio"
                      name={name}
                      value={option.value}
                      id={option.value}
                      className={classListInput}
                      defaultChecked={option.value === selectedCategory}
                    />
                    <span className={classLabelText}>{option.label}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </fieldset>
      )}
    </div>
  );
};
