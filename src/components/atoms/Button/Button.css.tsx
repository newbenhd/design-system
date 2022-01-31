import React from "react";
import styled from "styled-components/macro";

const Styled = styled.div`
  --interactable-height: 40px;
  --interactable-opacity-hovered: 0.92;
  --interactable-opacity-pressed: 0.86;
  --interactable-overlay: var(--blue60);
  --interactable-underlay: var(--foreground);
  --interactable-border-radius: 4px;
  button:active {
    transform: scale(0.98);
    --interactable-opacity: var(--interactable-opacity-pressed);
  }
  button:hover {
    --interactable-opacity: var(--interactable-opacity-hovered);
  }
  button {
    cursor: pointer;
    color: var(--primary-foreground);
    padding-top: var(--spacing-1);
    padding-bottom: var(--spacing-1);
    padding-left: var(--spacing-2);
    padding-right: var(--spacing-2);
    border: 1px solid transparent;
    height: var(--interactable-height);
    justify-content: center;
    font-weight: 600;
    align-items: center;
    display: inline-flex;
    outline: 0;
    text-align: center;
    vertical-align: middle;
    background-image: linear-gradient(
      90deg,
      rgba(var(--interactable-overlay), var(--interactable-opacity, 1)),
      rgba(var(--interactable-overlay), var(--interactable-opacity, 1))
    );
    background-color: var(--interactable-underlay);
    border-radius: var(--interactable-border-radius);
    border-width: 1px;
    transform: scale(1);
  }
`;

const SecondaryStyled = styled(Styled)`
  --interactable-height: 40px;
  --interactable-opacity-hovered: 0.98;
  --interactable-opacity-pressed: 0.92;
  --interactable-overlay: var(--gray0);
  --interactable-underlay: var(--foreground);
  --interactable-border-radius: 4px;
  &:hover {
  }
  button {
    background-image: linear-gradient(
      90deg,
      rgba(var(--interactable-overlay), var(--interactable-opacity, 1)),
      rgba(var(--interactable-overlay), var(--interactable-opacity, 1))
    );
    background-color: var(--interactable-underlay);

    border: 1px solid var(--line);
    color: var(--secondary-foreground);
  }
  button:hover {
    --interactable-opacity: var(--interactable-opacity-hovered);
  }
  button:active {
    --interactable-opacity: var(--interactable-opacity-pressed);
  }
`;
export { Styled, SecondaryStyled };
