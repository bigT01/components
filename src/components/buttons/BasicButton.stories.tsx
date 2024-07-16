import BasicButton from "./BasicButton";
import {Meta, StoryObj} from "@storybook/react";
import '../../index.css'
import style from './BasicButton.module.css'

const meta: Meta<typeof BasicButton> = {
    component: BasicButton,
    tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof BasicButton>

export const Primary: Story = {
    args: {
        label: 'Кнопка',
        bgColor: '#6E41E2',
        size: 'md'
    }
}