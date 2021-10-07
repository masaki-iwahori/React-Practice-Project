// 引数の（）の段階で分割代入
export const ColoredMessage = ({ color, children }) => {
  
  const contentStyle = {
    color, // 省略記法が使える
    fontSize: "20px"
  }
  // ↓props.が不要
  return <p style={contentStyle}>{children}</p>
}