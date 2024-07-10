import {SignedIn, SignedOut , SignInButton , SignUpButton, UserButton, } from '@clerk/clerk-react'



export const Auth = ()=> {
    return(

        <div>
            <SignedOut>
                <SignUpButton mode='modal'/>
                <SignInButton mode='modal'/>
            </SignedOut>    
            <SignedIn>
                {/* <UserButton/> */}
                <h1>hi {<UserButton/>}</h1>
            </SignedIn>

        </div>
        
    )
}