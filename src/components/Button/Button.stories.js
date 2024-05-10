import Button from './Button'
import { fn } from '@storybook/test'

const meta = {
  component: Button
}

export default meta

export const Default = {
  args: {
    text: 'CLICK ME!',
    onClick: fn(),
  }
}

export const HasDefaultWidth = {
  args: {
    text: '',
    onClick: fn(),
  }
}

export const MoreThan10Chars = {
  args: {
    text: 'THIS IS A REALLY LONG TEXT WITH MORE THAN 10 CHARS',
    onClick: fn(),
  }
}

export const HasAToolTip = {
  args: {
    text: 'Tooltip',
    onClick: fn(),
  }
}
