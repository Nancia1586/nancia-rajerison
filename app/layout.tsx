'use client'

import { Box, ColorModeScript, theme } from '@chakra-ui/react'

import { ReactNode } from 'react'

import { Footer, FooterProps } from '#components/layout/footer'
import { Header, HeaderProps } from '#components/layout/header'

import { Provider } from './provider'

interface LayoutProps {
  children: ReactNode
  headerProps?: HeaderProps
  footerProps?: FooterProps
}

export default function Layout(props: LayoutProps) {
  const { children, headerProps, footerProps } = props
  const colorMode = theme.config.initialColorMode

  return (
    <html lang="en" data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <body className={`chakra-ui-${colorMode}`}>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>
          <Box>
            <Header {...headerProps} />
            <Box as="main">{children}</Box>
            <Footer {...footerProps} />
          </Box>
        </Provider>
      </body>
    </html>
  )
}
