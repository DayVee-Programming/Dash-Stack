import { ClickAwayListener, Grow, Paper, Popper } from "@mui/material";
import type { FC } from "react";
import type { ClickDropdownAway } from "@/types/components.types";
import EnUsImage from "@/components/images/EnUsImage";
import CheckImage from "@/components/images/CheckImage";
import RuImageSrc from "@/assets/images/icons/ru.jpg";
import UzImageSrc from "@/assets/images/icons/uz.webp";

export type LanguagePopperType = {
  isLanguageDropdownOpen: boolean;
  languageDropdownAnchor: HTMLElement | null;
  clickDropdownAway: ClickDropdownAway;
};

const LanguagePopper: FC<LanguagePopperType> = ({
  isLanguageDropdownOpen,
  languageDropdownAnchor,
  clickDropdownAway,
}) => {
  return (
    <Popper
      className="language-popper"
      open={isLanguageDropdownOpen}
      anchorEl={languageDropdownAnchor}
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
            <ClickAwayListener onClickAway={(e) => clickDropdownAway(e, "language")}>
              <ul className="list">
                <li className="list-item title">
                  <span className="title-span">Select Language</span>
                </li>
                <li className="list-item">
                  <div className="list-item-content">
                    <figure className="list-item-content-figure">
                      <EnUsImage />
                    </figure>
                    <span className="list-item-content-span">English</span>
                  </div>
                  <CheckImage />
                </li>
                <li className="list-item">
                  <div className="list-item-content">
                    <figure className="list-item-content-figure">
                      <img src={RuImageSrc} alt="Ru image" />
                    </figure>
                    <span className="list-item-content-span">Russian</span>
                  </div>
                </li>
                <li className="list-item">
                  <div className="list-item-content">
                    <figure className="list-item-content-figure">
                      <img src={UzImageSrc} alt="Uz image" />
                    </figure>
                    <span className="list-item-content-span">Uzbek</span>
                  </div>
                </li>
              </ul>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default LanguagePopper;
