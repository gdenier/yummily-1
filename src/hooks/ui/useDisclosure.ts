import { useCallback, useState } from "react";

export interface useDisclosureReturnValue {
  isOpen: boolean;
  toggle: () => void;
}

export const useDisclosure = (
  defaultState = false
): useDisclosureReturnValue => {
  const [isOpen, setOpen] = useState(defaultState);

  const toggle = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  return { isOpen, toggle };
};
