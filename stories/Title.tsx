import { Story, Meta } from '@storybook/react'
import Title, { Props } from 'components/Title'

export default {
  title: 'Title',
  component: Title,
  args: {
    tag: 'h1',
    children: 'The age is only a number! Pls hire me :)'
  }
} as Meta

export const H1: Story<Props> = (args) => <Title {...args} />

export const H2: Story<Props> = (args) => <Title {...args} />
H2.args = {
  tag: 'h2'
}

export const H3: Story<Props> = (args) => <Title {...args} />
H3.args = {
  tag: 'h3'
}
