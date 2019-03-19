//放一些与业务结合的工具方法
export const setTitle = (title) => {
    //如果没有设置title就设置成admin
    window.document.title = title || 'admin'
}