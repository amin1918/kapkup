
function Container({children,className="",...rest}) {
  return (
    <div className={`container mx-auto lg:px-10  px-5  ${className}` } {...rest} > {children} </div>
  )
}
export default Container