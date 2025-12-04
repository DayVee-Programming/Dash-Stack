import { type MouseEvent as ReactMouseEvent } from "react";

export type ClickDropdownAway = (
  e: MouseEvent | TouchEvent,
  type: "profile" | "language" | "notification"
) => void;

export type ToggleDropdown = (
  e: ReactMouseEvent<HTMLDivElement | HTMLElement>,
  type: "profile" | "language" | "notification"
) => void;
