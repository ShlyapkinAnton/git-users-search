import { Avatar, List, Modal } from "antd";
import { useState } from "react";

interface UserProps {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    loading: boolean;
    subscriptions: string;
}

export const User = ({
    id,
    login,
    avatar_url,
    html_url,
    loading,
    subscriptions,
}: UserProps) => {
    console.log(subscriptions)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src={avatar_url} />}
                    title={
                        <p className="login" onClick={showModal}>
                            {login}
                        </p>
                    }
                />
            </List.Item>

            <Modal
                title={login}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <Avatar size={64} src={avatar_url} />
                <div className="user-info">
                    <p>id: {id}</p>
                    <p>
                        <a href={html_url} target="_blank" rel="noreferrer">
                            github page
                        </a>
                    </p>
                </div>
            </Modal>
        </>
    );
};
