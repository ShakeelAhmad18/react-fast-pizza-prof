import { Link } from "react-router-dom"

function Button({children,disabled,to,type}) {
  
     const styles={
       primary:'bg-yellow-400 tracking-wide rounded-full text-stone-800 py-2 px-3 font-semibold duration-500 inline-block uppercase focus:bg-yellow-300 focus:ring focus:outline-none focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:py-4 md:px-6',
       base:'bg-stone-200 tracking-wide rounded-full text-stone-800 py-2 px-3 font-semibold duration-500 inline-block uppercase focus:bg-stone-400 focus:ring focus:outline-none focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed md:py-4 md:px-6'
     }
     
     if(to === '/order/new')
      return <Link className={styles[type]} to='/order/new'>{children}</Link>

     if(to === '/menu')
      return <Link className={styles[type]} to='/menu'>{children}</Link>

    return (
        <button className={styles[type]} disabled={disabled} >{children}</button>
      )
}

export default Button
