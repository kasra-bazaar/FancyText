export const handleCopy = async ({ fancyText }: { fancyText: string }) => {
  try {
    await navigator.clipboard.writeText(fancyText);
  } catch (err) {
    console.error(err);
  }
};
