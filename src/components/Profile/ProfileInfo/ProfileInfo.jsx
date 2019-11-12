import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://i.pinimg.com/originals/54/e8/a5/54e8a5cfbca8cc6ec098ae5e3c5838d2.jpg"
                    alt=""
                />
            </div>
            <div className="descriptionBlock">ava + description</div>
        </div>
    );
};

export default ProfileInfo;