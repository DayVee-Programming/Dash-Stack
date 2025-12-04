import { ClickAwayListener, Grow, Paper, Popper } from "@mui/material";
import type { FC } from "react";
import type { ClickDropdownAway } from "@/types/components.types";
import Settings2Image from "@/components/images/Settings2Image";
import Calendar2Image from "@/components/images/Calendar2Image";
import Person3Image from "@/components/images/Person3Image";
import WarningImage from "@/components/images/WarningImage";
import type { IsNotificationDropdownOpen, NotificationDropdownAnchor } from "@/types/contexts.types";

export type NotificationPopperType = {
  isNotificationDropdownOpen: IsNotificationDropdownOpen;
  notificationDropdownAnchor: NotificationDropdownAnchor;
  clickDropdownAway: ClickDropdownAway;
};

const NotificationPopper: FC<NotificationPopperType> = ({
  isNotificationDropdownOpen,
  notificationDropdownAnchor,
  clickDropdownAway,
}) => {
  return (
    <Popper
      className="notification-popper"
      open={isNotificationDropdownOpen}
      anchorEl={notificationDropdownAnchor}
      transition
      disablePortal
      placement="bottom"
      modifiers={[
        {
          name: "offset",
          options: {
            offset: [0, 12],
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
            <ClickAwayListener onClickAway={(e) => clickDropdownAway(e, "notification")}>
              <ul className="list">
                <li className="list-item title">
                  <span className="title-span">Notification</span>
                </li>
                <li className="list-item">
                  <figure className="list-item-figure">
                    <Settings2Image />
                  </figure>
                  <div className="list-item-desc">
                    <h3 className="list-item-desc-title">
                      Settings
                    </h3>
                    <span className="list-item-desc-span">
                      Update Dashboard
                    </span>
                  </div>
                </li>
                <li className="list-item">
                  <figure className="list-item-figure">
                    <Calendar2Image />
                  </figure>
                  <div className="list-item-desc">
                    <h3 className="list-item-desc-title">
                      Event Update
                    </h3>
                    <span className="list-item-desc-span">
                      An event date update again
                    </span>
                  </div>
                </li>
                <li className="list-item">
                  <figure className="list-item-figure">
                    <Person3Image />
                  </figure>
                  <div className="list-item-desc">
                    <h3 className="list-item-desc-title">
                      Profile
                    </h3>
                    <span className="list-item-desc-span">
                      Update your profile
                    </span>
                  </div>
                </li>
                <li className="list-item">
                  <figure className="list-item-figure">
                    <WarningImage />
                  </figure>
                  <div className="list-item-desc">
                    <h3 className="list-item-desc-title">
                      Application Error
                    </h3>
                    <span className="list-item-desc-span">
                      Check Your runnung application
                    </span>
                  </div>
                </li>
                <li className="list-item more">
                  <span className="more-span">See all notifications</span>
                </li>
              </ul>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default NotificationPopper;
