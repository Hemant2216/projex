"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status } = useSession();
  return (
    <header className="bg-blue-500 shadow">
      <nav className="mx-auto flex max-w-7xl bg-blue-500 items-center justify-between p-6 lg:px-8">
        <Link href="/" className="-m-1.5 p-1.5">
          <img src="/logo.png" className="h-8 w-auto" alt="" />
        </Link>

        {status !== "authenticated" ? (
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            
          </Link>
        ) : (
          <div className="flex gap-4">
            <Link
              href="/organizations"
              className="text-sm font-semibold leading-6 text-gray-900 text-white"
            >
              Organizations
            </Link>
            <div
              onClick={(event) => {
                event.preventDefault();
                signOut();
              }}
              className="font-semibold text-sm cursor-pointer"
            >
              
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
