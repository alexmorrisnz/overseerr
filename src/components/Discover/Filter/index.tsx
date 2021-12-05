import React, { useState } from 'react';
import { FilterIcon } from '@heroicons/react/outline';
import { defineMessages, useIntl } from 'react-intl';
import Modal from '../../Common/Modal';
import Transition from '../../Transition';

const messages = defineMessages({
  trending: 'Trending',
  filter: 'Filter',
});

const Filter: React.FC = () => {
  const intl = useIntl();

  const [isFilterModalShown, setFilterModalShown] = useState(false);

  const filterResults = async () => {
    setFilterModalShown(false);
    console.log('test');
  };

  return (
    <div className="mt-8">
      <a
        className="relative float-right px-2 py-2 text-lg font-medium leading-6 text-white align-middle transition duration-150 ease-in-out rounded-md hover:bg-gray-700 focus:bg-gray-700"
        href="#"
        onClick={() => setFilterModalShown(true)}
        aria-label={intl.formatMessage(messages.filter)}
      >
        <FilterIcon className="w-6 h-6" />
      </a>
      <Transition
        enter="opacity-0 transition duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="opacity-100 transition duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={isFilterModalShown}
      >
        <Modal
          title={intl.formatMessage(messages.filter)}
          onCancel={() => setFilterModalShown(false)}
          onOk={() => filterResults()}
        ></Modal>
      </Transition>
    </div>
  );
};

export default Filter;
