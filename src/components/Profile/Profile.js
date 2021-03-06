import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import StoreContext from "../../store-context";

const Profile = props => {
    return (
        <div className={style.Profile}>
            <h2>My profile</h2>
            <ProfileInfo />
            <StoreContext.Consumer>
                {
                    store => {
                        return(
                            <MyPosts
                                store = {store.getState().profilePage}
                            />
                        )
                    }
                }

            </StoreContext.Consumer>
        </div>
    );
};

export default Profile;
