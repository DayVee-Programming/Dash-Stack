import { ClickAwayListener, Grow, Paper, Popper } from "@mui/material";
import Person2Image from "@/components/images/Person2Image";
import KeyImage from "@/components/images/KeyImage";
import ActivityImage from "@/components/images/ActivityImage";
import Logout2Image from "@/components/images/Logout2Image";
import type { FC } from "react";

export type ProfilePopperType = {
  isProfileDropdownOpen: boolean;
  profileDropdownAnchor: HTMLElement | null;
  clickDropdownAway: (event: MouseEvent | TouchEvent, type: "profile" | "language") => void;
};

const ProfilePopper: FC<ProfilePopperType> = ({
  isProfileDropdownOpen,
  profileDropdownAnchor: profileDropdownAnchor,
  clickDropdownAway,
}) => {
  return (
    <Popper
      className="profile-popper"
      open={isProfileDropdownOpen}
      anchorEl={profileDropdownAnchor}
      transition
      disablePortal
      placement="bottom"
      modifiers={[
        {
          name: "offset",
          options: {
            offset: [0, 7],
          },
        },
        {
          name: "preventOverflow",
          options: {
            padding: 11,
          },
        },
      ]}
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <Paper>
            <ClickAwayListener onClickAway={(e) => clickDropdownAway(e, "profile")}>
              <ul className="list">
                <li className="list-item">
                  <Person2Image />
                  <span className="list-item-span">Manage Account</span>
                </li>
                <li className="list-item">
                  <KeyImage />
                  <span className="list-item-span">Change Password</span>
                </li>
                <li className="list-item">
                  <ActivityImage />
                  <span className="list-item-span">Activity Log</span>
                </li>
                <li className="list-item">
                  <Logout2Image />
                  <span className="list-item-span">Log out</span>
                </li>
              </ul>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default ProfilePopper;
