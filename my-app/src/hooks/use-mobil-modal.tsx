import { create } from "zustand";
import { testDataProps } from "@/types/test-data";
import { testData } from "@/data/testData";

interface useModilModalProps {
  isOpen: boolean;
  data: testDataProps;
  onOpen: (data: testDataProps) => void;
  onClose: () => void;
}

export const useModilModal = create<useModilModalProps>((set) => ({
  isOpen: false,
  data: testData,
  onOpen: (data: testDataProps) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
