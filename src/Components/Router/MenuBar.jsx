import React, { useState } from "react";
import Transition from "semantic-ui-react/dist/commonjs/modules/Transition/Transition";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid/Grid";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu/Menu";
import Button from "semantic-ui-react/dist/commonjs/elements/Button/Button";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";
import { NavLink } from "react-router-dom";
import styles from "./style/MenuBar.module.scss";

const MenuBar = props => {
  const [activeItem, setActiveItem] = useState();
  const [openMenu, setOpenMenu] = useState({
    dropdownMenuStyle: {
      display: "none"
    },
    transitionAnimation: false
  });

  const handleItemClick = (e, { name }) => {
    return setActiveItem(name);
  };

  const handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, openMenu);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
      newState.transitionAnimation = true;
    } else {
      newState.dropdownMenuStyle = { display: "none" };
      newState.transitionAnimation = false;
    }

    setOpenMenu(newState);
  };

  return (
    <div>
      {/* Large and middle screen */}
      <Grid padded className="computer only">
        <Menu borderless fluid fixed="top" className={styles.gridStyle}>
          <Menu.Menu position="left">
            <Menu.Item
              name="Solar-system"
              to="/solar-system"
              as={NavLink}
              activeClassName={styles.activeMenuItem}
              exact
              active={activeItem === "Solar-system"}
              onClick={handleItemClick}
            >
              <Button content="Solar system" basic inverted />
            </Menu.Item>
            <Menu.Item
              name="Comparison"
              to="/comparison"
              as={NavLink}
              activeClassName={styles.activeMenuItem}
              exact
              active={activeItem === "Comparison"}
              onClick={handleItemClick}
            >
              <Button content="Comparison" basic inverted />
            </Menu.Item>
            <Menu.Item
              name="Planets"
              to="/planets-with-satelites"
              as={NavLink}
              activeClassName={styles.activeMenuItem}
              exact
              active={activeItem === "Planets"}
              onClick={handleItemClick}
            >
              <Button content="Planets" basic inverted />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Grid>
      {/* Tablet screen */}
      <Grid padded className="tablet only">
        <Menu borderless fluid fixed="top" className={styles.gridStyle}>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button
                data-test-id="toggleDropdownMenu"
                basic
                icon
                toggle
                onClick={handleToggleDropdownMenu}
              >
                {openMenu.transitionAnimation ? (
                  <Icon name="close" />
                ) : (
                  <Icon name="content" />
                )}
              </Button>
            </Menu.Item>
          </Menu.Menu>
          <Transition
            visible={openMenu.transitionAnimation}
            animation="slide down"
            duration={600}
          >
            <Menu borderless fluid vertical style={openMenu.dropdownMenuStyle}>
              <Menu.Item
                name="Solar-system"
                to="/solar-system"
                as={NavLink}
                activeClassName={styles.activeMenuItem}
                // exact
                active={activeItem === "Solar-system"}
                onClick={handleItemClick}
              >
                <Button content="Solar system" basic inverted />
              </Menu.Item>
            </Menu>
          </Transition>
        </Menu>
      </Grid>
      {/* Mobile screen */}
      <Grid padded className="mobile only">
        <Menu borderless fluid fixed="top" className={styles.gridStyle}>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button
                data-test-id="toggleDropdownMenu"
                basic
                icon
                toggle
                onClick={handleToggleDropdownMenu}
              >
                {openMenu.transitionAnimation ? (
                  <Icon name="close" />
                ) : (
                  <Icon name="content" />
                )}
              </Button>
            </Menu.Item>
          </Menu.Menu>
          <Transition
            visible={openMenu.transitionAnimation}
            animation="slide down"
            duration={600}
          >
            <Menu borderless fluid vertical style={openMenu.dropdownMenuStyle}>
              <Menu.Item
                name="Solar-system"
                to="/solar-system"
                as={NavLink}
                activeClassName={styles.activeMenuItem}
                // exact
                active={activeItem === "Solar-system"}
                onClick={handleItemClick}
              >
                <Button content="Solar system" basic inverted />
              </Menu.Item>
            </Menu>
          </Transition>
        </Menu>
      </Grid>
    </div>
  );
};

export default MenuBar;
