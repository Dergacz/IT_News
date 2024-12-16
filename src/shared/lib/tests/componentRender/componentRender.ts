export const componentRender = async (promise: Promise<any>) => {
  const start = performance.now();
  const result = await promise;
  const end = performance.now();
  const diff = end - start;

  if (diff < 1500) {
    await new Promise((resolve) => {
      setTimeout(resolve, 1500 - diff);
    });
  }

  return result;
}; 