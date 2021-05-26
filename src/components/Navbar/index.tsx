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
      <motion.header style={{ width: '100%' }}>
        <motion.button>
          <svg
            width="1.75rem"
            height="1.75rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM4.14355 13.5165C4.85219 17.2096 8.10023 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C8.0886 4 4.83283 6.80704 4.13728 10.5165L6.72824 10.5071C7.37819 8.20738 9.49236 6.52222 12.0001 6.52222C15.0254 6.52222 17.4779 8.9747 17.4779 12C17.4779 15.0253 15.0254 17.4778 12.0001 17.4778C9.49752 17.4778 7.3869 15.7995 6.73228 13.5071L4.14355 13.5165ZM9.52234 12C9.52234 13.3684 10.6317 14.4778 12.0001 14.4778C13.3685 14.4778 14.4779 13.3684 14.4779 12C14.4779 10.6316 13.3685 9.52222 12.0001 9.52222C10.6317 9.52222 9.52234 10.6316 9.52234 12Z"
              fill="currentColor"
            />
          </svg>
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
        borderRight: '3px solid rgba(0, 0, 0, 0)',
        borderLeft:
          selectedMenuButton === title
            ? '3px solid #042CF4'
            : '3px solid rgba(0, 0, 0, 0)',
      }}
      onClick={handleMenuButton}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
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
