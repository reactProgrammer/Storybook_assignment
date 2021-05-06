import React from 'react';
import {UserCard}  from './Card';
import { worker } from '../../mocks/browser'


export default {
  title: 'Organisms/UserCard',
  component: UserCard,
  decorators: [
    (Story) => {
      worker.resetHandlers()
      return <Story />
    },
  ],
};

export const Users = () => <UserCard/>
