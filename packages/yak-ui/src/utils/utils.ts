export const prefix = "yak";

export const oneOf = <T>(value: T, validList: Array<T>): boolean => {
  return validList.includes(value);
};

/**
 * 获取滚动条的宽度
 */
export function getScrollWidth() {
  const scroll = document.createElement("div");
  const scrollIn = document.createElement("div");
  scroll.appendChild(scrollIn);
  scroll.style.width = "100px";
  scroll.style.height = "50px";
  scroll.style.overflow = "scroll";
  scroll.style.marginLeft = "-100000px";
  document.body.appendChild(scroll);
  const scrollInWidth = scrollIn.offsetWidth;
  const scrollWidth = scroll.offsetWidth;
  const tmp = setTimeout(() => {
    document.body.removeChild(scroll);
    clearTimeout(tmp);
  }, 10);
  return scrollWidth - scrollInWidth;
}
