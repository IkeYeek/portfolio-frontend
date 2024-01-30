const routerHack = (
    pages: {
      path: string;
    }[],
) => {
  const hash = document.URL.split("#");
  if (hash.length === 2) {
    for (let i = 0; i < pages.length; i += 1) {
      if (hash[1] === pages[i].path) return i;
    }
  }
  return null;
};


export { routerHack, };
