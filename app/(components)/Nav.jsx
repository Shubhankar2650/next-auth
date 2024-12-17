import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import { options } from '../api/auth/[...nextauth]/options'

const Navbar = async () => {
    const session = await getServerSession(options);
    return (
        <header>
            <nav className='flex justify-between m-2'>
                <div><Link href='/'>My Logo</Link></div>
                <ul className='flex gap-3 m-2'>
                    <li><Link href='/' >Home</Link></li>
                    <li><Link href='/CreateUser' >Create User</Link></li>
                    <li><Link href='/ClientMember' >Client Member</Link></li>
                    <li><Link href='/Member' >Member</Link></li>
                    <li><Link href='/Public' >Public</Link></li>
                    {session ? <li><Link href='/api/auth/signout?callbackUrl=/' >Logout</Link></li> :
                        <li><Link href='/api/auth/signin' >Login</Link></li>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Navbar