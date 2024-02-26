import { NavLink } from "react-router-dom";

interface CustomNavLinkProps {
  to: string;
  children: React.ReactNode;
}

export const CustomNavLink: React.FC<CustomNavLinkProps> = (props) => (
  <NavLink
    to={props.to}
    className={({ isActive }) => (isActive ? "active" : "inactive")}
    end={props.to === "/" ? true : false}
  >
    {props.children}
  </NavLink>
);
