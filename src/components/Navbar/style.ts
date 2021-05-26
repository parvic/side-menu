import styled from "styled-components";
import { motion } from "framer-motion";

export const SideMenuContainer = styled(motion.nav)`

  padding: 1.5rem 0;
  background-color: #222D54;

  border-radius: 0 0.25rem 0.25rem 0;

  header {
    color: #fff;
    margin: 0 auto;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 3rem;
    padding: 0.5rem;

    background-color: transparent;
    border-radius: 0.25rem;
    color: #fff;
    font-weight: 400;

    filter: brightness(0.85);

    transition: filter 0.2s;

    & + button {
      margin-top: 1rem;
    }

    &:hover {
      filter: brightness(1);
    }

    .button-text {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      margin-left: 1rem;

      span {
        font-size: 1rem;
        &+span {
          margin-left: auto;
          margin-right: 2rem;
        }
      }
    }

  }
`;
