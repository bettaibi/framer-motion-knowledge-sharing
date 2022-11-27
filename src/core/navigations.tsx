import {
  House,
  ChatDots,
  Telephone,
  Person,
  Bell,
  Gear,
} from "react-bootstrap-icons";

interface NavigationConfig {
  path: string;
  title: string;
  icon: JSX.Element;
}

export const navigations: NavigationConfig[] = [
  {
    title: "Home",
    path: "/",
    icon: <House />,
  },
  {
    title: "My Profile",
    path: "/another-page",
    icon: <Person />,
  },
  {
    title: "Conversations",
    path: "/another-page2",
    icon: <ChatDots />,
  },
  {
    title: "Calls History",
    path: "/another-page3",
    icon: <Telephone />,
  },
  {
    title: "Notifications",
    path: "/another-page4",
    icon: <Bell />,
  },
  {
    title: "Settings",
    path: "/another-page5",
    icon: <Gear />,
  },
];
