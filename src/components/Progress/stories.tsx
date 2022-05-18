import { Story, Meta } from '@storybook/react'
import Progress, { Props } from '.'

export default {
  title: 'Progress',
  component: Progress,
  args: {
    value: 0.5
  }
} as Meta

export const Default: Story<Props> = (args) => <Progress {...args} />
