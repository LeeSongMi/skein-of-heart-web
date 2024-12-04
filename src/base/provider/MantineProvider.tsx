'use client'

import '@mantine/core/styles.css'

import { MantineProvider as BaseMantineProvider } from '@mantine/core'
import classes from '@/base/styles/mantine.module.css'
import colors from 'tailwindcss/colors'
import React from 'react'

type ColorKey = keyof typeof colors

export default function MantineProvider({ children }: { readonly children: React.ReactNode }) {
  /* ----------------------------- Tailwind CSS의 컬러팔레트를 Mantine에 맞는 형태로 재정의 ----------------------------- */
  const arrange = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
  const createColorArray = (colorObject: any) => arrange.map((value) => colorObject[value])
  const defaultColor = (Object.keys(colors) as ColorKey[]).reduce(
    (acc, colorKey) => {
      const isNotLegacyColor = !['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray'].includes(colorKey)
      if (isNotLegacyColor) {
        if (typeof colors[colorKey] === 'object') acc[colorKey] = createColorArray(colors[colorKey])
      }
      return acc
    },
    {} as Record<string, string[]>
  )

  return (
    <BaseMantineProvider
      theme={{
        components: {
          // Button: Button.extend({
          //     classNames: { root: classes.button },
          //     defaultProps: { color: 'bg.1' },
          // }),
        },
        colors: {
          ...defaultColor,
          primary: [
            'var(--primary-colors-0)', // primary.0
            'var(--primary-colors-1)', // primary.1
            'var(--primary-colors-2)', // primary.2
            'var(--primary-colors-3)', // primary.3
            'var(--primary-colors-4)', // primary.4
            'var(--primary-colors-5)', // primary.5
            'var(--primary-colors-6)', // primary.6 => default primary
            'var(--primary-colors-7)', // primary.7
            'var(--primary-colors-8)', // primary.8
            'var(--primary-colors-9)', // primary.9
          ],
          bg: [
            'var(--secondary-colors-0)', // secondary.0
            'var(--secondary-colors-1)', // secondary.1
            'var(--secondary-colors-2)', // secondary.2
            'var(--secondary-colors-3)', // secondary.3
            'var(--secondary-colors-4)', // secondary.4
            'var(--secondary-colors-5)', // secondary.5
            'var(--secondary-colors-6)', // secondary.6 => default secondary
            'var(--secondary-colors-7)', // secondary.7
            'var(--secondary-colors-8)', // secondary.8
            'var(--secondary-colors-9)', // secondary.9
          ],
        },
        primaryColor: 'primary',
      }}
      cssVariablesResolver={(theme) => ({
        variables: {
          '--text-color': 'var(--default-text-color)',
        },
        light: {},
        dark: {},
      })}
    >
      {children}
    </BaseMantineProvider>
  )
}
