import { SignedIn, UserButton } from '@clerk/clerk-react'
import {Link} from 'react-router-dom'

export const  Navbar = ()=>(
    <div className='nav-bar'>
        <SignedIn>
           
             {<UserButton />}
        </SignedIn>
        <Link to={"/"}>Home</Link>

    </div>
)
