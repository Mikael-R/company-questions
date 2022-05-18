import { Story, Meta } from '@storybook/react'
import Ranger, { Props } from '.'

export default {
  title: 'Ranger',
  component: Ranger,
  args: {
    optionsSize: 6,
    side: 'both'
  }
} as Meta

export const Default: Story<Props> = (args) => <Ranger {...args} />

export const RightSide: Story<Props> = (args) => <Ranger {...args} />
RightSide.args = {
  side: 'right'
}

export const LeftSide: Story<Props> = (args) => <Ranger {...args} />
LeftSide.args = {
  side: 'left'
}
