import { Story, Meta } from '@storybook/react'
import Arrows, { Props } from '.'

export default {
  title: 'Arrows',
  component: Arrows,
  args: {}
} as Meta

export const Default: Story<Props> = (args) => <Arrows {...args} />
