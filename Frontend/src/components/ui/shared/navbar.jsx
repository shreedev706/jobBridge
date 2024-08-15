import React from 'react'
import { Link } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export const Navbar = () => {
  return (
    <div className='bg-white '>
      <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
        <div>
          <h1 className="text-2xl font-bold m-0">
            Job<span className="text-[#F83002]">portal</span>
          </h1>
        </div>
        <div className='flex items-center gap-5'>
          <ul className="flex font-medium items-center gap-5 m-0 p-0">
            <li><a href="#home" className="hover:text-[#F83002]">Home</a></li>
            <li><a href="#jobs" className="hover:text-[#F83002]">Jobs</a></li>
            <li><a href="#browse" className="hover:text-[#F83002]">Browse</a></li>
          </ul>

          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className=''>
                <div className='flex gap-2 space-y-2'>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                  </Avatar>
                  <div>
                    <h4 className='font-medium'>{user?.fullname}</h4>
                    <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                  </div>
                </div>
                <div className='flex flex-col my-2 text-gray-600'>
                  {
                    user && user.role === 'student' && (
                      <div className='flex w-fit items-center gap-2 cursor-pointer'>
                        <User2 />
                        <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
                      </div>
                    )
                  }

                  <div className='flex w-fit items-center gap-2 cursor-pointer'>
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link">Logout</Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
