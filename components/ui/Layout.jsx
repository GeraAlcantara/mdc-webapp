import Header from './Header'


function layout({children}) {
  return (
    <div className=' px-6 max-w-screen-2xl mx-auto'>
        <Header></Header>
        <main>{children}</main>
    </div>
  )
}

export default layout