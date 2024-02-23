import Header from "../layout/Header"
import  Mail  from "../components/Mail"
import  Footer  from "../layout/Footer"

export default function Contact(){
    return(
        <main className='flex flex-col w-full '>
            <Header/>  
            <br /> 
            <Mail/>
           
            {/* <div><h1>Nuestro Telefono:</h1> <a href="tel:+"></a></div> */}
            <Footer/>
        </main>
    )
}
