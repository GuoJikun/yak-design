// 判断参数是否是其中之一
export const oneOf = <T>(value: T, validList: Array<T>): boolean => {
  return validList.includes(value);
};
// ui库前缀
export const prefix = "yak";

/**
 * 合并所有的slot
 * @param slots 组件的slots
 */
export function mergeSlots(slots: Record<string, any>) {
  const values = Object.values(slots);
  return values.reduce(<T>(previous: T[], current: () => any) => {
    return previous.push(...current());
  }, []);
}

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
/**
 * 类型判断
 * @param value
 */
export function typeOf(value: any) {
  const initType = Object.prototype.toString.call(value);
  const type = initType
    .replace(/^(\[object )([a-zA-Z]+)(\])$/, "$2")
    .toLowerCase();
  return type;
}
