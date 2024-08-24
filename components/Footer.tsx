import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flexCenter mb-24 bg-gray-100">
      <div className="padding-container max-container flex w-full flex-col gap-14 p-10">
        <div className="flex flex-col items-start justify-center gap-10 md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="hilink-logo.svg" alt="logo" width={74} height={29} className="transition-transform transform hover:scale-105"/>
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-700">
                  {columns.links.map((link) => (
                    <Link href="/" key={link} className="hover:text-green-500 transition-colors">
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row hover:text-green-500 transition-colors"
                  >
                    <p className="whitespace-nowrap text-gray-800">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-green-50">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-700">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link} className="transition-transform transform hover:scale-110">
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 my-6" />
        <p className="regular-14 w-full text-center text-gray-600">2023 Hilink by Mazid | All rights reserved</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 text-gray-800 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer
