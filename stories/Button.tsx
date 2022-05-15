import { Story, Meta } from '@storybook/react'
import Button, { Props } from 'components/Button'

export default {
  title: 'Button',
  component: Button,
  args: {
    sklin: 'outline',
    children: 'Nice code',
    size: 'small',
    rounded: true
  }
} as Meta

export const Default: Story<Props> = (args) => <Button {...args} />
