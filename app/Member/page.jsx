import React from 'react'
import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const MenberPage = async () => {
    const session = await getServerSession(options);
    console.log(session);
    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/Member');
    }
    return (

        <div>
            <h1>MenberPage</h1>
            <p>{session?.user?.name}</p>
            <p>{session?.user?.role}</p>
        </div>
    )
}

export default MenberPage