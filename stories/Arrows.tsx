import { Story, Meta } from '@storybook/react'
import Arrows, { Props } from 'components/Arrows'

export default {
  title: 'Arrows',
  component: Arrows,
  args: {}
} as Meta

export const Default: Story<Props> = (args) => <Arrows {...args} />
