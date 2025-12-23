"use client";
import { SessionProvider } from 'next-auth/react';
import React from 'react'
import UserEditForm, { UserEditFormProps } from './UserEditForm';

const UserEditFormWrapper = ({user}:UserEditFormProps) => {
    
  return (
    <SessionProvider>
        <UserEditForm user={user}/>
    </SessionProvider>
  )
}

export default UserEditFormWrapper