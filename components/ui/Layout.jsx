import Header from './Header'


function layout({children}) {
  return (
    <div className=' mx-auto'>
        <Header></Header>
        <main>{children}</main>
    </div>
  )
}

export default layout