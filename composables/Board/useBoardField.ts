export const useBoardField = () => {
  const title = shallowRef<string>("");

  return {
    title,
  };
};
