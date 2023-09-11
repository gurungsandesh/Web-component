import { Meta, StoryObj } from "@storybook/react";
import Input from "./input";


const meta: Meta<typeof Input> = {
  component: Input,
  title: "component/input"
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

const normalInput = {
  label: 'test',
  name: 'test',
  type: "text"
}

export const NormalInput: Story = {
  args: {
    ...normalInput
  }
}

export const disabledInput: Story = {
  args: {
    ...normalInput,
    disabled: true
  }
}

export const NumberInput: Story = {
  args: {
    ...normalInput,
    type: "number",
  }
}

export const EmailInput: Story = {
  args: {
    ...normalInput,
    type: "email",
  }
}