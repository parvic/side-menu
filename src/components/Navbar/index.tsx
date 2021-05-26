import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import {
  BiHome,
  BiMenu,
  BiUser,
  BiStar,
  BiPaperclip,
  BiSpreadsheet,
  BiBarChart,
  BiDollar,
  BiBell,
} from 'react-icons/bi';

import * as S from './style';
import theme from 'styles/theme/light';

export function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedMenuButton, setSelectedMenuButton] = useState('Home');

  const bigScreen = useMediaQuery({
    query: `(min-width: ${theme.screenSize.tablet})`,
  });

  function startHoveringNavbar() {
    setIsExpanded(true);
  }

  function endHoveringNavbar() {
    setIsExpanded(false);
  }

  function handleSelectedButton(title: string) {
    setSelectedMenuButton(title);
  }

  return (
    <S.SideMenuContainer
      onHoverStart={startHoveringNavbar}
      onHoverEnd={endHoveringNavbar}
      initial={{
        height: '100%',
        width: bigScreen ? (isExpanded ? '18rem' : '5rem') : 'auto',
        opacity: 0,
      }}
      animate={{
        // height: !bigScreen && (isExpanded ? 'auto' : '5rem'),
        height: '100%',
        width: bigScreen ? (isExpanded ? '18rem' : '5rem') : 'auto',
        opacity: 1,
      }}
    >
      <motion.header>
        <motion.button>
          <BiMenu />
        </motion.button>
      </motion.header>

      <motion.main>
        <MenuButton
          title="Home"
          counter={0}
          selectedMenuButton={selectedMenuButton}
          isExpanded={isExpanded}
          bigScreen={bigScreen}
          handleSelectedButton={handleSelectedButton}
          icon={<BiHome size="1.75rem" color="#fff" />}
        />

        <MenuButton
          title="Customers"
          counter={12}
          selectedMenuButton={selectedMenuButton}
          isExpanded={isExpanded}
          bigScreen={bigScreen}
          handleSelectedButton={handleSelectedButton}
          icon={<BiUser size="1.75rem" color="#fff" />}
        />

        <MenuButton
          title="Favorites"
          counter={0}
          selectedMenuButton={selectedMenuButton}
          isExpanded={isExpanded}
          bigScreen={bigScreen}
          handleSelectedButton={handleSelectedButton}
          icon={<BiStar size="1.75rem" color="#fff" />}
        />

        <MenuButton
          title="Documents"
          counter={0}
          selectedMenuButton={selectedMenuButton}
          isExpanded={isExpanded}
          bigScreen={bigScreen}
          handleSelectedButton={handleSelectedButton}
          icon={<BiSpreadsheet size="1.75rem" color="#fff" />}
        />

        <MenuButton
          title="Analytics"
          counter={0}
          selectedMenuButton={selectedMenuButton}
          isExpanded={isExpanded}
          bigScreen={bigScreen}
          handleSelectedButton={handleSelectedButton}
          icon={<BiBarChart size="1.75rem" color="#fff" />}
        />

        <MenuButton
          title="Payments"
          counter={0}
          selectedMenuButton={selectedMenuButton}
          isExpanded={isExpanded}
          bigScreen={bigScreen}
          handleSelectedButton={handleSelectedButton}
          icon={<BiDollar size="1.75rem" color="#fff" />}
        />

        <MenuButton
          title="Notifications"
          counter={0}
          selectedMenuButton={selectedMenuButton}
          isExpanded={isExpanded}
          bigScreen={bigScreen}
          handleSelectedButton={handleSelectedButton}
          icon={<BiBell size="1.75rem" color="#fff" />}
        />
      </motion.main>

      <motion.footer></motion.footer>
    </S.SideMenuContainer>
  );
}

interface MenuButtonProps {
  title: string;
  counter: number;
  selectedMenuButton: string;
  isExpanded: boolean;
  bigScreen: boolean;
  handleSelectedButton: (title: string) => void;
  icon: React.ReactNode;
}

function MenuButton({
  title,
  counter,
  selectedMenuButton,
  isExpanded,
  bigScreen,
  handleSelectedButton,
  icon,
}: MenuButtonProps) {
  function handleMenuButton() {
    handleSelectedButton(title);
  }

  return (
    <motion.button
      style={{
        borderRight: '2px solid rgba(0, 0, 0, 0)',
        borderLeft:
          selectedMenuButton === title
            ? '2px solid #042CF4'
            : '2px solid rgba(0, 0, 0, 0)',
      }}
      onClick={handleMenuButton}
    >
      {icon}
      {isExpanded && bigScreen && (
        <motion.div
          className="button-text"
          initial={{
            transform: 'translateX(0px) translateZ(0px)',
          }}
          animate={{
            transform: 'translateX(1px) translateZ(0px)',
          }}
        >
          <span>{title}</span>
          <span>{counter > 0 && counter}</span>
        </motion.div>
      )}
    </motion.button>
  );
}
