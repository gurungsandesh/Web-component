import { Meta, StoryObj } from "@storybook/react";
import CustomModal from "./modal";


const meta: Meta<typeof CustomModal> = {
    component: CustomModal,
    title: "component/modal"
} satisfies Meta<typeof CustomModal>

export default meta

type Story = StoryObj<typeof meta>

const normalModalInput = {
    children: <>Children</>,
    open: true,
    onClose: () => {
        console.log("closed");
    }
}

export const NormalModal: Story = {
    args: {
        ...normalModalInput
    }
}


// export const Simple asd: Story = {
//     args: {
//         ...normalModalInput
//     }
// }
